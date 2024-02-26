import Image from "next/image";
import React from "react";
import GDSC_LOGO from "@/assets/background/GDSC_LOGO_VERTICAL.png";
const Footer = () => {
  return (
    <footer className="footer text-2xl footer-center p-10 bg-green-400 text-white">
      <aside>
        <Image src={GDSC_LOGO} height={100} />
      </aside>
      <nav>
        <p>
          <span className="italic">
            Learning is like a cow of desire. It, like her, yields in all
            seasons. <br />- Chanakya
          </span>
        </p>
        <p className="text-xl mt-2">Made with 🥛 by Cows at HCMUTE FIT</p>
      </nav>
    </footer>
  );
};

export default Footer;
