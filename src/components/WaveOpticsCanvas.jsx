import React, { useRef, useEffect, useState } from 'react';
import { wavelengthToRGB } from '../physics/diffractionEngine';
import { Waves, Play, Pause, RefreshCw, Layers, ShieldAlert, Sparkles } from 'lucide-react';

export default function WaveOpticsCanvas() {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [waveMode, setWaveMode] = useState('grating'); // 'grating' | 'window'
  const [wavelength, setWavelength] = useState(550); // nm
  const [numSlits, setNumSlits] = useState(5);
  const [slitSpacing, setSlitSpacing] = useState(45); // px
  const [slitAperture, setSlitAperture] = useState(8); // px
  const animTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Dark background
      ctx.fillStyle = '#06080F';
      ctx.fillRect(0, 0, width, height);

      const barrierX = width * 0.35;
      const time = animTimeRef.current;
      const rgb = wavelengthToRGB(wavelength);
      const waveSpeed = 2.2;
      const waveLengthPx = (wavelength / 500) * 22; // visual wavelength in px

      // 1. INCIDENT PLANE WAVES (Left of barrier)
      ctx.lineWidth = 2;
      const startX = 20;
      for (let x = startX; x < barrierX; x += waveLengthPx) {
        const offset = (x + time * waveSpeed) % (barrierX - startX);
        const currentX = startX + offset;
        const phase = Math.sin((currentX - time * waveSpeed) * (Math.PI * 2 / waveLengthPx));
        const alpha = Math.max(0.1, (phase + 1) / 2);

        ctx.strokeStyle = rgb.rgba(alpha * 0.8);
        ctx.beginPath();
        ctx.moveTo(currentX, 20);
        ctx.lineTo(currentX, height - 20);
        ctx.stroke();
      }

      // 2. OPAQUE BARRIER / SLIDES
      ctx.fillStyle = '#1E293B';
      ctx.fillRect(barrierX - 4, 10, 8, height - 20);

      // Slit geometry
      let slitCenters = [];
      const centerY = height / 2;

      if (waveMode === 'grating') {
        // Microscopic equidistant grating slits
        const totalSpan = (numSlits - 1) * slitSpacing;
        const firstY = centerY - totalSpan / 2;

        for (let i = 0; i < numSlits; i++) {
          const sy = firstY + i * slitSpacing;
          slitCenters.push(sy);
          // Clear slit gap
          ctx.clearRect(barrierX - 6, sy - slitAperture / 2, 12, slitAperture);
          // Slit highlight
          ctx.fillStyle = rgb.rgba(0.9);
          ctx.fillRect(barrierX - 2, sy - slitAperture / 2, 4, slitAperture);
        }
      } else {
        // Macroscopic "Window Space" Gap (Single very wide opening)
        const windowHeight = 120; // macroscopic gap
        const sy = centerY;
        // Many dense emission points simulating continuous wide aperture
        for (let y = sy - windowHeight / 2; y <= sy + windowHeight / 2; y += 4) {
          slitCenters.push(y);
        }
        ctx.clearRect(barrierX - 6, sy - windowHeight / 2, 12, windowHeight);
        ctx.fillStyle = rgb.rgba(0.9);
        ctx.fillRect(barrierX - 2, sy - windowHeight / 2, 4, windowHeight);
      }

      // 3. DIFFRACTED SECONDARY WAVELETS (Huygens-Fresnel Principle)
      // Render circular wavefronts emanating from each slit center
      ctx.lineWidth = 1.8;
      const maxRadius = width - barrierX + 50;

      for (let r = 0; r < maxRadius; r += waveLengthPx) {
        const radius = (r + time * waveSpeed) % maxRadius;
        const phase = Math.sin((radius - time * waveSpeed) * (Math.PI * 2 / waveLengthPx));
        const baseAlpha = Math.max(0.05, (phase + 1) / 2);

        // Attenuate with distance
        const distanceFade = Math.max(0.02, 1 - radius / maxRadius);

        slitCenters.forEach((sy) => {
          ctx.strokeStyle = rgb.rgba(baseAlpha * distanceFade * (waveMode === 'window' ? 0.15 : 0.45));
          ctx.beginPath();
          // Semicircular ripple to the right
          ctx.arc(barrierX, sy, radius, -Math.PI / 2, Math.PI / 2);
          ctx.stroke();
        });
      }

      // 4. DRAW CONSTRUCTIVE INTERFERENCE BEAMS / MAXIMUM ANGLE LINES
      if (waveMode === 'grating') {
        // Compute diffraction angle θ = arcsin(m * lambda / d)
        // In simulation units: d = slitSpacing, lambda = waveLengthPx
        const sinTheta1 = waveLengthPx / slitSpacing;
        if (sinTheta1 <= 1.0) {
          const theta1 = Math.asin(sinTheta1);

          // Central Zeroth Order line
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 2.5;
          ctx.setLineDash([6, 4]);
          ctx.beginPath();
          ctx.moveTo(barrierX, centerY);
          ctx.lineTo(width - 20, centerY);
          ctx.stroke();

          // First Order (+1) line
          const len = width - barrierX - 30;
          ctx.strokeStyle = rgb.rgba(0.95);
          ctx.lineWidth = 3;
          ctx.setLineDash([]);
          ctx.beginPath();
          ctx.moveTo(barrierX, centerY);
          ctx.lineTo(barrierX + Math.cos(theta1) * len, centerY - Math.sin(theta1) * len);
          ctx.stroke();

          // First Order (-1) line
          ctx.beginPath();
          ctx.moveTo(barrierX, centerY);
          ctx.lineTo(barrierX + Math.cos(theta1) * len, centerY + Math.sin(theta1) * len);
          ctx.stroke();

          // Label angles
          ctx.fillStyle = '#FFFFFF';
          ctx.font = '11px JetBrains Mono, monospace';
          ctx.fillText(`m = +1 (${(theta1 * 180 / Math.PI).toFixed(1)}°)`, width - 110, centerY - Math.sin(theta1) * len - 8);
          ctx.fillText('m = 0 (Center)', width - 110, centerY - 8);
          ctx.fillText(`m = -1 (${(theta1 * 180 / Math.PI).toFixed(1)}°)`, width - 110, centerY + Math.sin(theta1) * len + 18);
        }
      } else {
        // In Window Space: waves travel straight!
        ctx.strokeStyle = rgb.rgba(0.9);
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(barrierX, centerY - 60);
        ctx.lineTo(width - 20, centerY - 60);
        ctx.moveTo(barrierX, centerY + 60);
        ctx.lineTo(width - 20, centerY + 60);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#F59E0B';
        ctx.font = '12px Inter, sans-serif';
        ctx.fillText('⚡ Macroscopic Window Gap (a >> λ): Light travels straight (Geometric Optics)!', barrierX + 25, centerY - 75);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '11px Inter, sans-serif';
        ctx.fillText('No visible rainbow or angular dispersion occurs because diffraction angle θ ≈ 0°', barrierX + 25, centerY + 85);
      }

      if (isPlaying) {
        animTimeRef.current += 0.5;
      }
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, waveMode, wavelength, numSlits, slitSpacing, slitAperture]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Waves className="w-5 h-5 text-cyan-400" />
          <h3 className="font-semibold text-sm text-slate-100">
            Huygens-Fresnel Wavefront & Interference Simulator
          </h3>
        </div>

        {/* Mode Switcher: Grating vs Window Space */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setWaveMode('grating')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              waveMode === 'grating'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Diffraction Grating (N Slits)
          </button>
          <button
            onClick={() => setWaveMode('window')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              waveMode === 'window'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Window Space Gap (a &gt;&gt; λ)
          </button>
        </div>
      </div>

      {/* 2D Simulation Canvas */}
      <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-black aspect-[16/9] max-h-[380px]">
        <canvas
          ref={canvasRef}
          width={800}
          height={420}
          className="w-full h-full block"
        />

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-3 left-3 p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-cyan-400 hover:bg-slate-800 transition-all shadow-md"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Interactive Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
        {/* Wavelength Slider */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-slate-400">Wavelength (λ)</span>
            <span className="font-mono font-bold" style={{ color: wavelengthToRGB(wavelength).css }}>
              {wavelength} nm
            </span>
          </div>
          <input
            type="range"
            min={390}
            max={720}
            step={5}
            value={wavelength}
            onChange={(e) => setWavelength(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>Violet (390nm)</span>
            <span>Red (720nm)</span>
          </div>
        </div>

        {/* Slit Spacing Slider */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-slate-400">Slit Spacing (d)</span>
            <span className="font-mono text-cyan-400 font-bold">{slitSpacing} px</span>
          </div>
          <input
            type="range"
            min={25}
            max={75}
            value={slitSpacing}
            disabled={waveMode === 'window'}
            onChange={(e) => setSlitSpacing(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg disabled:opacity-40"
          />
          <div className="text-[10px] text-slate-500 mt-1">
            Smaller d → Wider rainbow angle (sin θ = mλ/d)
          </div>
        </div>

        {/* Number of Slits */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-slate-400">Number of Slits (N)</span>
            <span className="font-mono text-cyan-400 font-bold">{numSlits}</span>
          </div>
          <input
            type="range"
            min={2}
            max={9}
            value={numSlits}
            disabled={waveMode === 'window'}
            onChange={(e) => setNumSlits(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg disabled:opacity-40"
          />
          <div className="text-[10px] text-slate-500 mt-1">
            More slits → Sharper, more intense principal maxima
          </div>
        </div>
      </div>
    </div>
  );
}
