import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { question: "What is Digital Wiseon?", answer: "Digital Wiseon is a platform for..." },
    { question: "How can I support you?", answer: "You can support us by..." },
    { question: "How can I find nearest location?", answer: "You can find our nearest location by..." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Section - Text & Email */}
        <div className="bg-white  rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-6">Have any questions? We're here to help you out with all the answers you need!</p>
          
          {/* Email Input */}
          <div className="flex items-center gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#21697D]" 
            />
            <button className="bg-[#21697D] text-white px-5 py-3 rounded-md hover:bg-[#1b5d6c]">
              Submit
            </button>
          </div>
        </div>

        {/* Right Section - FAQ List */}
        <div className="bg-white shadow-md rounded-lg p-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button 
                className="w-full flex justify-between items-center py-4 text-left text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex items-center gap-2">
                  <FaChevronRight className={`transition-transform ${openIndex === index ? "rotate-90" : ""}`} />
                  {faq.question}
                </span>
              </button>
              {openIndex === index && <p className="text-gray-600 pl-6 pb-4">{faq.answer}</p>}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;