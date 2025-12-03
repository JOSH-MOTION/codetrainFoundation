// components/HowItWorks.jsx
import { Heart, BookOpen, Rocket } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="text-center shadow-lg p-6 rounded-lg">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">You Sponsor</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Choose how to give –<br />
            any student, or a named scholarship
          </p>
        </div>

        <div className="text-center shadow-lg p-6 rounded-lg">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">We Train</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Students complete Codetrain Africa’s 2-year<br /> Software Engineering + AI program
          </p>
        </div>

        <div className="text-center shadow-lg p-6 rounded-lg">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">They Thrive</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Graduates secure jobs, lift families out of poverty
          </p>
        </div>

      </div>

      <div className="mt-12">
        <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg">
          Start a Named Scholarship
        </button>
      </div>
    </section>
  );
}
