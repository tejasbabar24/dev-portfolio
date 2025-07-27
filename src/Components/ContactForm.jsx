import React from "react";

export default function ContactForm() {
  return (
    <div className=" flex-center ">
      <form action="" className=" w-full text-[#a7a7a7] flex flex-col gap-7">
        <div className="">
          <label
            htmlFor="name"
            className="label "
          >
            Name
          </label>
          <input
            type="text"
            id=" name"
            placeholder=" Tommy"
            className=" bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50]"
          />
        </div>
        <div className="">
          <label
            htmlFor="email"
            className="label "
          >
            Email
          </label>
          <input
            type="text"
            id=" email"
            placeholder="emal@gmail.com"
            className=" bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50]"
          />
        </div>
        <div className="">
          <label
            htmlFor="subject"
            className="label "
          >
            Subject
          </label>
          <input
            type="text"
            id=" subject"
            placeholder=" Tommy"
            className=" bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50]"
          />
        </div>
        <div className="">
          <label
            htmlFor="message"
            className="label "
          >
            Message
          </label>
          <textarea
            type="text"
            id=" message"
            placeholder=" Tommy"
            rows={5}
            className=" bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50]"
          />
        </div>

        <button type="submit" className=" cursor-pointer w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-700">
          Sent Message
        </button>
      </form>
    </div>
  );
}
