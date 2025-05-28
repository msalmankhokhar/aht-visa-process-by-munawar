"use client";
import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Accommodation() {
  // Data for hotels
  const hotelData = {
    makkah: {
      5: [
        {
          name: "Anjum Makkah",
          src: "/alhabibImages/MakkahHotels/5STAR/Anjum Makkah.jpg",
        },
        {
          name: "Pullman ZamZam",
          src: "/alhabibImages/MakkahHotels/5STAR/pullmanzamzam.jpeg",
        },
        {
          name: "Jabal Omar Hyatt",
          src: "/alhabibImages/MakkahHotels/5STAR/Jabal Omar Hyatt.jpg",
        },
        {
         


          name: "Swissotel Makkah",
          src: "/alhabibImages/MakkahHotels/5STAR/swiss.jpeg",
        },
      ],
      4: [
        {
          name: "Al Ebaa Hotel",
          src: "/alhabibImages/MakkahHotels/4STAR/Al Ebaa Hotel.png",
        },
        {
          name: "Dar Al Eiman Grand",
          src: "/alhabibImages/MakkahHotels/4STAR/Dar Al Eiman Grand.jpg",
        },
        {
          name: "DoubleTree by Hilton",
          src: "/alhabibImages/MakkahHotels/4STAR/DoubleTree by Hilton.jpg",
        },
        {
          name: "Voco Makkah",
          src: "/alhabibImages/MakkahHotels/4STAR/Voco Makkah.jpg",
        },
      ],
      3: [
        {
          name: "Dar Al Eiman Al Andalus",
          src: "/alhabibImages/MakkahHotels/3STAR/Dar Al Eiman Al Andalus.webp",
        },
        {
          name: "Nawazi Ajyad Makkah",
          src: "/alhabibImages/MakkahHotels/3STAR/Nawazi Ajyad Makkah.webp",
        },
        {
          name: "Emaar Al Khalil Makkah",
          src: "/alhabibImages/MakkahHotels/3STAR/Emaar Al Khalil Makkah.jpg",
        },
        {
          name: "Emaar Al Manar Makkah",
          src: "/alhabibImages/MakkahHotels/3STAR/Emaar Al Manar Makkah.jpg",
        },
      ],
    },
    madina: {
      5: [
        {
          name: "The Oberoi Madina",
          src: "/alhabibImages/MadinaHotels/5STAR/The Oberoi Madina.jpg",
        },
        {
          name: "Anwar Al Madinah Mövenpick",
          src: "/alhabibImages/MadinaHotels/5STAR/Anwar Al Madinah Mövenpick.jpg",
        },
        {
          name: "Pullman ZamZam Madinah",
          src: "/alhabibImages/MadinaHotels/5STAR/Pullman ZamZam Madinah.jpg",
        },
        {
          name: "Sofitel Shahd Al Madinah",
          src: "/alhabibImages/MadinaHotels/5STAR/Sofitel Shahd Al Madinah.jpg",
        },
      ],
      4: [
        {
          name: "Saja Al Madinah",
          src: "/alhabibImages/MadinaHotels/4STAR/Saja Al Madinah.jpg",
        },
        {
          name: "Golden Tulip Al Mektan",
          src: "/alhabibImages/MadinaHotels/4STAR/Golden Tulip Al Mektan.jpg",
        },
        {
          name: "Dar Al Eiman Elite",
          src: "/alhabibImages/MadinaHotels/4STAR/Dar Al Eiman Elite.jpg",
        },
        {
          name: "Zowar International Madinah",
          src: "/alhabibImages/MadinaHotels/4STAR/Zowar-International-Hotel-1.png",
        },
      ],
      3: [
        {
          name: "Grand Plaza Madinah",
          src: "/alhabibImages/MadinaHotels/3STAR/Grand Plaza Madinah.jpg",
        },
        {
          name: "Zaha Al Madinah",
          src: "/alhabibImages/MadinaHotels/3STAR/Zaha Al Madinah.jpg",
        },
        {
          name: "Dar Al Eiman Taibah",
          src: "/alhabibImages/MadinaHotels/3STAR/Dar Al Eiman Taibah.jpg",
        },
        {
          name: "Odst Hotel Al - Madinah",
          src: "/alhabibImages/MadinaHotels/3STAR/Odst Hotel Al - Madinah.jpg",
        },
      ],
    },
  };

  // State management
  const [city, setCity] = useState("makkah");
  const [star, setStar] = useState("5");
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  // Update filtered hotels when city or star changes
  useEffect(() => {
    if (hotelData[city] && hotelData[city][star]) {
      setFilteredHotels(hotelData[city][star]);
      setActiveIndex(0);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    } else {
      setFilteredHotels([]);
    }
  }, [city, star]);

  // Scroll handling function
  const scrollToIndex = (index) => {
    const itemsLength = filteredHotels.length;
    if (index < 0) index = itemsLength - 1;
    if (index >= itemsLength) index = 0;

    setActiveIndex(index);
    const scrollAmount = index * 320;
    sliderRef.current?.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  // Handle scroll event to update active index
  const handleScroll = () => {
    const scrollLeft = sliderRef.current?.scrollLeft ?? 0;
    const newIndex = Math.round(scrollLeft / 320);
    setActiveIndex(newIndex);
  };

  // Add scroll event listener
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [filteredHotels]);

  return (
    <>
    
<div className="  h-0.5 w-full bg-gray-100 mb-2 lg:mt-10"></div>
<div
  className="bg-  pb-5 px-2 lg:py-5 lg:block scrollbar-hide md:text-center"
  style={{
    backgroundImage: "var(--grid-bg)",
    backgroundRepeat: "repeat",
  }}
>
        <div className="border md:border-0 border-gray-200 rounded-lg shadow-lg md:shadow-none
         py-8 px-6 max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl text-center md:text-4xl lg:text-5xl font-semibold text-[#003C2F]">
            Accommodation
          </h2>
          <p className="text-yellow-600 text-center text-lg animate-bounce opacity-70 md:text-lg mt-2 mb-6">
            Stay Near the Haram
          </p>

          {/* Tabs */}
          <div className="flex items-center gap-2 justify-center max-w-5xl mx-auto mb-8  ">
  {/* City Tabs */}
  <Tabs defaultValue="makkah" onValueChange={(val) => setCity(val)}>
    <TabsList className="bg-[#b98a2f] text-white rounded-sm p-1 flex">
      <TabsTrigger
        value="makkah"
        className={`px-2 py-1 rounded-sm text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-[#b98a2f]`}
      >
        Makkah
      </TabsTrigger>
      <TabsTrigger
        value="madina"
        className={`px-2 py-1 rounded-sm text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-[#b98a2f]`}
      >
        Madinah
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* Star Tabs */}
  <Tabs defaultValue="5" onValueChange={(val) => setStar(val)}>
    <TabsList className="bg-[#b98a2f] text-white rounded-sm p-1 flex">
      <TabsTrigger
        value="5"
        className={`px-2 py-1 rounded-sm text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-[#b98a2f]`}
      >
        5 Star
      </TabsTrigger>
      <TabsTrigger
        value="4"
        className={`px-2 py-1 rounded-sm text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-[#b98a2f]`}
      >
        4 Star
      </TabsTrigger>
      <TabsTrigger
        value="3"
        className={`px-2 py-1 rounded-sm text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-[#b98a2f]`}
      >
        3 Star
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>


          {/* Images / Hotels */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filteredHotels.map((hotel, index) => (
    <div
      key={index}
      className="flex-none snap-start mr-6 transition-all duration-300 transform"
    >
      <div className="rounded-xl shadow-lg p-4 h-full flex border-2 w-[19.8rem]  flex-col">
        <Image
          src={hotel.src}
          alt={hotel.name}
          width={240}
          height={240}
          className="rounded-lg h-48 w-full object-cover mb-4"
        />
        <p className="text-primary-color text-center text-lg  lg:text-lg">{hotel.name}</p>
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
              {filteredHotels.map((_, index) => (
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
      </div>

<div className="h-0.5 w-full bg-gray-100"></div>

    </>
  );
}

export default Accommodation;
