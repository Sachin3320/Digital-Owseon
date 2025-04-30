import React from 'react'
import bannerGraphic from "/AboutUs/image1.png" 


const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#21697D] to-[#21697D] text-white min-h-[500px]">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col min-h-screen max-h-screen md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              BRIDGING GENERATIONS
              <br />
              WITH AV INNOVATION!
            </h1>
            <p className="text-lg mb-8 max-w-md">
              Seamless AV solutions connecting generations with innovation and technology.
            </p>
            <button className="border border-white hover:bg-white hover:text-teal-800 transition-colors duration-300 px-8 py-2 text-sm">
              Explore
            </button>
          </div>

          {/* Right image section */}
          <div className="md:w-1/2 relative">
            <img
              src={bannerGraphic || "/placeholder.svg"}
              alt="AV Innovation Technology"
              className="object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner