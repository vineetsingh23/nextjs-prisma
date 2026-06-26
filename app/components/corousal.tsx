"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Research & Development",
    subtitle: "Innovating Tomorrow's Medicines",
    description:
      "Accelerating drug discovery with cutting-edge research, AI-driven analytics, and advanced laboratory technologies.",
    image: "/images/pharma1.jpg",
  },
  {
    title: "Pharmaceutical Manufacturing",
    subtitle: "Precision Manufacturing",
    description:
      "State-of-the-art GMP compliant manufacturing facilities ensuring quality, efficiency, and safety.",
    image: "/images/pharma2.jpg",
  },
  {
    title: "Quality Assurance",
    subtitle: "Committed to Excellence",
    description:
      "Maintaining the highest standards through rigorous testing and regulatory compliance.",
    image: "/images/pharma3.jpg",
  },
  {
    title: "Healthcare Distribution",
    subtitle: "Reliable Supply Chain",
    description:
      "Delivering medicines worldwide through an efficient and secure logistics network.",
    image: "/images/pharma4.jpg",
  },
  {
    title: "Patient Care",
    subtitle: "Improving Lives Every Day",
    description:
      "Providing innovative healthcare solutions focused on patient wellbeing and better outcomes.",
    image: "/images/pharma5.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[90vh] overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 p-6 transition-opacity duration-1000 ${
            current === index
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[32px]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              priority
              className="object-contain object-center"
            />
          </div>

          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />

          <div className="relative z-20 flex h-full items-center">

            <div className="max-w-7xl mx-auto px-6">

              <span className="bg-blue-600 px-4 py-2 rounded-full text-white text-sm font-semibold">
                Medical & Pharmaceutical Solutions
              </span>

              <h1 className="mt-6 text-5xl lg:text-7xl font-bold text-white leading-tight max-w-3xl">
                {slide.title}
              </h1>

              <h2 className="text-3xl text-blue-300 font-semibold mt-4">
                {slide.subtitle}
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-gray-200">
                {slide.description}
              </p>

              <div className="mt-10 flex gap-5">
                <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full text-white font-semibold">
                  Explore Services
                </button>

                <button className="border border-white text-white hover:bg-white hover:text-slate-900 transition px-8 py-4 rounded-full">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Previous */}

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3"
      >
        <ChevronLeft className="text-white" size={30} />
      </button>

      {/* Next */}

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3"
      >
        <ChevronRight className="text-white" size={30} />
      </button>

      {/* Dots */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? "w-10 bg-blue-500"
                : "w-3 bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}