"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Partners() {
  const partners = [
    {
      name: "British Airways",
      logo: "/partners/British Airways LOGO.png",
      maxHeight: "150px",
    },
    {
      name: "Emirates Airlines",
      logo: "/partners/Emirates Airlines LOGO.png",
      maxHeight: "120px",
    },
    {
      name: "Egypt Air",
      logo: "/partners/Egyptair-Logo-2010.svg.png",
      maxHeight: "25px",
    },
    {
      name: "Etihad Airways",
      logo: "/partners/Etihad Airways logo.png",
      maxHeight: "40px",
    },
    {
      name: "Gulf Air",
      logo: "/partners/Gulf Air LOGO.png",
      maxHeight: "90px",
    },
    {
      name: "Oman Airways",
      logo: "/partners/Oman Airways LOGO.png",
      maxHeight: "130px",
    },
    {
      name: "Aegean Airlines",
      logo: "/partners/Agean Airlines LOGO-Photoroom.png",
      maxHeight: "90px",
    },
    {
      name: "Pegasus Airlines",
      logo: "/partners/pegasus logo.png",
      maxHeight: "100px",
    },
    {
      name: "Qatar Airways",
      logo: "/partners/Qatar Airways LOGO.png",
      maxHeight: "40px",
    },
    {
      name: "Royal Jordanian",
      logo: "/partners/Royal Jordanian LOGO.png",
      maxHeight: "110px",
    },
    {
      name: "Saudi Airlines",
      logo: "/partners/Saudi Airline LOGO.png",
      maxHeight: "40px",
    },
    {
      name: "Turkish Airlines",
      logo: "/partners/Turkish_Airlines_logo.png",
      maxHeight: "80px",
    },
  ];

  // State for mobile slider
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll handling function
  const scrollToIndex = (index) => {
    const itemsLength = partners.length;
    if (index < 0) index = itemsLength - 1;
    if (index >= itemsLength) index = 0;

    setActiveIndex(index);

    if (sliderRef.current) {
      const scrollAmount = index * sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Handle scroll event to update active index
  const handleScroll = () => {
    if (!sliderRef.current) return;

    const scrollLeft = sliderRef.current.scrollLeft;
    const itemWidth = sliderRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section
      className="w-full border md:border max-w-7xl mx-auto lg:py-14
     md:shadow-none rounded-lg shadow-xl py-10 md:py-5 px-4 flex flex-col items-center bg-white"
      style={{
        backgroundImage: "var(--grid-bg)",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="text-4xl md:text-4xl font-bold text-emerald-900 mb-3">
        Our <span className="text-yellow-600">Partners</span>
      </div>
      <p className="text-sm animate-bounce text-yellow-600 mb-8 text-center max-w-2xl">
        Trusted by leading brands around the globe.
      </p>

      {/* Mobile View with Slider */}
      {isMobile && (
        <div className="w-full max-w-6xl">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex-none w-full snap-center">
                <div
                  className="bg-white rounded-2xl border mb-3 shadow-lg flex items-center justify-center h-24 mx-4 transition-transform duration-300"
                  style={{ boxShadow: "10px 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain "
                    style={{ maxHeight: partner.maxHeight }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Controls */}
          <div className="flex justify-center items-center mt-9 gap-6">
            <button
              onClick={() => scrollToIndex(activeIndex - 1)}
              className="p-2 bg-white rounded-full shadow text-gray-700 hover:text-yellow-500"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-gradient-to-r from-teal-400 to-emerald-900"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToIndex(activeIndex + 1)}
              className="p-2 bg-white rounded-full shadow text-gray-700
               hover:text-yellow-500"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Desktop Grid View */}
      {!isMobile && (
        <div className="grid grid-cols-1 md:grid-cols-4  gap-8 w-full max-w-6xl">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl  shadow-lg flex items-center justify-center h-24 transition-transform duration-300 hover:scale-105"
              style={{ boxShadow: "10px 10px 30px rgba(0,0,0,0.1)" }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain  "
                style={{ maxHeight: partner.maxHeight }}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Partners;
