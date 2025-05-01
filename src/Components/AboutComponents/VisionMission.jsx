import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VisionImage from '/AboutUs/vision.png'; // Replace with your actual image

const content = {
  Vision: {
    text: `To be the leader in the industry by delivering innovative, high-quality, and reliable AV and IT solutions that power the nation's businesses, educators, and institutions. Our vision is to have a future where technology empowers the use of education and corporate spaces, improving communication, learning, and collaboration. We aim to be the default solution partner for smart learning spaces, corporate digital transformation, and smart AV designs.  With our experience in hybrid classrooms, interactive displays, digital signage, and immersive AV solutions, we strive to build a technology-enabled ecosystem that empowers businesses, educational institutions, and government agencies. Our approach is completely client-focused, and due to this reason we provide customized, scalable, and future-proof solutions that enhance efficiency and innovation`,
    image: VisionImage,
  },
  Mission: {
    text: `To be the leader in the industry by delivering innovative, high-quality, and reliable AV and IT solutions that power the nation's businesses, educators, and institutions. Our vision is to have a future where technology empowers the use of education and corporate spaces, improving communication, learning, and collaboration. We aim to be the default solution partner for smart learning spaces, corporate digital transformation, and smart AV designs. With our experience in hybrid classrooms, interactive displays, digital signage, and immersive AV solutions, we strive to build a technology-enabled ecosystem that empowers businesses, educational institutions, and government agencies. Our approach is completely client-focused, and due to this reason we provide customized, scalable, and future-proof solutions that enhance efficiency and innovation.`,
    image: VisionImage,
  },
};

const VisionMission = () => {
  const [selected, setSelected] = useState('Vision');

  return (
    <div className='my-10'>
    <div className="   flex items-center justify-center bg-[#F9F9F9] py-5">
      <div className='mx-36 my-4 flex justify-center'>
      <div className=" px-6 py-5 flex flex-col gap-6">
          {['Vision', 'Mission'].map((item) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`text-left font-semibold flex justify-between items-center transition-all ${
                selected === item ? 'text-black' : 'text-gray-500'
              }`}
            >
              {item}
              <span className="text-xl">{'>'}</span>
            </button>
          ))}
        </div>
      <div className="flex  bg-[#ffffff] rounded-xl shadow-xl overflow-hidden  max-w-6xl">
        {/* Left Panel */}
        

        {/* Right Panel */}
        <div className=" p-6 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="flex gap-6"
            >
              <img
                src={content[selected].image}
                alt={selected}
                className="w-1/3 h-auto object-cover rounded-md"
              />
              <p className="text-sm text-gray-700 leading-relaxed">
                {content[selected].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default VisionMission;
