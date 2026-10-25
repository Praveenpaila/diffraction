import React, { useMemo } from 'react';
import { calculateDiffractionAngle, wavelengthToRGB, decimalToVernier, getAmbientLightingEffect } from '../physics/diffractionEngine';
import { Crosshair, CheckCircle2, AlertTriangle, Eye, ZoomIn } from 'lucide-react';
import { soundFX } from '../audio/soundEffects';

export default function EyepieceHUD({
  currentSource,
  gratingPreset,
  slitWidthUm,
  telescopeAngleDeg,
  gratingTiltDeg,
  ambientLux,
  isDarkRoom,
  onRecordReading
}) {
  const linesPerCm = gratingPreset.linesPerCm;
  const tiltDeg = gratingTiltDeg;

  // Compute ambient lighting metrics
  const ambientEffect = useMemo(() => getAmbientLightingEffect(ambientLux), [ambientLux]);

  // Dual Vernier scale readings
  // Vernier 1 at telescope angle; Vernier 2 exactly 180 degrees opposite
  const v1 = useMemo(() => decimalToVernier(telescopeAngleDeg), [telescopeAngleDeg]);
  const v2 = useMemo(() => decimalToVernier(telescopeAngleDeg + 180), [telescopeAngleDeg]);

  // Find all visible spectral lines within the current telescope Field of View (+/- 5 degrees)
  const FOV_DEGREES = 9.0; // Total angular FOV of telescope eyepiece

  const visibleLines = useMemo(() => {
    const list = [];

    // Helper: test if line falls in FOV
    const checkAngle = (lambda, name, hex, baseIntensity, order) => {
      const res = calculateDiffractionAngle(lambda, linesPerCm, order, tiltDeg);
      if (!res) return;

      const diff = res.angleDeg - telescopeAngleDeg;
      if (Math.abs(diff) <= FOV_DEGREES / 2) {
        // Pixel X inside circular view (centered at 0)
        const xPercent = 50 + (diff / (FOV_DEGREES / 2)) * 50;

        // Ambient light washes out faint lines
        // If effective intensity < ambient glare, visibility drops
        const contrastFactor = ambientEffect.contrastRatio;
        const effectiveIntensity = baseIntensity * contrastFactor;
        const isWashedOut = effectiveIntensity < 0.15 && !isDarkRoom;

        list.push({
          lambda,
          name: `${name} (m=${order > 0 ? `+${order}` : order})`,
          order,
          hex,
          angleDeg: res.angleDeg,
          diffFromCenter: diff,
          xPercent,
          baseIntensity,
          effectiveIntensity,
          isWashedOut,
          isAligned: Math.abs(diff) < 0.12
        });
      }
    };

    // 1. Central Zeroth Order (m = 0)
    // Undeviated beam always at angle = tiltDeg (or 0 if normal)
    const zeroDiff = tiltDeg - telescopeAngleDeg;
    if (Math.abs(zeroDiff) <= FOV_DEGREES / 2) {
      list.push({
        lambda: 0,
        name: "Central Zeroth Order (m=0)",
        order: 0,
        hex: currentSource.id.includes('laser_red') ? '#FF1744' : currentSource.id.includes('laser_green') ? '#00E676' : '#FFFFFF',
        angleDeg: tiltDeg,
        diffFromCenter: zeroDiff,
        xPercent: 50 + (zeroDiff / (FOV_DEGREES / 2)) * 50,
        baseIntensity: 1.0,
        effectiveIntensity: 1.0,
        isWashedOut: false,
        isAligned: Math.abs(zeroDiff) < 0.12
      });
    }

    // 2. Discrete Lines (Orders m = 1, -1, 2, -2)
    if (currentSource.lines) {
      currentSource.lines.forEach((line) => {
        [1, -1, 2, -2].forEach((order) => {
          checkAngle(line.lambda, line.name, line.hex, line.intensity, order);
        });
      });
    }

    // 3. Continuous Spectrum (White Light)
    if (currentSource.isContinuous && !currentSource.isLED) {
      for (let lam = 400; lam <= 700; lam += 6) {
        const rgb = wavelengthToRGB(lam);
        [1, -1].forEach((order) => {
          checkAngle(lam, `${lam}nm`, rgb.css, 0.75, order);
        });
      }
    }

    // 4. White LED
    if (currentSource.isLED) {
      for (let lam = 430; lam <= 660; lam += 8) {
        const rgb = wavelengthToRGB(lam);
        [1, -1].forEach((order) => {
          checkAngle(lam, `${lam}nm (Diffuse)`, rgb.css, 0.5, order);
        });
      }
    }

    return list;
  }, [currentSource, linesPerCm, tiltDeg, telescopeAngleDeg, ambientEffect, isDarkRoom]);

  // Find currently aligned line for one-click recording
  const alignedLine = visibleLines.find((l) => l.isAligned);

  const handleRecord = () => {
    if (!alignedLine) return;
    soundFX.playSuccessChime();
    onRecordReading({
      color: alignedLine.name,
      lambdaTheory: alignedLine.lambda,
      v1Reading: v1.totalFormatted,
      v2Reading: v2.totalFormatted,
      angleDeg: Number(alignedLine.angleDeg.toFixed(2)),
      order: alignedLine.order
    });
  };

  // Slit width visual factor (in px)
  const slitPixelWidth = Math.max(1.5, Math.min(18, (slitWidthUm / 100) * 8));

  return (
    <div className="flex flex-col gap-3 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5 text-cyan-400" />
          <h3 className="font-semibold text-sm text-slate-100 tracking-wide">
            Telescope Eyepiece Simulator
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400">
          Field of View: <span className="text-cyan-400">9.0°</span>
        </div>
      </div>

      {/* CIRCULAR EYEPIECE APERTURE */}
      <div className="relative w-full aspect-square max-w-[340px] mx-auto rounded-full overflow-hidden border-4 border-slate-700 bg-black shadow-[inset_0_0_40px_rgba(0,0,0,0.9)]">
        {/* Ambient Stray Light / Glare Overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-300"
          style={{
            backgroundColor: isDarkRoom ? 'transparent' : `rgba(200, 220, 255, ${ambientEffect.strayLightGlare * 0.75})`,
            backdropFilter: isDarkRoom ? 'none' : `blur(${ambientEffect.strayLightGlare * 2}px)`
          }}
        />

        {/* Optical Lens Vignette */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_#000000] pointer-events-none" />

        {/* SPECTRAL LINES INSIDE FIELD OF VIEW */}
        <div className="absolute inset-0 overflow-hidden">
          {visibleLines.map((line, idx) => {
            if (line.isWashedOut) return null; // Washed out by daylight glare!

            return (
              <div
                key={idx}
                className="absolute top-0 bottom-0 transition-transform duration-75 flex flex-col items-center justify-center pointer-events-none"
                style={{
                  left: `${line.xPercent}%`,
                  transform: 'translateX(-50%)',
                  width: `${slitPixelWidth}px`,
                  backgroundColor: line.hex,
                  opacity: Math.max(0.15, line.effectiveIntensity),
                  boxShadow: isDarkRoom
                    ? `0 0 16px ${line.hex}, 0 0 32px ${line.hex}`
                    : `0 0 4px ${line.hex}`
                }}
              >
                {/* Wavelength tag on line */}
                {line.lambda > 0 && Math.abs(line.diffFromCenter) < 1.5 && (
                  <span
                    className="absolute bottom-6 px-1 py-0.5 rounded text-[9px] font-mono text-white whitespace-nowrap bg-black/80 border border-slate-700"
                    style={{ transform: 'rotate(-90deg)' }}
                  >
                    {line.lambda} nm
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* ETCHED RETICLE / CROSSHAIRS */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Vertical Crosswire */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-amber-400/80 shadow-[0_0_2px_#fbbf24]" />
          {/* Horizontal Crosswire */}
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-amber-400/80 shadow-[0_0_2px_#fbbf24]" />
          {/* Central Target Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-amber-400/40" />
        </div>

        {/* Alignment Indicator Alert */}
        {alignedLine && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-emerald-500/90 text-slate-950 font-bold text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-lg animate-pulse">
            <CheckCircle2 className="w-3 h-3" />
            Crosshair Locked: {alignedLine.name}
          </div>
        )}

        {/* Washed-out warning when in bright light room */}
        {!isDarkRoom && ambientLux > 300 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-amber-500/80 text-black text-[9px] font-semibold text-center whitespace-nowrap">
            ⚠️ Daylight Glare: Weak lines washed out!
          </div>
        )}
      </div>

      {/* DUAL VERNIER SCALE READOUT DISPLAY */}
      <div className="grid grid-cols-2 gap-2 mt-1">
        {/* Vernier 1 (V1) */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-center">
          <div className="text-[10px] uppercase font-mono text-cyan-400 font-semibold tracking-wider">
            Vernier 1 (V₁)
          </div>
          <div className="text-base font-bold font-mono text-slate-100 mt-0.5">
            {v1.totalFormatted}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">
            MSR: {v1.formattedMSR} | VSR: {v1.formattedVSR}
          </div>
        </div>

        {/* Vernier 2 (V2 - 180° opposite) */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-center">
          <div className="text-[10px] uppercase font-mono text-indigo-400 font-semibold tracking-wider">
            Vernier 2 (V₂)
          </div>
          <div className="text-base font-bold font-mono text-slate-100 mt-0.5">
            {v2.totalFormatted}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">
            MSR: {v2.formattedMSR} | VSR: {v2.formattedVSR}
          </div>
        </div>
      </div>

      {/* Alignment Action Button */}
      <button
        onClick={handleRecord}
        disabled={!alignedLine}
        className={`w-full py-2.5 px-4 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-md ${
          alignedLine
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 active:scale-[0.98] cursor-pointer"
            : "bg-slate-800/60 text-slate-500 border border-slate-700/40 cursor-not-allowed"
        }`}
      >
        <Crosshair className="w-4 h-4" />
        {alignedLine ? `Record ${alignedLine.name} in Lab Notebook` : "Rotate Telescope to Align Line with Crosswire"}
      </button>
    </div>
  );
}
