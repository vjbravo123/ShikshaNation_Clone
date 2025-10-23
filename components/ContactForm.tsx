import React from "react";

export default function ContactForm() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/images/insian-student-web-3-scaled.webp')", 
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900/80 z-0"></div>

      {/* Form Container */}
      <div className="relative z-10  backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          Start Your Success Journey With{" "}
          <span className="text-[#00C4B4]">JEET SARTHI</span>
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-white text-sm mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 rounded-md outline-none bg-white text-black placeholder-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white text-sm mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-md outline-none bg-white text-black placeholder-gray-700"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-white text-sm mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <span className="flex items-center px-3 bg-white rounded-md text-black">+91</span>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-3 py-2 rounded-md outline-none bg-white text-black placeholder-gray-700"
              />
            </div>
            <button
              type="button"
              className="text-[#ff4c4c] text-sm mt-1 underline"
            >
              Send OTP
            </button>
          </div>

          {/* Student Class */}
          <div>
            <label className="block text-white text-sm mb-1">Student Class</label>
            <select className="w-full px-3 py-2 rounded-md outline-none bg-white text-black">
              <option>Dropper</option>
              <option>11th</option>
              <option>12th</option>
            </select>
          </div>

          {/* Exam Type */}
          <div>
            <label className="block text-white text-sm mb-1">Exam Type</label>
            <select className="w-full px-3 py-2 rounded-md outline-none bg-white text-black">
              <option>NEET</option>
              <option>JEE</option>
              <option>CUET</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-white text-sm mb-1">City</label>
            <input
              type="text"
              placeholder="City"
              className="w-full px-3 py-2 rounded-md outline-none bg-white text-black placeholder-gray-700"
            />
          </div>

          {/* Help Section */}
          <div className="md:col-span-2">
            <label className="block text-white text-sm mb-1">How Can We Help?</label>
            <select className="w-full px-3 py-2 rounded-md outline-none bg-white text-black">
              <option>Backlog Management</option>
              <option>Doubt Solving</option>
              <option>Test Series</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#52c41a] hover:bg-[#3fa512] text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
