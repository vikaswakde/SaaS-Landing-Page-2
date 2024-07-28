import React from "react";
import RightArrow from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="bg-black text-white py-2 flex justify-center gap-4 ">
        <div className="hidden lg:block text-white/60">
          <p>This page is included in a free SaaS Website Kit.</p>
        </div>
        <div className="inline-flex items-center gap-1">
          <p>View the complete kit</p>
          <RightArrow className="h-4 w-4 inline-flex justify-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="saas logo" height={40} width={40} />
            <MenuIcon className="w-5 h-5 md:hidden" />
            <nav className="hidden md:flex items-center gap-6 text-black/60">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="px-4 py-2 bg-black text-white rounded-lg tracking-tight font-medium">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
