import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Camera, BrainCircuit, ArrowRight, Check, ShieldCheck, Zap, BookOpen } from 'lucide-react'

export const AiLearningPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#0D9488] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Educational AI Assistance Engine</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Intelligent Learning That Goes Beyond the Classroom.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Equip your students with a 24/7 personal academic guide. Step-by-step mathematical reasoning, photo doubt solving, and diagnostic weakness analytics that accelerate conceptual mastery.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#0D9488] flex items-center justify-center font-bold">
              <Camera className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Photo Doubt Solver</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Students photograph questions directly from reference books or test papers and receive clean mathematical step explanations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#173F8A] flex items-center justify-center font-bold">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Step-by-Step Reasoning</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instead of bare answers, students see the fundamental principles, formulas used, and intermediate derivations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Weak Topic Detection</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Aggregates student quiz failures to detect conceptual gaps in topics like Rotational Dynamics or Calculus before major exams.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Adaptive Practice Sets</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Auto-generates remedial 5-to-10 question drills targeted specifically at concepts where the student previously lost marks.
            </p>
          </div>
        </div>

        {/* Deep-Tech Spotlight: RAG-Powered Custom Institute Knowledge Base */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A0F1D] text-white p-8 sm:p-12 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
                <BrainCircuit className="w-3.5 h-3.5 text-teal-300" />
                <span>Proprietary RAG Architecture (Zero Hallucinations)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                An AI Assistant Trained Exclusively on <span className="text-teal-400">YOUR Institute’s Notes</span>.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                While generic chatbots invent answers, Cestrix implements an enterprise <strong>Retrieval-Augmented Generation (RAG)</strong> pipeline. Simply upload your faculty’s lecture notes, module PDFs, and solution booklets. Our vector engine grounds all answers strictly in your curriculum.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs text-slate-200">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Direct Page Citations:</strong> Answers point students to exact chapters and page numbers in your study material.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Faculty Tone Matching:</strong> Adheres to your teachers’ step-by-step methods and shortcut derivations.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Out-of-Syllabus Guardrails:</strong> Rebuffs irrelevant queries and prompts students to consult their batch teacher.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Multi-Language OCR:</strong> Solves handwritten Hindi and English question photos with LaTeX rendering.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-700/80 p-5 shadow-inner space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  RAG Doubt Resolver Preview
                </span>
                <span className="text-[11px] text-teal-400 font-mono">Apex_Physics_Ch04.pdf</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/50 text-slate-200">
                  <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Student Question:</div>
                  <p className="italic">"How to find tension at the lowest point of a vertical circular motion?"</p>
                </div>
                <div className="bg-teal-950/40 p-3.5 rounded-xl border border-teal-800/60 text-teal-100 space-y-2">
                  <div className="text-[10px] text-teal-400 font-bold uppercase flex items-center justify-between">
                    <span>AI Faculty Response:</span>
                    <span className="text-[10px] bg-teal-900/80 px-2 py-0.5 rounded text-teal-300">Apex Module • Page 48</span>
                  </div>
                  <p className="leading-relaxed">
                    At the lowest point, centripetal force is directed upward:
                  </p>
                  <div className="p-2 rounded bg-slate-900/80 font-mono text-center text-teal-300 border border-teal-900/50">
                    T - mg = m(v² / r) &rarr; T = mg + m(v² / r)
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Refer to Section 4.3 of your Apex Mechanics module for the derivation of critical velocity v_min = &radic;(5gr).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep-Tech Trio: Anti-Piracy DRM, Webhooks, and No-Overage Cloud */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-slate-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Hardware DRM Anti-Piracy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Widevine and FairPlay encryption converts any unauthorized screen recording (OBS, mobile grabbers) into an instant black screen. Dynamic moving watermarks flash the student’s phone number to deter secondary camera recording.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-slate-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">API-First Webhooks</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never get trapped in a closed garden. Open REST APIs and Webhooks let you stream live data into your WhatsApp marketing stack (Wati, Interakt), campus biometric gates (eSSL, ZKTeco), or custom business intelligence sheets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-slate-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Zero-Overage Live Classes</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Say goodbye to restrictive "live class credit meters" and surprise overage bills. Cestrix operates on a truly flat subscription with YouTube Unlisted DRM zero-bandwidth streaming and predictable cloud tiers.
            </p>
          </div>
        </div>

        {/* Responsible AI Disclaimer Banner */}
        <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 text-xs text-slate-700 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#173F8A] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Educational Pedagogy Principle:</strong> Cestrix AI is designed to support the classroom teacher, not replace them. The engine guides students through problem-solving steps rather than encouraging copy-pasting, reinforcing critical thinking for competitive examinations.
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#0F172A] text-white text-center space-y-4">
          <h2 className="text-2xl font-bold">Offer AI Doubt Resolution to Your Students</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Book a live session to experience the AI doubt engine with actual JEE & NEET mathematics questions.
          </p>
          <div>
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#173F8A] hover:bg-[#0f2c61] text-white text-sm font-bold transition-all"
            >
              <span>Request AI Learning Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
