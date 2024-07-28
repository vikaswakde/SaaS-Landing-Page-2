import Image from "next/image";
import React from "react";

interface TestimonialProps {
  username: string;
  text: string;
  imageSrc: string;
  name: string;
}

const Testimonial = ({ imageSrc, text, username, name }: TestimonialProps) => {
  return (
    <div className="card" key={username}>
      <p className="leading-[25px] font-medium text-base text-black/90 mt-5">
        {text}
      </p>
      <div className="flex gap-5 items-center mt-5 ">
        <Image
          src={imageSrc}
          alt="testimonial profile image"
          height={40}
          width={40}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium tracking-tight leading-5">{name}</h2>
          <p className="leading-5 tracking-tight">{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
