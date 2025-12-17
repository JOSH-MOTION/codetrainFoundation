import { useState, useEffect } from "react";
import { Check, Rocket, Lightbulb, Network, DollarSign, Shield, TrendingUp, ArrowRight } from "lucide-react";

export default function PartnerPage() {
  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-teal-900/20 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-8 px-6 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full">
            <span className="text-teal-400 font-semibold text-sm md:text-base">
              🤝 Partnership Opportunities
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              Extraordinary
            </span>{" "}
            Together
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join forces with us to unlock new opportunities, amplify your impact,
            and create value that transforms industries and changes lives across Africa.
          </p>

          {/* CTA Button */}
          <a
            href="#schedule"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/50 hover:scale-105 text-base md:text-lg"
          >
            Schedule Your Meeting
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Active Partners" },
              { number: "95%", label: "Partner Satisfaction" },
              { number: "3x", label: "Average ROI Growth" },
              { number: "24/7", label: "Dedicated Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white/5 border border-teal-500/20 rounded-2xl hover:bg-teal-500/10 hover:border-teal-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-base md:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Why{" "}
            <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              Partner With Us?
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Accelerated Growth",
                description:
                  "Leverage our expertise, technology, and resources to scale faster than ever. We provide the tools and support you need to reach new heights.",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation Access",
                description:
                  "Get early access to cutting-edge solutions and industry insights that keep you ahead of the competition and at the forefront of your field.",
              },
              {
                icon: <Network className="w-8 h-8" />,
                title: "Network Expansion",
                description:
                  "Connect with our ecosystem of industry leaders, experts, and partners. Tap into new markets and opportunities through our global network.",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Revenue Opportunities",
                description:
                  "Unlock new revenue streams through co-marketing, joint ventures, and strategic collaboration that drives mutual growth and success.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Strategic Support",
                description:
                  "Benefit from dedicated account management, technical support, and strategic guidance tailored to your unique goals and challenges.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Data-Driven Insights",
                description:
                  "Access comprehensive analytics and market intelligence that inform smarter decisions and optimize your partnership performance.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 border border-teal-500/20 rounded-2xl hover:bg-teal-500/10 hover:border-teal-500/40 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our{" "}
            <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              Partnership Process
            </span>
          </h2>

          <div className="space-y-12">
            {[
              {
                number: "01",
                title: "Discovery Call",
                description:
                  "We'll start with a conversation to understand your goals, challenges, and vision. This helps us determine if we're the right fit for each other.",
              },
              {
                number: "02",
                title: "Strategy Workshop",
                description:
                  "Our team will work with you to map out a customized partnership strategy that aligns with your objectives and maximizes mutual value.",
              },
              {
                number: "03",
                title: "Agreement & Onboarding",
                description:
                  "Once we've aligned on terms, we'll formalize the partnership and guide you through a seamless onboarding process with dedicated support.",
              },
              {
                number: "04",
                title: "Launch & Scale",
                description:
                  "With everything in place, we'll launch the partnership and work together to scale, optimize, and achieve exceptional results.",
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-6 md:gap-8 group">
                <div className="flex-shrink-0">
                  <div className="text-5xl md:text-6xl font-bold text-teal-500 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="schedule" className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-teal-900/40 to-gray-900/40 border-2 border-teal-500/30 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-12">
                Schedule a meeting with our partnership team to explore opportunities
              </p>

              {/* Calendly Widget */}
              <div className="bg-gray-900/50 border border-teal-500/20 rounded-2xl overflow-hidden">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/joshuadoe168/coding"
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-teal-500/20 text-center">
        <p className="text-gray-400">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}