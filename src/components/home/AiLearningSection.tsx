import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Sparkles, Camera, Check, 
  HelpCircle, RefreshCw, 
  BrainCircuit, ChevronRight,
  Calculator, Zap
} from 'lucide-react'

export const AiLearningSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [selectedTopic, setSelectedTopic] = useState<'calculus' | 'trigonometry' | 'coordinate'>('calculus')

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden" id="ai-learning">
      {/* Subtle Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#173F8A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0D9488]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built-in Educational AI Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Intelligent Learning That Goes Beyond the Classroom.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Provide every student with 24/7 personalized academic guidance. Instant mathematical formula step-by-step reasoning, photo doubt solving, and intelligent mistake diagnostics.
          </p>
        </div>

        {/* Live Interactive AI Solver Demonstration */}
        <div className="max-w-5xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          {/* Top Bar with Topic Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 text-[#0D9488] flex items-center justify-center">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">AI Mathematics Doubt Engine Preview</h3>
                <span className="text-xs text-slate-400">Step-by-Step Educational Explanation Protocol</span>
              </div>
            </div>

            {/* Topic Selector */}
            <div className="flex items-center gap-1.5 bg-slate-800/90 p-1 rounded-xl text-xs">
              <button
                onClick={() => { setSelectedTopic('calculus'); setActiveStep(1); }}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedTopic === 'calculus' ? 'bg-[#173F8A] text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Calculus (Limits)
              </button>
              <button
                onClick={() => { setSelectedTopic('trigonometry'); setActiveStep(1); }}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedTopic === 'trigonometry' ? 'bg-[#173F8A] text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Trigonometry Identities
              </button>
            </div>
          </div>

          {/* Solver Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Left: Input Question Preview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-teal-400" />
                    Student Photo Upload / OCR Input
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Processed</span>
                </div>

                {selectedTopic === 'calculus' ? (
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center font-serif text-lg text-slate-100 py-4">
                    Evaluate: <br />
                    <span className="font-sans font-bold text-teal-300 text-xl tracking-wide">
                      lim (x → 0) [ sin(3x) / x ]
                    </span>
                  </div>
                ) : (
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center font-serif text-lg text-slate-100 py-4">
                    Prove Identity: <br />
                    <span className="font-sans font-bold text-teal-300 text-xl tracking-wide">
                      sin²(θ) + cos²(θ) = 1
                    </span>
                  </div>
                )}

                <div className="text-xs text-slate-400 flex items-center justify-between pt-1">
                  <span>Target Exam: JEE Main & Advanced</span>
                  <span className="text-slate-500">Difficulty: Medium</span>
                </div>
              </div>

              {/* Diagnostic Box */}
              <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-800/40 text-xs space-y-2">
                <div className="font-bold text-teal-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Weak Topic Diagnostic Signal</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  "Students frequently confuse direct substitution (0/0 indeterminate form) with algebraic limits. Cestrix emphasizes the standard formula: <span className="font-mono text-teal-200">lim (u→0) [sin(u)/u] = 1</span>."
                </p>
              </div>
            </div>

            {/* Right: Step-by-Step AI Reasoning Steps */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Step-by-Step Educational Solution
              </div>

              {/* Step 1 */}
              <div 
                onClick={() => setActiveStep(1)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeStep === 1 
                    ? 'bg-slate-800/90 border-teal-500/60 shadow-lg' 
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-teal-400">Step 1: Check Form & Identify Standard Limit</span>
                  <span className="text-[10px] text-slate-400">Indeterminate Analysis</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Substitute x = 0: sin(0) / 0 = 0 / 0. This is the 0/0 indeterminate form. We utilize the standard fundamental trigonometric limit:
                </p>
                <div className="mt-2 font-mono text-xs text-teal-300 bg-slate-900 px-3 py-1.5 rounded-lg inline-block">
                  lim (θ → 0) [ sin(θ) / θ ] = 1
                </div>
              </div>

              {/* Step 2 */}
              <div 
                onClick={() => setActiveStep(2)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeStep === 2 
                    ? 'bg-slate-800/90 border-teal-500/60 shadow-lg' 
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-teal-400">Step 2: Algebraic Manipulation (Match Argument)</span>
                  <span className="text-[10px] text-slate-400">Substitution</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  The argument of sine is 3x. Multiply both numerator and denominator by 3:
                </p>
                <div className="mt-2 font-mono text-xs text-teal-300 bg-slate-900 px-3 py-1.5 rounded-lg inline-block">
                  lim (x → 0) [ 3 · sin(3x) / (3x) ] = 3 · lim (x → 0) [ sin(3x) / (3x) ]
                </div>
              </div>

              {/* Step 3 */}
              <div 
                onClick={() => setActiveStep(3)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeStep === 3 
                    ? 'bg-slate-800/90 border-teal-500/60 shadow-lg' 
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-teal-400">Step 3: Final Computation</span>
                  <span className="text-[10px] text-emerald-400">Answer: 3</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Since 3x → 0 as x → 0, the limit equals 3 · (1) = <strong>3</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action / Recommended Practice */}
          <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              <span className="font-semibold text-white">Recommended Adaptive Practice: </span>
              <span>3 similar limits queued in student mobile app</span>
            </div>

            <Link
              to="/ai-learning"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors"
            >
              <span>Explore AI Capabilities</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Feature Grid Under Demonstration */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
              <Camera className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Photo Question Solver</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Students snap a picture of textbook or homework problems from their phone and receive verified step explanations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
              <Calculator className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Math Step Breakdown</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Never just answers. Detailed mathematical reasoning teaches concepts step-by-step so students actually understand.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Weak Topic Detection</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Analyzes question failure patterns across mock tests to pinpoint conceptual vulnerabilities before board/entrance exams.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Adaptive Remediation</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Generates targeted 5-10 question drills reinforcing previously failed concepts until mastery is achieved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
