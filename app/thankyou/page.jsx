import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {

  return (
    <div className="min-h-screen flex items-center justify-center
     bg-primary-color px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-14 max-w-xl text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="text-green-500 w-20 h-20 animate-pulse" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Thank you for submitting your information.
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          We’ve received your details and will get back to you shortly. If you have any questions, feel free to reach out to us at <span className="text-blue-400">info@alhabibtravel.co.uk </span> <br /> or call us (0203 504 2344)
        </p>

        <Link
          href={'/'}
          className="mt-6 inline-block bg-[#C49B0D] hover:bg-[#a6830c] text-white text-lg px-6 py-3 rounded-xl transition duration-300 ease-in-out"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
