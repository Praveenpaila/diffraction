/**
 * Diffraction Grating & Spectrometer Physics Engine
 * Contains rigorous wave-optics mathematical equations, 
 * CIE wavelength-to-RGB conversion, vernier scale calculations,
 * and ambient lighting models.
 */

// Accurate conversion of wavelength (nm) to RGB with human eye sensitivity (photopic curve)
export function wavelengthToRGB(wavelength, intensity = 1.0) {
  let r = 0, g = 0, b = 0;

  if (wavelength >= 380 && wavelength < 440) {
    r = -(wavelength - 440) / (440 - 380);
    g = 0.0;
    b = 1.0;
  } else if (wavelength >= 440 && wavelength < 490) {
    r = 0.0;
    g = (wavelength - 440) / (490 - 440);
    b = 1.0;
  } else if (wavelength >= 490 && wavelength < 510) {
    r = 0.0;
    g = 1.0;
    b = -(wavelength - 510) / (510 - 490);
  } else if (wavelength >= 510 && wavelength < 580) {
    r = (wavelength - 510) / (580 - 510);
    g = 1.0;
    b = 0.0;
  } else if (wavelength >= 580 && wavelength < 645) {
    r = 1.0;
    g = -(wavelength - 645) / (645 - 580);
    b = 0.0;
  } else if (wavelength >= 645 && wavelength <= 780) {
    r = 1.0;
    g = 0.0;
    b = 0.0;
  }

  // Vision attenuation factor at extremes of visible spectrum
  let factor = 0.0;
  if (wavelength >= 380 && wavelength < 420) {
    factor = 0.3 + (0.7 * (wavelength - 380)) / (420 - 380);
  } else if (wavelength >= 420 && wavelength < 700) {
    factor = 1.0;
  } else if (wavelength >= 700 && wavelength <= 780) {
    factor = 0.3 + (0.7 * (780 - wavelength)) / (780 - 700);
  }

  const gamma = 0.8;
  const adjust = (color) =>
    color === 0 ? 0 : Math.round(255 * Math.pow(color * factor * intensity, gamma));

  return {
    r: adjust(r),
    g: adjust(g),
    b: adjust(b),
    css: `rgb(${adjust(r)}, ${adjust(g)}, ${adjust(b)})`,
    rgba: (alpha = 1.0) => `rgba(${adjust(r)}, ${adjust(g)}, ${adjust(b)}, ${alpha})`
  };
}

// Convert Lines per cm or Lines per inch to grating pitch (d) in nanometers
export function getGratingPitchNm(linesPerCm) {
  // 1 cm = 10,000,000 nm
  return 10000000 / linesPerCm;
}

// Compute diffraction angle θ (in degrees)
// At normal incidence: d * sin(θ) = m * λ
// At tilted / oblique incidence: d * (sin(θ) - sin(θ_i)) = m * λ  => sin(θ) = sin(θ_i) + (m * λ / d)
export function calculateDiffractionAngle(wavelengthNm, linesPerCm, order = 1, tiltAngleDeg = 0) {
  const d_nm = getGratingPitchNm(linesPerCm);
  const theta_i_rad = (tiltAngleDeg * Math.PI) / 180;

  // sin(theta_diffracted) = sin(theta_incident) + (m * lambda / d)
  const sinDiffracted = Math.sin(theta_i_rad) + (order * wavelengthNm) / d_nm;

  if (Math.abs(sinDiffracted) > 1.0) {
    return null; // Physically impossible (beyond 90 degrees)
  }

  const angleRad = Math.asin(sinDiffracted);
  const angleDeg = (angleRad * 180) / Math.PI;

  return {
    angleDeg: angleDeg,
    angleRad: angleRad,
    d_nm: d_nm,
    deviationFromIncident: angleDeg - tiltAngleDeg
  };
}

// Full Multiple-Slit Diffraction & Interference Intensity
// I(θ) = I_0 * [sin(α)/α]^2 * [sin(N*β)/sin(β)]^2
export function calculateIntensityPattern(thetaDeg, wavelengthNm, slitWidthUm, gratingPitchUm, numSlits = 30) {
  const thetaRad = (thetaDeg * Math.PI) / 180;
  const lambdaUm = wavelengthNm / 1000;

  const sinTheta = Math.sin(thetaRad);

  // Single-slit diffraction factor: alpha = (pi * a / lambda) * sin(theta)
  const alpha = (Math.PI * slitWidthUm / lambdaUm) * sinTheta;
  let diffractionTerm = 1.0;
  if (Math.abs(alpha) > 1e-6) {
    diffractionTerm = Math.pow(Math.sin(alpha) / alpha, 2);
  }

  // Multiple-slit interference factor: beta = (pi * d / lambda) * sin(theta)
  const beta = (Math.PI * gratingPitchUm / lambdaUm) * sinTheta;
  let interferenceTerm = 1.0;
  if (Math.abs(Math.sin(beta)) > 1e-6) {
    interferenceTerm = Math.pow(Math.sin(numSlits * beta) / Math.sin(beta), 2) / (numSlits * numSlits);
  } else {
    // When beta is integer multiple of pi, sin(N*beta)/sin(beta) -> N
    interferenceTerm = 1.0;
  }

  return diffractionTerm * interferenceTerm;
}

// Convert decimal degrees into Spectrometer Vernier Reading:
// Main scale division (MSD) = 0.5° = 30 minutes
// Vernier scale divisions (VSD) = 30 divisions corresponding to 29 MSD => Least Count = 1 minute (1')
export function decimalToVernier(decimalDeg) {
  // Normalize to 0 - 360
  let norm = decimalDeg % 360;
  if (norm < 0) norm += 360;

  const totalMinutes = norm * 60;
  const degrees = Math.floor(norm);
  const remMinutes = totalMinutes - degrees * 60;

  // Main Scale reads in half-degrees (0' or 30')
  const msrHalfDeg = remMinutes >= 30 ? 30 : 0;
  const msrDegrees = degrees;

  // Vernier Scale reads the remaining minutes (0 to 29)
  const vsrMinutes = Math.round(remMinutes - msrHalfDeg);

  const formattedMSR = `${msrDegrees}° ${msrHalfDeg === 30 ? "30'" : "00'"}`;
  const formattedVSR = `${vsrMinutes}'`;
  const totalFormatted = `${degrees}° ${Math.round(remMinutes)}'`;

  return {
    rawDecimal: norm,
    degrees,
    msrDegrees,
    msrMinutes: msrHalfDeg,
    vsrMinutes,
    totalMinutes: Math.round(remMinutes),
    formattedMSR,
    formattedVSR,
    totalFormatted
  };
}

// Ambient lighting model: Computes contrast and eye pupil constriction
export function getAmbientLightingEffect(ambientLux) {
  // ambientLux ranges from 0 (pitch dark room) to 1000 (bright sunlight/fluorescent room)
  // Human pupil diameter (mm) based on Crawford & Reeves formula
  const logLux = Math.log10(Math.max(ambientLux, 0.01));
  const pupilDiameterMm = Math.max(2.0, Math.min(7.5, 5.0 - 1.5 * Math.tanh(0.5 * (logLux - 1.5))));

  // Normalized pupil light intake relative to fully dilated dark pupil
  const pupilIntake = Math.pow(pupilDiameterMm / 7.5, 2);

  // Background stray light glare inside the telescope
  const strayLightGlare = (ambientLux / 1000) * 0.85;

  // Signal to Noise Ratio modifier
  const contrastRatio = 1 / (1 + (ambientLux / 15));

  return {
    pupilDiameterMm: Number(pupilDiameterMm.toFixed(2)),
    pupilIntake: Number(pupilIntake.toFixed(2)),
    strayLightGlare: Number(strayLightGlare.toFixed(3)),
    contrastRatio: Number(contrastRatio.toFixed(3)),
    isDarkRoom: ambientLux < 20,
    roomDescription:
      ambientLux < 10
        ? "Darkened Physics Lab (Ideal - Max SNR & Dilated Pupils)"
        : ambientLux < 150
        ? "Dim Lab Room (Good contrast for bright green/yellow, violet faint)"
        : "Bright Daylight Room (Severe Glare - Violet & Faint Orders Washed Out!)"
  };
}

// LED Emission Spectrum Model (Broadband continuum + Phosphor vs Atomic Line)
export function getLEDWavelengthIntensity(wavelengthNm) {
  // 1. Blue GaN pump peak at 450 nm, FWHM ~ 25 nm (Gaussian)
  const bluePeak = 450;
  const blueSigma = 12;
  const blueIntensity = 0.9 * Math.exp(-Math.pow(wavelengthNm - bluePeak, 2) / (2 * Math.pow(blueSigma, 2)));

  // 2. Yellow-green Ce:YAG phosphor broad hump centered around 560 nm, FWHM ~ 110 nm
  const phosphorPeak = 560;
  const phosphorSigma = 48;
  const phosphorIntensity = 0.75 * Math.exp(-Math.pow(wavelengthNm - phosphorPeak, 2) / (2 * Math.pow(phosphorSigma, 2)));

  // Cyan dip around 480-490 nm is typical of white LEDs!
  return Math.max(0, blueIntensity + phosphorIntensity);
}

// Light source presets
export const LIGHT_SOURCES = [
  {
    id: "mercury",
    name: "Mercury (Hg) Arc Lamp",
    tag: "Atomic Emission",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    description: "Discrete, razor-sharp atomic emission lines from quantized electron jumps in Hg gas.",
    lines: [
      { name: "Violet 1", lambda: 404.7, intensity: 0.65, hex: "#8A2BE2" },
      { name: "Violet 2", lambda: 407.8, intensity: 0.35, hex: "#7B1FA2" },
      { name: "Blue-Violet", lambda: 435.8, intensity: 0.95, hex: "#3D5AFE" },
      { name: "Cyan", lambda: 491.6, intensity: 0.25, hex: "#00E5FF" },
      { name: "Green (Brightest)", lambda: 546.1, intensity: 1.0, hex: "#00E676" },
      { name: "Yellow 1", lambda: 577.0, intensity: 0.85, hex: "#FFEA00" },
      { name: "Yellow 2", lambda: 579.1, intensity: 0.85, hex: "#FFD600" }
    ]
  },
  {
    id: "sodium",
    name: "Sodium (Na) Vapor Lamp",
    tag: "Classic Doublet",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    description: "Famous yellow Fraunhofer D-line doublet (589.0 nm & 589.6 nm), testing grating resolving power.",
    lines: [
      { name: "Sodium D₂", lambda: 589.0, intensity: 1.0, hex: "#FFB300" },
      { name: "Sodium D₁", lambda: 589.6, intensity: 0.6, hex: "#FFA000" }
    ]
  },
  {
    id: "laser_red",
    name: "He-Ne Red Laser (632.8 nm)",
    tag: "Monochromatic Coherent",
    badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    description: "Single monochromatic coherent beam. Yields needle-point intense diffraction maxima.",
    lines: [
      { name: "He-Ne Red Laser", lambda: 632.8, intensity: 1.0, hex: "#FF1744" }
    ]
  },
  {
    id: "laser_green",
    name: "DPSS Green Laser (532.0 nm)",
    tag: "Monochromatic Coherent",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/30",
    description: "Frequency-doubled Nd:YAG laser beam at exactly 532.0 nm.",
    lines: [
      { name: "DPSS Green Laser", lambda: 532.0, intensity: 1.0, hex: "#00E676" }
    ]
  },
  {
    id: "white_light",
    name: "Incandescent White Light",
    tag: "Continuous VIBGYOR",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    description: "Thermal blackbody emitter producing an unbroken, magnificent continuous rainbow spectrum.",
    isContinuous: true
  },
  {
    id: "led_white",
    name: "Commercial White LED",
    tag: "Phosphor Broadband",
    badgeColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    description: "Blue GaN die + broad Ce:YAG phosphor. Shows continuous broad smear rather than sharp lines!",
    isContinuous: true,
    isLED: true
  }
];

// Grating presets (Lines per cm and Lines per inch)
export const GRATING_PRESETS = [
  { id: "15000_lpi", name: "15,000 Lines / Inch (Lab Standard)", linesPerInch: 15000, linesPerCm: 5905.5, pitchNm: 1693.3 },
  { id: "2500_lpi", name: "2,500 Lines / Inch (Coarse Grating)", linesPerInch: 2500, linesPerCm: 984.25, pitchNm: 10160 },
  { id: "600_lpmm", name: "600 Lines / mm (High Dispersion)", linesPerInch: 15240, linesPerCm: 6000, pitchNm: 1666.7 },
  { id: "300_lpmm", name: "300 Lines / mm (Dual Order)", linesPerInch: 7620, linesPerCm: 3000, pitchNm: 3333.3 }
];
