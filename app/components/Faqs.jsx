"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
// FAQ data with real content
const accordionData = [
  {
    title: "What is the baggage allowance for my flight?",
    content:
      "The first checked baggage is included in all our packages. You're allowed 28kg per person, which includes 20kg for your main luggage and 8kg for your hand carry. This ensures you can comfortably pack everything you need for your journey.",
  },
  {
    title: "What is your refund policy in case of cancellation?",
    content:
      "Our refund policy is designed to be as fair and straightforward as possible. If you need to cancel, the amount refunded will depend on how close the cancellation is to your travel date, as airline tickets and hotel reservations have specific terms. We'll guide you through the process and do our best to minimize any inconvenience. Feel free to contact us for detailed terms when booking.",
  },
  {
    title: "Will you provide assistance if I face any issues during my trip?",
    content:
      "Absolutely, we're here to support you every step of the way. We provide free assistance throughout your journey and will stay in touch until your trip concludes. If needed, we can even offer in-person assistance to ensure a smooth and worry-free experience for you.",
  },
  {
    title: "Will I be traveling with a group, or is it an individual package?",
    content:
      "We offer both options! You can choose a private package if you prefer a personalized experience or join a group package, which is a great way to connect with other pilgrims. Group packages depend on availability, so let us know your preference, and we'll arrange accordingly.",
  },
  {
    title: "Are there any discounts for families or groups?",
    content:
      "Yes, we're pleased to offer special discounted rates for families and groups. This makes it more affordable to share this spiritual journey with your loved ones. Let us know the number of people traveling, and we'll provide a customized package for you.",
  },
];

// Custom Accordion Component with Framer Motion animations
const CustomAccordion = ({ item, index, activeIndex, setActiveIndex }) => {
  const isOpen = activeIndex === index;

  const toggleAccordion = () => {
    setActiveIndex(isOpen ? null : index);
  };

  // Animation variants
  const contentVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <motion.div
      className="border  border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <motion.button
        onClick={toggleAccordion}
        className={`w-full text-left text-base font-medium py-5 px-6 text-[#0C3E3E]
             flex justify-between items-center hover:bg-gray-50 transition-colors duration-300 ${isOpen ? "border-b-2  border-primary-color" : ""
          }`}
        whileHover={{ backgroundColor: "#f9f9f9" }}
        whileTap={{ scale: 0.99 }}
      >
        <span>{item.title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ transformOrigin: "top" }}
          >
            <motion.div
              className="text-sm leading-relaxed p-6 text-gray-600 bg-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {item.content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// FAQ Section Component
function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const phoneNumber = "0203 773 0804"; // No spaces or '+' sign

  return (
    <div className="bg-gradient-to-b my-10 border md:border-none md:shadow-none rounded-lg shadow-xl from-white to-gray-50 py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-7xl mx-auto"
        style={{
          backgroundImage: "var(--grid-bg)",
          backgroundRepeat: "repeat",
        }}
      >
        <motion.div
          className="text-center hidden lg:block mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C3E3E]">
            Frequently Asked Questions{" "}
            <span className="text-[#D4A10F]">(FAQs)</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#D4A10F] mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FAQ Accordion - takes more space */}
          <div className=" order-2 lg:order-1 lg:col-span-7 mt-8 md:mt-0 w-full">
            {/* Main section title */}
            <motion.div
              className="text-center lg:hidden mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C3E3E]">
                Frequently Asked Questions{" "}
                <span className="text-[#D4A10F]">(FAQs)</span>
              </h2>
              <motion.div
                className="w-24 h-1 bg-[#D4A10F] mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              ></motion.div>
            </motion.div>

            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <CustomAccordion
                  key={`accordion-${index}`}
                  item={item}
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </div>
          </div>

          {/* Call now section - takes less space */}
          <div className=" order-1 lg:order-2 lg:col-span-5 w-full lg:sticky lg:top-8">
            <motion.div
              className="bg-gradient-to-br from-[#00484A] to-[#003638] rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white"
                  animate={{
                    x: [0, 5, 0, -5, 0],
                    y: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-white"
                  animate={{
                    x: [0, -5, 0, 5, 0],
                    y: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                ></motion.div>
              </div>

              {/* Content */}

              <div className="relative z-10">
                {/* Phone Icon Circle */}
                <motion.div
                  className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <Phone size={28} className="text-[#00484A]" />
                </motion.div>

                {/* Heading */}
                <motion.h3
                  className="font-bold text-xl md:text-2xl mb-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  Call Our Umrah Agents Now!
                </motion.h3>

                {/* Divider */}
                <motion.div
                  className="w-16 h-1 bg-[#D4A10F] mx-auto mb-6 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                ></motion.div>

                {/* Subtext */}
                <motion.p
                  className="text-center text-gray-100 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  Our team is available 24/7 to provide instant guidance and
                  <br />
                  help you choose the best Umrah package.
                </motion.p>

                {/* Call Now Button */}
                <motion.div
                  className="relative w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <Link
                    href={`tel:${phoneNumber}`}
                    className="relative bg-[#D69E00] w-full py-4 px-6 rounded-full text-white font-bold text-lg transition-colors duration-300 shadow-lg flex items-center justify-center group"
                  // onClick={() => setShowOptions((prev) => !prev)}
                  >
                    <span className="absolute inset-0 w-full h-full rounded-full bg-white opacity-25 animate-ping"></span>
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Phone size={20} className="mr-2" />
                    </motion.div>
                    Call Now
                  </Link>

                  {showOptions && (
                    <div
                      className="absolute top-[-100] w-full md:w-[98%] bg-white
   shadow-xl border rounded-xl z-50 p-4 mt-2 space-y-3 text-sm  "
                    >
                      {/* Cross Button */}
                      <button
                        onClick={() => setShowOptions(false)}
                        className="absolute top-2 right-4 text-gray-500 hover:text-red-600 text-xl font-bold"
                      >
                        &times;
                      </button>

                      {/* Option 1: Call */}
                      <a
                        href={`tel:${phoneNumber}`}
                        className="flex items-center gap-2 text-black hover:text-primary-color"
                      >
                        <Phone className="w-4 h-4" />
                        Call via SIM
                      </a>

                      {/* Option 2: WhatsApp */}
                      <a
                        href={`https://wa.me/${phoneNumber.replace(/^0/, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-600 hover:text-green-800"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Message on WhatsApp
                      </a>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
