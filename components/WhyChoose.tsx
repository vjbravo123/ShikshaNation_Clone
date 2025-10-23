"use client";
import React from "react";

const WhyChoose = () => {
  const features = [
    { title: "One-on-One Guidance", description: "Personalized strategies by top-ranking mentors.", icon: "👨‍🏫" },
    { title: "Mock Tests & Feedback", description: "Real exam simulation + analysis = higher scores.", icon: "📝" },
    { title: "Constant Doubt Support", description: "Get answers instantly from your junior mentor", icon: "❓" },
    { title: "Progress Tracking", description: "Regular reviews with your senior mentor keep you aligned.", icon: "📊" },
    { title: "Time Mastery", description: "Practice managing every second in the exam hall.", icon: "⏱️" },
    { title: "Stress-Free Prep", description: "Build confidence and mental resilience for exam day.", icon: "🧘‍♂️" },
    { title: "Dual Support System", description: "Senior mentor sets your roadmap, junior mentor ensures you follow it daily.", icon: "🤝" },
    { title: "Proven Shortcuts & Techniques", description: "Learn to solve smarter, faster, and with accuracy.", icon: "⚡" },
    { title: "Notes & Resources", description: "Expert-curated, precise, and effective study material.", icon: "📒" },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
        Why Choose <span className="text-green-600">JEET</span> SARTHI Mentorship?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex justify-between items-start p-6 bg-white"
          >
            <div className="pr-4">
              <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
            </div>
            <div className="text-4xl">{feature.icon}</div>

            {/* Right line */}
            <div className="absolute top-0 right-0 h-full w-[1px] bg-black"></div>
            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black"></div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-200">
          Enroll For Mentorship
        </button>
      </div>
    </section>
  );
};

export default WhyChoose;
