import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Zap, 
  Sliders, 
  Sun, 
  Layers, 
  CheckCircle2, 
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

export default function DeepAnswersModal({ defaultOpenTopic = null }) {
  const [openTopicId, setOpenTopicId] = useState(defaultOpenTopic || 'why-led-no-lines');

  const DEEP_TOPICS = [
    {
      id: "why-led-no-lines",
      badge: "User Core Question #1",
      title: "Why does an LED light NOT show sharp lines through a spectrometer grating?",
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      tagColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      summary: "LEDs emit across continuous solid-state semiconductor bandgaps and broad phosphors (~110nm continuum), completely lacking the razor-sharp quantized atomic transitions of gas discharge tubes.",
      answer: `
### 1. Atomic Gas Tubes (Mercury/Sodium) vs Solid-State LEDs
- **Mercury/Sodium Gas Lamps**: Light is born from isolated, free atoms in a gas vapor. Electrons jump between strictly quantized, discrete energy levels ($E_2 \\to E_1$). By the Planck-Einstein relation, $\\Delta E = h\\nu = hc/\\lambda$. Because the energy level is extraordinarily exact, the emission line has a natural atomic line width of **less than 0.01 nm**! When focused through the spectrometer collimator slit, you see needle-sharp vertical lines.
- **LEDs (Light Emitting Diodes)**: An LED has **no isolated atoms**. Light is emitted in a solid crystalline semiconductor lattice (e.g., InGaN or AlGaInP) where electrons in the conduction band recombine with holes in the valence band.
  - Semiconductor energy states form **continuous bands** (not discrete lines).
  - Thermal kinetic energy broadening ($k_B T \\approx 26\\text{ meV}$) causes electrons at different heights in the conduction band to emit a wide continuous spread of photon energies. Even a 'single color' LED has a Full-Width at Half-Maximum (FWHM) of **20 to 40 nm**!

### 2. The Commercial White LED Phosphor Mechanism
Commercial white LEDs do not create white light directly. They use:
1. A **Blue InGaN chip** that emits around 450 nm.
2. A **Cerium-doped Yttrium Aluminum Garnet (YAG:Ce³⁺) phosphor coating**.
3. Blue photons excite the phosphor, which re-emits a broad continuous fluorescent yellow-green band stretching from **500 nm to 700 nm (FWHM ~ 110 nm)**!

### 3. Source Area & Lack of Collimation
An LED has an emission die area of $\\sim 1\\text{ mm}^2$ covered by a clear epoxy dome lens. In a spectrometer, the collimator expects a thin, 20-micron optical slit placed at its principal focal length. When an extended, diffuse, broadband LED is placed in front of the grating, millions of diffracted images of the wide die overlap across every wavelength from 400 nm to 700 nm.
**The Result:** The observer does not see distinct sharp 'lines'. Instead, they see a faint, smeared, uniform low-contrast haze, leading them to think *'the spectrometer does not show anything'*.
      `
    },
    {
      id: "how-grating-works",
      badge: "Fundamental Physics",
      title: "How does a Diffraction Grating actually work?",
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      tagColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
      summary: "Wave division and constructive interference: $d\\sin\\theta = m\\lambda$. Red has longer wavelengths, so it diffracts at larger angles than violet.",
      answer: `
### The Wave Optics Mechanism:
1. **Grating Structure**: An optically flat plate ruled with thousands of microscopic, equidistant parallel scratches. The clear spaces act as slits of width $a$, and opaque spaces of width $b$. The grating element is $d = a + b$.
2. **Huygens-Fresnel Wavelets**: According to Huygens' principle, when a collimated plane wave hits the grating, each microscopic slit acts as a new source of spherical wavelets spreading outward.
3. **Path Difference**: For waves diffracted at angle $\\theta$, the path difference between light from corresponding points of two neighboring slits is $\\Delta x = d \\sin \\theta$.
4. **Constructive Interference**:
   When this path difference equals an integer number of whole wavelengths:
   $$d \\sin \\theta = m \\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\dots)$$
   All wave crests arrive in phase and constructively reinforce each other into an intensely bright, razor-sharp principal maximum!
5. **Dispersion (Why Rainbow Colors Separate)**:
   $$\\sin \\theta = \\frac{m \\lambda}{d}$$
   Because $\\lambda_{\\text{red}} (\\sim 700\\text{ nm}) > \\lambda_{\\text{violet}} (\\sim 400\\text{ nm})$, $\\theta_{\\text{red}} > \\theta_{\\text{violet}}$. Red light bends further from the center than violet!
      `
    },
    {
      id: "normal-incidence",
      badge: "Instrument Calibration",
      title: "Spectrometer Settings & Normal Incidence: Why does it matter if tilted?",
      icon: <Sliders className="w-5 h-5 text-emerald-400" />,
      tagColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      summary: "Normal incidence ensures symmetrical diffraction angles ($2\\theta = |\\theta_R - \\theta_L|$). If tilted, $d(\\sin\\theta_i + \\sin\\theta_d) = m\\lambda$, skewing all calculations.",
      answer: `
### What is Normal Incidence?
Light emerging from the collimator must hit the face of the diffraction grating at **exactly $90^\\circ$ (perpendicular, incident angle $\\theta_i = 0^\\circ$)**.

### Why is it Crucial?
1. **Symmetry of Left & Right Orders**:
   At $\\theta_i = 0^\\circ$, the standard equation applies:
   $$d \\sin \\theta = m \\lambda$$
   The first-order line on the left is at angle $-\\theta$, and on the right is at $+\\theta$.
   By measuring both sides on the vernier:
   $$2\\theta = |\\text{Vernier}_{\\text{Right}} - \\text{Vernier}_{\\text{Left}}| \\implies \\theta = \\frac{2\\theta}{2}$$
   This eliminates zero-error of the circular scale and eccentricity of the central axis!

2. **What happens if the spectrometer or grating is TILTED?**
   If the grating has an oblique tilt angle $\\theta_i \\ne 0^\\circ$:
   $$d (\\sin \\theta_i \\pm \\sin \\theta_d) = m \\lambda$$
   - The diffracted spectrum becomes **asymmetric**: $\\theta_{\\text{left}} \\ne \\theta_{\\text{right}}$!
   - If you naively use the standard formula $\\lambda = (d\\sin\\theta)/m$, your measured wavelength will be completely wrong!
   - If the rulings are tilted vertically, the spectral lines tilt at an angle and drift out of the crosshairs as you rotate the telescope.
      `
    },
    {
      id: "dark-vs-light-room",
      badge: "Environmental Conditions",
      title: "Light Room vs Dark Room: Does Wavelength change? What happens to Intensity?",
      icon: <Sun className="w-5 h-5 text-indigo-400" />,
      tagColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
      summary: "Wavelength $\\lambda$ NEVER changes! But in daylight, ambient glare plummets the signal-to-noise ratio and pupil constriction washes out faint lines.",
      answer: `
### 1. Does Wavelength ($\\lambda$) Change in a Bright Room?
**ABSOLUTELY NOT.**
- The wavelength is governed solely by the atomic transition energy $\\Delta E$ in the lamp:
  $$\\lambda = \\frac{h c}{n \\Delta E}$$
- Ambient room photons do not interact or change the energy levels of mercury or sodium vapor atoms.
- The refractive index of air $n \\approx 1.00029$ is unchanged. Therefore, **$\\lambda$ is 100% constant**.

### 2. What happens to Intensity & Contrast?
- **Absolute Diffracted Intensity**: The photons entering the telescope from the slit remain unchanged.
- **Ambient Stray Light & Contrast**:
  In a lit room, room light scatters into the telescope tube.
  $$\\text{Contrast} = \\frac{I_{\\text{spectral}} - I_{\\text{ambient}}}{I_{\\text{spectral}} + I_{\\text{ambient}}}$$
  - In a dark room: $I_{\\text{ambient}} \\approx 0 \\implies \\text{Contrast} \\approx 100\\%$.
  - In a bright room: $I_{\\text{ambient}}$ is high. Faint spectral lines (such as violet 404.7 nm or 2nd order spectra) are swamped by background glare.
- **Human Eye Adaptation**:
  In a light room, pupils constrict to $\\sim 2\\text{ mm}$ (photopic vision), reducing light entering the retina. In a dark room, pupils dilate to $\\sim 7\\text{ mm}$ (scotopic/mesopic vision), increasing retinal light gathering by **over 10-fold**!
      `
    },
    {
      id: "window-gap-vs-grating",
      badge: "Diffraction vs Slit Aperture",
      title: "What happens if we take a space like a 'Window Space Gap' in slides?",
      icon: <Layers className="w-5 h-5 text-rose-400" />,
      tagColor: "border-rose-500/30 bg-rose-500/10 text-rose-400",
      summary: "When slit width $a \\gg \\lambda$, diffraction angles shrink to $0.02^\\circ$. Light obeys straight-line geometric ray optics with zero visible rainbow dispersion.",
      answer: `
### The Ratio of Aperture Size to Wavelength ($a / \\lambda$):
The diffraction angle is determined by:
$$\\sin \\theta \\approx \\frac{\\lambda}{a}$$

- **Case 1: Macroscopic 'Window Space' Gap ($a = 2\\text{ mm} = 2 \\times 10^{-3}\\text{ m}$)**:
  $$\\sin \\theta \\approx \\frac{500 \\times 10^{-9}\\text{ m}}{2 \\times 10^{-3}\\text{ m}} = 0.00025 \\implies \\theta \\approx 0.014^\\circ$$
  The angle is so infinitesimal that light travels in straight geometric rays! You observe only a sharp shadow and a straight beam, with **zero perceptible rainbow dispersion**.
  
- **Case 2: Microscopic Diffraction Grating Slit ($a \\approx 1.6\\ \\mu\\text{m}$)**:
  $$\\sin \\theta \\approx \\frac{0.5\\ \\mu\\text{m}}{1.6\\ \\mu\\text{m}} = 0.3125 \\implies \\theta \\approx 18.2^\\circ!$$
  Because the aperture is comparable to the wavelength of light, wave crests fan out at wide angles, creating a large, easily measurable spectrum.

### The Grating Intensity Formula & Missing Orders:
The intensity pattern of a diffraction grating is:
$$I(\\theta) = I_0 \\left[ \\frac{\\sin \\alpha}{\\alpha} \\right]^2 \\left[ \\frac{\\sin(N\\beta)}{\\sin \\beta} \\right]^2$$
- If slit width $a$ equals opaque space $b$ ($d = a + b = 2a$):
  Whenever $d \\sin \\theta = m \\lambda$ and $a \\sin \\theta = p \\lambda$, we get $m = 2p$.
  This means orders $m = 2, 4, 6, \\dots$ fall exactly on the zero of the single-slit envelope: **the 2nd order spectrum disappears completely (Missing Orders)**!
      `
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col gap-4">
      <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
        <HelpCircle className="w-5 h-5 text-cyan-400" />
        <div>
          <h3 className="font-semibold text-base text-slate-100">
            Deep-Dive Physics & Answers to All Your Questions
          </h3>
          <p className="text-xs text-slate-400">
            Click on any question to explore the exact wave equations, physical proofs, and solid-state causes.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {DEEP_TOPICS.map((topic) => {
          const isOpen = openTopicId === topic.id;
          return (
            <div
              key={topic.id}
              className={`rounded-xl border transition-all overflow-hidden ${
                isOpen
                  ? "bg-slate-950/90 border-cyan-500/40 shadow-lg"
                  : "bg-slate-950/50 border-slate-800 hover:border-slate-700"
              }`}
            >
              <button
                onClick={() => setOpenTopicId(isOpen ? null : topic.id)}
                className="w-full p-4 text-left flex items-start justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0 mt-0.5">
                    {topic.icon}
                  </div>
                  <div>
                    <span className={`inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border mb-1 ${topic.tagColor}`}>
                      {topic.badge}
                    </span>
                    <h4 className="text-sm font-bold text-slate-100">
                      {topic.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {topic.summary}
                    </p>
                  </div>
                </div>

                <div className="text-slate-400 p-1">
                  {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed space-y-3 font-sans">
                  {topic.answer.split('\n\n').map((paragraph, pIdx) => {
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h5 key={pIdx} className="text-sm font-bold text-cyan-300 mt-3 mb-1">
                          {paragraph.replace('### ', '')}
                        </h5>
                      );
                    }
                    return (
                      <p key={pIdx} className="text-slate-300">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
