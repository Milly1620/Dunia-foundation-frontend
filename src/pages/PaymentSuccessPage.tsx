import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { CheckCircle, Heart, Users, Globe } from "lucide-react";

const PaymentSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#F2F8F6] to-[#D8EEE7] py-10 md:py-16">
      {/* Main Content */}
      <div className="max-w-[800px] mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg px-6 py-8 md:px-10 md:py-12 text-center">
          {/* Success Icon and Animation */}
          <div className="relative mb-6">
            <div className="mx-auto w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>

            {/* Floating Hearts Animation */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <Heart
                className="w-6 h-6 text-red-400 animate-bounce"
                style={{ animationDelay: "0s" }}
              />
            </div>
            <div className="absolute top-4 left-1/4 transform -translate-x-1/2">
              <Heart
                className="w-4 h-4 text-pink-400 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
            <div className="absolute top-4 right-1/4 transform translate-x-1/2">
              <Heart
                className="w-4 h-4 text-red-300 animate-bounce"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl poppins-bold text-main-black mb-4">
            Payment Successful!
          </h1>

          <p className="text-lg md:text-xl poppins-regular text-gray-600 mb-8 max-w-2xl mx-auto">
            Thank you for your generous donation! Your contribution will make a
            real difference in communities across Africa.
          </p>

          {/* Impact Message */}
          <div className="bg-[#2A5F58] text-white rounded-lg p-6 mb-8">
            <h3 className="text-xl poppins-semibold mb-4 flex items-center justify-center gap-2">
              <Globe className="w-6 h-6" />
              Your Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-green-300" />
                <span className="poppins-regular text-sm">Lives Changed</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-red-300" />
                <span className="poppins-regular text-sm">
                  Communities Helped
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-300" />
                <span className="poppins-regular text-sm">Projects Funded</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/")}
              className="w-full sm:w-auto px-8"
            >
              Go to Home
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate("/programs")}
              className="w-full sm:w-auto px-8"
            >
              View Our Programs
            </Button>
          </div>

          {/* Additional Message */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm poppins-regular text-gray-500">
              You will receive an email confirmation shortly. If you have any
              questions, please{" "}
              <button
                className="text-[#2A5F58] cursor-pointer hover:underline focus:outline-none focus:ring-2 focus:ring-[#2A5F58] focus:ring-opacity-50 rounded-sm"
                onClick={() => navigate("/contact")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate("/contact");
                  }
                }}
              >
                contact us
              </button>
              {"."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
