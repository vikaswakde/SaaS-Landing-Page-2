import React from "react";
import acme from "@/assets/logo-acme.png";
import apex from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import echo from "@/assets/logo-echo.png";
import pulse from "@/assets/logo-pulse.png";
import quantum from "@/assets/logo-quantum.png";
import Image from "next/image";

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
          <div className="flex gap-14 mx-auto flex-none">
            {logoData.map(({ id, src }) => (
              <Image
                key={id}
                src={src}
                alt="logo img"
                className="logo-ticker-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
