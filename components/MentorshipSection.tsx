"use client";

import Image from "next/image";

const JeetSarthiMentorship = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-center pb-20 sm:pb-0 text-2xl md:text-3xl font-bold text-[#0072CE] mb-10">
        How <span className="text-[#00A859]">JEET SARTHI</span> Mentorship Works?
      </h2>

      {/* Container */}
      <div className="relative flex flex-col items-center w-full">
        {/* ✅ Vertical Green Line for Mobile */}
        <div className="absolute left-4 top-0 w-[3px] h-[120%] bg-green-500 rounded-full sm:hidden md:hidden">
          {/* Bullets aligned with each section */}
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 border-4 border-green-500 rounded-full shadow" />
          <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 border-4 border-green-500 rounded-full shadow" />
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 border-4 border-green-500 rounded-full shadow" />
          <div className="absolute top-[68%] left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 border-4 border-green-500 rounded-full shadow" />
          <div className="absolute top-[88%] left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 border-4 border-green-500 rounded-full shadow" />
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full justify-items-center mb-12">
          {/* Onboarding */}
          <div className="flex flex-col items-center text-center sm:items-center sm:text-center">
            <Image
              src="/images/onboarding.svg"
              alt="Onboarding"
              width={90}
              height={90}
              className="mb-3"
            />
            <h3 className="text-green-600 font-semibold text-lg">Onboarding</h3>
            <p className="text-gray-600 text-sm mt-1 max-w-[200px]">
              Understand your goals & challenges.
            </p>
          </div>

          {/* Daily Support */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/daily-support.svg"
              alt="Daily Support"
              width={90}
              height={90}
              className="mb-3"
            />
            <h3 className="text-green-600 font-semibold text-lg">Daily Support</h3>
            <p className="text-gray-600 text-sm mt-1 max-w-[200px]">
              Junior mentor checks in regularly.
            </p>
          </div>

          {/* Result */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/result.svg"
              alt="Result"
              width={90}
              height={90}
              className="mb-3"
            />
            <h3 className="text-green-600 font-semibold text-lg">Result</h3>
            <p className="text-gray-600 text-sm mt-1 max-w-[220px]">
              Consistency + confidence = success.
            </p>
          </div>
        </div>

        {/* ✅ Horizontal Green Line for Desktop */}
        <div className="hidden md:flex absolute top-[38%] w-[90%] h-[3px] bg-green-500 rounded-full">
          <div className="absolute left-[8%] top-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 border-4 border-green-500 rounded-full shadow" />
          <div className="absolute left-[33%] top-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 border-4 border-green-500 rounded-full shadow" />
          <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 border-4 border-green-500 rounded-full shadow" />
          <div className="absolute right-[33%] top-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 border-4 border-green-500 rounded-full shadow" />
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 border-4 border-green-500 rounded-full shadow" />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16 w-full justify-items-center">
          {/* Personal Roadmap */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/personal-roadmap.svg"
              alt="Personal Roadmap"
              width={90}
              height={90}
              className="mb-3"
            />
            <h3 className="text-green-600 font-semibold text-lg">
              Personal Roadmap
            </h3>
            <p className="text-gray-600 text-sm mt-1 max-w-[220px]">
              Senior mentor sets your plan.
            </p>
          </div>

          {/* Review & Adjust */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/review-adjust.svg"
              alt="Review & Adjust"
              width={90}
              height={90}
              className="mb-3"
            />
            <h3 className="text-green-600 font-semibold text-lg">
              Review & Adjust
            </h3>
            <p className="text-gray-600 text-sm mt-1 max-w-[230px]">
              Senior mentor tracks performance weekly.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-[#0072CE] hover:bg-[#005fa3] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all">
            Enroll For Mentorship
          </button>
        </div>
      </div>
    </section>
  );
};

export default JeetSarthiMentorship;
