import React, { useState } from 'react'
import { slides } from '../Constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  useGSAP(() => {
    gsap.to(".slider-track", {
      x: `-${currentSlide * 63}vw`,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out",
    })

    gsap.fromTo(
      `.slider-item:nth-child(${currentSlide + 1}) img`,
      { scale: 2 },
      {
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    )
  }, [currentSlide])

  return (
    <div className="relative overflow-x-hidden">
      <div className="w-full relative lg:h-[60vh] md:h-[40vh] h-[60vh]">
        <div className="absolute top-0 left-0 w-full">
          <div className="slider-track flex items-center gap-[3vw] lg:h-[60vh] md:h-[40vh] h-[60vh]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="slider-item w-[60vw] h-full flex-none relative overflow-hidden"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute w-full h-20 bottom-0 left-0 bg-black bg-opacity-90 px-5">
                  <div className="flex h-full justify-between items-center">
                    <div className="flex items-center gap-2">
                      <p>{index + 1}.</p>
                      <p>{slide.title}</p>
                    </div>
                    <div className="flex items-center gap-5 cursor-pointer">
                      <p>Preview Project</p>
                      <img
                        className="w-7 md:w-10"
                        src="/images/arrowupright.svg"
                        alt="Arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex mt-10 text-white-50 justify-end gap-5 md:-translate-x-32 -translate-x-5">
        <div
          onClick={prevSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex items-center justify-center"
        >
          <img src="/images/CaretLeft.svg" alt="Previous" className="w-5 h-5" />
        </div>
        <div
          onClick={nextSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex items-center justify-center"
        >
          <img src="/images/CaretRight.svg" alt="Next" className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}

export default Carousel
