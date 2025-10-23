"use client";

import Image from "next/image";

const JeetSarthiBenefits = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left Side - Image with Blue Circle */}
        <div className="relative flex justify-center w-full lg:w-1/2">
          <div className="absolute w-72  h-72 sm:w-96 sm:h-96 bg-[#0066CC] rounded-full  top-1/2 -translate-y-1/2" />
          <Image
            src="/images/student.webp" 
            alt="Student"
            width={380}
            height={380}
            className="relative z-10 object-contain"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0072CE] mb-8">
            Exclusive <span className="text-[#00A859]">JEET SARTHI</span> Benefits
          </h2>

          {/* 2x2 Grid of Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 mb-8">
            {/* Benefit 1 */}
            <div>
              <div className="flex items-start gap-3">
                <Image
                  src="/images/daily-routine.svg"
                  alt="Daily Routine Guidance"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-base">
                    Daily Routine Guidance
                  </h3>
                  <p className="text-sm text-gray-600">
                    Stay disciplined and consistent.
                  </p>
                </div>
              </div>
              <hr className="border-gray-300 mt-3" />
            </div>

            {/* Benefit 2 */}
            <div>
              <div className="flex items-start gap-3">
                <Image
                  src="/images/tips-tricks.svg"
                  alt="Tips & Tricks from Toppers"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-base">
                    Tips & Tricks from Toppers
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn what actually works in the exam.
                  </p>
                </div>
              </div>
              <hr className="border-gray-300 mt-3" />
            </div>

            {/* Benefit 3 */}
            <div>
              <div className="flex items-start gap-3">
                <Image
                  src="/images/interactive-sessions.svg"
                  alt="Interactive Sessions"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-base">
                    Interactive Sessions
                  </h3>
                  <p className="text-sm text-gray-600">
                    Insights on exam patterns and preparation hacks.
                  </p>
                </div>
              </div>
              <hr className="border-gray-300 mt-3" />
            </div>

            {/* Benefit 4 */}
            <div>
              <div className="flex items-start gap-3">
                <Image
                  src="/images/one-on-one.svg"
                  alt="Dedicated One-on-One Mentorship"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-base">
                    Dedicated One-on-One Mentorship
                  </h3>
                  <p className="text-sm text-gray-600">
                    Personalized support at every step.
                  </p>
                </div>
              </div>
              <hr className="border-gray-300 mt-3" />
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#0072CE] hover:bg-[#005fa3] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all">
            Enroll For Mentorship
          </button>
        </div>
      </div>
    </section>
  );
};

export default JeetSarthiBenefits;