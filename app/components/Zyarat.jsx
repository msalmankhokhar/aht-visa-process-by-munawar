"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhoneCall, Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { whatsappChatLink } from "@/constants";

const zyaratdata = {
  makkah: [
    {
      name: "Jabal al-Thawr",
      src: "/alhabibImages/MakkahZiyaarat/JabalAlThawr.jpg",
    },
    {
      name: "Jabal-e-Rehmat",
      src: "/alhabibImages/MakkahZiyaarat/JabalRehmat.webp",
    },
    {
      name: "Mina and Muzdalifah",
      src: "/alhabibImages/MakkahZiyaarat/MinaandMuzdalifah.webp",
    },
    {
      name: "Masjid Shajra",
      src: "/alhabibImages/MakkahZiyaarat/MasjidShajra.webp",
    },
    {
      name: "Maidan-e-Arafat",
      src: "/alhabibImages/MakkahZiyaarat/MaidaneArafat.webp",
    },
    {
      name: "Canal of Zubeidah",
      src: "/alhabibImages/MakkahZiyaarat/CanalZubeidah.jpg",
    },
    {
      name: "Cave of Hira",
      src: "/alhabibImages/MakkahZiyaarat/CaveofHira.jpg",
    },
    {
      name: "Masjid Jinn",
      src: "/alhabibImages/MakkahZiyaarat/MasjidJinn.jpg",
    },
  ],
  madina: [
    {
      name: "Jabal al-Uhud",
      src: "/alhabibImages/MadinahZiyaarat/JabalUhud.webp",
    },
    {
      name: "Saba'a Masjid",
      src: "/alhabibImages/MadinahZiyaarat/SabaMasjid.jpg",
    },
    {
      name: "Masjid Quba",
      src: "/alhabibImages/MadinahZiyaarat/MasjidQuba.jpg",
    },
    {
      name: "Masjid Juma",
      src: "/alhabibImages/MadinahZiyaarat/MasjidJuma.jpg",
    },
    {
      name: "Masjid Qiblatain",
      src: "/alhabibImages/MadinahZiyaarat/MasjidQiblatian.jpg",
    },
    {
      name: "Garden of dates",
      src: "/alhabibImages/MadinahZiyaarat/Garden.webp",
    },
  ],
};

const ZiyaratSlider = () => {
  const [selectedTab, setSelectedTab] = useState("makkah");
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const ziyarat = zyaratdata[selectedTab];

  const scrollToIndex = (index) => {
    const itemsLength = ziyarat.length;
    if (index < 0) index = itemsLength - 1;
    if (index >= itemsLength) index = 0;

    setActiveIndex(index);
    const scrollAmount = index * 320;
    sliderRef.current?.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollLeft = sliderRef.current?.scrollLeft ?? 0;
    const newIndex = Math.round(scrollLeft / 320);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [selectedTab]);

  useEffect(() => {
    setActiveIndex(0);
    sliderRef.current?.scrollTo({ left: 0 });
  }, [selectedTab]);

  const handlePhoneClick = () => {
    window.location.href = "tel:+923470063865";
  };

  const handleWhatsAppClick = () => {
    window.open(whatsappChatLink, "_blank");
  };

  return (
    <>
      <div
        className="bg-white shadow-2xl md:shadow-none  
     py-10 border md:border-none lg:max-w-7xl
      mx-auto px-1  rounded-2xl   mt-4 "
        style={{
          backgroundImage: "var(--grid-bg)",
          backgroundRepeat: "repeat",
        }}
      >
        <p className="text-2xl  lg:text-4xl text-center font-bold pb-4">
          {" "}
          <span className="text-primary-color text-wrap">What</span>{" "}
          <span className="text-yellow-600 ">Zyarats We</span>{" "}
          <span className="text-primary-color"> Provide</span>{" "}
        </p>
        <div className="mb-6  h-0.5 w-56 md:w-80 mx-auto bg-yellow-500"></div>

        <div className="max-w-6xl mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-6 gap-6">
            {["makkah", "madina"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 text-lg     border transition-all ${
                  selectedTab === tab
                    ? "bg-gradient-to-r from-teal-700 to-primary-color text-white  shadow-lg"
                    : "bg-gray-100 text-yellow-600 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab === "makkah" ? "Makkah" : "Madinah"}
              </button>
            ))}
          </div>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {ziyarat.map((item, index) => (
              <div
                key={index}
                className="flex-none   snap-start mr-6 transition-all duration-300 transform"
              >
                <div
                  className=" 
               rounded-xl shadow-lg p-4 h-full flex border-2 w-[20.5rem]  flex-col"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="rounded-lg h-48   w-full object-cover mb-4"
                  />
                  <h3 className="text-lg   text-gray-600 text-center">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center mt-6 gap-6">
            <button
              onClick={() => scrollToIndex(activeIndex - 1)}
              className="p-2 bg-white rounded-full shadow text-gray-700 hover:text-yellow-500"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {ziyarat.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-gradient-to-r from-teal-400 to-primary-color"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToIndex(activeIndex + 1)}
              className="p-2 bg-white rounded-full shadow text-gray-700 hover:text-yellow-500"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        {/* 
        <!-- Make sure you have Tailwind CSS included in your project -->
<!-- You can use Heroicons or Font Awesome for the icons --> */}
        <div class="flex md:hidden justify-around w-[90%] mx-auto items-center space-x-4 bg-white shadow-xl rounded-lg px-4 py-3 mt-6">
          <div class="flex flex-col">
            <span class="text-primary-color font-bold text-lg">
              Talk with Agent
            </span>
            <span class="text-sm text-[#CC9B06] text-center font-medium">
              Available 24/7
            </span>
          </div>
          <div class="flex space-x-4">
            <button
              onClick={handlePhoneClick}
              class="bg-[#C49B0D] text-white p-2 rounded-tl-md rounded-br-md"
            >
              {/* <!-- Phone Icon --> */}
              <PhoneCall />
            </button>
            <button
              onClick={handleWhatsAppClick}
              class="bg-[#25D366] text-white p-2 rounded-tr-md rounded-bl-md"
            >
              {/* <!-- WhatsApp Icon --> */}
              <BsWhatsapp className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-1 hidden lg:block bg-gray-100 my-3"></div>
    </>
  );
};

export default ZiyaratSlider;
