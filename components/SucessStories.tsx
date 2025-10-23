"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = 
[
  {
    name: "Aarav Mehta",
    text: `Joining JEET SARTHI completely changed how I prepared. My mentors were not just teachers — they were motivators. The daily check-ins and personalized study plan made me stay consistent. I finally understood what focused preparation truly means.`,
  },
  {
    name: "Ananya Sharma",
    text: `My mentors at JEET SARTHI became my biggest strength. They understood my weaknesses better than I did and helped me overcome them one by one. Their dedication and constant support gave me the confidence I was missing.`,
  },
  {
    name: "Aditya Gupta",
    text: `The mentorship at JEET SARTHI felt like having an elder sibling guide me through every step. My senior mentor planned my entire schedule, while my junior mentor ensured I stuck to it. That discipline made all the difference in my results.`,
  },
  {
    name: "Ishita Verma",
    text: `I used to struggle with consistency before joining JEET SARTHI. The mentors here changed that completely. Their regular feedback sessions and honest guidance kept me on track and focused till the very end.`,
  },
  {
    name: "Karan Patel",
    text: `JEET SARTHI mentors genuinely care about every student. They patiently solved my doubts and even checked up on my progress daily. The personal attention I received helped me stay confident throughout my journey.`,
  },
  {
    name: "Simran Kaur",
    text: `What stood out to me about JEET SARTHI was how personally involved the mentors were. It never felt like a one-size-fits-all approach — they customized everything for my needs, which made my preparation smoother and more effective.`,
  },
  {
    name: "Rohit Mishra",
    text: `I never thought online mentorship could be this powerful. The mentors at JEET SARTHI guided me like family — from planning my daily schedule to motivating me whenever I felt low. My preparation became more structured and result-oriented.`,
  },
  {
    name: "Neha Agarwal",
    text: `The JEET SARTHI team is amazing! My mentors knew exactly how to push me without overwhelming me. Their balance of motivation and accountability helped me stay consistent even during tough phases.`,
  },
  {
    name: "Yash Raj",
    text: `Having mentors who genuinely care about your progress makes all the difference. My JEET SARTHI mentors made me believe in myself again. They made sure every day was productive and every effort counted.`,
  },
  {
    name: "Tanya Kapoor",
    text: `At JEET SARTHI, I got more than just academic guidance — I found mentors who cared about my mental well-being too. Their constant encouragement and structured mentorship helped me stay calm and focused throughout my preparation.`,
  },
];


const SuccessStories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
        <span className="text-[#0072CE]">Success </span>
        <span className="text-[#00A859]">Stories</span>
      </h2>

      {/* Carousel */}
      <Swiper
        spaceBetween={32}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className="pb-14"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-[#E9F6EA] rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 h-[300px] sm:h-[320px] md:h-[300px]`}
            >
              {/* Quote Icon */}
              <FaQuoteLeft
                className={`text-3xl mb-6 rotate-180 transition-colors duration-300 ${
                  hoveredIndex === i ? "text-[#00A859]" : "text-[#0072CE]"
                }`}
              />

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow px-1">
                {t.text}
              </p>

              {/* Name */}
              <h3 className="font-semibold text-[#003366] mt-auto text-base md:text-lg">
                {t.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SuccessStories;