"use client";

import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ for routing 

const InquiryComponent = ({ closePopup }) => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const router = useRouter(); // ✅ for redirecting

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        "service_evauoweMyservicetodelete",
        "template_jjly3hv",
        form.current,
        "1KSV2yoaQODKDH17L"
      );

      localStorage.setItem("inquiryFilled", "true");
      form.current.reset();

      // ✅ Redirect to thank-you page
      router.push("/thankyou");
    } catch (error) {
      console.error("Error sending inquiry:", error);
      setStatusMessage("Your inquiry is not sent...");
       router.push("/thankyou"); // it is just for testing , must remove when you go live
      // Optionally, you can show a message to the user
      localStorage.setItem("inquiryFilled", "true");
      setTimeout(() => {
        closePopup(); // Optional: Close even on error
      }, 1500);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <div className="bg-white p-6 md:rounded-lg max-w-sm md:max-w-lg md:border-t-8 md:border-l-8 shadow-2xl mx-auto relative md:h-auto md:pb-10 md:top-7">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#d4A10F]"
          aria-label="Close Inquiry Form"
        >
          <FaTimes size={20} />
        </button>

        <div className="text-center mb-4">
          <Image
            src="/alhabibImages/logoimage.png"
            alt="Logo"
            width={64}
            height={64}
            className="mx-auto my-2"
          />
          <h2 className="text-lg font-semibold my-2">Get Umrah Quote!</h2>
          <p className="text-sm text-gray-600">
            We will contact you via WhatsApp or Email in a few minutes.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Passenger Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mobile" className="block text-sm font-medium">
              Contact Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="from_phone"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
              placeholder="Enter your phone number +44"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="number" className="block text-sm font-medium">
              Total number of Passengers
            </label>
            <input
              type="text"
              id="number"
              name="from_passenger"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="We are total..."
              required
            />
          </div>

          <div className="mb-4 text-sm">
            <input type="checkbox" id="privacy" name="from_checked" required />{" "}
            I accept the{" "}
            <a
              href="https://www.alhabibtravel.co.uk/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4A10F] underline"
            >
              privacy policy
            </a>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-[#00454A] text-white py-2 rounded-md hover:bg-[#d4A10F] transition"
          >
            {isSending ? "Sending..." : "Send Inquiry"}
          </button>
        </form>

        {statusMessage && (
          <p className="text-center text-sm mt-4 text-red-500">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default InquiryComponent;
