"use client";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header
      className="
        w-full bg-white flex justify-between items-center
        px-4 sm:px-8 md:px-16 lg:px-28 xl:px-56 py-2 shadow-sm transition-all duration-300
      "
    >
      {/* Left Logo */}
      <div className="flex items-center">
        <Image
          src="/jeet-sarthi-logo-web.svg"
          alt="Jeet Sarthi Logo"
          width={90}
          height={40}
          unoptimized
          className="object-contain w-[60px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px] transition-all duration-300"
        />
      </div>

      {/* Right Logo with Powered By */}
      <div className="flex flex-col items-center md:items-end">
        <h3 className="text-gray-600 text-[9px] sm:text-[10px] md:text-xs font-medium mb-1">
          Powered By
        </h3>
        <Image
          src="/shiksha-logo.png"
          alt="Shiksha Nation Logo"
          width={150}
          height={40}
          unoptimized
          className="object-contain w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] transition-all duration-300"
        />
      </div>
    </header>
  );
};

export default Header;
