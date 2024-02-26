"use client";
import React from "react";
import Avatar3 from "@/assets/background/gdsc.png";
import Image from "next/image";
import { scrollToSection } from "@/utils/scrollBehavior";

const Hero = () => {
  return (
    <div
    id="section-hero"
      className="hero h-screen bg-base-200"
      // Set background image
    >
      <Image
        objectFit="cover"
        sizes="cover"
        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
        fill={true}
        src={Avatar3}
      />
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-6xl py-4 font-bold bg-gradient-to-b from-white to-white  bg-clip-text text-transparent">
            Git & GitHub Study Jam
          </h1>
          <p className="py-6 font-bold text-2xl">GDSC - HCMUTE 2024</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              scrollToSection("section-slogan");
            }}
          >
            Hello from COWS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
