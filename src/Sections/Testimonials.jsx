  import React from "react";
  import GradientSphere from "../Components/GradientSphere";
  import TitleHeader from '../Components/TitleHeader';
  import { testimonials } from "../Constants";
  import TestimonialCard from "../Components/TestimonialCard.jsx";


  export default function Testimonials() {
    return (
      <section id="testimonials" className=" flex-center relative md:p-0  px-5  overflow-x-hidden">
        <GradientSphere
          sphere1Class={" testimonial-gradient-sphere testimonial-sphere-1"}
          sphere2Class={"testimonial-gradient-sphere testimonial-sphere-2"}
        />

        <div className=" w-full h-full container relative  z-10 md:my-40 my-20">
          <TitleHeader
              title={" TESTIMONIALS"}
              number={"04"}
              text={"Watch peoples are saying about me"}
            />
            <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
        </div>
      </section>
    );
  }
