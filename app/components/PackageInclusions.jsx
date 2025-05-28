// ModernTravelDetails.jsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, X } from "lucide-react";

const inclusionData = [
  
  
  {
    title: "Rawdah Permit",
    desc: "To pray in the Rawdah, you will need a Rawdah permit, which we will help you obtain without any delay.",
    icon: "🔖",
  },
  {
    title: "Zam Zam 5 Ltr",
    desc: "Receive a 5-litre bottle of Zam-Zam water as a return gift from us. Drink from it or bring it back home with you.",
    icon: "🧴",
  },
  {
    title: "Checked Baggage",
    desc: "The first checked baggage of 28kg is included in your package, along with 20kg baggage and 8kg hand carry.",
    icon: "🧳",
  },
  {
    title: "Umrah Kit",
    desc: "An Umrah kit will be provided that contains essential items for the journey, such as different essential bags, a 3-point travel adapter, and more.",
    icon: "🎒",
  },


  // exclusionData
  {
    title: "Meal",
    desc: "Meals are not included in the packages. You can add them to your package by requesting our agent. The charges will be £7 per person per day for breakfast only.",
    icon: "🍽️",
  },
  {
    title: "Laundry",
    desc: "Laundry services are not included in the package.",
    icon: "👕",
  },
  {
    title: "TCS & GST",
    desc: "GST & TCS are applicable taxes not included in your Umrah Package Price.",
    icon: "💰",
  },
  {
    title: "Ziyarat's Transport",
    desc: "Transport for Ziyarat in Makkah & Madinah is not included. You can add it to the package by paying £25 per person for both cities.",
    icon: "🚐",
  },
  {
    title: "Additional Checked Baggage",
    desc: "If your luggage exceeds the first checked baggage of 28kg, you will need to pay at the airport. Additional baggage is not included.",
    icon: "🧳",
  },
  {
    title: "Room Service",
    desc: "Room service, including food, drinks, or other items delivered to your hotel room, is not included in the Umrah package and must be paid directly to the hotel on a per-use basis.",
    icon: "🛎️",
  },
  {
    title: "Travel Insurance",
    desc: "Travel insurance is not included in the package. You are advised to purchase a suitable policy for medical coverage, trip cancellations, and other unforeseen circumstances.",
    icon: "🩺",
  },
];

// Data for Exclusions
const exclusionData = [

   
];

export default function TravelDetails() {
  const [activeInclusions, setActiveInclusions] = useState({});
  const [activeExclusions, setActiveExclusions] = useState({});

  const toggleInclusion = (index) => {
    setActiveInclusions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleExclusion = (index) => {
    setActiveExclusions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-gradient-to-b border 
     rounded-2xl md:border-none md:shadow-none my-10 shadow-sm mx-1 from-white to-gray-50 py-5 lg:py-16">
      <div
        className="w-full max-w-7xl px-4 mx-auto"
        
      >
        {/* Heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold relative inline-block">
              Umrah <span className="text-[#D4A10F]">Packages</span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#D4A10F]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </h1>
          <p className="text-gray-600 mt-8 max-w-xl  mx-auto">
            Discover our comprehensive Umrah packages designed for a spiritually
            fulfilling journey
          </p>
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
                <h2 className="text-xl font-bold">Umrah Packages Includes</h2>
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
                      <span className="text-xl mr-3">{item.icon}</span>
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
                          {item.desc}
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
