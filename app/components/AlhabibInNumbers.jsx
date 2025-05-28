"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AlhabibInNumbers = () => {
  // State to track if we're on mobile or not
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle window resize - runs only on client side
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      borderColor: "#FFD700",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.5,
      },
    },
  };

  // Background circle variants
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.8,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 1.2,
      },
    },
  };

  // Stats data for cleaner rendering
  const stats = [
    {
      title: "Rate 4.8 on Trustpilot",
      description: "Based on hundreds of customer reviews.",
      icon: "/svgfiles/verified.svg",
      alt: "Trustpilot Badge",
      width: 120,
      height: 100,
      className: "absolute bottom-4 lg:w-40 right-4",
    },
    {
      title: "5000+ Pilgrims Served",
      description: "Helping Muslims fulfill their Hajj & Umrah journey.",
      icon: "/svgfiles/kabasmall.svg",
      alt: "Kaaba Icon",
      width: 30,
      height: 50,
      className: "absolute bottom-4 lg:w-10 right-4",
    },
    {
      title: "10K+ YouTube Viewers Monthly",
      description: "Guiding travelers with expert content.",
      icon: "/svgfiles/youtube.svg",
      alt: "YouTube Icon",
      width: 20,
      height: 40,
      className: "absolute bottom-4 lg:w-8 right-4",
    },
    {
      title: "70+ Exclusive Hotel Partnerships",
      description: "From budget to 5-star stays near Haram",
      icon: "/svgfiles/hotel.svg",
      alt: "Hotel Icon",
      width: 20,
      height: 40,
      className: "absolute bottom-4 lg:w-8 right-4",
    },
  ];

  return (
    <>
      <section
        className="relative bg-white border-yellow-600 border md:border-gray-200 my-10 lg:max-w-7xl  rounded-2xl
         px-4 w-[95%] mx-auto py-14 shadow-xl  md:px-16 overflow-hidden"
        style={{
          backgroundImage: "var(--grid-bg)",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Original Vector Image (kept for mobile) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/alhabibImages/Vector35.png"
            alt="Vector Background"
            fill
            className="object-contain md:hidden"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading with Animation */}
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="text-primary-color
             text-4xl md:text-4xl font-bold mb-12 text-center"
          >
            Al Habib Travel{" "}
            <span className="text-yellow-600"> in Numbers </span>
          </motion.h2>

          {/* Cards wrapper with stagger animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 lg:gap-8 md:flex-row md:justify-between "
          >
            {stats.map((stat, index) => {
              // Calculate appropriate classes based on index and screen size
              let extraClasses = "mx-auto md:mx-0 ";
              if (index === 1)
                extraClasses += " md:ml-0 md:mx-0 md:mt-0 mt-0 sm:mt-5";
              if (index === 2) extraClasses += " md:mx-0 md:mt-0 sm:-mt-5";
              if (index === 3) extraClasses += " md:mx-0 md:mt-0 mt-5 sm:mt-0";

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`bg-white    border border-yellow-600  relative rounded-xl 
                    shadow-md p-5 w-full max-w-[300px] ${extraClasses}`}
                >
                  <h3 className="text-yellow-600 text-lg lg:text-xl font-semibold   mb-1">
                    {stat.title}
                  </h3>
                  <p className=" lg:text-lg text-gray-600 mb-5">
                    {stat.description}
                  </p>
                  <motion.div variants={iconVariants}>
                    <Image
                      src={stat.icon}
                      alt={stat.alt}
                      width={stat.width}
                      height={stat.height}
                      className={stat.className}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="h-0.5 w-full bg-gray-100"></div>
    </>
  );
};

export default AlhabibInNumbers;
