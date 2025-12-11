import React from "react";
import { Briefcase, Globe, Heart, Handshake } from "lucide-react";

export default function PartnershipSection() {
  return (
    <div className="bg-[#FFF8E7] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold text-[#004F4F] mb-6">
            Partner. Sponsor. Empower.
          </h2>
          <p className="text-xl text-[#004F4F] max-w-2xl mx-auto leading-relaxed">
            No gift is too small to transform a life. Every partnership creates ripples of change.
          </p>
        </div>

        {/* Partnership Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

  {/* Corporate Partner */}
  <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
      <Briefcase className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-2xl font-semibold mb-2">Corporate Partner:</h3>
    <p className="text-base leading-relaxed opacity-95">
      Co-brand and fund 10–20 scholarships, join our annual showcase, and receive quarterly impact reports.
    </p>
  </div>

  {/* Sponsor a Student */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-600 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
      <Heart className="w-6 h-6 text-teal-700" />
    </div>
    <h3 className="text-2xl font-semibold text-[#004F4F] mb-2">Sponsor a Student:</h3>
    <p className="text-base text-[#004F4F] leading-relaxed">
      Fund one learner's full tuition ($3,000 per student) and follow their journey to graduation.
    </p>
  </div>

  {/* Monthly Donor */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-600 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
      <Globe className="w-6 h-6 text-teal-700" />
    </div>
    <h3 className="text-2xl font-semibold text-[#004F4F] mb-2">Monthly Donor:</h3>
    <p className="text-base text-[#004F4F] leading-relaxed">
      Give $20–$100/month and help sustain scholarships year-round.
    </p>
  </div>

  {/* Mentor / Provide Equipment */}
  <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
      <Handshake className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-2xl font-semibold mb-2">Mentor / Provide Equipment:</h3>
    <p className="text-base leading-relaxed opacity-95">
      Share your expertise or donate laptops, helping students learn with dignity.
    </p>
  </div>
</div>


        {/* Call to Action */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-800 p-12 rounded-3xl text-center text-white shadow-2xl">
          <p className="text-2xl md:text-3xl font-bold mb-8 italic">
            "Join the Codetrain Foundation Network—where access meets impact."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Contact:</span>
              <a href="mailto:foundation@codetrainafrica.com" className="underline hover:text-teal-200 transition-colors">
                foundation@codetrainafrica.com
              </a>
            </div>
            <div className="hidden md:block text-teal-300">|</div>
            <a href="https://www.codetrainfoundation.org" className="underline hover:text-teal-200 transition-colors">
              www.codetrainfoundation.org
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}