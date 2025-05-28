"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
  Zoom,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import "./styles/gallaryStyles.css";

// Image data with captions
const galleryImages = [
  
  { src: "/alhabibImages/fm3.png", caption: "Innovative Concepts" },
  
  { src: "/alhabibImages/fm2.png", caption: "Contemporary Design" },
  
  { src: "/alhabibImages/fm1.png", caption: "Elegant Spaces" }, 
  { src: "/alhabibImages/wa1.jpeg", caption: "Beautiful Architecture" }, 
  { src: "/alhabibImages/wa3.jpeg", caption: "Modern Aesthetics" },
  { src: "/alhabibImages/wa4.jpeg", caption: "Stunning Details" },
];

export default function ImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Simulate loading images
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  return (
    <div
      className="text-center max-w-7xl mx-auto border px-2 lg:px-10 py-3 pb-10   rounded-xl shadow-lg  "
      style={{
        backgroundImage: "var(--grid-bg)",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Gallery Header with animation */}
      <div className="relative overflow-hidden  py-4">
        <h2 className="font-bold text-3xl md:text-4xl  mb-3 inline-block relative">
          <span
            className="animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Image
          </span>{" "}
          <span
            className="text-yellow-600 animate-fade-in opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Gallery
          </span>
        </h2>

        <p className="text-sm text-yellow-600 animate-bounce">
          Moments of joy from our beloved travelers.
        </p>
      </div>

      {/* Loading spinner */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-600"></div>
        </div>
      )}

      {/* Main gallery container */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Main Swiper with zoom and effects */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          pagination={{
            type: "progressbar",
          }}
          zoom={{
            maxRatio: 3,
            minRatio: 1,
          }}
          autoplay={
            isAutoplay
              ? {
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[
            Autoplay,
            EffectCoverflow,
            FreeMode,
            Navigation,
            Pagination,
            Thumbs,
            Zoom,
          ]}
          onSlideChange={handleSlideChange}
          className="mySwiper2 rounded-lg shadow-xl mb-4"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 transform translate-y-full transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-lg font-medium">{image.caption}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls bar */}
        <div className="flex justify-between items-center mb-4 px-2">
          <div className="text-sm text-gray-600">
            Family {activeIndex + 1} of {galleryImages.length}
          </div>
        </div>

        {/* Thumbnail carousel */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={2.5}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper rounded-md"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? "opacity-100 border-2 border-yellow-600 scale-95"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover h-20"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="hidden md:block text-gray-500 text-sm mt-2">
          Click on image to zoom, drag to explore
        </p>
      </div>
    </div>
  );
}
