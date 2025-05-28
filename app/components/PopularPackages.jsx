"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import EnquiryComponent from "./VisaForm";
import { FaLocationPinLock } from "react-icons/fa6";
import { LuPackageOpen } from "react-icons/lu";

// Package data structure with months and categories
import { packageData } from "../data/popularPackage";
import { MessageCircle, Phone, PhoneCall } from "lucide-react";
import { aht_phone_with_country_code, whatsappChatLink } from "@/constants";
import Link from "next/link";

const PopularPackages = () => {
  useEffect(() => {
    const status = localStorage.getItem("inquiryFilled") === "true";
    setEnquiryStatus(status);
  }, []);
  const [enquiryStatus, setEnquiryStatus] = useState(false); // State to track inquiry status
  const [selectedMonth, setSelectedMonth] = useState("july");
  const [selectedCategory, setSelectedCategory] = useState("account");

  // Map between tab values and category keys
  const categoryMap = {
    account: "luxury",
    premium: "premium",
    econimic: "economic",
  };

  // Get current packages based on selected month and category
  const getCurrentPackages = () => {
    const category = categoryMap[selectedCategory];
    return packageData[selectedMonth][category] || [];
  };

  // Available months for selection
  const months = [
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
    "january",
    "Ramadan",
  ];
  const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility
  const handleFormSubmit = () => {
    setShowPopup(!showPopup);
  };
  // New Package Card component with updated design
  const PackageCard = ({ pkg }) => {
    const [showOptions, setShowOptions] = useState(false); // move state here
    const phoneNumber = "0203 773 0804";

    return (
      <>
        <div className="pb-10 bg-white rounded-xl shadow-xl    mx-3  w-[345px] md:w-[360px] h-full">
          <div className="flex  relative p-4 justify-center mt-1">
            <img
              src={pkg.image}
              alt="card-img"
              className="w-full  rounded-2xl   "
            />

            <div className="absolute  top-6 left-6 bg-white px-2 rounded-sm text-xs pt-1 pb-[5.5px] text-center ">
              {pkg.stars}
            </div>
          </div>

          <div>
            <div className="flex">
              <div className="w-10 h-10 ml-2 bg-gradient-to-r from-[#f4f4f4] to-[#bdb59f] opacity-45 rounded-full"></div>
              <h1 className=" text-xl md:text-2xl  flex items-center font-bold text-[#00454A]">
                {pkg.title}
              </h1>
            </div>
            <div className="my-3 w-56 mx-auto bg-yellow-500 h-0.5"></div>
          </div>

          <div className="flex items-center ml-4 gap-3 px-4 my-5">
            <FaLocationPinLock className="text-[#00454A]" />
            <div>
              <span className="text-yellow-600">Makkah :</span>{" "}
              <span className="text-[#00454A] font-semibold text-sm">
                {pkg.makkah} ({pkg.makkahNights})
              </span>
              <br />
              <span className="text-yellow-600">Madina :</span>{" "}
              <span className="text-[#00454A] font-semibold text-sm">
                {pkg.madinah} ({pkg.madinahNights})
              </span>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-end mr-6">
            <div className="bg-yellow-200 opacity-90 rounded-lg text-white flex gap-2 items-center px-2 py-1">
              <LuPackageOpen className="text-[#00454A]" />
              <p className="text-[#00454A]">All inclusive packages</p>
            </div>
          </div>

          <div className="flex justify-between my-2">
            <div className="pl-4 ml-4">
              <h1 className="bg-gray-100 w-32 font-semibold text-center mt-1 text-nowrap rounded-4xl shadow-2xl text-primary-color px-1">
                Package Includes:
              </h1>
              <p className="pl-2 mt-1 text-sm text-primary-color">
                {pkg.includes.join(" l ")}
              </p>
            </div>
            <div className="w-10 h-10 ml-2 bg-gradient-to-l from-[#96d1d5] to-[#1cd5e2] opacity-25 rounded-full"></div>
          </div>
          {/* ,jkljklk;lk;lk */}
          <div className=" relative flex gap-3 mt-5 justify-center items-center">
            <Link
              // onClick={() => setShowOptions(!showOptions)}
              // href={`tel:${aht_phone_with_country_code}`}
              href={whatsappChatLink}
              className="bg-primary-color py-2 px-4 flex rounded-lg text-white text-lg
               hover:bg-[#00454A] transition duration-300 ease-in-out transform hover:scale-105"
            >
              Talk to Agent
            </Link>
            <button
              onClick={() => {
                if (!enquiryStatus) handleFormSubmit();
              }}
              className="bg-[#D4A10F] py-2 px-4 flex rounded-lg text-white text-lg hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              {enquiryStatus ? `Price: £${pkg.price}` : "View Price"}
            </button>

            {showOptions && (
              <div
                className="absolute top-[-120] w-[80%] mx-auto   bg-white
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
                  href={whatsappChatLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-bold gap-2 text-green-600 hover:text-green-800"
                >
                  <MessageCircle className="w-4 h-4" />
                  Message on WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className="bg-white flex w-full shadow-2xl"
        style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
      >
        <div
          className="w-full lg:border   rounded-2xl  md:max-w-[85rem] lg:py-2
        my-10 h-auto md:px-7 md:mx-auto"
        >
          {/* Top area */}
          <div className="flex justify-between items-center px-4 text-primary-color md:pt-10">
            <h1 className="text-xl md:text-4xl font-bold">
              Popular <span className="text-yellow-600">Packages</span>
            </h1>
            <div className="">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[160px] rounded-none md:border-primary-color">
                  <SelectValue placeholder="Preferred Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month.charAt(0).toUpperCase() + month.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Below content */}
          <div className="mt-5 px-3">
            <Tabs
              defaultValue="account"
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <TabsList className="flex gap-4">
                {[
                  { label: "Luxury", value: "account" },
                  { label: "Premium", value: "premium" },
                  { label: "Economic", value: "econimic" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex md:items-center md:gap-2 md:border px-3 py-2 md:border-primary-color rounded-none text-primary-color hover:bg-primary-color hover:text-white transition duration-300"
                  >
                    <input
                      type="radio"
                      name="packageCategory"
                      className="accent-primary-color"
                      checked={selectedCategory === tab.value}
                      onChange={() => setSelectedCategory(tab.value)}
                    />
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.keys(categoryMap).map((category) => (
                <TabsContent key={category} value={category}>
                  <div
                    className="w-full px-4   flex    flex-wrap lg:flex-row gap-3  
                     max-w-7xl mx-auto p-5  justify-center  items-center"
                  >
                    {getCurrentPackages().map((pkg, index) => (
                      <div key={pkg.id || index} className="h-full">
                        <PackageCard pkg={pkg} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      {/* Render the InquiryForm as a popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center popup-container justify-center z-50">
          <EnquiryComponent closePopup={handleFormSubmit} />
        </div>
      )}
    </>
  );
};

export default PopularPackages;
