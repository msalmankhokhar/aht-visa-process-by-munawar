"use client";

import React, { useEffect, useRef } from "react";

const videoData = [
  { videoLink: "/alhabibVideos/vid4.mp4" },
  { videoLink: "/alhabibVideos/vid1.mp4" },

  { videoLink: "/alhabibVideos/vid2.mp4" },
  { videoLink: "/alhabibVideos/vid3.mp4" },
];

function VideoTestimonial() {
  const videoRefs = useRef([]);

  const handlePlay = (playingIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== playingIndex && video && !video.paused) {
        video.pause();
      }
    });
  };

  useEffect(() => {
    if (window.innerWidth >= 768) return; // Only apply on mobile screens

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75, // Play only when 75% visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          video.play().catch(() => {}); // Autoplay might be blocked silently
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div
      className="bg-white w-full border 
    rounded-lg md:border-none md:shadow-none shadow-lg mb-10"
    >
      <div className="w-full lg:max-w-7xl mx-auto lg:text-center md:px-6 lg:px-8 py-8">
        <div className="w-[95%] md:w-[70%] mx-auto">
          <div className="text-center  text-3xl md:text-4xl px-4 font-bold text-nowrap">
            Watch <span className="text-[#D4A10F]"> Real Stories </span>!
          </div>
          <div className="mt-3 h-0.5  w-[80%] mx-auto bg-yellow-500"></div>
        </div>

        <div className="flex mt-7 justify-center items-center w-[90%] md:w-[60%] lg:w-[45%] mx-auto md:gap-6 my-5 flex-col gap-10  md:flex-row">
          {videoData.map((item, index) => (
            <video
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full border-t-2 md:border-0 pt-2 p-1 md:w-[52%] h-[23rem] lg:h-[29rem] object-contain rounded-lg"
              src={item.videoLink}
              controls
              playsInline
              onPlay={() => handlePlay(index)}
            ></video>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoTestimonial;
