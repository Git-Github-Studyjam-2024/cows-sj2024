"use client";
import Image from "next/image";
import React from "react";
import AVATAR_3 from "@/assets/team-avt/avatar-3.jpg";
import { FaFacebook, FaGithub, FaSquareFacebook } from "react-icons/fa6";

const persons = [
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
    <div className="min-h-screen  px-12 flex bg-white">
      <div className="h-screen w-full py-48  flex items-center justify-center text-4xl text-green-900 ">
        {persons.map(
          (
            { img, social_medias, name, description, title, background },
            index
          ) => {
            return (
              <div className={`w-full h-full flex ${background} rounded-2xl`}>
                <div className="flex items-center  justify-center w-full ">
                  <section className=" flex flex-col lg:flex-row justify-between w-full px-48">
                    <Image
                      src={img}
                      className="mask mask-squircle max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className="w-full px-16 ull flex flex-col gap-4">
                      <h1 className="text-5xl font-bold">{name}</h1>
                      <p className="py-2 italic">{title}</p>
                      <span className="py-2 text-2xl">{description}</span>

                      <div className="flex gap-2 ">
                        {social_medias.map(
                          ({ link, icon, background }, index) => {
                            return (
                              <button
                                onClick={() => {
                                  // Open Facebook
                                  window.open(link, "_blank");
                                }}
                                className={`btn ${background}`}
                              >
                                {icon}
                              </button>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default About;
