import Image from "next/image";
import React from "react";
import GDSC_LOGO from "@/assets/background/GDSC_LOGO_VERTICAL.png";
import BACKGROUND_IMAGE from "@/assets/background/flowers.jpg";

const Footer = () => {
  return (
    <footer className="flex  flex-col footer text-2xl footer-center p-10 bg-green-400 text-white relative overflow-hidden">
      <aside className="bg-[rgba(255,255,255,.2)] border-[1px] border-[rgba(255,255,255,.2)] shadow-sm p-4 rounded-xl ">
        <Image src={GDSC_LOGO} height={100} />
      </aside>
      <nav>
        <p>
          <span className="italic">
            Learning is like a cow of desire. It, like her, yields in all
            seasons. <br />- Chanakya
          </span>
        </p>
        <div className="right-0 absolute text-sm md:text-9xl bottom-0">
          🌼🐄
        </div>
        <p className="text-xl mt-2">Made with 🥛 by Cows at HCMUTE FIT</p>
      </nav>
    </footer>
  );
};

export default Footer;
