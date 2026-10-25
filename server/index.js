import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory lab reports database
let labReports = [
  {
    id: "sample-1",
    studentName: "Dr. C.V. Raman Physics Scholar",
    timestamp: new Date().toISOString(),
    source: "Mercury Vapor Lamp",
    gratingLinesPerInch: 15000,
    gratingN: 590551, // lines/m
    dataRows: [
      { color: "Violet 1", lambdaTheory: 404.7, v1Left: "138° 12'", v1Right: "165° 48'", twoTheta: "27° 36'", theta: 13.8, lambdaExp: 403.9, error: 0.2 },
      { color: "Blue", lambdaTheory: 435.8, v1Left: "137° 02'", v1Right: "166° 58'", twoTheta: "29° 56'", theta: 14.97, lambdaExp: 437.2, error: 0.32 },
      { color: "Green", lambdaTheory: 546.1, v1Left: "133° 10'", v1Right: "170° 50'", twoTheta: "37° 40'", theta: 18.83, lambdaExp: 546.4, error: 0.05 },
      { color: "Yellow 1", lambdaTheory: 577.0, v1Left: "132° 03'", v1Right: "171° 57'", twoTheta: "39° 54'", theta: 19.95, lambdaExp: 577.8, error: 0.14 }
    ],
    notes: "Normal incidence adjusted using reflection of slit onto crosswires. Dark room setting enabled high SNR for violet lines."
  }
];

// Spectral Lines Reference Database
const SPECTRAL_DATABASE = {
  mercury: {
    name: "Mercury (Hg) Arc Lamp",
    type: "atomic_emission",
    description: "Discrete, razor-sharp atomic emission lines resulting from quantized electronic transitions in vaporized Mercury atoms.",
    isContinuous: false,
    lines: [
      { name: "Violet 1", wavelength: 404.7, color: "#7B2CBF", intensity: 0.7, description: "Atomic transition 7³S₁ → 6³P₀" },
      { name: "Violet 2", wavelength: 407.8, color: "#6A040F", intensity: 0.3, description: "Atomic transition 7³S₁ → 6³P₁" },
      { name: "Blue-Violet", wavelength: 435.8, color: "#3A0CA3", intensity: 0.9, description: "Atomic transition 7³S₁ → 6³P₁ (Very Bright)" },
      { name: "Cyan/Blue", wavelength: 491.6, color: "#00F5D4", intensity: 0.2, description: "Faint transition line" },
      { name: "Green", wavelength: 546.1, color: "#06D6A0", intensity: 1.0, description: "Atomic transition 7³S₁ → 6³P₂ (Brightest Mercury Line)" },
      { name: "Yellow 1", wavelength: 577.0, color: "#FFD166", intensity: 0.85, description: "Atomic transition 6³D₂ → 6¹P₁" },
      { name: "Yellow 2", wavelength: 579.1, color: "#FFB703", intensity: 0.85, description: "Atomic transition 6¹D₂ → 6¹P₁ (Yellow Doublet Partner)" },
      { name: "Red (Faint)", wavelength: 623.4, color: "#EF476F", intensity: 0.2, description: "Higher state cascade transition" }
    ]
  },
  sodium: {
    name: "Sodium (Na) Vapor Lamp",
    type: "atomic_doublet",
    description: "The classic Fraunhofer D-line doublet. Demonstrates the extreme resolving power of a diffraction grating.",
    isContinuous: false,
    lines: [
      { name: "Sodium D₂", wavelength: 589.0, color: "#FFB700", intensity: 1.0, description: "Atomic transition 3p ²P₃/₂ → 3s ²S₁/₂" },
      { name: "Sodium D₁", wavelength: 589.6, color: "#FFA200", intensity: 0.5, description: "Atomic transition 3p ²P₁/₂ → 3s ²S₁/₂ (Fine structure spin-orbit split: 0.6 nm apart!)" }
    ]
  },
  laser_red: {
    name: "Helium-Neon / Diode Laser (Red)",
    type: "monochromatic_coherent",
    description: "Pure monochromatic, coherent stimulated emission at 632.8 nm (or 650 nm diode). Pinpoint high-intensity diffraction maxima.",
    isContinuous: false,
    lines: [
      { name: "He-Ne Red", wavelength: 632.8, color: "#FF0033", intensity: 1.0, description: "Coherent photon cascade (Ne 3s₂ → 2p₄)" }
    ]
  },
  laser_green: {
    name: "DPSS Green Laser",
    type: "monochromatic_coherent",
    description: "Frequency-doubled Nd:YAG laser emission at exactly 532.0 nm.",
    isContinuous: false,
    lines: [
      { name: "DPSS Green", wavelength: 532.0, color: "#00FF44", intensity: 1.0, description: "Second harmonic generation 1064nm → 532nm" }
    ]
  },
  white_light: {
    name: "Incandescent White Light / Sunlight",
    type: "continuous_blackbody",
    description: "Thermal blackbody radiation producing a continuous unbroken rainbow spectrum (VIBGYOR) spanning from 380 nm to 750 nm.",
    isContinuous: true,
    bands: [
      { name: "Violet", range: [380, 440], color: "#7928CA" },
      { name: "Indigo/Blue", range: [440, 490], color: "#0070F3" },
      { name: "Green", range: [490, 565], color: "#10B981" },
      { name: "Yellow", range: [565, 590], color: "#F59E0B" },
      { name: "Orange", range: [590, 625], color: "#F97316" },
      { name: "Red", range: [625, 750], color: "#EF4444" }
    ]
  },
  led_white: {
    name: "White LED (Blue Die + YAG Phosphor)",
    type: "semiconductor_phosphor_broadband",
    description: "Consists of an InGaN blue pump LED (~450 nm) coated with broad Ce:YAG phosphor. It emits a broad continuum rather than sharp atomic lines!",
    isContinuous: true,
    isLED: true,
    reasonWhyNoSharpLines: "Standard White LEDs do NOT have discrete atomic electron energy levels like Mercury or Sodium discharge tubes. Instead, electrons and holes recombine across a semiconductor solid-state bandgap (~20-40nm wide) and excite a phosphor coating that emits a continuous, broad bell-curve band (~120nm wide). Because there are no discrete, quantized atomic line transitions and the LED has a large emission surface without collimation, when viewed through a diffraction grating, you only see a faint, smeared continuous smear with no sharp lines to focus on or measure!",
    bands: [
      { name: "Blue GaN Peak", peak: 450, fwhm: 25, color: "#0055FF" },
      { name: "Phosphor Yellow Hump", peak: 560, fwhm: 110, color: "#EAB308" }
    ]
  }
};

// Physics Theory & Detailed Answers
const THEORY_TOPICS = [
  {
    id: "how-grating-works",
    title: "1. How a Diffraction Grating Actually Works",
    subtitle: "Multiple-slit interference and wavefront division",
    content: `
A diffraction grating is an optical component consisting of thousands of equidistant, parallel, microscopic rulings drawn on an optically flat glass or reflecting surface.
- The transparent slit width is denoted by **a**, and the opaque space between rulings is **b**.
- The sum **d = a + b** is called the **grating element** (or grating pitch).
- If there are **N** lines per meter, then **d = 1 / N**. For a typical lab grating with 15,000 lines per inch:
  d = 2.54 cm / 15,000 = 1.693 × 10⁻⁴ cm = 1.693 μm.

### The Mechanism of Diffraction:
1. **Huygens-Fresnel Secondary Wavelets**: When a parallel (collimated) plane wave strikes the grating, each microscopic slit acts as a coherent secondary emitter of cylindrical wavelets spreading out in all directions.
2. **Path Difference**: For waves diffracted at an angle **θ**, the optical path difference between corresponding rays from two consecutive slits is **Δx = d · sin θ**.
3. **Constructive Interference Condition**:
   **d · sin θ = m · λ**
   where **m** is an integer (0, ±1, ±2, ...) called the **order of diffraction**, and **λ** is the wavelength of light.
4. **Why Colors Separate (Dispersion)**:
   Since **sin θ = (m · λ) / d**, the angle of diffraction **θ** is directly proportional to wavelength **λ**.
   - Red light has the longest visible wavelength (~700 nm) → diffracted at the **largest angle**.
   - Violet light has the shortest visible wavelength (~400 nm) → diffracted at the **smallest angle**.
   - This is the exact opposite of a glass prism (where violet bends most due to refractive index dispersion dn/dλ)!
5. **Central Maxima (m = 0)**:
   At θ = 0°, sin θ = 0 for all wavelengths. Hence, for white light, all colors superimpose at the center to reproduce a sharp, white central image.
    `
  },
  {
    id: "spectrometer-settings-normal-incidence",
    title: "2. Spectrometer Settings & Normal Incidence: Why Does It Matter?",
    subtitle: "What happens if anything on the spectrometer is misaligned or tilted?",
    content: `
A spectrometer has three primary components: **Collimator**, **Prism/Grating Table**, and **Telescope**. Every single setting plays a crucial role in measurement accuracy:

### 1. Collimator Slit Adjustment:
- **Slit Width**: The slit must be positioned at the principal focal point of the achromatic collimator lens so that rays emerge strictly parallel.
  - *If the slit is too wide*: Each spectral line is an image of the slit. A wide slit causes broad rectangular images that blur and overlap adjacent wavelengths (loss of resolving power).
  - *If the slit is too narrow*: Light intensity drops drastically, and single-slit diffraction at the slit jaws spreads the beam vertically/horizontally, causing faint lines.

### 2. Telescope Adjustment:
- The telescope must be focused for parallel light (infinity) and the crosshairs positioned precisely in the focal plane of the eyepiece to eliminate **parallax error**.

### 3. Normal Incidence Adjustment (θᵢ = 0°):
In standard grating experiments, light from the collimator must strike the grating surface at **exactly 90° (perpendicular)**.
- **Why Normal Incidence is Essential**:
  When θᵢ = 0°, the standard grating formula is:
  **d · sin θ = m · λ**
  The diffraction angles on the left and right sides of the central image are perfectly symmetrical:
  **θ_left = θ_right = θ**
  By measuring both left and right vernier positions:
  **2θ = |Reading_Right - Reading_Left|**
  This completely eliminates spectrometer eccentricity and zero-offset errors!
- **What Happens If the Grating is Tilted (Oblique Incidence θᵢ ≠ 0°)?**:
  If the grating is tilted at an incident angle θᵢ, the grating equation becomes:
  **d(sin θᵢ ± sin θ_d) = m · λ**
  - The diffracted spectrum becomes **asymmetric**: the angles on the left and right will no longer match!
  - If you naively use the standard formula **λ = (d sin θ) / m**, your measured wavelength will be completely incorrect and skewed!
  - Furthermore, if the grating rulings are tilted vertically, the spectral lines tilt at an angle and drift out of the crosshairs as you rotate the telescope!
    `
  },
  {
    id: "dark-room-vs-light-room",
    title: "3. Dark Room vs Light Room: Does Wavelength Change?",
    subtitle: "The truth about ambient light, intensity, and human eye adaptation",
    content: `
Students frequently ask: *"If we perform this experiment in a brightly lit room, does the wavelength change? Does intensity increase or decrease?"*

### 1. Does Wavelength (λ) Change in a Light Room?
**NO! ABSOLUTELY NOT.**
- Wavelength is governed strictly by the energy states of the emitting atom:
  **λ = c / (n · ν) = (h · c) / (n · ΔE)**
- Ambient room lighting consists of independent, incoherent photons bouncing around the room. Photons do not collide or alter the quantum transition energy ΔE of the Mercury or Sodium lamp.
- The refractive index of air **n ≈ 1.00029** does not change with room lights on. Therefore, **λ is completely invariant**.

### 2. What Happens to Intensity & Visibility?
- **Actual Diffracted Beam Intensity**: The number of photons emitted by the lamp and focused through the telescope remains completely unchanged.
- **Ambient Light Noise (Stray Light)**:
  In a brightly lit room, stray room light enters the telescope tube, reflects off lenses, and illuminates the background field of view.
- **Signal-to-Noise Ratio (SNR) Plummets**:
  **Contrast Ratio = (I_spectral - I_ambient) / (I_spectral + I_ambient)**
  - In a dark room: **I_ambient ≈ 0**, so Contrast ≈ 1.0 (100% pure contrast).
  - In a bright room: **I_ambient** is large. Faint lines (like Mercury Violet 404.7 nm or 2nd order lines) have an intensity lower than the ambient glare, making them completely invisible!
- **Pupil Adaptation**:
  In a bright room, the human eye pupil constricts (photopic vision, ~2mm diameter), letting in ~10x fewer photons. In a darkened lab, the pupil dilates (~7mm diameter, scotopic/mesopic vision), boosting retinal sensitivity by over 1000-fold, allowing the observer to easily see faint spectral lines.
    `
  },
  {
    id: "window-space-vs-grating",
    title: "4. A 'Window Space Gap' vs Diffraction Grating: What Happens?",
    subtitle: "Diffraction envelope, macroscopic slits, and missing orders",
    content: `
What happens if instead of 15,000 microscopic lines per inch, we use a wide gap like a window space or macroscopic slit?

### 1. The Ratio of Slit Width to Wavelength (a / λ):
The diffraction angle θ is determined by:
**sin θ ≈ λ / a**
- Visible light wavelength **λ ≈ 500 nm = 5 × 10⁻⁷ m**.
- If slit width **a = 1 mm (0.001 m)** (a window-like slit):
  **sin θ ≈ (5 × 10⁻⁷) / (10⁻³) = 0.0005 radians ≈ 0.028°**.
  The diffraction angle is so tiny that all light travels in straight geometric rays! You see a sharp shadow and a straight beam, with zero perceptible rainbow dispersion!
- In a diffraction grating, **d ≈ 1.6 μm = 1.6 × 10⁻⁶ m**:
  **sin θ ≈ (5 × 10⁻⁷) / (1.6 × 10⁻⁶) = 0.3125 → θ ≈ 18.2°!**
  The dispersion is enormous, creating a wide, easily measurable spectrum.

### 2. The Exact Intensity Formula:
The intensity pattern of a diffraction grating is the product of two terms:
**I(θ) = I₀ · [ sin(α) / α ]² · [ sin(Nβ) / sin(β) ]²**
where:
- **α = (π · a / λ) · sin θ** is the **Single-Slit Diffraction Envelope** (governed by slit width a).
- **β = (π · d / λ) · sin θ** is the **N-Slit Interference Factor** (governed by grating pitch d = a + b).

### 3. Missing Orders (Absent Spectra):
If the slit width **a** and opaque space **b** satisfy **d = 2a** (i.e. a = b):
- Interference maxima occur at **d · sin θ = m · λ**.
- Diffraction minima occur at **a · sin θ = p · λ**.
- Dividing the two equations: **m / p = d / a = 2 → m = 2p**.
- This means order **m = 2, 4, 6...** falls exactly where the single-slit envelope is ZERO!
- Even though the grating equation predicts a 2nd order maximum, **it completely vanishes** because no light is diffracted into that direction!
    `
  },
  {
    id: "why-led-no-lines",
    title: "5. Why Does an LED Light Not Show Sharp Lines in a Spectrometer?",
    subtitle: "The solid-state physics of LEDs vs atomic discharge tubes",
    content: `
When students aim a spectrometer at an ordinary White or colored LED through a diffraction grating, they are often shocked to see either a faint, washed-out continuous blur or think the spectrometer 'is not showing anything'. Here is why:

### 1. Atomic Gas Discharge (Mercury/Sodium) vs Solid-State Semiconductor (LED):
- In a **Mercury or Sodium vapor lamp**, electrons exist in isolated, discrete gas atoms. When excited electrons jump between quantized Bohr energy levels (e.g., 7³S₁ → 6³P₂), they emit photons with an extraordinarily precise, single frequency. The natural line width is **< 0.01 nm**! Through a narrow spectrometer slit, these appear as needle-sharp, luminous vertical lines.
- In an **LED (Light Emitting Diode)**, light is generated inside a solid-state semiconductor crystal lattice (e.g., InGaN or AlGaInP). Electrons and holes exist in continuous energy **bands** (Conduction Band and Valence Band), not discrete atomic levels! Recombinations occur across a broad energy distribution with thermal broadening (**kT ≈ 26 meV**), producing an emission band with a Full-Width at Half-Maximum (FWHM) of **20 to 40 nm**!

### 2. The White LED Phosphor Mechanism:
Commercial white LEDs do not emit white light directly:
1. They use a **Blue InGaN chip** that emits a broad band around 450 nm.
2. The blue light passes through a **Cerium-doped YAG phosphor (Y₃Al₅O₁₂:Ce³⁺)** coating.
3. The phosphor absorbs some blue light and re-emits a broad, continuous fluorescent spectrum from **500 nm to 700 nm** (FWHM ~ 110 nm)!
When passed through a diffraction grating, this broad continuum creates a smeared, uniform, low-contrast glow across the entire field of view rather than sharp spectral lines.

### 3. Source Collimation & Geometry:
An LED has an epoxy dome lens and an extended emission chip area (~1 mm²). Unlike an optical slit placed at the focal point of a collimator lens, the LED acts as an extended, uncollimated diffuse source. The diffracted images of all points across the LED die overlap and wash out the contrast completely!
    `
  },
  {
    id: "vibgyor-determination",
    title: "6. Experimental Determination of VIBGYOR & Laser Wavelengths",
    subtitle: "Step-by-step laboratory method and vernier readings",
    content: `
### Step-by-Step Procedure to Measure Wavelength:
1. **Focusing**: Turn telescope toward a distant object outside and adjust rack-and-pinion till crosshairs and image are in sharp focus.
2. **Collimating**: Turn collimator toward the light source. Adjust slit width screw until a fine, bright slit is seen through telescope.
3. **Setting Normal Incidence**:
   - Turn grating table until the grating reflects the slit image back into the telescope crosswires.
   - Rotate prism table by exactly 90° so the grating face is perpendicular to the collimated incident beam.
4. **Measuring Left and Right Spectra**:
   - Rotate telescope to the left to find the 1st order spectrum (m = 1).
   - Align the vertical crosshair on the chosen spectral line (e.g., Green 546.1 nm).
   - Read Main Scale (MSR) and Vernier Scale (VSR) for Vernier 1 (V₁) and Vernier 2 (V₂). Let this reading be **θ_left**.
   - Rotate telescope across the central white image to the right 1st order spectrum.
   - Align the vertical crosshair on the exact same spectral line.
   - Read Vernier 1 and Vernier 2. Let this reading be **θ_right**.
5. **Calculating Wavelength**:
   - The total deviation angle between left and right spectral lines is:
     **2θ = |θ_right - θ_left|**
   - The diffraction angle is:
     **θ = (2θ) / 2**
   - Wavelength:
     **λ = (sin θ) / (N · m)**
     where **N** is the number of grating lines per meter, and **m = 1** for the first order.
    `
  }
];

// REST Endpoints
app.get('/api/spectral-data', (req, res) => {
  res.json({ success: true, data: SPECTRAL_DATABASE });
});

app.get('/api/theory', (req, res) => {
  res.json({ success: true, topics: THEORY_TOPICS });
});

app.post('/api/calculate-wavelength', (req, res) => {
  const { thetaDegrees, linesPerCm, order = 1, knownWavelength = 546.1 } = req.body;
  if (thetaDegrees === undefined || !linesPerCm) {
    return res.status(400).json({ error: "thetaDegrees and linesPerCm are required" });
  }

  // Grating element d = 1 / N (in cm) -> convert to nm
  const d_cm = 1 / linesPerCm;
  const d_nm = d_cm * 1e7; // 1 cm = 10^7 nm

  const thetaRad = (thetaDegrees * Math.PI) / 180;
  const calculatedLambda = (d_nm * Math.sin(thetaRad)) / order;
  const errorPercent = Math.abs((calculatedLambda - knownWavelength) / knownWavelength) * 100;

  res.json({
    success: true,
    d_nm: Number(d_nm.toFixed(2)),
    thetaDegrees: Number(thetaDegrees.toFixed(3)),
    calculatedLambda: Number(calculatedLambda.toFixed(2)),
    knownWavelength,
    errorPercent: Number(errorPercent.toFixed(2)),
    quality: errorPercent < 1.0 ? "Excellent Laboratory Precision (< 1% Error)" : errorPercent < 3.0 ? "Good Lab Accuracy" : "Moderate Alignment Deviation"
  });
});

app.get('/api/reports', (req, res) => {
  res.json({ success: true, reports: labReports });
});

app.post('/api/reports', (req, res) => {
  const newReport = {
    id: `report-${Date.now()}`,
    timestamp: new Date().toISOString(),
    ...req.body
  };
  labReports.unshift(newReport);
  res.json({ success: true, report: newReport });
});

// Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "How does the diffraction angle θ depend on wavelength λ in a diffraction grating?",
    options: [
      "θ is inversely proportional to λ (violet bends most)",
      "θ is directly proportional to λ (red bends most)",
      "θ is independent of wavelength",
      "Only the intensity changes, not the angle"
    ],
    correctAnswer: 1,
    explanation: "From the grating formula d·sin θ = m·λ, sin θ is directly proportional to λ. Therefore, red light (~700 nm) has a larger diffraction angle than violet light (~400 nm)."
  },
  {
    id: 2,
    question: "If we perform the diffraction grating experiment in a brightly lit room instead of a dark room, what happens to the wavelength of the spectral lines?",
    options: [
      "The wavelength increases due to ambient photon pressure",
      "The wavelength decreases because room light compresses wave crests",
      "The wavelength remains completely unchanged",
      "The wavelength shifts toward the yellow region"
    ],
    correctAnswer: 2,
    explanation: "Wavelength λ is an intrinsic quantum property determined by the atomic energy gap ΔE of the emitter and the refractive index of air. Ambient light does NOT change λ at all! Only visual contrast and SNR decrease."
  },
  {
    id: 3,
    question: "Why does an ordinary White LED not show sharp, distinct spectral lines when viewed through a spectrometer grating?",
    options: [
      "LED light has negative wavelength that cancels inside the grating",
      "LED emission is a broad solid-state bandgap and phosphor continuum, lacking sharp atomic energy transitions",
      "Diffraction gratings only work for gas lasers, never for LEDs",
      "The spectrometer telescope absorbs LED light completely"
    ],
    correctAnswer: 1,
    explanation: "Discharge lamps (Hg, Na) have isolated gas atoms that produce discrete atomic lines (<0.01 nm wide). LEDs emit via semiconductor band-to-band recombination and broad Ce:YAG phosphor fluorescence (~110 nm wide continuum), resulting in a continuous smear with no sharp lines."
  },
  {
    id: 4,
    question: "Why is 'Normal Incidence' (perpendicular incident beam) required in spectrometer measurements?",
    options: [
      "To ensure that the diffraction angles on the left and right are perfectly symmetrical (θ_left = θ_right)",
      "To prevent the grating from burning under high light intensity",
      "To make the light turn into polarized microwaves",
      "Normal incidence is only an aesthetic convention and doesn't change math"
    ],
    correctAnswer: 0,
    explanation: "At normal incidence (θᵢ = 0°), d·sin θ = m·λ gives identical diffraction angles on both sides. If tilted, d(sin θᵢ ± sin θ_d) = m·λ makes left and right orders asymmetrical and skews standard wavelength calculations."
  },
  {
    id: 5,
    question: "If the slit gap in a slide is widened to a macroscopic size like a window gap (e.g., 2 mm), what happens to visible diffraction?",
    options: [
      "The rainbow spectrum spreads across 180 degrees",
      "Diffraction angle becomes vanishingly small (θ ≈ 0.01°), behaving purely as straight geometric ray optics with no visible dispersion",
      "The light turns into coherent laser light",
      "The spectrum turns completely monochromatic green"
    ],
    correctAnswer: 1,
    explanation: "Diffraction requires slit width 'a' to be comparable to wavelength 'λ'. When a >> λ (millimeter window gap), sin θ ≈ λ/a ≈ 0, meaning light travels in straight lines according to geometric ray optics with zero perceptible rainbow dispersion."
  },
  {
    id: 6,
    question: "In a diffraction grating, what causes 'Missing Orders' (absent spectra)?",
    options: [
      "When an interference maximum coincides with a single-slit diffraction zero (d·sin θ = m·λ and a·sin θ = p·λ)",
      "When the telescope lens is dirty",
      "When the room temperature drops below 0°C",
      "When using a green laser instead of red"
    ],
    correctAnswer: 0,
    explanation: "Grating intensity is modulated by the single-slit diffraction envelope. If an interference maximum occurs at the exact angle where the single-slit envelope reaches zero intensity (m = d/a · p), that entire order disappears!"
  }
];

app.get('/api/quiz', (req, res) => {
  res.json({ success: true, questions: QUIZ_QUESTIONS });
});

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

app.use(express.static(distPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Diffraction Spectrometer backend server running on http://localhost:${PORT}`);
});
