import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function InversionVisualComparison() {
  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-2">
      {/* Left: Evminov Controlled Low-Angle Card */}
      <div className="rounded-3xl border-2 border-emerald-500/50 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-extrabold text-white">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Evminov Method (8°–35° Upright)
          </span>
          <span className="text-xs font-bold text-emerald-800">Active + Relaxed</span>
        </div>

        {/* Clean SVG Posture Visual */}
        <div className="mt-4 rounded-2xl border border-emerald-200 bg-[#0B1F3A] p-4">
          <svg
            viewBox="0 0 360 115"
            className="h-28 w-full"
            role="img"
            aria-label="Evminov 15 degree inclined board keeps head above hips for calm spinal unloading"
          >
            <line x1="20" y1="100" x2="340" y2="100" stroke="#334155" strokeWidth="2" />
            <rect x="315" y="14" width="12" height="86" rx="2" fill="#1E3A5F" />
            <g transform="translate(52, 96) rotate(-16)">
              <rect x="0" y="-7" width="250" height="8" rx="4" fill="#D9A362" />
              <rect x="200" y="-13" width="24" height="6" rx="2" fill="#34D399" />
              <circle cx="192" cy="-21" r="8" fill="#FFFFFF" />
              <line x1="180" y1="-16" x2="72" y2="-16" stroke="#34D399" strokeWidth="5" strokeLinecap="round" />
              <text x="195" y="-34" fill="#34D399" fontSize="10" fontWeight="700">
                HEAD UP ✓
              </text>
            </g>
            <text x="22" y="24" fill="#E2E8F0" fontSize="11" fontWeight="700">
              15° Gentle Flex-Pine Incline
            </text>
            <text x="22" y="40" fill="#34D399" fontSize="10" fontWeight="600">
              Normal blood flow • Zero ankle clamping • Deep core activation
            </text>
          </svg>
        </div>

        <ul className="mt-4 space-y-2 text-xs text-slate-700 sm:text-sm">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span>
              <strong>Head stays above heart:</strong> zero cranial blood rush, dizziness, or ocular pressure spikes.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span>
              <strong>Full spine support:</strong> resonant Carpathian pine cushions every vertebra while deep stabilizers train.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span>
              <strong>All-ages safe (4 to 85+):</strong> folds to 2.4&quot; flat against a bedroom or office wall.
            </span>
          </li>
        </ul>
      </div>

      {/* Right: Traditional 90° Inversion Table Warning Card */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold text-amber-900">
            <AlertTriangle className="h-3.5 w-3.5" />
            Traditional Inversion Tables (60°–90°)
          </span>
          <span className="text-xs font-bold text-slate-500">Passive Hang Only</span>
        </div>

        {/* Clean SVG Inversion Warning Visual */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-900 p-4">
          <svg
            viewBox="0 0 360 115"
            className="h-28 w-full"
            role="img"
            aria-label="Traditional 90 degree upside down inversion table causes head rush and ankle stress"
          >
            <line x1="20" y1="100" x2="340" y2="100" stroke="#334155" strokeWidth="2" />
            {/* A-frame stand */}
            <line x1="210" y1="100" x2="245" y2="42" stroke="#64748B" strokeWidth="3" />
            <line x1="280" y1="100" x2="245" y2="42" stroke="#64748B" strokeWidth="3" />
            {/* Steep upside-down table */}
            <g transform="translate(245, 52) rotate(68)">
              <rect x="-42" y="-4" width="84" height="7" rx="3" fill="#94A3B8" />
              <circle cx="34" cy="-14" r="8" fill="#F87171" />
              <line x1="24" y1="-12" x2="-34" y2="-12" stroke="#FCA5A5" strokeWidth="4" strokeLinecap="round" />
            </g>
            <text x="22" y="24" fill="#F8FAFC" fontSize="11" fontWeight="700">
              60°–90° Upside-Down Hang
            </text>
            <text x="22" y="40" fill="#FCA5A5" fontSize="10" fontWeight="600">
              Blood rushes to head/eyes • Clamped ankles • Bulky 16 sq ft frame
            </text>
          </svg>
        </div>

        <ul className="mt-4 space-y-2 text-xs text-slate-600 sm:text-sm">
          <li className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
            <span>
              <strong>Upside-down pressure:</strong> hanging inverted raises blood pressure in the head, sinuses, and eyes.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
            <span>
              <strong>Ankle &amp; knee strain:</strong> clamps full body weight onto ankles and knees with zero core strengthening.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
            <span>
              <strong>Passive rebound:</strong> without stabilizer activation, gravity re-compresses discs minutes after standing up.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
