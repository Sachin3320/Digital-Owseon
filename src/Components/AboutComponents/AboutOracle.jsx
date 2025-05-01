// import React from 'react';
// import { motion } from 'framer-motion';

// const cards = [
//   { image: '/AboutUs/customer.png' },          // small
//   { image: '/AboutUs/investor.png' },          // large
//   { image: '/AboutUs/responsibility.png' },    // small
//   { image: '/AboutUs/leadership.png' },        // wide
//   { image: '/AboutUs/careers.png' },           // wide
// ];

// const AboutOracle = () => {
//   return (
//     <div className="bg-[#ffffff] min-h-screen p-8">
//       <div className='flex justify-center flex-col items-center mb-10'>
//           <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-2">About Oracle</h3>
//           <h1 className="text-3xl md:text-4xl font-bold">
//             Oracle: Empowering Innovation, Transforming Business.
//           </h1>
//       </div>
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-12 gap-4">
//           {/* First Row */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="col-span-4 h-[180px] rounded-xl overflow-hidden shadow-md"
//             style={{
//               backgroundImage: `url(${cards[0].image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="col-span-4 h-[180px] rounded-xl overflow-hidden shadow-md"
//             style={{
//               backgroundImage: `url(${cards[1].image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="col-span-4 h-[180px] rounded-xl overflow-hidden shadow-md"
//             style={{
//               backgroundImage: `url(${cards[2].image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />

//           {/* Second Row */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="col-span-6 h-[220px] rounded-xl overflow-hidden shadow-md"
//             style={{
//               backgroundImage: `url(${cards[3].image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="col-span-6 h-[220px] rounded-xl overflow-hidden shadow-md"
//             style={{
//               backgroundImage: `url(${cards[4].image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutOracle;


import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  { image: '/AboutUs/customer.png' },          
  { image: '/AboutUs/investor.png' },          
  { image: '/AboutUs/responsibility.png' },    
  { image: '/AboutUs/leadership.png' },        
  { image: '/AboutUs/careers.png' },           
];

const AboutOracle = () => {
  return (
    <div className="bg-[#ffffff] min-h-screen p-8">
      <div className='flex justify-center flex-col items-center mb-10'>
        <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-2">About Oracle</h3>
        <h1 className="text-3xl md:text-4xl font-bold">
          Oracle: Empowering Innovation, Transforming Business.
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-3 h-[220px] rounded-xl overflow-hidden shadow-md"
            style={{
              backgroundImage: `url(${cards[0].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-6 h-[220px] rounded-xl overflow-hidden shadow-md"
            style={{
              backgroundImage: `url(${cards[1].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-3 h-[220px] rounded-xl overflow-hidden shadow-md"
            style={{
              backgroundImage: `url(${cards[2].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-7 h-[220px] rounded-xl overflow-hidden shadow-md"
            style={{
              backgroundImage: `url(${cards[3].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-5 h-[220px] rounded-xl overflow-hidden shadow-md"
            style={{
              backgroundImage: `url(${cards[4].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutOracle;
