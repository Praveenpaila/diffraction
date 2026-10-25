import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Sun, Moon, Volume2, Smile, ArrowRight, Heart, Star, Compass, Play, Pause } from 'lucide-react';
import { soundFX } from '../audio/soundEffects';

export default function KidsMode() {
  const [activeStorySlide, setActiveStorySlide] = useState(0);
  const [kidRoomDark, setKidRoomDark] = useState(true);
  const [waveSize, setWaveSize] = useState(2); // 1 = tiny (violet), 3 = long (red)
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const animTimeRef = useRef(0);

  const STORY_CHAPTERS = [
    {
      title: "1. The White Light Secret: A Hidden Rainbow Family!",
      icon: "🌈",
      badge: "The Big Mystery",
      text: "Did you know that plain white sunlight or lamp light is not really white at all? It is secretly a parade of 7 colorful energetic photon friends holding hands: Violet, Indigo, Blue, Green, Yellow, Orange, and Red (VIBGYOR)!"
    },
    {
      title: "2. The Magic Fence: A Diffraction Grating!",
      icon: "🚪",
      badge: "The Super Slits",
      text: "A diffraction grating looks like a plain piece of glass, but under a super microscope, it has 15,000 tiny microscopic gates in every single inch! When the light waves hit these gates, they have to squeeze through!"
    },
    {
      title: "3. Long Strides vs Tiny Hops: Why Red Bends Most!",
      icon: "🏃‍♂️",
      badge: "Wave Magic",
      text: "Red waves have LONG giant strides (~700 nm) — like a tall giant taking huge steps, so they get pushed far away to the sides! Violet waves have TINY high-speed wiggles (~400 nm), so they stay close to the middle!"
    },
    {
      title: "4. Why Turn Off the Room Lights? The Star Mystery!",
      icon: "✨",
      badge: "Dark Room Secret",
      text: "Why do scientists do this in a pitch dark room? Does the light change? NO! The rainbow stays exactly the same. But just like you cannot see stars during a sunny afternoon, a bright light room washes out the delicate violet sparkles!"
    },
    {
      title: "5. Why Does a White LED Not Show Sharp Lines?",
      icon: "💡",
      badge: "The Smoothie Secret",
      text: "A Mercury lamp shoots pure, single musical notes of light (sharp lines). But an LED is like a blended fruit smoothie covered in yellow phosphor dust! All colors are smeared together, so you see a soft glowing blur instead of sharp razor lines!"
    }
  ];

  // Kids Fun Wave Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      const t = animTimeRef.current;

      // Room background (Dark lab vs Bright room)
      ctx.fillStyle = kidRoomDark ? '#0A0D1A' : '#E2E8F0';
      ctx.fillRect(0, 0, w, h);

      const fenceX = w * 0.35;
      const centerY = h / 2;

      // 1. Draw Incoming Light Beam / Photon Characters
      ctx.fillStyle = kidRoomDark ? '#FFFFFF' : '#475569';
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.fillText('White Light Wavefronts', 20, 30);

      // Incoming wave bars
      for (let x = 20; x < fenceX; x += 30) {
        const cx = (x + t * 2) % (fenceX - 20) + 20;
        ctx.strokeStyle = kidRoomDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(71, 85, 105, 0.5)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, 40);
        ctx.lineTo(cx, h - 40);
        ctx.stroke();

        // Draw cute smiling photons riding waves
        ctx.fillStyle = '#FFD166';
        ctx.beginPath();
        ctx.arc(cx, centerY + Math.sin(t * 0.1 + cx * 0.05) * 40, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw The Microscopic Fence (Grating)
      ctx.fillStyle = kidRoomDark ? '#1E293B' : '#94A3B8';
      ctx.fillRect(fenceX - 6, 20, 12, h - 40);

      const slitCount = 5;
      const slitGap = 35;
      const firstY = centerY - ((slitCount - 1) * slitGap) / 2;
      const slitCenters = [];

      for (let i = 0; i < slitCount; i++) {
        const sy = firstY + i * slitGap;
        slitCenters.push(sy);
        // Clear slit gap
        ctx.clearRect(fenceX - 8, sy - 8, 16, 16);
        ctx.fillStyle = '#06B6D4';
        ctx.fillRect(fenceX - 2, sy - 8, 4, 16);
      }

      // 3. Diffracted Fanned Rainbow Waves Emerging
      const colors = [
        { name: "Violet", color: "#8B5CF6", angle: 0.18, speed: 2.8 },
        { name: "Blue", color: "#3B82F6", angle: 0.25, speed: 2.6 },
        { name: "Green", color: "#10B981", angle: 0.33, speed: 2.4 },
        { name: "Yellow", color: "#FBBF24", angle: 0.42, speed: 2.2 },
        { name: "Red", color: "#EF4444", angle: 0.52, speed: 2.0 }
      ];

      const len = w - fenceX - 30;

      colors.forEach((c) => {
        // Draw top order (+1)
        const topEndX = fenceX + Math.cos(c.angle) * len;
        const topEndY = centerY - Math.sin(c.angle) * len;

        // Bottom order (-1)
        const botEndX = fenceX + Math.cos(c.angle) * len;
        const botEndY = centerY + Math.sin(c.angle) * len;

        const rayAlpha = kidRoomDark ? 0.9 : 0.35; // Daylight washes out colors!

        // Glowing rays
        ctx.strokeStyle = c.color;
        ctx.lineWidth = 4;
        ctx.globalAlpha = rayAlpha;

        ctx.beginPath();
        ctx.moveTo(fenceX, centerY);
        ctx.lineTo(topEndX, topEndY);
        ctx.moveTo(fenceX, centerY);
        ctx.lineTo(botEndX, botEndY);
        ctx.stroke();

        // Pulsing photon characters dancing along diffracted rays
        const progress = (t * 0.02 * c.speed) % 1.0;
        const px = fenceX + (topEndX - fenceX) * progress;
        const py = centerY + (topEndY - centerY) * progress;

        ctx.fillStyle = c.color;
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fill();

        // Cute labels
        ctx.fillStyle = kidRoomDark ? '#FFFFFF' : '#0F172A';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillText(c.name, topEndX + 5, topEndY + 4);
      });

      // Zeroth-order central white ray
      ctx.strokeStyle = kidRoomDark ? '#FFFFFF' : '#475569';
      ctx.lineWidth = 4;
      ctx.globalAlpha = kidRoomDark ? 1.0 : 0.6;
      ctx.beginPath();
      ctx.moveTo(fenceX, centerY);
      ctx.lineTo(w - 30, centerY);
      ctx.stroke();

      ctx.fillStyle = kidRoomDark ? '#FFFFFF' : '#0F172A';
      ctx.fillText('Central White Beam', w - 140, centerY - 8);

      ctx.globalAlpha = 1.0;

      if (!kidRoomDark) {
        ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.fillText('☀️ Room Lights ON: Look how faint and washed out the rainbow gets!', 20, h - 20);
      } else {
        ctx.fillStyle = 'rgba(16, 185, 129, 0.9)';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.fillText('🌙 Dark Room: The rainbow sparkles bright like glowing neon lights!', 20, h - 20);
      }

      if (isPlaying) {
        animTimeRef.current += 1;
      }
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [kidRoomDark, isPlaying]);

  return (
    <div className="bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl flex flex-col gap-6">
      {/* Playful Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center text-2xl shadow-lg shadow-rose-500/20">
            🌈
          </div>
          <div>
            <h2 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-rose-400">
              The Magical Rainbow Machine!
            </h2>
            <p className="text-xs text-indigo-300 font-medium">
              Made especially so kids, parents, and curious minds can see and understand how light splits!
            </p>
          </div>
        </div>

        {/* Room Light Fun Switch */}
        <button
          onClick={() => {
            soundFX.playSwitchClick();
            setKidRoomDark(!kidRoomDark);
          }}
          className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg ${
            kidRoomDark
              ? 'bg-indigo-600 text-white shadow-indigo-500/30 ring-2 ring-indigo-400'
              : 'bg-amber-400 text-slate-950 shadow-amber-400/30 ring-2 ring-amber-300'
          }`}
        >
          {kidRoomDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          {kidRoomDark ? "Click: Turn On Bedroom Lights" : "Click: Turn Off Bedroom Lights"}
        </button>
      </div>

      {/* 3D Animated Storybook Canvas */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-500/30 bg-black aspect-[16/9] max-h-[360px] shadow-2xl">
        <canvas ref={canvasRef} width={800} height={400} className="w-full h-full block" />

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-cyan-400 hover:bg-slate-800 transition-all cursor-pointer"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Interactive Story Cards Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {STORY_CHAPTERS.map((chap, idx) => {
          const isActive = activeStorySlide === idx;
          return (
            <button
              key={idx}
              onClick={() => {
                soundFX.playVernierTick();
                setActiveStorySlide(idx);
              }}
              className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-indigo-600/30 border-cyan-400 ring-2 ring-cyan-400 shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60'
              }`}
            >
              <div>
                <div className="text-2xl mb-1">{chap.icon}</div>
                <div className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                  {chap.badge}
                </div>
                <div className="text-xs font-bold text-slate-100 mt-0.5 line-clamp-2">
                  {chap.title.split(':')[0]}
                </div>
              </div>
              <div className="text-[11px] text-slate-400 mt-2 font-medium">
                Step {idx + 1} of 5
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Story Card Detailed Explanation */}
      <div className="bg-slate-950/90 border border-indigo-500/20 rounded-2xl p-5 shadow-inner">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{STORY_CHAPTERS[activeStorySlide].icon}</span>
          <h3 className="text-base font-bold text-cyan-300">
            {STORY_CHAPTERS[activeStorySlide].title}
          </h3>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-sans">
          {STORY_CHAPTERS[activeStorySlide].text}
        </p>
      </div>
    </div>
  );
}
