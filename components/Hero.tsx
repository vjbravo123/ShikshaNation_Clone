"use client";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white min-h-[90vh] flex items-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900/80 z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12 flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl md:text-5xl font-extrabold leading-tight">
            Secure Your Dream Rank in NEET & JEE with{" "}
            <span className="text-green-400">JEET SARTHI</span>
          </h1>

          <p className="text-2xl mt-4 font-medium">
            Powered by <span className="font-bold">Shiksha Nation</span>
          </p>

          <div className="border-t border-white/60 my-5 w-3/3 mx-auto lg:mx-0" />

          <p className="text-2xl md:text-lg leading-relaxed">
            Personalized One-on-One <br className="sm:hidden" /> Mentorship from IITians & Doctors
             Who’ve Already Cracked It
          </p>
        </div>

        {/* Right Section (Form) */}
  <div className="w-full lg:w-1/2 bg-transparent text-white rounded-2xl shadow-lg p-6 md:p-8 mx-auto">
  <h2 className="text-3xl font-bold text-center mb-6">
    Book your <span className="text-green-500">FREE First Session</span>
  </h2>

  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="text-sm font-medium text-white">Name *</label>
      <input
        type="text"
        placeholder="Name"
        className="w-full bg-white border border-gray-300 rounded p-2 mt-1 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>

    <div>
      <label className="text-sm font-medium text-white">Email *</label>
      <input
        type="email"
        placeholder="Email"
        className="w-full bg-white border border-gray-300 rounded p-2 mt-1 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>

    <div className="relative">
      <label className="text-sm font-medium text-white">Phone Number *</label>
      <input
        type="tel"
        placeholder="+91"
        className="w-full bg-white border border-gray-300 rounded p-2 mt-1 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <p className="absolute top-2 right-2 text-green-500 text-xs font-semibold cursor-pointer hover:underline">
        Send OTP
      </p>
    </div>

    <div>
      <label className="text-sm font-medium text-white">Student Class *</label>
      <select className="w-full bg-white border border-gray-300 rounded p-2 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400">
        <option>Dropper</option>
        <option>Class 11</option>
        <option>Class 12</option>
      </select>
    </div>

    <div>
      <label className="text-sm font-medium text-white">Exam Type *</label>
      <select className="w-full bg-white border border-gray-300 rounded p-2 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400">
        <option>NEET</option>
        <option>JEE</option>
      </select>
    </div>

    <div>
      <label className="text-sm font-medium text-white">City</label>
      <input
        type="text"
        placeholder="City"
        className="w-full bg-white border border-gray-300 rounded p-2 mt-1 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>

    <div className="md:col-span-2">
      <label className="text-sm font-medium text-white">How Can We Help?</label>
      <input
        type="text"
        placeholder="Backlog Management"
        className="w-full bg-white border border-gray-300 rounded p-2 mt-1 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>

    <div className="md:col-span-2">
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded mt-3 font-semibold transition-all duration-200"
      >
        Send
      </button>
    </div>
  </form>
</div>



      </div>
    </section>
  );
};

export default Hero;
