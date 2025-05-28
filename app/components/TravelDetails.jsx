// ModernTravelDetails.jsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, X } from "lucide-react";

// Data for inclusions
const inclusionData = [
  {
    title: "Flights for Umrah",
    content:
      "Our Umrah packages include flights from London, Manchester, Birmingham, Glasgow, and Edinburgh to Jeddah, with return flights from Madinah. We partner with top airlines, including Qatar Airways, Saudi Airlines, Emirates, Etihad, and Gulf Air, ensuring a comfortable journey. Plus, we provide 30kg free baggage per person for your convenience.",
    icon: "/alhabibImages/Icons/airplane.png",
  },
  {
    title: "Visa Processing",
    content:
      "All our Umrah packages include the visa for all pilgrims. Al Habib Travel handles the entire application process and ensures approval. To apply, simply email a passport picture and a clear face picture—no need to send physical documents. Visas are available for all nationalities, including British, European, Asian, and African travelers.",
    icon: "/alhabibImages/Icons/passport (1).png",
  },
  {
    title: "Accommodation",
    content:
      "Stay in premium hotels near Haram Sharif in Makkah and Madinah, all within 5-10 minutes walking distance. We offer luxurious hotels with Haram & Kaaba views and 4-star budget-friendly options close to Masjid Al Haram. Have a hotel preference? Let our agents know, and we’ll arrange it for you!",
    icon: "/alhabibImages/Icons/Hotel Black Icon.png",
  },
  {
    title: "Transportation",
    content:
      "Upon arrival at Jeddah or Madinah Airport, our driver will pick you up and take you to your Makkah or Madinah hotel as per your itinerary. Travel between Makkah and Madinah via private car or the Haramain High-Speed Train. We also provide guided Ziyarah tours to must-visit Islamic sites. Submit the lead form or directly call us for more details.",
    icon: "/alhabibImages/Icons/Car Cyan icon.png",
  },
];

export default function TravelDetails() {
  const [activeInclusions, setActiveInclusions] = useState({});

  const toggleInclusion = (index) => {
    setActiveInclusions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-5 mt-2 rounded-t-2xl lg:py-8"    style={{
      backgroundImage: "var(--grid-bg)",
      backgroundRepeat: "repeat",
    }}>
      <div className="w-full max-w-7xl px-4 mx-auto"    style={{
          backgroundImage: "var(--grid-bg)",
          backgroundRepeat: "repeat",
        }} >
        {/* Heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold relative mt-1 inline-block">
          What’s Included  <span className="text-[#D4A10F]">in Your Umrah Package</span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#D4A10F]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </h1>
          {/* <p className="text-gray-600 mt-8 max-w-xl  mx-auto">
            Discover our comprehensive Umrah packages designed for a spiritually
            fulfilling journey
          </p> */}
        </motion.div>

        {/* Includes & Exclusive Sections */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Includes */}
          <motion.div
            className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#D4A10F] text-white py-4 px-6">
              <div className="flex items-center">
                <Check className="mr-2" size={20} />
                <h2 className="text-xl font-bold"> Packages Includes</h2>
              </div>
            </div>
            <div className="p-4">
              {inclusionData.map((item, index) => (
                <motion.div
                  key={`inclusion-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="mb-3"
                >
                  <div
                    onClick={() => toggleInclusion(index)}
                    className={`flex items-center 
                      justify-between p-4 rounded-lg cursor-pointer
                       transition-all duration-300 ${
                         activeInclusions[index]
                           ? "bg-gray-200 text-primary-color border-l-4 border-[#D4A10F]"
                           : "bg-gray-50 hover:bg-gray-200"
                       }`}
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3 ">
                        <img src={item.icon} alt="" className="w-7 h-7" />
                      </span>
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: activeInclusions[index] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} className="text-gray-500" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeInclusions[index] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 md:pl-12 text-gray-600 border-l border-r border-b rounded-b-lg">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
