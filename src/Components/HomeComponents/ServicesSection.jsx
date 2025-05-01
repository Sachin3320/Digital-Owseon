import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const OurServices = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const services = [
        {
            id: 1,
            title: 'Podcast Setup',
            description: 'Create a studio-quality podcast with our professional audio solutions, featuring high-end microphones, acoustic recording, and expert sound design. Whether you\'re a beginner or a seasoned podcaster, our setup perfectly balances usability and quality. Our team will equip you with the perfect blend of technology and convenience.',
            hasVideo: false,
        },
        {
            id: 2,
            title: 'Auditorium Solutions',
            description: 'Enhance your auditorium experience with our cutting-edge audio-visual solutions designed to transform any space. From crystal-clear sound systems to immersive visual displays, our audio-visual configurations provide the perfect balance of clarity, acoustic strategic positioning, and exceptional audience feedback.',
            hasVideo: false,
        },
        {
            id: 3,
            title: 'Conference Solutions',
            description: 'Optimize your meetings with our advanced conference solutions featuring state-of-the-art audio, visual display integration, and smart collaboration tools. Designed for efficiency and organization, our comprehensive conferencing systems provide an engaging experience whether in-person, remote, or hybrid.',
            hasVideo: false,
        },
        {
            id: 4,
            title: 'Studio Setup',
            description: 'Professional studio environments with superior acoustics, advanced equipment, and ergonomic designs. Perfect for recording artists, producers, and creators looking for premium sound quality and workflow efficiency.',
            hasVideo: false,
        },
        {
            id: 5,
            title: 'Home Theater Systems',
            description: 'Transform your living space with immersive home theater solutions featuring surround sound, 4K projection, integrated lighting control, and custom seating arrangements designed for the ultimate viewing experience.',
            hasVideo: false,
        },
        {
            id: 6,
            title: 'Live Event Production',
            description: 'Comprehensive audio-visual support for concerts, conferences, and corporate events with professional sound reinforcement, dynamic lighting, video projection, and seamless technical coordination.',
            hasVideo: false,
        },
    ];

    // Group services into sets of 3 for the carousel
    const serviceGroups = [];
    for (let i = 0; i < services.length; i += 3) {
        serviceGroups.push(services.slice(i, i + 3));
    }

    const totalSlides = serviceGroups.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h3 className="text-lg font-semibold mb-3">Our Services</h3>
                    <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
                        Tailored Audio-Visual Solutions for Seamless Communication and Innovation.
                    </h2>
                </div>

                {/* Main Feature Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {/* First Feature */}
                    <div className="relative h-64 md:h-80 bg-gray-400 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer">
                                <Play className="w-8 h-8 text-white fill-white" />
                            </div>
                        </div>
                    </div>

                    {/* Second Feature */}
                    <div className="relative h-64 md:h-80 bg-teal-600 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-black/20">
                            <div className="p-8 text-white h-full flex flex-col justify-center">
                                <h3 className="text-xl font-semibold mb-4">Auditorium Solutions</h3>
                                <p className="text-sm">
                                    Enhance your auditorium experience with our cutting-edge audio-visual solutions designed to transform any space. From crystal-clear sound systems to immersive visual displays, our audio-visual configurations provide the perfect balance of clarity, acoustic strategic positioning, and exceptional audience feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Carousel */}
                <div className="relative">

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 z-10">

                    </div>

                    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 z-10">
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
                            aria-label="Next services"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>

                    {/* Service Cards - Show only current group */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300"
                    >
                        {serviceGroups[currentSlide].map((service, index) => {
                            // Middle item (index 1) is always a video placeholder in our 3-column layout
                            if (index === 1) {
                                return (
                                    <div key={service.id} className="relative h-64 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer">
                                            <Play className="w-8 h-8 text-white fill-white" />
                                        </div>
                                    </div>
                                );
                            }

                            // Other items are service cards
                            return (
                                <div key={service.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-teal-500 pl-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-2 mt-8">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-teal-600' : 'bg-gray-300'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;