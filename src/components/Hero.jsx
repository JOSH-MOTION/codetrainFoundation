import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function DonationHero() {
  return (
   <div className="relative min-h-[70vh] min-h-[70vh] overflow-hidden">
      {/* Background Image - Right Side */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-right"
        style={{
          backgroundImage: "url(/campus2.jpg)",
        }}
      />

      {/* Teal Gradient Overlay - Lighter on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/70 to-transparent md:from-teal-900 md:via-teal-800/95 md:to-teal-900/40" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Main Content */}
        <main className="flex-1 flex items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl w-full">
            <div className="max-w-2xl">
              {/* Hero Text */}
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Expanding Access 
                <br />
                to Tech Education
                <br />
                in Africa
              </h1>

              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl">
                Giving talented young Africans the chance to learn, build careers,
                <br className="hidden sm:block" />
                and change their lives — regardless of their financial background.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-white text-teal-900 px-6 md:px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-sm md:text-base">
                  <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                    <span>Sponsor a Student</span>
                  </span>
                </button>

                <Link 
                  to="/Appointment"
                  className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-4 rounded-lg font-black hover:bg-white/10 transition-all duration-200 text-sm md:text-base whitespace-nowrap text-center"
                >
                  Partner with us <br />
                  <span className="font-thin">Schedule a meeting</span>
                </Link>
              </div>

              {/* Partner Logos */}
              {/* <h1 className="text-white mb-3">Supported by</h1>
              <div className="flex items-center gap-8 flex-wrap">
                <div className="text-white/80">
                  <img src="codetrain-logo.webp" alt="" className="w-16" />
                </div>

                <div className="text-white/80">
                  <img src="/giz-logo.webp" alt="" className="w-10" />
                </div>

                <div className="text-white/80">
                  <img
                    src="/mastercard-foundation.png"
                    alt=""
                    className="w-12"
                  />
                </div>

                <div className="text-white/80">
                  <img src="Chancen-Logo.png" alt="" className="w-16" />
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}