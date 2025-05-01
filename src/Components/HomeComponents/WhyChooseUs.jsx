import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="w-full flex justify-center py-20 bg-white" style={{ fontFamily: "Inria Serif, serif" }}>
            <div className="w-full max-w-6xl py-6 px-10 lg:px-1 flex flex-col lg:flex-row items-center justify-between gap-24">
                {/* Image */}
                <div className="w-full lg:w-[800px]">
                    <img
                        src="/WhyChooseUs.svg"
                        alt="Audio-Visual Setup"
                        className="rounded-lg w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="w-full  lg:px-2 lg:w-[700px] space-y-4">
                    <h3 className="text-2xl font-semibold uppercase tracking-wide text-gray-800">
                        WHY CHOOSE US
                    </h3>
                    <h2 className="text-2xl md:text-2xl font-bold text-gray-900 leading-tight">
                        Transforming Spaces with Customized AV Solutions for Your Unique Needs.
                    </h2>
                    <p className="text-gray-700">
                        At Digital Mission, we specialize in providing tailored AV (Audio-Visual)
                        solutions designed to transform your space into a smart, connected
                        environment. Whether you're upgrading your home, office, or commercial
                        space, our team ensures that every system is customized to meet your unique
                        needs and lifestyle.
                    </p>
                    <div className="pt-2">
                        <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2 rounded transition duration-300">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;