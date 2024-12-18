"use client";

import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/images/mammothzy-logo.svg"
        alt="Mammothzy"
        width={32}
        height={32}
        className="text-black dark:text-white"
      />
      <span className="text-xl font-semibold">mammothzy</span>
    </div>
  );
}