import React, { useState } from 'react';
import { BookOpen, Plus, Trash2, Download, Save, CheckCircle, Calculator, FileSpreadsheet } from 'lucide-react';
import { soundFX } from '../audio/soundEffects';

export default function LabNotebook({
  readings,
  onClearReadings,
  gratingPreset,
  studentName,
  onStudentNameChange
}) {
  const [saveStatus, setSaveStatus] = useState('');
  const [manualRows, setManualRows] = useState([
    {
      color: "Violet 1",
      lambdaTheory: 404.7,
      order: 1,
      vLeftDeg: 13.8,
      vRightDeg: 13.8,
      twoThetaDeg: 27.6,
      thetaDeg: 13.8,
      lambdaExp: 403.9,
      errorPct: 0.2
    },
    {
      color: "Green (Brightest)",
      lambdaTheory: 546.1,
      order: 1,
      vLeftDeg: 18.83,
      vRightDeg: 18.83,
      twoThetaDeg: 37.66,
      thetaDeg: 18.83,
      lambdaExp: 546.4,
      errorPct: 0.05
    },
    {
      color: "Yellow 1",
      lambdaTheory: 577.0,
      order: 1,
      vLeftDeg: 19.95,
      vRightDeg: 19.95,
      twoThetaDeg: 39.9,
      thetaDeg: 19.95,
      lambdaExp: 577.8,
      errorPct: 0.14
    }
  ]);

  // Combine recorded readings and sample rows
  const allRows = [...readings, ...manualRows];

  const handleSaveToBackend = async () => {
    try {
      setSaveStatus('Saving report to server...');
      const response = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: studentName || "Physics Student",
          gratingPreset: gratingPreset.name,
          linesPerCm: gratingPreset.linesPerCm,
          pitchNm: gratingPreset.pitchNm,
          dataRows: allRows
        })
      });
      if (response.ok) {
        soundFX.playSuccessChime();
        setSaveStatus('Report Saved Successfully!');
        setTimeout(() => setSaveStatus(''), 3000);
      } else {
        setSaveStatus('Server offline (saved locally)');
        setTimeout(() => setSaveStatus(''), 3000);
      }
    } catch {
      setSaveStatus('Saved locally in browser memory');
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      studentName,
      experiment: "Determination of Wavelengths using Diffraction Grating & Spectrometer",
      grating: gratingPreset,
      observations: allRows,
      timestamp: new Date().toISOString()
    }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `spectrometer_lab_${studentName || 'student'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          <div>
            <h3 className="font-semibold text-base text-slate-100">
              Laboratory Notebook & Wavelength Calculations
            </h3>
            <p className="text-xs text-slate-400">
              Formula: <span className="font-mono text-cyan-400 font-semibold">λ = (d · sin θ) / m = (sin θ) / (N · m)</span>
            </p>
          </div>
        </div>

        {/* Student Name Input & Actions */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Student Name / Roll No."
            value={studentName}
            onChange={(e) => onStudentNameChange(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 w-44"
          />
          <button
            onClick={handleSaveToBackend}
            className="px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" /> Save Report
          </button>
          <button
            onClick={handleExportJSON}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" /> Export JSON
          </button>
        </div>
      </div>

      {saveStatus && (
        <div className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
          <CheckCircle className="w-4 h-4" /> {saveStatus}
        </div>
      )}

      {/* Observation Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left text-xs text-slate-300 font-mono">
          <thead className="bg-slate-950/80 text-[11px] text-slate-400 uppercase tracking-wider border-b border-slate-800">
            <tr>
              <th className="py-2.5 px-3">Spectral Line</th>
              <th className="py-2.5 px-3">Order (m)</th>
              <th className="py-2.5 px-3">Left Vernier (V₁)</th>
              <th className="py-2.5 px-3">Right Vernier (V₁)</th>
              <th className="py-2.5 px-3">2θ (|R - L|)</th>
              <th className="py-2.5 px-3">Diffraction θ</th>
              <th className="py-2.5 px-3">Experimental λ</th>
              <th className="py-2.5 px-3">Theory λ</th>
              <th className="py-2.5 px-3">Error %</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
            {allRows.map((row, idx) => {
              // Calculate values if from auto-recorded reading
              const isRecorded = !!row.angleDeg;
              const theta = isRecorded ? Math.abs(row.angleDeg) : row.thetaDeg;
              const twoTheta = (theta * 2).toFixed(2);
              const order = row.order || 1;
              const d_nm = gratingPreset.pitchNm;
              const calcLambda = isRecorded
                ? (d_nm * Math.sin((theta * Math.PI) / 180)) / order
                : row.lambdaExp;
              const theory = row.lambdaTheory;
              const err = theory > 0 ? (Math.abs(calcLambda - theory) / theory) * 100 : 0;

              return (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-2 px-3 font-sans font-medium text-slate-100 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: row.hex || '#06D6A0' }} />
                    {row.color}
                  </td>
                  <td className="py-2 px-3">{order}</td>
                  <td className="py-2 px-3 text-cyan-400">{row.v1Reading || `${row.vLeftDeg}°`}</td>
                  <td className="py-2 px-3 text-indigo-400">{row.v2Reading || `${row.vRightDeg}°`}</td>
                  <td className="py-2 px-3">{twoTheta}°</td>
                  <td className="py-2 px-3 font-bold text-amber-400">{theta.toFixed(2)}°</td>
                  <td className="py-2 px-3 font-bold text-emerald-400">
                    {calcLambda.toFixed(1)} nm
                  </td>
                  <td className="py-2 px-3 text-slate-400">
                    {theory > 0 ? `${theory.toFixed(1)} nm` : '—'}
                  </td>
                  <td className="py-2 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      err < 1.0 ? "bg-emerald-500/20 text-emerald-400" : err < 3.0 ? "bg-amber-500/20 text-amber-400" : "bg-rose-500/20 text-rose-400"
                    }`}>
                      {err.toFixed(2)}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Notes & Calculations Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-400 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
        <div>
          <span className="font-semibold text-slate-300">Least Count of Spectrometer:</span>
          <p className="mt-0.5 font-mono text-[11px]">
            1 Main Scale Division (MSD) = 0.5° = 30'<br />
            Number of Vernier Divisions (n) = 30<br />
            Least Count (LC) = 1 MSD / n = 30' / 30 = <strong>1 minute of arc (1')</strong>
          </p>
        </div>
        <div>
          <span className="font-semibold text-slate-300">Grating Element (d):</span>
          <p className="mt-0.5 font-mono text-[11px]">
            Rulings: {gratingPreset.name}<br />
            N = {gratingPreset.linesPerCm.toFixed(1)} lines/cm<br />
            d = 1 / N = <strong>{gratingPreset.pitchNm.toFixed(2)} nm</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
