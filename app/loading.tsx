import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div
      className="flex items-center justify-center flex-col min-h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/images/Background/background-image.svg')",
      }}
    >
      <Image
        width={2000}
        height={2000}
        className="h-screen w-screen object-cover z-20 max-h-screen fixed top-0 left-0"
        src="/images/Background/background-layer.svg"
        alt="background layer"
      />
      <Image
        width={182.88}
        height={47.52}
        src="/images/Logo.svg"
        className="w-[182.88px] sm:w-[274.32px]  lg:w-[365.76px] h-auto sm:mb-5 lg:mb-5"
        alt="gates of olympus logo"
      />
      <div className="sm:h-10 w-5 h-5 sm:w-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
