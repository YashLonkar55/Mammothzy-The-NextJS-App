"use client";

import Image from "next/image";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Add image directly here */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/mammothzy-logo.png" // Path to the image in the public folder
            alt="Mammothzy Logo"
            width={180} // Specify width
            height={75} // Specify height
          />
          {/* <span className="text-xl font-semibold">mammothzy</span> */}
        </div>
        <button className="flex items-center space-x-2 text-sm font-medium">
          <span>Profile</span>
        </button>
      </div>
    </nav>
  );
}
