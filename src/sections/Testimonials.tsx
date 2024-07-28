import React from "react";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import Testimonial from "./Testimonial";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const column1 = testimonials.slice(0, 3);
const column2 = testimonials.slice(3, 6);
const column3 = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonial: typeof testimonials;
}) => (
  <div
    className={twMerge(
      "flex flex-col gap-6 py-5 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
      props.className
    )}
  >
    {props.testimonial.map(({ name, imageSrc, text, username }) => (
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
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <h2 className="section-header  mx-auto mt-5">What our users say</h2>
        <p className="section-paragraph mt-5 mx-auto">
          From intuitive design to powerful features, our app has become an
          essential tool for users all around the world
        </p>
        <div className="flex justify-center gap-6">
          {/* @ */}
          <TestimonialsColumn testimonial={column1} />
          <TestimonialsColumn
            testimonial={column2}
            className="hidden md:flex"
          />
          <TestimonialsColumn
            testimonial={column2}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
