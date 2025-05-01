import React from 'react';
import { FaHeadset, FaInfoCircle, FaShoppingCart, FaTruck } from 'react-icons/fa';

const SupportSection = () => {
  const supportOptions = [
    {
      icon: <FaHeadset className="text-4xl text-[#21697D]" />,
      title: "Get support for your queries and updates",
      button: "Service Desk",
    },
    {
      icon: <FaInfoCircle className="text-4xl text-[#21697D]" />,
      title: "Get support with your registered complaint.",
      button: "Track Complaint",
    },
    {
      icon: <FaShoppingCart className="text-4xl text-[#21697D]" />,
      title: "Assistance with your purchases and orders.",
      button: "Sale Support",
    },
    {
      icon: <FaTruck className="text-4xl text-[#21697D]" />,
      title: "Get help with shipping and delivery logistics.",
      button: "Logistic Support",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">How Can We Assist You?</h2>
        <p className="text-gray-600 mb-8">
          We're here to provide information and support. Please share your query, and we'll respond accordingly.
        </p>

        {/* Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <div className="mb-3">{item.icon}</div>
              <p className="text-gray-700 mb-4">{item.title}</p>
              <button className="bg-[#21697D] text-white px-4 py-2 rounded-md hover:bg-[#1B5D6C] transition">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;