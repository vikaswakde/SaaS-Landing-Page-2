"use client";
import React, { useRef } from "react";
import RightArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    // start of the target meets end of the container, stop when end of the target mets start of the container
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-[34px] pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className=" lg:w-[calc(100%-648px)]  md:w-[490px] ">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold bg-gradient-to-b from-black to-[#001354] text-transparent bg-clip-text [-webkit-background-clip:text] tracking-tighter mt-6 md:w-[536px] ">
              Pathway to Productivity
            </h1>
            <p className="section-paragraph">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="pt-[30px] flex gap-5 items-center">
              <button className="btn btn-primary">Get for free</button>
              <button className="inline-flex items-center gap-1 btn btn-text">
                <span>Learn more</span>
                <RightArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
            <motion.img
              src={cogImage.src}
              alt="cogImage"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-10"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                duration: 3,
              }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="cylinder image"
              className="hidden md:block md:absolute -top-8 -left-20 lg:-left-32"
              style={{
                translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="noodle image"
              width={230}
              height={230}
              className="hidden lg:block absolute top-[524px] left-[500px]  rotate-[25deg] "
              style={{
                rotate: 30,
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
