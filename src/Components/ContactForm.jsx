import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const contactFormSchema = Z.object({
    name: Z.string().nonempty("Name is Required"),
    email: Z.string().email("Invalid Email").nonempty("Email is Required"),
    subject: Z.string().nonempty("Subject is Required"),
    message: Z.string().nonempty("Message is Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        title: data.subject,
        name: data.name,
        email: data.email,
        message: data.message,
        time: new Date().toLocaleString,

      };
      const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const  templateId= import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      await emailjs.send(serviceId ,templateId, payload ,{ publicKey: userId} )
    } catch (error) {
      console.log(" failed to send message , please try again");     
    } finally {
      alert(" Email send Successfully")
    }
  };


  useEffect(() => {
   
  }, [errors]);


  return (
    <div className=" flex-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full text-[#a7a7a7] flex flex-col gap-7"
      >
        <div className="">
          <label htmlFor="name" className="label ">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id=" name"
            placeholder=" Tommy"
            className=" bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50]"
          />

          {errors.name && (
            <span className=" text-red-500 ">{errors.name.message}</span>
          )}
        </div>
        <div className="">
          <label htmlFor="email" className="label ">
            Email
          </label>
          <input
            {...register("email")}
            type="text"
            id=" email"
            placeholder="emal@gmail.com"
            className=" bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50]"
          />
          {errors.email && (
            <span className=" text-red-500 ">{errors.email.message}</span>
          )}
        </div>
        <div className="">
          <label htmlFor="subject" className="label ">
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            id=" subject"
            placeholder=" Tommy"
            className=" bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50]"
          />
          {errors.subject && (
            <span className=" text-red-500 ">{errors.subject.message}</span>
          )}
        </div>
        <div className="">
          <label htmlFor="message" className="label ">
            Message
          </label>
          <textarea
            {...register("message")}
            type="text"
            id=" message"
            placeholder=" Tommy"
            rows={5}
            className=" bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50]"
          />
          {errors.message && (
            <span className=" text-red-500 ">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          className=" cursor-pointer w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-700"
        >
          Sent Message
        </button>
      </form>
    </div>
  );
}
