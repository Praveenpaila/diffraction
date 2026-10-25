import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { calculateDiffractionAngle, wavelengthToRGB, getGratingPitchNm } from '../physics/diffractionEngine';
import { Camera, Eye, RotateCw, ZoomIn, ZoomOut, Sun, Moon, Info, Compass } from 'lucide-react';

export default function ThreeSpectrometer({
  currentSource,
  gratingPreset,
  slitWidthUm,
  telescopeAngleDeg,
  onTelescopeAngleChange,
  isDarkRoom,
  ambientLux,
  isNormalIncidence,
  gratingTiltDeg,
  onTiltChange,
  showRays = true,
  cameraPreset = 'overview'
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const telescopePivotRef = useRef(null);
  const gratingPivotRef = useRef(null);
  const raysGroupRef = useRef(null);
  const ambientLightRef = useRef(null);
  const dirLightRef = useRef(null);

  // Mouse interaction state for manual orbit
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraTargetRef = useRef(new THREE.Vector3(0, 0.5, 0));
  const sphericalRef = useRef({ radius: 8, theta: 0.8, phi: 0.9 });

  // Camera presets coordinates
  const CAMERA_PRESETS = {
    overview: { radius: 7.5, theta: 0.75, phi: 0.85, target: new THREE.Vector3(0, 0.4, 0) },
    topdown: { radius: 7.0, theta: 0.0, phi: 0.05, target: new THREE.Vector3(0, 0, 0) },
    grating: { radius: 3.5, theta: 0.9, phi: 1.1, target: new THREE.Vector3(0, 0.5, 0) },
    eyepiece: { radius: 3.8, theta: -Math.PI / 2, phi: 1.25, target: new THREE.Vector3(0, 0.5, 0) }
  };

  // Setup Three.js scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(isDarkRoom ? 0x05070d : 0x1e2538);
    scene.fog = new THREE.FogExp2(isDarkRoom ? 0x05070d : 0x1e2538, 0.04);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;
    updateCameraPosition();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(isDarkRoom ? 0x111625 : 0xffffff, isDarkRoom ? 0.35 : 1.2);
    ambientLightRef.current = ambientLight;
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, isDarkRoom ? 0.6 : 1.4);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLightRef.current = dirLight;
    scene.add(dirLight);

    // Lab Table Surface
    const tableGeo = new THREE.CylinderGeometry(4.5, 4.5, 0.2, 64);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0x161b26,
      roughness: 0.4,
      metalness: 0.6
    });
    const tableMesh = new THREE.Mesh(tableGeo, tableMat);
    tableMesh.position.y = -0.1;
    tableMesh.receiveShadow = true;
    scene.add(tableMesh);

    // Grid on table
    const grid = new THREE.GridHelper(8, 32, 0x00f0ff, 0x1e293b);
    grid.position.y = 0.005;
    scene.add(grid);

    // BUILD SPECTROMETER 3D MODEL
    const spectrometerGroup = new THREE.Group();
    scene.add(spectrometerGroup);

    // 1. Cast Base with 3 Leveling Screws
    const baseGeo = new THREE.CylinderGeometry(1.6, 1.8, 0.35, 32);
    const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x1f2430, roughness: 0.3, metalness: 0.85 });
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.25, metalness: 0.9 });
    const silverMat = new THREE.MeshStandardMaterial({ color: 0xdfe6e9, roughness: 0.2, metalness: 0.95 });

    const baseMesh = new THREE.Mesh(baseGeo, darkMetalMat);
    baseMesh.position.y = 0.175;
    spectrometerGroup.add(baseMesh);

    // Leveling screws
    for (let i = 0; i < 3; i++) {
      const angle = (i * 2 * Math.PI) / 3;
      const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.45, 16), brassMat);
      screw.position.set(Math.cos(angle) * 1.5, 0.1, Math.sin(angle) * 1.5);
      spectrometerGroup.add(screw);

      const knurledHead = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.1, 16), brassMat);
      knurledHead.position.set(Math.cos(angle) * 1.5, 0.05, Math.sin(angle) * 1.5);
      spectrometerGroup.add(knurledHead);
    }

    // Central Pillar
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 1.2, 32), silverMat);
    pillar.position.y = 0.8;
    spectrometerGroup.add(pillar);

    // Main Circular Graduated Disc (0 - 360 degrees)
    const discGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.08, 64);
    const discMesh = new THREE.Mesh(discGeo, silverMat);
    discMesh.position.y = 1.35;
    spectrometerGroup.add(discMesh);

    // Degree Ring Marking Edge
    const ringGeo = new THREE.TorusGeometry(1.48, 0.02, 8, 64);
    const ringMesh = new THREE.Mesh(ringGeo, brassMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 1.39;
    spectrometerGroup.add(ringMesh);

    // 2. Collimator Tube (Fixed along -X axis, pointing at center)
    const collimatorGroup = new THREE.Group();
    collimatorGroup.position.set(-1.8, 1.6, 0);

    const collimatorBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.8, 24), darkMetalMat);
    collimatorBarrel.rotation.z = Math.PI / 2;
    collimatorGroup.add(collimatorBarrel);

    // Objective lens cell
    const collLensCell = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.2, 24), brassMat);
    collLensCell.rotation.z = Math.PI / 2;
    collLensCell.position.x = 0.8;
    collimatorGroup.add(collLensCell);

    // Slit assembly at outer end (-X)
    const slitHousing = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.25, 24), brassMat);
    slitHousing.rotation.z = Math.PI / 2;
    slitHousing.position.x = -0.9;
    collimatorGroup.add(slitHousing);

    // Slit jaw adjustment micrometer screw
    const slitScrew = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.35, 16), brassMat);
    slitScrew.position.set(-0.9, 0.22, 0);
    collimatorGroup.add(slitScrew);

    // Light Source Box / Laser Housing
    const lampBoxGeo = new THREE.BoxGeometry(0.8, 1.0, 0.8);
    const lampBoxMat = new THREE.MeshStandardMaterial({ color: 0x111318, roughness: 0.5, metalness: 0.8 });
    const lampBox = new THREE.Mesh(lampBoxGeo, lampBoxMat);
    lampBox.position.set(-3.2, 1.6, 0);
    collimatorGroup.add(lampBox);

    // Condenser tube linking source to slit
    const condenser = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 16), darkMetalMat);
    condenser.rotation.z = Math.PI / 2;
    condenser.position.set(-2.45, 1.6, 0);
    collimatorGroup.add(condenser);

    spectrometerGroup.add(collimatorGroup);

    // 3. Central Prism / Grating Table (Rotatable for Normal Incidence adjustment)
    const gratingPivot = new THREE.Group();
    gratingPivot.position.set(0, 1.45, 0);
    gratingPivotRef.current = gratingPivot;
    spectrometerGroup.add(gratingPivot);

    const prismTableMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.08, 32), darkMetalMat);
    gratingPivot.add(prismTableMesh);

    // 3 Table Leveling Screws
    for (let i = 0; i < 3; i++) {
      const angle = (i * 2 * Math.PI) / 3;
      const scr = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.2, 12), brassMat);
      scr.position.set(Math.cos(angle) * 0.75, -0.06, Math.sin(angle) * 0.75);
      gratingPivot.add(scr);
    }

    // Grating Stand / Clamp Post
    const gratingStand = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.6, 0.08), darkMetalMat);
    gratingStand.position.set(0, 0.35, -0.4);
    gratingPivot.add(gratingStand);

    // Grating Frame (Brass)
    const frameGeo = new THREE.BoxGeometry(0.08, 0.75, 0.75);
    const gratingFrame = new THREE.Mesh(frameGeo, brassMat);
    gratingFrame.position.set(0, 0.35, 0);
    gratingPivot.add(gratingFrame);

    // Grating Glass Plate with Iridescent Rulings
    const glassGeo = new THREE.BoxGeometry(0.02, 0.65, 0.65);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x90caf9,
      transmission: 0.9,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      ior: 1.52,
      thickness: 0.02,
      iridescence: 0.9,
      iridescenceIOR: 1.3
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.position.set(0, 0.35, 0);
    gratingPivot.add(glassMesh);

    // 4. Telescope Pivot & Assembly (Rotates around central Y axis)
    const telescopePivot = new THREE.Group();
    telescopePivot.position.set(0, 1.6, 0);
    telescopePivotRef.current = telescopePivot;
    spectrometerGroup.add(telescopePivot);

    // Telescope arm connecting pivot to tube
    const armMesh = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.06, 0.14), darkMetalMat);
    armMesh.position.set(1.0, -0.15, 0);
    telescopePivot.add(armMesh);

    // Dual Vernier Plates ($V_1$ at +X arm, $V_2$ at -X arm)
    const v1Plate = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.03, 24), silverMat);
    v1Plate.position.set(1.4, -0.18, 0);
    telescopePivot.add(v1Plate);

    const v1Lens = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.15, 16), brassMat);
    v1Lens.position.set(1.4, -0.08, 0);
    telescopePivot.add(v1Lens);

    // Telescope Barrel
    const teleBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.0, 24), darkMetalMat);
    teleBarrel.rotation.z = Math.PI / 2;
    teleBarrel.position.set(1.8, 0, 0);
    telescopePivot.add(teleBarrel);

    // Objective lens cell facing grating
    const teleObjCell = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.22, 24), brassMat);
    teleObjCell.rotation.z = Math.PI / 2;
    teleObjCell.position.set(0.85, 0, 0);
    telescopePivot.add(teleObjCell);

    // Eyepiece draw-tube and knurled focusing knob at outer end
    const eyepieceTube = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.5, 20), silverMat);
    eyepieceTube.rotation.z = Math.PI / 2;
    eyepieceTube.position.set(2.9, 0, 0);
    telescopePivot.add(eyepieceTube);

    const focusingKnob = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.08, 20), brassMat);
    focusingKnob.position.set(2.5, 0.15, 0);
    telescopePivot.add(focusingKnob);

    // 5. Dynamic Rays Group
    const raysGroup = new THREE.Group();
    raysGroup.position.set(0, 1.6, 0);
    raysGroupRef.current = raysGroup;
    spectrometerGroup.add(raysGroup);

    // Window resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update camera coordinates
  const updateCameraPosition = () => {
    if (!cameraRef.current) return;
    const { radius, theta, phi, target } = {
      radius: sphericalRef.current.radius,
      theta: sphericalRef.current.theta,
      phi: sphericalRef.current.phi,
      target: cameraTargetRef.current
    };

    const x = target.x + radius * Math.sin(phi) * Math.cos(theta);
    const y = target.y + radius * Math.cos(phi);
    const z = target.z + radius * Math.sin(phi) * Math.sin(theta);

    cameraRef.current.position.set(x, y, z);
    cameraRef.current.lookAt(target);
  };

  // Mouse Orbit Drag Handlers
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;

    sphericalRef.current.theta -= deltaX * 0.007;
    sphericalRef.current.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, sphericalRef.current.phi - deltaY * 0.007));

    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    updateCameraPosition();
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    sphericalRef.current.radius = Math.max(2.5, Math.min(14.0, sphericalRef.current.radius + e.deltaY * 0.005));
    updateCameraPosition();
  };

  // Switch camera views
  const applyCameraPreset = (presetName) => {
    const preset = CAMERA_PRESETS[presetName] || CAMERA_PRESETS.overview;
    sphericalRef.current.radius = preset.radius;
    sphericalRef.current.theta = preset.theta;
    sphericalRef.current.phi = preset.phi;
    cameraTargetRef.current.copy(preset.target);
    updateCameraPosition();
  };

  // Synchronize Telescope Rotation & Grating Tilt
  useEffect(() => {
    if (telescopePivotRef.current) {
      // In Three.js, 0 deg telescope points down +X axis
      const rad = (telescopeAngleDeg * Math.PI) / 180;
      telescopePivotRef.current.rotation.y = -rad; // Rotate around Y
    }
  }, [telescopeAngleDeg]);

  useEffect(() => {
    if (gratingPivotRef.current) {
      // Normal incidence is 0 deg tilt (plane of grating in Y-Z plane, normal along X axis)
      const tiltRad = (gratingTiltDeg * Math.PI) / 180;
      gratingPivotRef.current.rotation.y = tiltRad;
    }
  }, [gratingTiltDeg]);

  // Synchronize Lighting & Ambient Room Mode
  useEffect(() => {
    if (sceneRef.current && ambientLightRef.current && dirLightRef.current) {
      const bgColor = isDarkRoom ? 0x07090e : 0x222a3d;
      sceneRef.current.background = new THREE.Color(bgColor);
      if (sceneRef.current.fog) sceneRef.current.fog.color = new THREE.Color(bgColor);

      const ambIntensity = isDarkRoom ? 0.35 : 1.3;
      const dirIntensity = isDarkRoom ? 0.5 : 1.4;

      ambientLightRef.current.intensity = ambIntensity;
      ambientLightRef.current.color = new THREE.Color(isDarkRoom ? 0x1a2133 : 0xffffff);
      dirLightRef.current.intensity = dirIntensity;
    }
  }, [isDarkRoom, ambientLux]);

  // REBUILD 3D LIGHT RAYS DYNAMICALLY
  useEffect(() => {
    if (!raysGroupRef.current) return;
    const group = raysGroupRef.current;

    // Clear old rays
    while (group.children.length > 0) {
      const obj = group.children[0];
      group.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    }

    if (!showRays) return;

    // Helper: Create a glowing 3D light cylinder ray
    const createRayMesh = (startVec, endVec, hexColor, radius = 0.02, opacity = 0.85) => {
      const dir = new THREE.Vector3().subVectors(endVec, startVec);
      const len = dir.length();
      const geom = new THREE.CylinderGeometry(radius, radius, len, 12);
      geom.translate(0, len / 2, 0);
      geom.rotateX(Math.PI / 2);

      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(hexColor),
        transparent: true,
        opacity: isDarkRoom ? opacity : opacity * 0.45,
        blending: THREE.AdditiveBlending
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.copy(startVec);
      mesh.lookAt(endVec);
      return mesh;
    };

    // 1. Collimator Incident Beam (from -2.8, 0, 0 to 0, 0, 0)
    const incidentStart = new THREE.Vector3(-2.8, 0, 0);
    const incidentEnd = new THREE.Vector3(0, 0, 0);
    let incidentColor = '#FFFFFF';

    if (currentSource.id.includes('laser_red')) incidentColor = '#FF1744';
    else if (currentSource.id.includes('laser_green')) incidentColor = '#00E676';
    else if (currentSource.id === 'mercury') incidentColor = '#E0F7FA';
    else if (currentSource.id === 'sodium') incidentColor = '#FFB300';
    else if (currentSource.id === 'led_white') incidentColor = '#E3F2FD';

    const incidentBeam = createRayMesh(incidentStart, incidentEnd, incidentColor, 0.04, 0.9);
    group.add(incidentBeam);

    // 2. Zeroth-Order Undeviated Beam (Straight through along +X)
    const zeroEnd = new THREE.Vector3(3.2, 0, 0);
    const zeroBeam = createRayMesh(incidentEnd, zeroEnd, incidentColor, 0.035, 0.85);
    group.add(zeroBeam);

    // 3. Diffracted Rays (Orders m = +1 and m = -1)
    const rayLength = 3.2;
    const linesPerCm = gratingPreset.linesPerCm;
    const tiltDeg = gratingTiltDeg;

    // A. Discrete Atomic Lines (Mercury / Sodium / Laser)
    if (currentSource.lines) {
      currentSource.lines.forEach((line) => {
        // Order +1
        const resPlus = calculateDiffractionAngle(line.lambda, linesPerCm, 1, tiltDeg);
        if (resPlus) {
          const angleRad = (resPlus.angleDeg * Math.PI) / 180;
          // In Three.js coordinates, angle 0 is +X, positive angle rotates into -Z
          const endX = Math.cos(angleRad) * rayLength;
          const endZ = -Math.sin(angleRad) * rayLength;
          const ray = createRayMesh(incidentEnd, new THREE.Vector3(endX, 0, endZ), line.hex, 0.02, line.intensity * 0.9);
          group.add(ray);
        }

        // Order -1 (Opposite side)
        const resMinus = calculateDiffractionAngle(line.lambda, linesPerCm, -1, tiltDeg);
        if (resMinus) {
          const angleRad = (resMinus.angleDeg * Math.PI) / 180;
          const endX = Math.cos(angleRad) * rayLength;
          const endZ = -Math.sin(angleRad) * rayLength;
          const ray = createRayMesh(incidentEnd, new THREE.Vector3(endX, 0, endZ), line.hex, 0.02, line.intensity * 0.9);
          group.add(ray);
        }
      });
    }

    // B. Continuous Rainbow Spectrum (White Light)
    if (currentSource.isContinuous && !currentSource.isLED) {
      // Sample 25 continuous wavelength steps across VIBGYOR (390 nm to 700 nm)
      for (let lam = 400; lam <= 700; lam += 12) {
        const rgb = wavelengthToRGB(lam);
        [1, -1].forEach((order) => {
          const res = calculateDiffractionAngle(lam, linesPerCm, order, tiltDeg);
          if (res) {
            const angleRad = (res.angleDeg * Math.PI) / 180;
            const endX = Math.cos(angleRad) * rayLength;
            const endZ = -Math.sin(angleRad) * rayLength;
            const ray = createRayMesh(incidentEnd, new THREE.Vector3(endX, 0, endZ), rgb.css, 0.018, 0.7);
            group.add(ray);
          }
        });
      }
    }

    // C. LED Broadband Smear (Blue GaN + Phosphor)
    if (currentSource.isLED) {
      for (let lam = 430; lam <= 660; lam += 15) {
        const rgb = wavelengthToRGB(lam);
        [1, -1].forEach((order) => {
          const res = calculateDiffractionAngle(lam, linesPerCm, order, tiltDeg);
          if (res) {
            const angleRad = (res.angleDeg * Math.PI) / 180;
            const endX = Math.cos(angleRad) * rayLength;
            const endZ = -Math.sin(angleRad) * rayLength;
            // Broader, more diffuse rays showing lack of sharp atomic peaks
            const ray = createRayMesh(incidentEnd, new THREE.Vector3(endX, 0, endZ), rgb.css, 0.035, 0.45);
            group.add(ray);
          }
        });
      }
    }
  }, [currentSource, gratingPreset, gratingTiltDeg, showRays, isDarkRoom]);

  return (
    <div className="relative w-full h-[540px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl select-none">
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Floating 3D Controls HUD */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-auto">
        <button
          onClick={() => applyCameraPreset('overview')}
          className="px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 flex items-center gap-1.5 transition-all shadow-lg"
        >
          <Camera className="w-3.5 h-3.5 text-cyan-400" /> 3D Lab Overview
        </button>
        <button
          onClick={() => applyCameraPreset('topdown')}
          className="px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 flex items-center gap-1.5 transition-all shadow-lg"
        >
          <Compass className="w-3.5 h-3.5 text-emerald-400" /> Ray Angles (Top-Down)
        </button>
        <button
          onClick={() => applyCameraPreset('grating')}
          className="px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 flex items-center gap-1.5 transition-all shadow-lg"
        >
          <RotateCw className="w-3.5 h-3.5 text-amber-400" /> Grating Table
        </button>
      </div>

      {/* Angle & Alignment Badge */}
      <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/70 rounded-xl px-4 py-2.5 shadow-xl text-right">
        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Telescope Position</div>
        <div className="text-xl font-bold font-mono text-cyan-400">
          {telescopeAngleDeg.toFixed(2)}°
        </div>
        <div className="text-[10px] text-slate-400 flex items-center justify-end gap-1 mt-0.5">
          <span>Incidence:</span>
          <span className={Math.abs(gratingTiltDeg) < 0.1 ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
            {Math.abs(gratingTiltDeg) < 0.1 ? "Normal (90.0°)" : `Tilted (${gratingTiltDeg > 0 ? '+' : ''}${gratingTiltDeg.toFixed(1)}°)`}
          </span>
        </div>
      </div>

      {/* Orbit & Drag Instruction Banner */}
      <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg px-3 py-1.5 text-[11px] text-slate-400 flex items-center gap-2">
        <RotateCw className="w-3 h-3 text-cyan-400 animate-spin-slow" />
        <span>Click & Drag to rotate 3D view • Scroll to zoom</span>
      </div>

      {/* Dark / Light Room Status Pill */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg px-3 py-1.5 text-[11px]">
        {isDarkRoom ? (
          <>
            <Moon className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">Darkened Lab (Peak Contrast)</span>
          </>
        ) : (
          <>
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-medium">Daylight Room ({ambientLux} Lux - High Glare)</span>
          </>
        )}
      </div>
    </div>
  );
}
