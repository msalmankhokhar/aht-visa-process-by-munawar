import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Reusable Icon Component
const Icon = ({ children, label, className }) => (
  <div className="flex items-start mb-6 lg:mb-0">
    <div
      className={`text-[#d4A10F] text-3xl mr-3 ${className}`}
      aria-label={label}
    >
      {children}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#00454A] text-gray-200 py-8 px-5" style={{
      backgroundImage: "var(--grid-bg)",
      backgroundRepeat: "repeat",
    }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row  justify-between items-start lg:items-center">
          {/* Left Section */}
          <div className="mb-6 lg:mb-0 lg:w-1/3">
            <div className=" flex flex-col justify-center mb-4">
              <Image
                src="/svgfiles/logo.svg"
                alt="Al Habib Travel Logo"
                width={90}  
                height={80} 
                className="ml-2"
              />
              <div>
                <h2 className=" mt-2 text-[#d4A10F] font-bold">
                  Al Habib Travel
                </h2>
                {/* <p className="text-xs">Alhabib Pilgrimage</p> */}
              </div>
            </div>
            <p className="text-gray-200 text-sm leading-6">
              Al Habib Travel is the most trusted & reliable agency among UK
              Muslims. We provide bespoke Umrah travel solutions & package
              designing services to meet budget range and facilities
              requirements of pilgrims.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col lg:flex-row lg:w-1/2 justify-around">
            {/* Call Us */}
            <Icon label="Call Us">
              <FaPhoneAlt />
              <div>
                <h3 className="font-bold text-lg mb-1">Call us</h3>
                <p className="text-gray-200 text-sm">0203 504 2344</p>
              </div>
            </Icon>

            {/* Write to Us */}
            <Icon label="Write to us">
              <FaEnvelope />
              <div>
                <h3 className="font-bold text-lg mb-1">Write to us</h3>
                <p className="text-gray-200 text-sm">
                  info@alhabibtravel.co.uk
                </p>
              </div>
            </Icon>

            {/* Address */}
            <Icon label="Address">
              <FaMapMarkerAlt />
              <div>
                <h3 className="font-bold text-lg mb-1">Office</h3>

                <p className="text-gray-200 text-sm leading-6">
                  Office 10378 182-184
                </p>
                <p className="text-gray-200 text-sm leading-6">
                  High Street North East Ham London England E6 2JA
                </p>
              </div>
            </Icon>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 leading-normal pt-4 md:text-center text-[#D4A10F] text-sm  ">
          <span className="font-bold">Note: </span>All fares advertised are
          subject to availability and start from the prices we have mentioned.
          Fares are only guaranteed until ticketed. Offers may be withdrawn
          without any prior notice
          <br />
          <a
            target="_blank"
            href="https://www.alhabibtravel.co.uk/privacy-policy" className="text-[#D4A10F]   hover:text-white">
            Disclaimer
          </a>{" "}
          |
          <a
            target="_blank"
            href="https://www.alhabibtravel.co.uk/privacy-policy"
            className=" text-[#D4A10F] hover:text-white"
          >
            {" "}
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;