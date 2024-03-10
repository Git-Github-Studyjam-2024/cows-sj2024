"use client";
import Image from "next/image";
import React from "react";

import AVATAR_1 from "@/assets/team-avt/avatar-1.jpg";
import AVATAR_2 from "@/assets/team-avt/avatar-2.jpg"; 
import AVATAR_3 from "@/assets/team-avt/avatar-3.jpg";

import { FaFacebook, FaGithub, FaSquareFacebook } from "react-icons/fa6";

const persons = [
  {
    img: AVATAR_1,
    name: "Lam Hoai Kim Ngan",
    title: "Beta cow", // ? = Alpha, Beta, Celta, Delta
    background: "bg-beta", // bg-alpha, bg-beta, bg-celta, bg-delta
    description: (
      <>
        Here's to Beta,
        <br />
        The one who dream,🐛
        <br />
        The foolish as they may seem,
        <br />
        A mess maker loves to explore this world,🦋
        <br />
        A lovebird who loves art and random things,
        <br />
        A coder who's on track to become better and better,👩‍💻
        <br />A cow who loves to learn and share.🐄
      </>
    ), // use <br/> to new line

    social_medias: [
      {
        link: "https://www.facebook.com/nganlam6924", // Your Facebook link
        icon: (
          <>
            <span>Facebook</span>
            <FaSquareFacebook />
          </>
        ),
        background: "btn-primary",
      },
      {
        link: "https://github.com/nganlam-vn", // Your Github link
        icon: (
          <>
            <span>Github</span>
            <FaGithub />
          </>
        ),
        background: "btn-base",
      },
    ],
  },
  {
    img: AVATAR_2,
    name: "Dang Minh Nhat",
    title: "Delta cow", // ? = Alpha, Beta, Celta, Delta
    background: "bg-delta", // bg-alpha, bg-beta, bg-celta, bg-delta
    description: 
    <>
    Hey hey hey, Stop here boy⛔
    <br/>
    Thank you!😇
    </>
    ,
    // use <br/> to new line
    social_medias: [
      {
        link: "https://www.facebook.com/Mihn.Nathja/", // Your Facebook link
        icon: (
          <>
            <span>Facebook</span>
            <FaSquareFacebook />
          </>
        ),
        background: "btn-primary",
      },
      {
        link: "https://github.com/MihnNathja", // Your Github link
        icon: (
          <>
            <span>Github</span>
            <FaGithub />
          </>
        ),
        background: "btn-base",
      },
    ],
  },
  {
    img: AVATAR_3,
    name: "Tran Cong Toan",
    title: "Alpha cow",
    background: "bg-alpha",
    description: (
      <>
        Alpha is 19 years old 👦
        <br />
        He loves exploring the nature🍃,
        <br />
        coding cool stuff 👩‍💻,
        <br />
        reading various books 📚
        <br />
        and the Earth 🌏
      </>
    ),
    social_medias: [
      {
        link: "https://www.facebook.com/tctoan1024",
        icon: (
          <>
            <span>Facebook</span>
            <FaSquareFacebook />
          </>
        ),
        background: "btn-primary",
      },
      {
        link: "https://github.com/toantc1024",
        icon: (
          <>
            <span>Github</span>
            <FaGithub />
          </>
        ),
        background: "btn-base",
      },
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-auto w-full gap-4 px-4 py-4   ">
      {persons.map(
        (
          { img, social_medias, name, description, title, background },
          index
        ) => {
          return (
            <div
              className={`w-full h-screen flex ${background} flex-col items-center justify-center  p-8 rounded-[2rem]  lg:flex-row mask md:gap-24 gap-4  relative overflow-hidden`}
            >
              <div className="bg-white shadow-xl p-1 mask mask-squircle">
                <Image
                  src={img}
                  alt="avatar"
                  width={300}
                  height={300}
                  className="mask mask-squircle"
                />
              </div>
              <div className="flex flex-col gap-4 z-[1]">
                <h1
                  className={`text-5xl font-bold text-center md:text-left bg-white ${(() => {
                    return `text-${background}`;
                  })()} py-4 px-4 rounded-xl`}
                >
                  {name}
                </h1>
                <p className="text-center italic text-4xl text-white font-bold md:text-left">
                  {title}
                </p>
                <p className="text-center md:text-left text-2xl">
                  {description}
                </p>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  {social_medias.map(({ link, icon, background }, index) => {
                    return (
                      <button
                        onClick={() => {
                          window.open(link, "_blank");
                        }}
                        className={`btn ${background}`}
                      >
                        {icon}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default About;
