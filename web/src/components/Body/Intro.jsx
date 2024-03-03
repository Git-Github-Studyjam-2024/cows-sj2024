import React from "react";
import DELTA_IMAGE from "@/assets/team-avt/2.png";
import ALPHA_IMAGE from "@/assets/team-avt/5.png";
import CELTA_IMAGE from "@/assets/team-avt/4.png";
import BETA_IMAGE from "@/assets/team-avt/3.png";
import Image from "next/image";
import { IoMdFlower } from "react-icons/io";
import { MdGrass } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import { MdOutlineSportsGymnastics } from "react-icons/md";
const sloganItems = [
  {
    name: "TRAN CONG TOAN",
    background: "bg-alpha",
    nickname: "alpha",
    picture: ALPHA_IMAGE,
    text: "FOUR COWS",
    icon: <MdGrass />,
  },
  {
    name: "LAM HOAI KIM NGAN",
    background: "bg-beta",
    nickname: "beta",
    picture: BETA_IMAGE,
    text: "ONE TEAM",
    icon: <IoMdFlower />,
  },
  {
    name: "DONG GIA SANG",
    nickname: "celta",
    background: "bg-celta",
    picture: CELTA_IMAGE,
    text: "ONE DREAM",
    icon: <FaFire />,
  },
  {
    name: "DANG MINH NHAT",
    background: "bg-delta",
    nickname: "delta",
    picture: DELTA_IMAGE,
    text: "NEVER GIVE UP",
    icon: <MdOutlineSportsGymnastics />,
  },
];

const Intro = () => {
  return (
    <div className="hero min-h-screen bg-white ">
      <div className="flex gap-2 flex-col relative py-16 w-full h-screen justify-between  gap-4">
        {sloganItems.map(
          ({ nickname, name, background, picture, text, icon }, index) => {
            return (
              <div
                className={`${background} rounded-xl px-4 h-full flex relative overflow-hidden justify-between`}
              >
                <div className="w-full ">
                  <div className="w-full text-8xl italic opacity-[0.4] font-bold text-alpha-600">
                    {text}
                  </div>
                  <div className="text-black text-4xl   italic ml-8 font-extrabold">
                    {name}
                  </div>
                  <div className="text-white text-4xl capitalize ml-8 font-bold">
                    {nickname}
                  </div>
                </div>
                <div className="text-[16rem] absolute right-[-5rem] bottom-[-5rem] opacity-[.2] background-white text-white">
                  {icon}
                </div>

                <div className="w-full h-full relative flex justify-end bottom-0 ">
                  <Image
                    className=""
                    alt="Mountains"
                    src={picture}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Intro;
