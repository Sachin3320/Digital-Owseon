import React from 'react';
import mixerImage from '/AboutUs/image2.png'; 

const WhoWeAre = () => {
  return (
    <div className="bg-[#FFFFFF] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={mixerImage}
          alt="Audio Mixer"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        <div className="text-[#222] max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">Who we are</h2>
          <p className="text-sm leading-relaxed">
            Digital Wiseon Private Limited was established in 2016 under the name Smart Solution Technology, 
            specializing in CCTV solutions and installation. Over time, we added AV solutions, IT solutions, 
            auditorium setup, and educational technologies to our portfolio.
          </p>
          <br />
          <p className="text-sm leading-relaxed">
            One of the milestones was achieved on February 2, 2019, when we were formally designated as 
            Digital Wiseon Private Limited. We are currently operational Pan-India with head offices in 
            Patna, Bihar; and branch offices in Ranchi (Jharkhand), Kolkata (West Bengal), Varanasi (Uttar Pradesh), 
            Bhubaneswar (Odisha), and Noida (Uttar Pradesh).
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
