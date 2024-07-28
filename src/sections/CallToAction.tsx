import React from "react";
import RightArrowIcon from "@/assets/arrow-right.svg";
import StartImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import Image from "next/image";
const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-16 overflow-x-clip lg:py-24">
      <div className="container">
        <div className="section-top-cover relative">
          <h2 className="section-header">Sign up for free today</h2>
          <p className="section-paragraph text-center ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            width={360}
            alt="star image"
            src={StartImage}
            className="hidden md:absolute -left-[60%] -top-[80%] max-w-none lg:-left-[calc(100%-20%)]"
          />
          <Image
            width={360}
            src={SpringImage}
            alt="star image"
            className="hidden md:absolute -right-[50%] -bottom-[80%] max-w-none lg:-right-[calc(100%-20%)]"
          />
        </div>
        <div className="flex  items-center gap-2 justify-center mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text flex items-center">
            <span>Learn more</span>
            <RightArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
