"use client";

import { IconButton, Typography, Button } from "@material-tailwind/react";
import Image from "next/image"; // For rendering the profile picture

function Hero() {
  const handleClick = (platform: string) => {
    // Placeholder for handling clicks on icons.
    console.log(`Navigating to ${platform}`);
  };

  return (
    <div
      className="relative w-full min-h-[92vh] bg-gradient-to-r from-gray-50 via-gray-50 to-gray-50 flex items-center justify-center text-center px-4"
    >
      <div className="container mx-auto">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="/profile-picture.jpg" // Make sure the image is in the public folder
            alt="Ali Shan"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        
        {/* Main Heading */}
        <Typography
          variant="h1"
          className="text-blue-gray-900 font-bold"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          I am Ali Shan 
        </Typography>
        
        {/* Subheading */}
        <Typography
          variant="lead"
          className="text-blue-gray-700 mt-4 mb-8 w-full md:max-w-3xl lg:max-w-4xl mx-auto"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          A passionate web and blockchain developer with a drive for creating
          innovative and efficient digital solutions. I specialize in both 
          front-end and back-end technologies, bringing ideas to life on the web.
        </Typography>

        {/* Social Media Links */}
        <Typography
          className="mt-6 mb-4 text-blue-gray-900 font-medium uppercase"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Connect with me on:
        </Typography>
        <div className="flex gap-4 justify-center">
          <IconButton
            variant="text"
            color="gray"
            onClick={() => handleClick("facebook")}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <i className="fa-brands fa-facebook text-2xl" />
          </IconButton>
          <IconButton
            variant="text"
            color="gray"
            onClick={() => handleClick("instagram")}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <i className="fa-brands fa-instagram text-2xl" />
          </IconButton>
          <IconButton
            variant="text"
            color="gray"
            onClick={() => handleClick("github")}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <i className="fa-brands fa-github text-2xl" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Hero;
