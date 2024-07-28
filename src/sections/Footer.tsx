import React from "react";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import Xsocial from "@/assets/social-x.svg";
import Insta from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Youtube from "@/assets/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBC] py-16 text-center">
      <div className="conatiner">
        <div className="inline-flex text-center relative items-center justify-center before:contents-[''] before:h-10  before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1)] before:inline-flex before:absolute before:blur before;top-2 before:bottom-0 before:w-full ">
          <Image src={Logo} height={40} alt="logo saas" className="relative" />
        </div>
        <ul className="flex flex-col gap-5 items-center mt-5 justify-center md:flex-row">
          <li>About</li>
          <li>Features</li>
          <li>Customers</li>
          <li>Pricing</li>
          <li>Help</li>
          <li>Careers</li>
        </ul>
        <div className="flex  items-center justify-center gap-5 mt-10">
          <Xsocial className="h-15" />
          <Insta className="h-15" />
          <Linkedin className="h-15" />
          <Youtube className="h-15" />
        </div>
        <div className="text-center mt-5 ">
          &copy; 2024 Our Company, Inc. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
