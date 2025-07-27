import React from "react";
import GradientSphere from "../Components/GradientSphere";
import "../index.css";
import TitleHeader from "../Components/TitleHeader";
import { Canvas } from "@react-three/fiber";
import { Alien } from "../Components/models/Alien";
import { OrbitControls } from "@react-three/drei";
import { bentoSocialLinks } from "../Constants";
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const About = () => {


    useGSAP(()=>{

        // animation for cards
        gsap.from('#card',{
            opacity:0 ,
            y:50,
            stagger:0.2,
            duration:0.8,
            ease:"power3.inOut",
            scrollTrigger:{
                trigger:"#about",
                start:'top top',
            }
        });

        // text animation
        gsap.from(".animated-text",{
            y:20,
            stagger:0.15,
            duration:0.6,
            ease:"power3.inOut",
            scrollTrigger:{
                trigger:"#about",
                start:'top top',
            }
        })
    },[]);

  return (
    <section id="about" className=" flex-center relative md:p-0 px-5 ">
      <GradientSphere
        sphere1Class={" about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />
      <div className=" container w-full h-full md:my-40 my-20 relative  z-10">
        <TitleHeader
          title={"About Me"}
          text={"Passionate Creator, Lifelong Learning"}
          number={"01"}
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 h-full w-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    alt=""
                    className=" md:w-32 w-16 flower"
                  />
                </div>
                <div className=" mt-5">
                  <h1 className=" text-blue-50 md:text-5xl text-3xl">
                    Tejas Babar
                  </h1>
                  <p className=" md:text-2xl  mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae corporis odit vero beatae similique quis eius
                    expedita mollitia voluptates laboriosam.
                  </p>
                </div>
              </div>
            </div>
            {/* 3d model */}
            <div className="md:col-span-5  col-span-12 row-span-5">
              <div className="bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <div className="w-full h-full">
                  <Canvas>
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            {/* web design cardd */}
            <div id="card" className="md:col-span-6  col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 h-full w-full">
                <div className=" flex flex-col h-full justify-center gap-2">
                  <h1 className=" gradient-title md:text-3xl text-2xl font-medium animated-text">
                    Wen Design & Dev
                  </h1>
                  <p className=" md:2xl max-w-96 animated-text">
                    Cleanly Design , Conversion-focused, and Build for easy
                    updates.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* UI design cardd */}
            <div id="card" className="md:col-span-6  col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 h-full w-full">
                <div className=" flex flex-col h-full justify-center gap-2">
                  <h1 className=" gradient-title md:text-3xl text-2xl font-medium animated-text ">
                    UI/UX Design
                  </h1>
                  <p className=" md:2xl max-w-96 animated-text">
                    Cleanly Design , Conversion-focused, and Build for easy
                    updates.
                  </p>
                </div>
              </div>
            </div>
                {/* motivation design cardd */}
            <div  id="card" className="md:col-span-4  col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 h-full w-full">
                <div className=" flex justify-between flex-col h-full">
                    {
                        [
                            "BE YOURSELF!",
                            "BE DIFFERENT!",
                            "BUILD DIFFERENT! "
                        ].map(
                            (text , index)=>(
                                <h1 className=" gradient-title md:text-5xl text-3xl font-bold animated-text" key={index}> {text}</h1>
                            )
                        )
                    }
                </div>
              </div>
            </div>  

            {/* bentoSocialLinks   */}

            {
                bentoSocialLinks.map((item,index)=>(
                    <div key={index} className="md:col-span-4  col-span-12 row-span-2">
                        <div className="bg-black-300 rounded-2xl p-7 h-full w-full group cursor-pointer:">
                            <div className=" flex justify-between items-center h-full">
                                <div className=" flex items-center md:gap-5">
                                    <img src={item.icon} alt={item.icon} />
                                    <h1 className=" gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">{item.name}</h1>
                                </div>
                                <div className=" lg:block md:hidden group-hover:translate-x-3 group-hover:-translate-y-2 transition-transform">
                                    <img src="/images/arrowupright.svg" alt="arrow up" className=" scale-50 lg:scale-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
