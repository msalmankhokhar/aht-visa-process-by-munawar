"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import EnquiryComponent from "./VisaForm";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // Bubble animation variants
  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 0.7,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 1,
        ease: "easeOut",
      },
    }),
    float: (i) => ({
      y: [0, -15, 0],
      transition: {
        delay: i * 0.2,
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    }),
  };
  const slides = [
    {
      id: 1,
      src: "/alhabibImages/MakkahZiyaarat/JabalRehmat.webp",
      alt: "Decorative stone image 2",
    },
    { id: 2, src: "/svgfiles/stone.svg", alt: "Decorative stone image 1" },

    {
      id: 3,
      src: "/alhabibImages/MakkahZiyaarat/MaidaneArafat.webp",
      alt: "Decorative stone image 3",
    },

    {
      id: 4,
      src: "/alhabibImages/MakkahZiyaarat/MinaandMuzdalifah.webp",
      alt: "Decorative stone image 3",
    },

    {
      id: 5,
      src: "/alhabibImages/MakkahZiyaarat/CaveofHira.jpg",
      alt: "Decorative stone image 3",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const goToPrevSlide = () =>
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    }),
  };

  const imageAnimation = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility
  const handleFormSubmit = () => {
    setShowPopup(!showPopup); // Close the popup after form submission
  };

  return (
    <>
      {/* Mobile View */}
      <div
        className="md:hidden  shadow-2xl  relative flex flex-col 
      justify-between bg-gradient-to-b from-[#004D4F] to-[#006D6F] text-white
          overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-mini.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#004D4F",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="z-10  px-5 text-center pt-10">
          <h1 className="text-2xl font-[Poppins] font-semibold leading mb-1">
            All Inclusive Umrah <br />
            <span className="">Package with Guided Tour.</span>
          </h1>
          <p className="mt-4   text-sm font-[Coolvetica] leading-relaxed">
            All packages include flights, visa processing, accommodation near
            Haram, ground transport, and a guided tour. Meals are optional.
          </p>

          <div
            className="flex justify-center gap-4
            items-center   mt-1 ml-12 "
          >
            <button
              onClick={handleFormSubmit}
              // Open the form popup
              className="  bg-yellow-500 text-white
                             px-4  
                             py-2  mt-4 rounded-4xl   
                             shadow-lg
                              hover:bg-yellow-600
                               text- font-bold 
                               transition 
                              duration-initial 
                              ease-in-out
                               font-[Poppins]
                                
                               "
            >
              Get Umrah Quote
            </button>
            <img src="/svgfiles/leftarrow.svg" alt="" className="  h-10" />
          </div>
        </div>

        {/* Image Section */}
        <div
          className="relative mt-6 flex justify-center
         w-full items-end z-0"
        >
          <img
            src="/images/Ellipse-mini.png"
            alt="Ellipse"
            className="absolute bottom-0 z-0 w-64 h-64 
            object-cover"
          />
          <img
            src="/images/Clock-mini.png"
            alt="Clock Tower"
            className="relative w-full object-top
             z-10 h-[17.5rem] "
          />
        </div>
      </div>




      {/* Desktop View */}

      <div
        className="w-full relative 
       overflow-hidden top-2 bg-gradient-to-r from-[#004D4F] to-[#006D6F]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/alhabibImages/MadinahZiyaarat/the-kaaba-in-mecca-photo.jpg')",
            opacity: 0.2,
          }}
        ></div>
        {/* Bubble shapes similar to the reference image */}
        <motion.div
          custom={0}
          variants={bubbleVariants}
          initial="hidden"
          animate={["visible", "float"]}
          className="absolute top-20 right-20 w-32
           h-32 rounded-full bg-[#005a5c] opacity-40 z-0"
        ></motion.div>

        <motion.div
          custom={1}
          variants={bubbleVariants}
          initial="hidden"
          animate={["visible", "float"]}
          className="absolute bottom-28 left-16 w-40 h-40 rounded-full bg-[#005a5c] opacity-30 z-0"
        ></motion.div>

        <motion.div
          custom={2}
          variants={bubbleVariants}
          initial="hidden"
          animate={["visible", "float"]}
          className="absolute top-24 left-1/4 w-16 h-16 rounded-full bg-[#007D80] opacity-30 z-0"
        ></motion.div>

        <motion.div
          custom={3}
          variants={bubbleVariants}
          initial="hidden"
          animate={["visible", "float"]}
          className="absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-[#007D80] opacity-20 z-0"
        ></motion.div>

        <motion.div
          custom={4}
          variants={bubbleVariants}
          initial="hidden"
          animate={["visible", "float"]}
          className="absolute top-1/2 right-40 w-12 h-12 rounded-full bg-[#D4A10F] opacity-10 z-0"
        ></motion.div>

        <div className="hidden md:block w-full py-20 relative z-10">
          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 px-8 lg:px-16 max-w-7xl mx-auto relative">
            {/* Left Content - Text Section */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <motion.div
                initial="hidden"
                animate="visible"
                className="relative"
              >
                {/* Decorative accent */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-2 bg-[#D4A10F] mb-6 rounded-full"
                ></motion.div>

                <motion.h2
                  custom={0}
                  variants={fadeIn}
                  className="text-white text-5xl font-bold leading-tight mb-6"
                >
                  All Inclusive{" "}
                  <span className="text-[#D4A10F]">Umrah Package</span>
                  <br />
                  with Guided Tour.
                </motion.h2>

                <motion.p
                  custom={1}
                  variants={fadeIn}
                  className="text-[#E1F4F5] text-lg mb-10 leading-relaxed"
                >
                  All packages include flights, visa processing,
                  <br />
                  accommodation near Haram, ground transport,
                  <br />
                  and a guided tour. Meals are optional.
                </motion.p>

                <motion.div
                  custom={2}
                  variants={fadeIn}
                  className="flex items-center"
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mr-4"
                  >
                    {/* Fixed the SVG reference */}
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                    >
                      <path
                        d="M25 5L30 15L40 17L32.5 25L35 35L25 30L15 35L17.5 25L10 17L20 15L25 5Z"
                        fill="#D4A10F"
                      />
                    </svg>
                  </motion.div>

                  <Link href="" className="relative group">
                    <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#D4A10F] to-[#FFD700] blur-md opacity-70 group-hover:opacity-100 transition duration-300"></span>
                    <button
                      className="relative bg-[#D4A10F] py-4 px-8 rounded-2xl text-xl font-bold
                     text-white shadow-xl group-hover:scale-105 transition duration-300"
                      onClick={handleFormSubmit} // Open the form popup
                    >
                      Get Umrah Quote
                    </button>
                  </Link>
                </motion.div>

                {/* Stats cards */}
              </motion.div>
            </div>

            {/* Right Content - Image Slider */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageAnimation}
              className="md:w-1/2 relative"
              onMouseEnter={pauseAutoPlay}
              onMouseLeave={resumeAutoPlay}
            >
              {/* Main image container */}
              <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
                {/* Animated gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4A10F] via-[#FFD700] to-[#D4A10F] rounded-3xl blur-sm opacity-60 group-hover:opacity-100 animate-gradient-x z-0"></div>

                {/* Image slider */}
                <div className=" ">
                  {slides.map((slide, index) => (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: index === currentSlide ? 1 : 0,
                        scale: index === currentSlide ? 1 : 1.1,
                      }}
                      transition={{
                        opacity: { duration: 0.8 },
                        scale: { duration: 1.2 },
                      }}
                      className="absolute w-full h-full"
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />

                      {/* Caption overlay */}
                      {index === currentSlide && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
                        >
                          <h3 className="text-white text-xl font-semibold">
                            {slide.title}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {slide.description}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20">
                  <button
                    onClick={goToPrevSlide}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goToNextSlide}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 z-20">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className="relative"
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <div
                        className={`h-1 w-8 rounded-full ${index === currentSlide
                            ? "bg-[#D4A10F]"
                            : "bg-white/50"
                          } transition-all duration-300`}
                      ></div>
                      {index === currentSlide && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -inset-1 bg-[#D4A10F]/30 rounded-full"
                        ></motion.div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/*   render the InquiryForm as a popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center popup-container justify-center z-50">
          <EnquiryComponent closePopup={handleFormSubmit} />
        </div>
      )}
    </>
  );
}
