"use client";
import Image from "next/image";

export default function BookingProcess() {
  const steps = [
    {
      num: 1,
      title: "Inquiry & Consultation",
      desc: "Discuss your Umrah needs & get a personalized quote.",
    },
    {
      num: 2,
      title: "Select Your Package",
      desc: "Discuss your Umrah needs & get a personalized quote.",
    },
    {
      num: 3,
      title: "Pay the Initial Deposit",
      desc: "Secure your booking with just £99 per person.",
    },
    {
      num: 4,
      title: "Receive Confirmation",
      desc: "Get your tickets, visa & travel itinerary ready.",
    },
    {
      num: 5,
      title: "Embark on Your Umrah Journey",
      desc: "We handle your Saudi visa, flights & hotel reservations.",
    },
  ];

  return (
    <div
      className="bg-white px-1 mt-5 w-full "
      style={{
        backgroundImage: "var(--grid-bg)",
        backgroundRepeat: "repeat",
      }}
    >
      <div
        className="bg-white py-5 
    px-6 border md:border-none rounded-xl shadow-2xl md:shadow-none  my-1 max-w-7xl mx-auto"
        style={{
          backgroundImage: "var(--grid-bg)",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Booking Process Section */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-teal-900">
          Our <span className="text-yellow-500">Booking</span> Process
        </h2>

        <div className="mt-3 h-0.5 md:w-80 md:mx-auto bg-yellow-500"></div>

        {/* Desktop View - Same as before */}
        <div className="hidden md:grid grid-cols-3 gap-20 text-center mt-10 relative">
          {[
            {
              num: 1,
              title: "Inquiry & Consultation",
              desc: "Discuss your Umrah needs & get a personalized quote.",
            },
            {
              num: 2,
              title: "Select Your Package",
              desc: "Choose from, 3-Star, 4-Star, or 5-Star packages.",
            },
            {
              num: 3,
              title: "Pay the Initial Deposit",
              desc: "Secure your booking with just £99 per person.",
            },
            {
              num: 4,
              title: "Visa & Ticket Processing",
              desc: "We handle your Saudi visa, flights & hotel reservations.",
            },
            {
              num: 5,
              title: "Receive Confirmation",
              desc: "Get your tickets, visa & travel itinerary ready.",
            },
            {
              num: 6,
              title: "Embark on Your Umrah Journey",
              desc: "Travel stress-free & experience a smooth pilgrimage.",
            },
          ].map((step, index, array) => (
            <div key={step.num} className="flex flex-col items-center relative">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-teal-900 text-white text-lg font-bold">
                {step.num}
              </div>
              <h3 className="mt-4 font-bold text-teal-900">{step.title}</h3>
              <p className="text-gray-600  mt-2">{step.desc}</p>

              {/* Add arrow except after step 3 & step 6 */}
              {index !== 2 && index !== 5 && (
                <Image
                  src="/svgfiles/vector.svg"
                  alt="Arrow"
                  width={50}
                  height={20}
                  className="absolute right-[-50px] top-8"
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden mt-4 relative overflow-y-auto h-[430px] px-4 [&::-webkit-scrollbar]:hidden  ">
          {steps.map((step, index) => (
            <div key={step.num} className="relative  mb-5">
              {/* Even numbers (2,4) go on right side */}
              {step.num % 2 === 0 ? (
                <div className="flex justify-end">
                  <div className="w-4/5 text-left">
                    {/* Number circle - positioned above content */}
                    <div className="flex justify-center mb-1">
                      <div className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center font-semibold">
                        {step.num}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold text-lg text-[#D4A10F] text-center">
                      {step.title}
                    </h3>
                    <p className="text-black  mt-1 text-center text-sm">
                      {step.desc}
                    </p>

                    {/* Arrow - except after last step */}
                    {index < steps.length - 1 && (
                      <div className="flex justify-start ml-4 mt-1">
                        {step.num === 2 || step.num === 4 ? (
                          // Use vector1.svg with adjusted rotation to point downward
                          <Image
                            src="/svgfiles/vector1.svg"
                            alt="Arrow"
                            width={30}
                            height={10}
                            className="transform rotate-320" // Adjusted to point downward
                          />
                        ) : (
                          <Image
                            src="/svgfiles/vector.svg"
                            alt="Arrow"
                            width={40}
                            height={30}
                            className="transform rotate-90" // Default downward arrow
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Odd numbers (1,3,5) go on left side */
                <div className="flex justify-start">
                  <div className="w-4/5 text-left">
                    {/* Number circle - positioned above content */}
                    <div className="flex justify-center mb-1">
                      <div className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center font-semibold">
                        {step.num}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold text-lg text-[#D4A10F] text-center">
                      {step.title}
                    </h3>
                    <p className="text-black   mt-1 text-sm text-center">
                      {step.desc}
                    </p>

                    {/* Arrow - except after last step */}
                    {index < steps.length - 1 && (
                      <div className="flex justify-end mr-4 mt-3">
                        {step.num === 2 || step.num === 4 ? (
                          // Use vector1.svg with adjusted rotation to point downward
                          <Image
                            src="/svgfiles/vector1.svg"
                            alt="Arrow"
                            width={20}
                            height={10}
                            className="transform rotate" // Adjusted to point downward
                          />
                        ) : (
                          <Image
                            src="/svgfiles/vector.svg"
                            alt="Arrow"
                            width={40}
                            height={20}
                            className="transform rotate-90" // Default downward arrow
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block w-full h-0.5 bg-gray-100"></div>
    </div>
  );
}
