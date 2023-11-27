import React from 'react';
import { FaUser, FaCode, FaMoon, FaHeart, FaMapMarkerAlt, FaLaptopCode, FaHandsHelping, FaBlog, FaLinux } from 'react-icons/fa';

const AboutMeResponse: React.FC = () => (
  <div className="text-white">
    <p className="mb-4">
      Hi there! I'm Sujit Kumar, a <strong className="text-emerald-500">Full Stack Developer</strong> based in Kanpur, India (Uttar Pradesh).
    </p>
    
    <div className="flex items-center mb-2">
      <FaUser className="mr-2 text-emerald-500" />
      <strong>Name:</strong> Sujit Kumar
    </div>

    <div className="flex items-center mb-2">
      <FaCode className="mr-2 text-emerald-500" />
      <strong>Role:</strong> Full Stack Developer
    </div>

    <div className="flex items-center mb-2">
      <FaLaptopCode className="mr-2 text-emerald-500" />
      <strong>Contributions:</strong> Open Source Contributor
    </div>

    <div className="flex items-center mb-2">
      <FaHandsHelping className="mr-2 text-emerald-500" />
      <strong>Passion:</strong> Contributing to Open Source
    </div>

    <div className="flex items-center mb-2">
      <FaBlog className="mr-2 text-emerald-500" />
      <strong>Hobbies:</strong> Writing blogs on <a href="https://dev.to/" className="underline text-yellow-500 hover:text-emerald-500">dev.to</a>
    </div>

    <div className="flex items-center mb-2">
      <FaMoon className="mr-2 text-emerald-500" />
      <strong>Coding Habit:</strong> Coding at Night
    </div>

    <div className="flex items-center mb-2">
      <FaHeart className="mr-2 text-emerald-500" />
      <strong>Love:</strong> Linux Enthusiast <FaLinux className="inline-block text-emerald-500" />
    </div>

    <div className="flex items-center">
      <FaMapMarkerAlt className="mr-2 text-emerald-500" />
      <strong>Location:</strong> Kanpur, India (Uttar Pradesh)
    </div>
  </div>
);

export default AboutMeResponse;
