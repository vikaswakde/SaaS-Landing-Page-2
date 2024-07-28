"use client";

import React from "react";
import acme from "@/assets/logo-acme.png";
import apex from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import echo from "@/assets/logo-echo.png";
import pulse from "@/assets/logo-pulse.png";
import quantum from "@/assets/logo-quantum.png";
import Image from "next/image";

import { motion } from "framer-motion";

const logoData = [
  {
    id: 1,
    src: acme,
  },
  {
    id: 1,
    src: apex,
  },
  {
    id: 1,
    src: celestial,
  },
  {
    id: 1,
    src: echo,
  },
  {
    id: 1,
    src: pulse,
  },
  {
    id: 1,
    src: quantum,
  },
];

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div
          className="flex overflow-hidden
        [mask-image:linear-gradient(to_right,transparent,black,transparent)]
        [-webkit-mask-image:linear-gradient(to_right,transparent,black,transparent)]
        "
        >
          <motion.div
            className="flex gap-14 mx-auto flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {logoData.map(({ id, src }) => (
              <Image
                key={id}
                src={src}
                alt="logo img"
                className="logo-ticker-image "
              />
            ))}
            {logoData.map(({ id, src }) => (
              <Image
                key={id}
                src={src}
                alt="logo img"
                className="logo-ticker-image "
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
