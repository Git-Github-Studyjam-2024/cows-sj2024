import React from "react";
import TEAM_IMAGE from "@/assets/background/team.png";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex flex-col md:flex-row w-full h-full justify-between gap-4">
        <Image
          src={TEAM_IMAGE}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="rounded-lg shadow-2xl"
        />
        <div className="text-right w-full flex flex-col h-full justify-between py-16 items-center h-full items-center gap-8">
          <h1 className="text-6xl font-bold text-green-500">Four Cows,</h1>
          <h1 className="text-6xl font-bold text-yellow-500">One Team,</h1>
          <h1 className="text-6xl font-bold text-red-600">One Dream!</h1>
          <p className="text-6xl text-blue-600 font-bold">NEVER GIVE UP</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
