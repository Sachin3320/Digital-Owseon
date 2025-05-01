import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: 1986,
    featured: true,
    icon: "document",
    tag: "Milestones",
    title: "Oracle goes public",
    description: "Oracle becomes a publicly traded company on the NASDAQ exchange. The quotation symbol is ORCL."
  },
  { year: 1987, featured: false },
  { year: 1989, featured: false },
  { year: 1992, featured: false },
  {
    year: 1995,
    featured: true,
    icon: "trophy",
    tag: "#DBMS",
    title: "",
    description: "Oracle ranks as the world's largest database management company with US$10M in sales and 43,000 users in 93 countries.",
    stats: ["93 Countries", "43,000 User"]
  },
  { year: 2000, featured: false },
  { year: 2004, featured: false },
  { year: 2008, featured: false },
  {
    year: 2010,
    featured: true,
    icon: "chart",
    tag: "Moving on up",
    title: "",
    description: "Oracle debut on the S&P 500, code-win in old headquarters moves to Redwood Shores, California.",
    stats: ["S&P 500", "Redwood Shores"]
  },
  { year: 2019, featured: false },
];

const OracleTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll animation when not hovering
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineEvents.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovering]);

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'document':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'trophy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'chart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#ffffff] min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-serif text-center mb-16"
        >
          A history of possibilities
        </motion.h1>

        <div className="relative mb-20">
          {/* Featured Events */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            {timelineEvents.filter(event => event.featured).map((event, index) => (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`col-span-12 md:col-span-4 ${index === 1 ? 'md:col-start-5' : ''} ${index === 2 ? 'md:col-start-9' : ''}`}
              >
                <div className={`${index === 1 ? 'bg-[#21697D] text-white' : 'bg-transparent'} rounded-lg p-5 relative`}>
                  <div className="flex items-center mb-2">
                    <div className={`${index === 1 ? 'text-white' : 'text-gray-600'} mr-2`}>
                      {renderIcon(event.icon)}
                    </div>
                    <span className={`text-xs uppercase tracking-wider ${index === 1 ? 'text-white' : 'text-gray-600'}`}>{event.tag}</span>
                  </div>
                  
                  {event.title && (
                    <h3 className={`text-xl font-bold mb-2 ${index === 1 ? 'text-white' : 'text-black'}`}>{event.title}</h3>
                  )}
                  
                  <p className={`text-sm mb-4 ${index === 1 ? 'text-white' : 'text-gray-700'}`}>{event.description}</p>
                  
                  {event.stats && (
                    <div className="flex space-x-4 text-sm">
                      {event.stats.map((stat, i) => (
                        <span key={i} className={`${index === 1 ? 'text-white' : 'text-gray-700'}`}>{stat}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div 
            ref={timelineRef}
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-300 transform -translate-y-1/2"></div>
            
            {/* Timeline dots and years */}
            <div className="flex justify-between relative">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={event.year}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                  onClick={() => setActiveIndex(index)}
                >
                  <motion.div 
                    className={`w-2 h-2 rounded-full mb-3 cursor-pointer ${activeIndex === index ? 'bg-black' : 'bg-gray-400'}`}
                    whileHover={{ scale: 1.5 }}
                    animate={{ 
                      scale: activeIndex === index ? 1.5 : 1,
                      backgroundColor: activeIndex === index ? '#000' : '#9ca3af'
                    }}
                  />
                  <motion.span 
                    className={`text-sm ${activeIndex === index ? 'font-bold' : 'text-gray-600'}`}
                    animate={{ 
                      y: activeIndex === index ? -5 : 0,
                      fontWeight: activeIndex === index ? 'bold' : 'normal'
                    }}
                  >
                    {event.year}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OracleTimeline;