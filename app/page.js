"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PackageInclusions from "./components/PackageInclusions";
import PopularPackages from "./components/PopularPackages";
// import UmraPackages from "./components/PoplarforDeskTop";
import Accomodation from "./components/Accomodation";
import Zyarat from "./components/Zyarat";
import Footer from "./components/Footer";
import BookingProcess from "./components/BookingProcess";
import AlhabibInNumbers from "./components/AlhabibInNumbers";
import Faqs from "./components/Faqs";
import TravelDetails from "./components/TravelDetails";
import VideoTestimonial from "./components/VideoTestimonial";
import ReviewCard from "./components/ReviewSection";
import ImageGallery from "./components/ImageGallary";
import Partners from "./components/Partners";
import EnquiryComponent from "./components/VisaForm";
import { useEffect, useState } from "react";
export default function App() {
  // 
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const inquiryHandled = localStorage.getItem("inquiryFilled");

    if (!inquiryHandled) {
      let appearanceCount = 0;

      // Show the popup after 10 seconds
      // const initialTimeout = setTimeout(() => {
      //   setShowPopup(true);
      //   appearanceCount++;
      // }, 10000);

      // const reappearTimeout = setTimeout(() => {
      //   if (appearanceCount === 1) {
      //     setShowPopup(true);
      //     appearanceCount++;
      //   }
      // }, 30000);
      // if (appearanceCount === 2) {
      //   setShowPopup(false);
      // }

      return () => {
        clearTimeout(initialTimeout);
        // clearTimeout(reappearTimeout);
      };
    }
  }, []);

  const handleFormSubmit = () => {
    setShowPopup(false);
  };
  return (
    <>
      <Navbar />
      <Hero />
      
      <AlhabibInNumbers />
      <TravelDetails />
      <PopularPackages />
      {/* <UmraPackages /> */}
      <Accomodation />
      <Zyarat />
      
      <ReviewCard />

      
      <VideoTestimonial />

      <BookingProcess />
      
      
      <PackageInclusions />
     

      <ImageGallery />
      <Partners />
      <Faqs />
     
      <Footer />

      {/*   render the InquiryForm as a popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center popup-container justify-center z-50">
          <EnquiryComponent closePopup={handleFormSubmit} />
        </div>
      )}
    </>
  );
}
