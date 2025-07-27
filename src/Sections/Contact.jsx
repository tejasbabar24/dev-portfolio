import React from "react";
import TitleHeader from "../Components/TitleHeader";
import ContactForm from "../Components/ContactForm";
import ContactExperience from "../Components/ContactExperience";

export default function Contact() {
  return (
    <section id="contact" className=" flex-center relative md:p-0 px-5">
      <div className=" w-full h-full container md:my-40  my:20">
        <TitleHeader
          title={"CONTACT ME"}
          text={"Let's collaborate on tailored , sustainable solutions."}
          number={"05"}
        />

        <div className="mt-20">
          <div className="grid grid-cols-12 md:grid-flow-col grid-flow-row-dense ">
            <div className=" md:col-span-5 col-span-12">
              <ContactForm />
            </div>
            <div className="md:col-span-7 col-span-12">
              <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] md:m-0 -mt-32 rounded-md overflow-hidden">
                <ContactExperience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
