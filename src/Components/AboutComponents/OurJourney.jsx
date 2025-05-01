import React from 'react';
import { ChevronDown } from 'lucide-react'; // Optional: Lucide icons

const OurJourney = () => {
  return (
    <section className="bg-[#ffffff] py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Journey</h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Our ride has been eventful with plenty of opportunities and challenges. At the time of our launch in 2016,
          we had a modest but ambitious target—to provide best-in-class CCTV and IT solutions.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          With each project, we learned something new, and our focus on quality helped us establish a robust foundation
          of trust with our customers. During 2020, the COVID-19 pandemic caused unprecedented disruptions. As with
          most businesses, we experienced financial losses and operational challenges. But we also perceived a chance
          to assist educators in adjusting to online learning.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="bg-white shadow-md rounded-full p-3 hover:shadow-lg transition">
            <ChevronDown className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
