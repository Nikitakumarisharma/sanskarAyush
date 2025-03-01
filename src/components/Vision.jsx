import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-gray-200 ">
      <div className="max-w-6xl mx-auto px-2 lg:px-5 py-5">
        <h2 className="font-extrabold text-green-700 text-center mb-5">
          Our Vision & Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Vision Section */}
          <div className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-green-600">
            <div className="flex items-center">
              <FaEye className="text-green-600 text-3xl" />
              <h3 className="text-2xl font-semibold text-gray-800 ml-2">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
            At Sanskar Ayush Medicare Pvt. Ltd., our mission is to harness Ayurveda’s wisdom to create exceptional healthcare and personal care products. We are dedicated to upholding excellence by maintaining the highest standards of quality and purity. Our focus is on customer satisfaction, reliable service, and sustainable manufacturing. Through strong partnerships and continuous innovation, we customize formulations to meet client needs. By adhering to these principles, we aim to be a trusted leader in the Ayurvedic healthcare industry, enhancing global well-being.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-green-600">
            <div className="flex items-center">
            <FaBullseye className="text-green-600 text-3xl"/>
              <h3 className="text-2xl font-semibold text-gray-800 ml-2">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              
Sanskar Ayush Medicare Pvt. Ltd. aims to be a globally recognized leader in Ayurvedic healthcare and personal care. We focus on innovation, excellence, and quality assurance while expanding internationally. Our customer-centric approach ensures exceptional products and services. Through ethical business practices, sustainability, and strong collaborations, we strive for long-term growth. By fostering partnerships and adhering to Ayurvedic principles, we aspire to enhance the health and well-being of individuals and communities worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
