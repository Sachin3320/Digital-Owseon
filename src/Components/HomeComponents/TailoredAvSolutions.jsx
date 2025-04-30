import React from "react";
import AVsolution from "/TailoredAvSolutions/AVsolution.svg";
import expertSol from "/TailoredAvSolutions/expertSol.svg";

const tailoredData = [
    {
        id: 1,
        type: "image",
        src: AVsolution,
        alt: "AV Solution",
    },
    {
        id: 2,
        type: "card",
        title: "AV SOLUTION",
        description:
            "Immersive & Interactive AV solutions offer a seamless blend of audio-visual technology, creating an immersive and interactive experience for your business meetings, classrooms, or events.",
        buttonLabel: "Explore",
    },
    {
        id: 3,
        type: "card",
        title: "EXPERT SOLUTION",
        description:
            "Expert solutions provide specialized knowledge, innovative strategies, and professional services to solve complex challenges efficiently across various industries and domains.",
        buttonLabel: "Explore",
    },
    {
        id: 4,
        type: "image",
        src: expertSol,
        alt: "Expert Solution",
    },
];

const TailoredAvSolutions = () => {
    return (
        <div className="min-h-[70vh] w-full p-2 md:p-6 rounded-2xl flex flex-col items-center">
            <div className="flex flex-col lg:flex-row-reverse w-full gap-6 md:gap-6 lg:gap-12 max-w-[98%] lg:max-w-[70%] bg-[#5c5c5c24] p-4 md:p-10 rounded-xl">
                {/* Left Side - Text Section */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center p-4">
                    <h1 className="text-3xl md:text-3xl font-semibold mb-2 mt-3">
                        Tailored AV Solutions:
                    </h1>
                    <h1 className="text-lg md:text-2xl font-semibold mt-3">
                        Transform Your Space Into a Smart Environment
                    </h1>
                    <p className="text-sm md:text-lg text-neutral-600 mt-6">
                        Transform your space with smart technology for enhanced convenience,
                        efficiency, and comfort. Enjoy automated lighting, climate control,
                        and advanced security tailored to your needs.
                    </p>
                </div>

                {/* Right Side - Grid Section */}
                <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8  rounded-xl ">
                    {tailoredData.map((item) => {
                        if (item.type === "image") {
                            return (
                                <div
                                    key={item.id}
                                    className="bg-gray-300 rounded-lg shadow-lg overflow-hidden h-full transition-transform duration-300 ease-in-out transform md:hover:scale-105 md:hover:rotate-2"
                                >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            );
                        }

                        if (item.type === "card") {
                            return (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full transition-transform duration-300 ease-in-out transform hover:scale-105 md:hover:rotate-2 hover:bg-[#cdbbbb]"
                                >
                                    <h1 className="text-xl md:text-2xl font-semibold mt-3">
                                        {item.title}
                                    </h1>
                                    <p className="text-neutral-600 mt-3">{item.description}</p>
                                    <button className="bg-[#21697D] px-4 py-2 text-white rounded-md md:hover:scale-105 md:active:scale-95 transition mt-3">
                                        {item.buttonLabel}
                                    </button>
                                </div>
                            );
                        }

                        return null; // fallback safety
                    })}
                </div>
            </div>
        </div>
    );
};

export default TailoredAvSolutions;
