import React from 'react';
import { Quote, Users, TrendingUp, Heart } from 'lucide-react';

export default function AlumniSuccessPage() {
  const testimonials = [
    {
      quote: "I've been employed and I can feed myself.",
      author: "Male Alumnus",
      age: null
    },
    {
      quote: "I successfully created mobile apps—things I could never do before.",
      author: "Female",
      age: 35
    },
    {
      quote: "I can now solve problems and contribute in my community.",
      author: "Male",
      age: 26
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8" />
            <span className="text-sm uppercase tracking-wider font-semibold opacity-90">
              Success Story & Alumni Voices
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Real People.<br />Real Transformation.
          </h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Featured Story */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-800">Featured Story</h2>
            </div>
            
            <h3 className="text-3xl font-bold text-teal-800 mb-4 leading-tight">
              Female—From $90/Month & Poor Health to Stability Through Tech
            </h3>
            
            <div className="space-y-4 text-gray-700 mb-6">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-teal-700">Sickle cell warrior.</span> Former salesgirl earning $90/month. Codetrain enabled her transition into a flexible remote software role that protects her health and restores her dignity.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-600">
              <Quote className="w-8 h-8 text-teal-600 mb-3" />
              <p className="text-xl italic text-gray-800 leading-relaxed">
                "Working in tech saved my life... I never imagined I could have this kind of future."
              </p>
              <p className="text-sm text-gray-600 mt-3 font-semibold">— Female</p>
            </div>
          </div>

          {/* Alumni Voices Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Alumni Voices</h2>
              </div>
              <div className="text-4xl font-bold mb-2">60 Decibels</div>
              
              <div className="space-y-6 mt-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-colors duration-300">
                    <p className="text-lg italic mb-3">"{testimonial.quote}"</p>
                    <p className="text-sm font-semibold opacity-90">
                      — {testimonial.author}{testimonial.age ? `, ${testimonial.age}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Message */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-teal-600">
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                A scholarship is more than tuition. It is <span className="text-teal-600 font-bold">dignity</span>, <span className="text-teal-600 font-bold">opportunity</span>, and a <span className="text-teal-600 font-bold">new beginning</span>.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="text-gray-400 text-sm font-semibold tracking-wider">
                  CODETRAIN FOUNDATION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}