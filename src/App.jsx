import React, { useState } from 'react';
import { 
  LIGHT_SOURCES, 
  GRATING_PRESETS 
} from './physics/diffractionEngine';
import { soundFX } from './audio/soundEffects';

import ThreeSpectrometer from './components/ThreeSpectrometer';
import EyepieceHUD from './components/EyepieceHUD';
import ExperimentController from './components/ExperimentController';
import WaveOpticsCanvas from './components/WaveOpticsCanvas';
import LabNotebook from './components/LabNotebook';
import KidsMode from './components/KidsMode';
import DeepAnswersModal from './components/DeepAnswersModal';
import QuizSection from './components/QuizSection';

import { 
  Compass, 
  Waves, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  Award, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Layers, 
  Zap,
  Info
} from 'lucide-react';

export default function App() {
  // Navigation
  const [activeTab, setActiveTab] = useState('lab'); // 'lab' | 'waves' | 'kids' | 'theory' | 'notebook' | 'quiz'

  // Optics State
  const [currentSource, setCurrentSource] = useState(LIGHT_SOURCES[0]); // Mercury Lamp default
  const [gratingPreset, setGratingPreset] = useState(GRATING_PRESETS[0]); // 15,000 LPI
  const [slitWidthUm, setSlitWidthUm] = useState(30); // 30 μm sharp slit
  const [telescopeAngleDeg, setTelescopeAngleDeg] = useState(0.0); // 0° central beam
  const [gratingTiltDeg, setGratingTiltDeg] = useState(0.0); // Normal incidence = 0°

  // Environmental Lighting State
  const [isDarkRoom, setIsDarkRoom] = useState(true);
  const [ambientLux, setAmbientLux] = useState(5); // 5 Lux (Dark lab)

  // Audio State
  const [isMuted, setIsMuted] = useState(false);

  // Student Notebook
  const [studentName, setStudentName] = useState('Physics Researcher');
  const [readings, setReadings] = useState([]);

  // Deep answers modal jump target
  const [deepTopicId, setDeepTopicId] = useState(null);

  // Handlers
  const handleToggleSound = () => {
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
  };

  const handleToggleDarkRoom = () => {
    soundFX.playSwitchClick();
    if (isDarkRoom) {
      setIsDarkRoom(false);
      setAmbientLux(500); // Switch to daylight room
    } else {
      setIsDarkRoom(true);
      setAmbientLux(5); // Switch to dark room
    }
  };

  const handleAmbientLuxChange = (lux) => {
    setAmbientLux(lux);
    setIsDarkRoom(lux < 35);
  };

  const handleRecordReading = (reading) => {
    setReadings((prev) => [reading, ...prev]);
  };

  const handleOpenLedExplanation = () => {
    setDeepTopicId('why-led-no-lines');
    setActiveTab('theory');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkRoom ? 'bg-[#05070D] text-slate-100' : 'bg-[#0F172A] text-slate-100'}`}>
      {/* 1. TOP ULTRA-MODERN NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('lab')}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-rose-500 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-lg">
                🌈
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-base tracking-tight text-white">
                  Diffraction<span className="text-cyan-400">Spectra</span>
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  3D MERN LAB
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-medium">
                VIBGYOR Wavelengths • Spectrometer Normal Incidence • Laser & LED Optics
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-2xl border border-slate-800">
            <button
              onClick={() => { soundFX.playSwitchClick(); setActiveTab('lab'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'lab'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5" /> 3D Virtual Lab
            </button>
            <button
              onClick={() => { soundFX.playSwitchClick(); setActiveTab('waves'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'waves'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Waves className="w-3.5 h-3.5" /> Huygens & Window Gap
            </button>
            <button
              onClick={() => { soundFX.playSwitchClick(); setActiveTab('kids'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'kids'
                  ? 'bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 font-bold shadow-md shadow-rose-500/20'
                  : 'text-slate-400 hover:text-amber-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" /> Kids & Story Mode
            </button>
            <button
              onClick={() => { soundFX.playSwitchClick(); setActiveTab('theory'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'theory'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" /> Deep Answers
            </button>
            <button
              onClick={() => { soundFX.playSwitchClick(); setActiveTab('notebook'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'notebook'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" /> Lab Notebook
            </button>
            <button
              onClick={() => { soundFX.playSwitchClick(); setActiveTab('quiz'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5" /> Mastery Quiz
            </button>
          </nav>

          {/* Environmental Toggles (Audio & Dark Room) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleSound}
              title={isMuted ? "Unmute Sound FX" : "Mute Sound FX"}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            <button
              onClick={handleToggleDarkRoom}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                isDarkRoom
                  ? 'bg-indigo-950/80 border-indigo-500/40 text-indigo-300 shadow-md'
                  : 'bg-amber-500/20 border-amber-500/40 text-amber-300 shadow-md'
              }`}
            >
              {isDarkRoom ? <Moon className="w-3.5 h-3.5 text-indigo-400" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
              {isDarkRoom ? 'Darkened Lab' : 'Daylight Room'}
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
        {/* TAB 1: 3D VIRTUAL LAB */}
        {activeTab === 'lab' && (
          <div className="flex flex-col gap-6">
            {/* Top Insight Strip addressing user core questions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div 
                onClick={() => { setDeepTopicId('why-led-no-lines'); setActiveTab('theory'); }}
                className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 rounded-xl p-3 cursor-pointer transition-all flex items-center gap-2.5"
              >
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">💡</div>
                <div className="text-xs">
                  <div className="font-bold text-slate-200">Why LED Shows No Sharp Lines</div>
                  <div className="text-slate-400 text-[11px] truncate">Broadband bandgap + Ce:YAG phosphor continuum</div>
                </div>
              </div>

              <div 
                onClick={() => { setDeepTopicId('normal-incidence'); setActiveTab('theory'); }}
                className="bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-3 cursor-pointer transition-all flex items-center gap-2.5"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">📐</div>
                <div className="text-xs">
                  <div className="font-bold text-slate-200">Normal Incidence Matters!</div>
                  <div className="text-slate-400 text-[11px] truncate">Ensures θ_left = θ_right; tilt skews d(sin θᵢ ± sin θ) = mλ</div>
                </div>
              </div>

              <div 
                onClick={() => { setDeepTopicId('dark-vs-light-room'); setActiveTab('theory'); }}
                className="bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 rounded-xl p-3 cursor-pointer transition-all flex items-center gap-2.5"
              >
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">☀️</div>
                <div className="text-xs">
                  <div className="font-bold text-slate-200">Light vs Dark Room Physics</div>
                  <div className="text-slate-400 text-[11px] truncate">Wavelength λ never changes; daylight glare destroys SNR</div>
                </div>
              </div>
            </div>

            {/* 3D Visualizer & Eyepiece Simulation Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* 3D Spectrometer Canvas (8 Columns on desktop) */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                <ThreeSpectrometer
                  currentSource={currentSource}
                  gratingPreset={gratingPreset}
                  slitWidthUm={slitWidthUm}
                  telescopeAngleDeg={telescopeAngleDeg}
                  onTelescopeAngleChange={setTelescopeAngleDeg}
                  isDarkRoom={isDarkRoom}
                  ambientLux={ambientLux}
                  isNormalIncidence={Math.abs(gratingTiltDeg) < 0.1}
                  gratingTiltDeg={gratingTiltDeg}
                  onTiltChange={setGratingTiltDeg}
                  showRays={true}
                />

                {/* Quick Spectrometer Status Info */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Grating Pitch (d)</span>
                    <div className="text-sm font-bold font-mono text-cyan-400">{gratingPreset.pitchNm.toFixed(1)} nm</div>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Slit Width (a)</span>
                    <div className="text-sm font-bold font-mono text-emerald-400">{slitWidthUm} μm</div>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Diffraction Equation</span>
                    <div className="text-sm font-bold font-mono text-amber-400">d·sin θ = m·λ</div>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Least Count</span>
                    <div className="text-sm font-bold font-mono text-indigo-400">1' (minute)</div>
                  </div>
                </div>
              </div>

              {/* Eyepiece Simulator HUD & Vernier (4 Columns on desktop) */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <EyepieceHUD
                  currentSource={currentSource}
                  gratingPreset={gratingPreset}
                  slitWidthUm={slitWidthUm}
                  telescopeAngleDeg={telescopeAngleDeg}
                  gratingTiltDeg={gratingTiltDeg}
                  ambientLux={ambientLux}
                  isDarkRoom={isDarkRoom}
                  onRecordReading={handleRecordReading}
                />
              </div>
            </div>

            {/* Comprehensive Experiment Controller Panel */}
            <ExperimentController
              currentSource={currentSource}
              onSourceChange={setCurrentSource}
              gratingPreset={gratingPreset}
              onGratingChange={setGratingPreset}
              slitWidthUm={slitWidthUm}
              onSlitWidthChange={setSlitWidthUm}
              telescopeAngleDeg={telescopeAngleDeg}
              onTelescopeAngleChange={setTelescopeAngleDeg}
              isDarkRoom={isDarkRoom}
              onToggleDarkRoom={handleToggleDarkRoom}
              ambientLux={ambientLux}
              onAmbientLuxChange={handleAmbientLuxChange}
              isNormalIncidence={Math.abs(gratingTiltDeg) < 0.1}
              onToggleNormalIncidence={() => setGratingTiltDeg(gratingTiltDeg === 0 ? 8.5 : 0)}
              gratingTiltDeg={gratingTiltDeg}
              onTiltChange={setGratingTiltDeg}
              onOpenLedExplanation={handleOpenLedExplanation}
            />

            {/* Quick Link to Lab Observations */}
            <LabNotebook
              readings={readings}
              onClearReadings={() => setReadings([])}
              gratingPreset={gratingPreset}
              studentName={studentName}
              onStudentNameChange={setStudentName}
            />
          </div>
        )}

        {/* TAB 2: WAVE INTERFERENCE & WINDOW GAP */}
        {activeTab === 'waves' && (
          <div className="flex flex-col gap-6">
            <WaveOpticsCanvas />
            <DeepAnswersModal defaultOpenTopic="window-gap-vs-grating" />
          </div>
        )}

        {/* TAB 3: KIDS & BEGINNERS STORY MODE */}
        {activeTab === 'kids' && (
          <div className="flex flex-col gap-6">
            <KidsMode />
          </div>
        )}

        {/* TAB 4: DEEP SCIENTIFIC ANSWERS */}
        {activeTab === 'theory' && (
          <div className="flex flex-col gap-6">
            <DeepAnswersModal defaultOpenTopic={deepTopicId} />
          </div>
        )}

        {/* TAB 5: LAB NOTEBOOK */}
        {activeTab === 'notebook' && (
          <div className="flex flex-col gap-6">
            <LabNotebook
              readings={readings}
              onClearReadings={() => setReadings([])}
              gratingPreset={gratingPreset}
              studentName={studentName}
              onStudentNameChange={setStudentName}
            />
          </div>
        )}

        {/* TAB 6: MASTERY QUIZ */}
        {activeTab === 'quiz' && (
          <div className="flex flex-col gap-6">
            <QuizSection />
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950/80 mt-12 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>DiffractionSpectra 3D Laboratory</span>
            <span>•</span>
            <span className="text-cyan-400">Wave Optics & Spectrometry Simulator</span>
          </div>
          <div>
            Built with React, Three.js, WebGL & Node.js Express Backend
          </div>
        </div>
      </footer>
    </div>
  );
}
