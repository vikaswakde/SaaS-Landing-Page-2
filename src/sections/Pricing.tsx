"use client";
import React from "react";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

import { motion } from "framer-motion";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col">
          <h1 className="section-header pt-5">Pricing</h1>
          <p className="section-paragraph text-center sm:mx-auto">
            Free Forever. Upgrade for unlimited tasks, better security, and
            exculsive features
          </p>
          <div className="flex flex-col gap-5 mt-10 sm:w-[351px] mx-auto lg:flex-row lg:w-full  lg:items-end lg:mx-auto lg:justify-center ">
            {pricingTiers.map(
              ({
                title,
                monthlyPrice,
                popular,
                features,
                buttonText,
                inverse,
              }) => (
                <div
                  key={title}
                  className={twMerge(
                    "card",
                    inverse === true &&
                      "bg-black text-white border border-black"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={twMerge(
                        "text-[#6F6C90] font-medium text-lg",
                        inverse && "text-white/70"
                      )}
                    >
                      {title}
                    </h3>
                    {popular && (
                      <div className="inline-flex text-base px-4 py-1.5 rounded-xl border border-white/20">
                        <motion.span
                          animate={{
                            backgroundPositionX: "100%",
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                            repeatType: "loop",
                          }}
                          className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%]  text-transparent bg-clip-text [-webkit-background-clip:text] font-medium"
                        >
                          Most Popular
                        </motion.span>
                      </div>
                    )}
                  </div>
                  <p className="flex gap-1 items-baseline mt-[30px]  ">
                    <span className="font-bold text-5xl tracking-tighter leading-none">
                      ${monthlyPrice}
                    </span>
                    <span
                      className={twMerge(
                        "text-[#6F6C90] font-medium text-xl tracking-tighter",
                        inverse && "text-white/70"
                      )}
                    >
                      /monthly
                    </span>
                  </p>
                  <button
                    className={twMerge(
                      "btn btn-primary w-full my-[30px]",
                      inverse && "bg-white text-black"
                    )}
                  >
                    {buttonText}
                  </button>
                  <ul className="flex flex-col gap-5 ">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="text-base flex items-center gap-4 "
                      >
                        <span>
                          <CheckIcon className="w-6 h-6" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
