import React from 'react';

const imageSources = [
    '/landingPageImg/img1.jpg',
    '/landingPageImg/img2.jpg',
    '/landingPageImg/img3.jpg',
    '/landingPageImg/img4.jpg'
];

function LandingPage() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-[#001c32] to-[#21697dd0]">

            {/* Background world map */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/landingPageImg/map.jpg"
                    alt="World Map Background"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            <div className="container mx-auto px-6 pt-24 pb-12 relative z-10 " style={{ fontFamily: "Inria Serif, serif" }}>
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">

                    {/* Left side - Text */}
                    <div className="w-full  lg:w-1/2 text-white mb-10 md:mb-0 mt-20 lg:mt-0 text-center md:text-start">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            EMPOWERING FOOD STARTUPS WITH KNOWLEDGE, STRATEGY, AND SUCCESS!
                        </h2>
                    </div>

                    {/* Right side - Rotated Container */}
                    <div className="w-full  lg:w-1/2 transform lg:rotate-[20deg] flex flex-col justify-between items-center ">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                            {imageSources.map((src, index) => (
                                <div
                                    key={index}
                                    className="rounded-3xl w-[16vh] h-[16vh]  md:w-56 md:h-56  overflow-hidden shadow-[0_30px_50px_rgba(255,255,255,0.25)]"
                                >
                                    <img
                                        src={src}
                                        alt={`Technology Image ${index + 1}`}
                                        className=" w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LandingPage;
