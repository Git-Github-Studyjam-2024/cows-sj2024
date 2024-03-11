"use client";
import Image from "next/image";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const About = () => {
  return (
    <div className="hero min-h-screen bg-alpha">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Contact ✨</h1>
        <p className="py-6 text-3xl">Keep in touch with us to hear happy stories and nice monent everytime! <br/><span className="italic font-bold">Cows do love you!</span></p>
    </div>
    <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-beta">
        <form className="card-body">
        <div className="form-control">
            <label className="label">
            <span className="label-text">Your name</span>
            </label>
            <input type="text" placeholder="What's your name?" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
            <span className="label-text">Content</span>
            </label>
            <textarea className="textarea textarea-celta h-40" placeholder="Tell us what do you think or whatever"></textarea>
        
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-delta hover:bg-delta text-white ">Send <HiOutlineMail/></button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default About;
