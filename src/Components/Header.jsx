import React from "react";
import { HiMiniBars3 } from "react-icons/hi2";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-center">
        <img className="h-16 mr-5" src="./src/assets/download.jpeg" alt="food" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl text-white text-xs px-2 py-1">Get Food</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <li><a href="#">Explore</a></li>
        <li><a href="#">Food</a></li>
        <li><a href="#">Why us?</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a className="text-gray-400" href="#">Sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
      </div>
      <div className="lg:hidden">
        <HiMiniBars3 />
      </div>
    </div>
  );
};

export default Header;
