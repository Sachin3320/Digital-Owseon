import { MapPin, Globe } from 'lucide-react';
import { FaMapPin } from 'react-icons/fa';

const LocationSection = () => {
  return (
    <section className="bg-white   px-36 py-10 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left - Map Image */}
      <div className="w-full md:w-1/2">
        <img
          src="ContactUs/map.png" 
          alt="World Map"
          className="w-full rounded-md shadow-md"
        />
      </div>

      {/* Right - Info */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Heading */}
        <div>
          <div className="flex items-center gap-2 text-[#013a3a] font-semibold text-2xl">
            <MapPin className="text-[#013a3a]" />
            <span>Our Location</span>
          </div>
          <p className="text-gray-600 text-sm mt-1">Connecting Near and Far</p>
        </div>

        {/* Card */}
        <div className="bg-[#ffffff] w-fit border border-[#e0ddd9] shadow rounded-lg py-6 px-16">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-2">
            <FaMapPin className="text-[#013a3a]" />
            Headquaters
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            4th Floor, Govind Bhawan, <br />
            New dark Bunglow road,<br />
            Patna-800001, Bihar-India
          </p>
          <hr className="my-3 border-t border-gray-300" />
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-[#014f86] hover:underline"
          >
            <Globe className="w-4 h-4" />
            Open Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
