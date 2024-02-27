"use client";
import React from "react";
import GDSC_LOGO from "@/assets/background/logo.png";
import HCMUTE_LOGO from "@/assets/background/hcmute.png";
import Image from "next/image";
import { scrollToSection } from "@/utils/scrollBehavior";
import { useRouter } from "next/navigation";
import AUDIO_FILE from "@/assets/audio/moo.mp3";
const navbarLinks = [
  {
    target: "/",
    name: "Home",
  },
  {
    name: "About us",
    target: "/about",
  },
  {
    name: "Contact",
    target: "/contact",
  },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="nav__menu fixed w-full navbar bg-blue-50 py-4 z-[9999]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navbarLinks.map((item, index) => {
              return (
                <li
                  onClick={() => router.push(item.target)}
                  key={`navbar_links_${index}`}
                >
                  <a className="text-gray-800">{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center  justify-center gap-4 text-xl">
          <Image className="" width="auto" height={50} src={GDSC_LOGO} />
          {/* <Image className="" width="auto" height={50} src={HCMUTE_LOGO} /> */}
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          {navbarLinks.map((item, index) => {
            return (
              <li
                onClick={() => router.push(item.target)}
                key={`navbar_links_${index}`}
              >
                <a className="text-gray-800">{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <audio src={"moo.mp3"} className="hidden" controls id="audio-cow" />
      <div
        className="navbar-end"
        onClick={() => {
          let audioCow = document.getElementById("audio-cow");
          audioCow.play();
        }}
      >
        <a className="btn text-[2em]">🐄</a>
      </div>
    </div>
  );
};

export default Navbar;
