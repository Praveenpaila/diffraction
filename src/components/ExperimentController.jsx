import React from 'react';
import { LIGHT_SOURCES, GRATING_PRESETS } from '../physics/diffractionEngine';
import { soundFX } from '../audio/soundEffects';
import { 
  Lightbulb, 
  Grid, 
  Sliders, 
  Sun, 
  Moon, 
  RotateCcw, 
  AlertCircle, 
  Gauge, 
  ChevronLeft, 
  ChevronRight,
  Zap
} from 'lucide-react';

export default function ExperimentController({
  currentSource,
  onSourceChange,
  gratingPreset,
  onGratingChange,
  slitWidthUm,
  onSlitWidthChange,
  telescopeAngleDeg,
  onTelescopeAngleChange,
  isDarkRoom,
  onToggleDarkRoom,
  ambientLux,
  onAmbientLuxChange,
  isNormalIncidence,
  onToggleNormalIncidence,
  gratingTiltDeg,
  onTiltChange,
  onOpenLedExplanation
}) {
  const handleSourceSelect = (source) => {
    if (source.id.includes('laser')) {
      soundFX.playLaserHum();
    } else {
      soundFX.playLampIgnition();
    }
    onSourceChange(source);
  };

  const handleFineRotate = (delta) => {
    soundFX.playVernierTick();
    onTelescopeAngleChange(Number((telescopeAngleDeg + delta).toFixed(2)));
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-col gap-4">
      {/* 1. LIGHT SOURCE SELECTOR */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            1. Select Light Source
          </label>
          <span className="text-[11px] font-mono text-cyan-400 font-semibold">
            {currentSource.tag}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {LIGHT_SOURCES.map((source) => {
            const isSelected = currentSource.id === source.id;
            return (
              <button
                key={source.id}
                onClick={() => handleSourceSelect(source)}
                className={`p-2 rounded-xl text-left border transition-all text-xs font-medium cursor-pointer ${
                  isSelected
                    ? "bg-slate-800 border-cyan-500 text-white shadow-md shadow-cyan-500/10 ring-1 ring-cyan-500"
                    : "bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold truncate">{source.name.split('(')[0]}</span>
                  {source.id.includes('laser') && <Zap className="w-3 h-3 text-rose-400 flex-shrink-0" />}
                </div>
                <div className="text-[10px] text-slate-500 truncate mt-0.5">
                  {source.id.includes('laser') ? "Monochromatic" : source.id === 'led_white' ? "Phosphor / No Lines" : "Spectrum"}
                </div>
              </button>
            );
          })}
        </div>

        {/* LED Warning Banner if LED is active */}
        {currentSource.id === 'led_white' && (
          <div className="mt-2.5 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Why LED shows no sharp lines: </span>
              LEDs emit via broad semiconductor bandgaps and yellow phosphor fluorescence (~110nm continuum), unlike atomic emission lines!
              <button
                onClick={onOpenLedExplanation}
                className="ml-1 text-cyan-400 underline font-semibold hover:text-cyan-300 cursor-pointer"
              >
                Read Real Cause
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 2. DIFFRACTION GRATING RULINGS (N) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Grid className="w-4 h-4 text-cyan-400" />
            2. Diffraction Grating Pitch (d)
          </label>
          <span className="text-[11px] font-mono text-slate-400">
            d = {gratingPreset.pitchNm.toFixed(1)} nm
          </span>
        </div>

        <select
          value={gratingPreset.id}
          onChange={(e) => {
            soundFX.playSwitchClick();
            const found = GRATING_PRESETS.find((p) => p.id === e.target.value);
            if (found) onGratingChange(found);
          }}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer"
        >
          {GRATING_PRESETS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} — ({p.linesPerCm.toFixed(0)} lines/cm)
            </option>
          ))}
        </select>
      </div>

      {/* 3. TELESCOPE ANGLE CONTROL & VERNIER DIAL */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Gauge className="w-4 h-4 text-indigo-400" />
            3. Rotate Telescope (Angle θ)
          </label>
          <span className="font-mono text-sm font-bold text-cyan-400">
            {telescopeAngleDeg > 0 ? `+${telescopeAngleDeg.toFixed(2)}°` : `${telescopeAngleDeg.toFixed(2)}°`}
          </span>
        </div>

        {/* Coarse Slider */}
        <input
          type="range"
          min={-45}
          max={45}
          step={0.1}
          value={telescopeAngleDeg}
          onChange={(e) => {
            soundFX.playVernierTick();
            onTelescopeAngleChange(Number(e.target.value));
          }}
          className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
        />

        {/* Fine Tangent Screw Adjustment Buttons */}
        <div className="flex items-center justify-between gap-1.5 mt-2">
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleFineRotate(-1.0)}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300"
            >
              -1.0°
            </button>
            <button
              onClick={() => handleFineRotate(-0.1)}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300"
            >
              -0.1°
            </button>
            <button
              onClick={() => handleFineRotate(-0.02)}
              className="px-1.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-cyan-400"
              title="Tangent Fine Screw: 1 minute (Least Count)"
            >
              -1'
            </button>
          </div>

          <button
            onClick={() => {
              soundFX.playSwitchClick();
              onTelescopeAngleChange(0);
            }}
            className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium hover:bg-cyan-500/20"
          >
            Zero (0°)
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={() => handleFineRotate(0.02)}
              className="px-1.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-cyan-400"
              title="Tangent Fine Screw: +1 minute (Least Count)"
            >
              +1'
            </button>
            <button
              onClick={() => handleFineRotate(0.1)}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300"
            >
              +0.1°
            </button>
            <button
              onClick={() => handleFineRotate(1.0)}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300"
            >
              +1.0°
            </button>
          </div>
        </div>
      </div>

      {/* 4. SPECTROMETER ALIGNMENT: NORMAL INCIDENCE VS TILT */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Sliders className="w-4 h-4 text-emerald-400" />
            4. Normal Incidence Setting
          </label>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            Math.abs(gratingTiltDeg) < 0.1
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
          }`}>
            {Math.abs(gratingTiltDeg) < 0.1 ? "Exact Normal (90°)" : `Tilted (${gratingTiltDeg > 0 ? '+' : ''}${gratingTiltDeg}°)`}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => {
              soundFX.playSwitchClick();
              onTiltChange(0);
            }}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
              Math.abs(gratingTiltDeg) < 0.1
                ? "bg-emerald-500 text-slate-950 shadow-md"
                : "bg-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            Lock Normal Incidence (θᵢ = 0°)
          </button>
          <button
            onClick={() => {
              soundFX.playSwitchClick();
              onTiltChange(8.5);
            }}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
              Math.abs(gratingTiltDeg) >= 0.1
                ? "bg-amber-500 text-slate-950 shadow-md"
                : "bg-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            Simulate Tilt Misalignment
          </button>
        </div>

        {Math.abs(gratingTiltDeg) >= 0.1 && (
          <div className="mt-2 text-[11px] text-amber-300 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
            ⚠️ <strong>Tilt Distortion:</strong> Incident angle is not normal! The left and right orders are now asymmetric (θ_left ≠ θ_right) because formula changes to d(sin θᵢ ± sin θ) = mλ.
          </div>
        )}
      </div>

      {/* 5. DARK ROOM VS LIGHT ROOM TOGGLE */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            {isDarkRoom ? <Moon className="w-4 h-4 text-indigo-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
            5. Laboratory Ambient Lighting
          </label>
          <button
            onClick={() => {
              soundFX.playSwitchClick();
              onToggleDarkRoom();
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              isDarkRoom
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-amber-500 text-slate-950"
            }`}
          >
            {isDarkRoom ? "Dark Room (Active)" : "Daylight Room (Active)"}
          </button>
        </div>

        {/* Ambient Lux Slider */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
          <span>Room Ambient Illumination:</span>
          <span className="font-mono text-cyan-400 font-bold">{ambientLux} Lux</span>
        </div>
        <input
          type="range"
          min={0}
          max={800}
          step={20}
          value={ambientLux}
          onChange={(e) => {
            const val = Number(e.target.value);
            onAmbientLuxChange(val);
          }}
          className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
        />

        <div className="text-[11px] text-slate-400 mt-2 bg-slate-900 p-2 rounded-lg border border-slate-800/80">
          💡 <strong>Physics Fact:</strong> Ambient light does <strong>NOT</strong> change wavelength (λ is invariant)! However, in daylight (high lux), eye pupils constrict and background glare washes out weak violet lines.
        </div>
      </div>

      {/* 6. COLLIMATOR SLIT WIDTH */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            6. Collimator Slit Jaw Width
          </label>
          <span className="font-mono text-xs text-cyan-400 font-bold">
            {slitWidthUm} μm
          </span>
        </div>
        <input
          type="range"
          min={15}
          max={350}
          step={5}
          value={slitWidthUm}
          onChange={(e) => onSlitWidthChange(Number(e.target.value))}
          className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
        />
        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
          <span>Razor Sharp (15 μm)</span>
          <span>Wide / Blurry (350 μm)</span>
        </div>
      </div>
    </div>
  );
}
