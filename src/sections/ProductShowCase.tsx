"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ProductImage from "@/assets/product-image.png";
import PyramidIcon from "@/assets/pyramid.png";
import TubeIcon from "@/assets/tube.png";

import { motion, useScroll, useTransform } from "framer-motion";

const ProductShowCase = () => {
  const sectionRef = useRef(null);
  const productRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: productYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(productYProgress, [0, 0.6], [20, 1]);
  const opacity = useTransform(productYProgress, [0, 0.6], [0.1, 1]);

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="py-28 overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] border"
    >
      <div className="container">
        <div className="sm:w-[33.75rem] mx-auto ">
          <div className="flex justify-center pb-5">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-header">
            A more effective way to track progress
          </h2>
          <p className="text-xl leading-relaxed pt-5 text-center">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <motion.div
          className="relative mt-10 "
          style={{
            opacity,
            rotateX,
            transformPerspective: "900px",
          }}
          ref={productRef}
        >
          <Image src={ProductImage} alt="product iamge" className="" />
          <motion.img
            src={PyramidIcon.src}
            alt="tubeIcon"
            className="hidden md:block absolute  h-[16.25rem] w-auto max-w-none -right-32  lg:right-[-67.2px] top-[-128px] lg:top-[112px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={TubeIcon.src}
            alt="tubeIcon"
            className="hidden md:block absolute h-[16.25rem] w-auto max-w-none lg:bottom-[80px] bottom-[112px] -left-36"
            style={{
              translateY,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowCase;
