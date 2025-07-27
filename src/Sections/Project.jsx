import React from 'react'
import GradientSphere from "../Components/GradientSphere";
import TitleHeader from '../Components/TitleHeader';
import Carousel from '../Components/Carousel';


function Project() {
  return (
    <section className=' h-full w-full flex-center relative'id='projects'>
        <GradientSphere
        sphere1Class={" projects-gradient-sphere projects-sphere-1"}
        sphere2Class={"projects-gradient-sphere projects-sphere-2"}
      />
      <div className="w-full md:my-40 my-20 relative z-10">
      <div className=" container mx-auto md:p-0 px-5">
          <TitleHeader
            title={"My Projects"}
            number={"03"}
            text={"Check My Recent Projects For Your Goal."}
          />
        </div>
        <div className=" md:mt-20 mt-10">
            <Carousel/>
        </div>
      </div>
    </section>
  )
}

export default Project
