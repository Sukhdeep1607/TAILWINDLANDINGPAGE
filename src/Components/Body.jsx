import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img className="h-44 w-100 items-center justify-center md:h-72 md:mx-10 lg:flex-1 lg:h-[400px]" src="./src/assets/body.png" alt="bodyimg" />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-4xl font-playfair font-bold leading-tight">
          Get Your Food Under 30 Mins
        </h1>
        <p className="font-lato text-gray-400">
        With intuitive navigation and sleek design elements, our landing page provides a <br />seamless browsing experience, making it effortless for users to discover local favorites <br />and new gastronomic experiences.
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input className="rounded-md px-4 py-3 placeholder:text-gray-400" type="email" placeholder="Enter email address" />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
        </form>
        <div className="flex gap-2">
          <img className="h-6" src="./src/assets/checkmark.png" alt="tick" />
          <p className="text-lato text-gray-400">No scam ever, Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
