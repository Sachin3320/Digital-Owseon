import React from 'react';
import scaleImage from '/AboutUs/scale.png';
import innovationImage from '/AboutUs/innovation.png';

const InnovationSection = () => {
  return (
    <div className="bg-[#FFFFFF] py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Four Decades of Innovation Building Industry for the Future!
        </h2>
        <p className="text-xl text-gray-700 mb-10">
          With a rich history of delivering impactful innovations, we continue to shape industries by
          providing value to our customers, partners, and communities. Our commitment to progress drives
          meaningful change and fosters long-term success.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-24 items-center justify-center">
        <div className="relative w-64 h-64 border border-gray-300 rounded-md overflow-hidden">
          <img src={scaleImage} alt="Scale" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF0E6]/90 to-transparent px-4 flex  items-center">
            <p className="text-black font-semibold mb-2">Scale</p>
          </div>
        </div>

        <div className="relative  w-64 h-64 border border-gray-300 rounded-md overflow-hidden">
          <img src={innovationImage} alt="Innovation" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF0E6]/90 to-transparent px-4 flex items-center">
            <p className="text-[#C62828]  font-semibold mb-2">Innovation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationSection;
