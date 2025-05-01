import React from 'react';
import { FaHeadset, FaInfoCircle, FaShoppingCart, FaTruck } from 'react-icons/fa';


const SupportSection = () => {
  const supportOptions = [
    {
      image: "/ContactUs/service.png",
      title: "Get support for your queries and updates",
      button: "Service Desk",
    },
    {
      image: "/ContactUs/track.png",
      title: "Get support with your registered complaint.",
      button: "Track Complaint",
    },
    {
      image: "/ContactUs/sale.png",
      title: "Assistance with your purchases and orders.",
      button: "Sale Support",
    },
    {
      image: "ContactUs/support.png",
      title: "Get help with shipping and delivery logistics.",
      button: "Logistic Support",
    },
  ];

  return (
    <section className="w-full bg-[#D9D9D9] py-12 px-6">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4 text-gray-800">How Can We Assist You?</h2>
        <p className="text-gray-600 mb-8 text-center">
          We're here to provide information and support. Please share your query, and we'll respond accordingly.
        </p>

        {/* Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((item, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] p-6 flex flex-col  my-4 transition-transform transform hover:scale-105"
            >
              <div className="mb-3">
                <img src={item.image} alt="" />
                
                </div>
              <p className="text-gray-700 mb-4">{item.title}</p>
              <button className="bg-[#21697D] text-white px-2 w-fit py-2 rounded-md hover:bg-[#1B5D6C] transition">
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