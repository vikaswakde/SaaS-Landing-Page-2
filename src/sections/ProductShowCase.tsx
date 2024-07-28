import Image from "next/image";
import React from "react";
import ProductImage from "@/assets/product-image.png";
import PyramidIcon from "@/assets/pyramid.png";
import TubeIcon from "@/assets/tube.png";

const ProductShowCase = () => {
  return (
    <div className="py-28 overflow-x-clip">
      <div className="container">
        <div className="sm:w-[540px] mx-auto ">
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
        <div className="relative ">
          <Image src={ProductImage} alt="product iamge" className="" />
          <Image
            src={PyramidIcon}
            alt="tubeIcon"
            className="hidden md:block absolute  h-[260px] w-auto max-w-none  -right-36 -top-24"
          />
          <Image
            src={TubeIcon}
            alt="tubeIcon"
            className="hidden md:block absolute h-[260px] w-auto max-w-none top-36 -left-36"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowCase;
