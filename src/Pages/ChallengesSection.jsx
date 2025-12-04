import React from "react";
import { Target } from "lucide-react";

export default function ChallengesSection() {
  return (
    <div className="bg-white">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left: The Challenge */}
        <section className="flex flex-col justify-center p-12 md:p-16 bg-gradient-to-br from-teal-700 to-teal-800 text-white">
          <h3 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
            Talent Is Everywhere.
            <br />
            Opportunity Is Not
          </h3>

          {/* Point 1 */}
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2"/>
                <line x1="8" y1="10" x2="16" y2="10" strokeWidth="2"/>
                <line x1="8" y1="14" x2="16" y2="14" strokeWidth="2"/>
                <line x1="8" y1="18" x2="12" y2="18" strokeWidth="2"/>
              </svg>
            </div>
            <p className="text-xl leading-relaxed">
              Across Ghana and Africa, financial hardship prevents capable youth from accessing tech careers that could uplift their lives and families
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="5" y="11" width="14" height="10" rx="2" strokeWidth="2"/>
                <path d="M12 11V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" strokeWidth="2"/>
                <circle cx="12" cy="16" r="1" fill="currentColor"/>
              </svg>
            </div>
            <p className="text-xl leading-relaxed">
              Without support, promising learners risk losing access to training, internships, and jobs
            </p>
          </div>
        </section>

        {/* Right: 100 Scholarships. 100 Futures */}
        <section className="flex flex-col justify-center p-12 md:p-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            100 Scholarships.
            <br />
            100 Futures.
          </h2>

          {/* Subheading */}
          <p className="text-xl mb-12 leading-relaxed">
            Our fundraising goal includes two urgent priorities:
          </p>

          {/* Phase 1 */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-full flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Phase 1–Immediate: Arrears Relief
                </h3>
              </div>
            </div>
            <p className="text-lg leading-relaxed ml-14">
              Clear <strong>$73,000 USD</strong> in unpaid tuition so that 60
              current students can finish their program and secure jobs.
            </p>
          </div>

          {/* Phase 2 */}
          <div>
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-full flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Phase 2–Future: 100 Scholarships
                </h3>
              </div>
            </div>
            <p className="text-lg leading-relaxed ml-14">
              Raise <strong>$300,000 USD</strong> to fully fund 100 new
              scholarships for the 2026 cohort.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}