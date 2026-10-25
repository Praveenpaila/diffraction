import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RefreshCw, Sparkles, HelpCircle } from 'lucide-react';
import { soundFX } from '../audio/soundEffects';

const QUESTIONS = [
  {
    id: 1,
    question: "In a diffraction grating, how does the diffraction angle θ vary with the wavelength of light λ?",
    options: [
      "θ is inversely proportional to λ (violet bends furthest)",
      "θ is directly proportional to λ (red bends furthest)",
      "θ does not depend on wavelength",
      "Only the brightness changes, not the angle"
    ],
    correct: 1,
    explanation: "From the grating equation d·sin θ = m·λ, sin θ is directly proportional to λ. Because Red (~700 nm) has a longer wavelength than Violet (~400 nm), Red bends at a larger diffraction angle!"
  },
  {
    id: 2,
    question: "If this experiment is conducted in a brightly illuminated daylight room instead of a dark room, what happens to the wavelength of the spectral lines?",
    options: [
      "The wavelength increases due to ambient photon energy",
      "The wavelength decreases because room light compresses wavefronts",
      "The wavelength remains 100% unchanged",
      "All colors shift toward yellow"
    ],
    correct: 2,
    explanation: "Wavelength λ is an invariant quantum property determined by the atomic energy levels (ΔE) of the emitter and the index of refraction of air. Ambient light cannot alter λ. Only visibility and contrast decrease due to background glare!"
  },
  {
    id: 3,
    question: "Why does an ordinary White LED not show sharp, distinct spectral lines through a diffraction grating?",
    options: [
      "LED light has zero frequency",
      "LED emission comes from continuous semiconductor bandgaps and broad Ce:YAG phosphor fluorescence (~110nm continuum), lacking discrete atomic transitions",
      "Spectrometers only work for gas discharge tubes, never for semiconductors",
      "The grating absorbs LED light completely"
    ],
    correct: 1,
    explanation: "Mercury/Sodium lamps have isolated gas atoms that produce discrete atomic lines (<0.01 nm wide). LEDs emit via semiconductor band-to-band recombination and broad phosphor fluorescence, resulting in a continuous, smeared glow with no sharp lines to focus on."
  },
  {
    id: 4,
    question: "Why is 'Normal Incidence' (incident beam perpendicular to grating face) essential in standard spectrometer experiments?",
    options: [
      "It ensures that the diffraction angles on the left and right sides are perfectly symmetrical (θ_left = θ_right)",
      "To prevent the grating glass from overheating",
      "To polarize the beam into microwaves",
      "Normal incidence is only an aesthetic preference"
    ],
    correct: 0,
    explanation: "At normal incidence (θᵢ = 0°), d·sin θ = m·λ ensures identical angles on both sides. If tilted, d(sin θᵢ ± sin θ_d) = m·λ makes left and right orders asymmetric and introduces errors in standard wavelength formulas."
  },
  {
    id: 5,
    question: "If we widen the slit gap in slides to a macroscopic size like a window space (e.g., 2 mm), what happens to visible diffraction?",
    options: [
      "The rainbow dispersion spreads across 360 degrees",
      "Diffraction angle shrinks to an imperceptible ~0.01°, behaving purely as straight geometric ray optics with no visible rainbow",
      "The light turns into coherent green laser light",
      "All wavelengths disappear into darkness"
    ],
    correct: 1,
    explanation: "Diffraction requires slit width 'a' to be comparable to wavelength 'λ'. When a >> λ (macroscopic window gap), sin θ ≈ λ/a ≈ 0, so light travels in straight geometric lines without visible dispersion!"
  }
];

export default function QuizSection() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx, optIdx) => {
    if (submitted) return;
    soundFX.playVernierTick();
    setSelectedAnswers({
      ...selectedAnswers,
      [qIdx]: optIdx
    });
  };

  const handleSubmit = () => {
    soundFX.playSuccessChime();
    setSubmitted(true);
  };

  const handleReset = () => {
    soundFX.playSwitchClick();
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = Object.keys(selectedAnswers).reduce((acc, qIdx) => {
    return acc + (selectedAnswers[qIdx] === QUESTIONS[qIdx].correct ? 1 : 0);
  }, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <Award className="w-5 h-5 text-amber-400" />
          <div>
            <h3 className="font-semibold text-base text-slate-100">
              Diffraction & Optics Mastery Quiz
            </h3>
            <p className="text-xs text-slate-400">
              Test your understanding of diffraction grating physics, normal incidence, LEDs, and ambient lighting.
            </p>
          </div>
        </div>

        {submitted && (
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400">Score:</span>
            <span className="font-mono text-sm font-bold text-cyan-400">
              {score} / {QUESTIONS.length}
            </span>
            <button
              onClick={handleReset}
              className="ml-2 text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" /> Retry
            </button>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="flex flex-col gap-4">
        {QUESTIONS.map((q, qIdx) => {
          const selected = selectedAnswers[qIdx];
          const isCorrect = selected === q.correct;

          return (
            <div
              key={q.id}
              className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col gap-3"
            >
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md mt-0.5">
                  Q{qIdx + 1}
                </span>
                <h4 className="text-xs font-semibold text-slate-200 leading-snug">
                  {q.question}
                </h4>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => {
                  let btnStyle = "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";

                  if (selected === optIdx) {
                    btnStyle = "bg-cyan-500/10 border-cyan-500 text-cyan-300 ring-1 ring-cyan-500";
                  }

                  if (submitted) {
                    if (optIdx === q.correct) {
                      btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 ring-1 ring-emerald-500 font-semibold";
                    } else if (selected === optIdx) {
                      btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={submitted}
                      onClick={() => handleSelect(qIdx, optIdx)}
                      className={`p-2.5 rounded-xl text-left text-xs border transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && optIdx === q.correct && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />
                      )}
                      {submitted && selected === optIdx && optIdx !== q.correct && (
                        <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submit */}
              {submitted && (
                <div className={`text-xs p-2.5 rounded-xl border ${
                  isCorrect
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                    : "bg-slate-900 border-slate-800 text-slate-300"
                }`}>
                  <span className="font-semibold">{isCorrect ? "Correct! " : "Explanation: "}</span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit Button */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={Object.keys(selectedAnswers).length < QUESTIONS.length}
          className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg ${
            Object.keys(selectedAnswers).length === QUESTIONS.length
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 cursor-pointer"
              : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50"
          }`}
        >
          {Object.keys(selectedAnswers).length === QUESTIONS.length
            ? "Submit Answers & View Score"
            : `Answer All Questions (${Object.keys(selectedAnswers).length}/${QUESTIONS.length})`}
        </button>
      )}
    </div>
  );
}
