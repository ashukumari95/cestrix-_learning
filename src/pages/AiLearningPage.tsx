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
