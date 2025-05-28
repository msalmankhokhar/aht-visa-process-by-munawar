"use client";
import { PhoneCall, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import EnquiryComponent from "./VisaForm";
import { BsWhatsapp } from "react-icons/bs";
import { whatsappChatLink } from "@/constants";

export default function Navbar() {
  const [showOptions, setShowOptions] = useState(false);
  const phoneNumber = "0203 773 0804";
  const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility
  const handleFormSubmit = () => {
    setShowPopup(!showPopup); // Close the popup after form submission
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+923470063865";
  };

  const handleWhatsAppClick = () => {
    window.open(whatsappChatLink, "_blank");
  };

  return (
    <>
      {/* phone no  */}
      <div
        className="flex z-50 pb-4 pt-5 md:py-4 
      shadow-lg
      
      fixed top-0 bg-white flex-col justify-center w-full  items-center text-center"
      >
        <div className="flex flex-col items-center relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowOptions(!showOptions)}
          >
            <PhoneCall className="w-6 h-6 text-primary-color text-center" />
            <h1 className="text-primary-color text-2xl lg:text-3xl font-bold">
              {phoneNumber}
            </h1>
          </div>

          {showOptions && (
            <div
              className="absolute top-14 mt-2 bg-white shadow-lg
             border rounded-lg px-4 lg:ml-3 md:w-72 z-50 p-2 space-y-2  "
            >
              {/* Cross Button */}
              <button
                onClick={() => setShowOptions(false)}
                className="absolute top-1 right-4 font-bold 
                 text-gray-500 hover:text-black text-xl"
              >
                &times;
              </button>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2
                
                  text-black hover:text-primary-color"
              >
                <Phone className="w-4  h-4" />
               <span className="  lg:font-semibold"> Call Via SIM</span> 
              </a>
              <a
                href={`https://wa.me/${phoneNumber.replace(/^0/, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-800 
                text-nowrap lg:py-
                lg:text-lg font-semibold"
              >
                <MessageCircle className="w-4  h-4 lg:w-5 lg:h-5 " />
                Message on WhatsApp
              </a>
            </div>
          )}
        </div>

        <p className="text-yellow-600 text-center text-sm mt-1">
          Plan Umrah package on call with experts!
        </p>
      </div>

      {/* navbar */}
      <div className="w-full bg-white top-0 shadow-2xl   z-50">
        <div className="flex  lg:hidden h-20 sticky top-0 z-50  bg-white px-6  w-full  justify-between   items-center    ">
          <div className="logo  pt-2 flex flex-col justify-center items-center   ">
            <img
              src="alhabibImages/caption.png"
              alt=""
              className=" w-14 h-12"
            />
          </div>

          <div class="flex pt-2 space-x-4">
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
      {/* for desktop */}

      <div className="hidden  top-0 bg-white    lg:flex w-full  ">
        <div className=" flex px-16 justify-between w-full max-w-7xl   lg:hidded h-20 sticky top-0 z-50 bg-white        mx-auto     items-center    ">
       

          <div className="logo  flex flex-col justify-center items-center   ">
            <img
              src="alhabibImages/logoimage.png"
              alt=""
              className=" w-16 h-14"
            />
            <p className="text-xs mt-1 text-[#00454A] text-center    ">
              Al-Habib-Travel
            </p>
          </div>

              
            <button
              className="bg-[#D4A10F] py-3 items-center flex gap-2 text-white 
             px-8 rounded-xl text-xl font-bold animate-pulse "
            >
              <span>
                <PhoneCall />
              </span>
              <span className="text-nowrap" onClick={handleFormSubmit}>
                Connect Now
              </span>
            </button>
           
        </div>
      </div>

      {/*   render the InquiryForm as a popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center popup-container justify-center z-50">
          <EnquiryComponent closePopup={handleFormSubmit} />
        </div>
      )}
    </>
  );
}
