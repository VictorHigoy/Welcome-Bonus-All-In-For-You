"use client";
import localFont from "next/font/local";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const futuraBold = localFont({
  src: "../fonts/Futura-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-futura-bold",
});

export default function SpinningWheel({
  setIsWon,
  setIsClicked,
  handleSpinRef,
}: {
  setIsWon: (value: boolean) => void;
  setIsClicked: (value: boolean) => void;
  handleSpinRef: React.MutableRefObject<(() => void) | null>;
}) {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [spinCount, setSpinCount] = useState(1);
  const [jackpot, setJackpot] = useState(8888880.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/audio_1.mp3");
  }, []);

  const handleSpin = () => {
    if (spinning) return;

    setSpinning(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0; // restart if clicked again
      audioRef.current.play();
    }

    let targetAngle = 145;

    if (spinCount !== 2) {
      setIsWon(false);
      if (spinCount === 1) {
        targetAngle = 108; // first spin
        console.log("first 0", targetAngle);
      } else {
        targetAngle = 108;
        console.log("first 1", targetAngle);
      }
    } else if (spinCount === 2) {
      targetAngle = 145; // second spin
      console.log("bingo", targetAngle);
      setIsWon(true);
    }

    const extraSpins = 5 * 360;

    setRotation((prevRotation) => prevRotation + extraSpins + targetAngle);

    setTimeout(() => {
      setSpinning(false);
      setSpinCount((prev) => prev + 1);
      setIsClicked(true);
    }, 5000);
  };

  handleSpinRef.current = handleSpin;

  useEffect(() => {
    const target = 8888888.5;
    const startValue = 8888880.5;

    const interval = setInterval(() => {
      setJackpot((prev) => {
        if (prev >= target) {
          return startValue;
        }
        return +(prev + 0.01).toFixed(2);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-0 w-full sm:w-1/2 z-20 sm:mt-15 ml-7 sm:ml-0">
      <div className="mr-10 max-w-223.75 relative mb-3 lg:mb-0">
        <Image
          width={340}
          height={178}
          src="/images/wheel/Jackpot-bg.svg"
          className="w-[65%] mx-auto h-auto relative z-0"
          alt="icons"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center leading-5 min-[510px]:leading-7 sm:leading-5 md:leading-7">
          <h1
            className={`${futuraBold.className} text-[14px] min-[510px]:text-[24px] sm:text-[14px] md:text-[18px] lg:text-[24px] uppercase tracking-wider bg-linear-to-r from-[#fcc96b] via-[#f5f1e8] to-[#fcc96b] bg-clip-text text-transparent`}
          >
            Jackpot
          </h1>
          <h1
            className={`${futuraBold.className} text-[16px] min-[510px]:text-[30px] sm:text-[16px] md:text-[22px] lg:text-[30px] uppercase tracking-wide bg-linear-to-r from-[#fcc96b] via-[#f5f1e8] to-[#fcc96b] bg-clip-text text-transparent`}
          >
            $
            {jackpot.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </h1>
        </div>
      </div>
      <div className="relative w-full">
        {/* Icons background */}
        <Image
          width={895}
          height={671}
          src="/images/wheel/icons.png"
          className="w-full relative h-auto z-20"
          alt="icons"
        />
        {/* Wheel container */}
        <div className="absolute inset-y-0 -top-10 w-full -left-5 z-10 flex items-center flex-col justify-center">
          <div className="relative w-[75%]">
            <Image
              width={420}
              height={709}
              src="/images/wheel/Wheel-Stopper.png"
              className="w-full h-auto relative z-10"
              alt="wheel stopper"
            />

            <Image
              width={350}
              height={709}
              src="/images/wheel/Wheel-Spin.png"
              className="wheel-spin-image"
              style={{
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                transition: spinning
                  ? "transform 5s cubic-bezier(0.33, 1, 0.68, 1)"
                  : "none",
              }}
              alt="wheel spin"
            />
          </div>
        </div>
      </div>
      <button
        disabled={spinCount > 2 ? true : false}
        onClick={spinCount > 2 ? undefined : handleSpin}
        className={`${spinCount > 2 ? "cursor-not-allowed" : "cursor-pointer"} relative -mt-7 z-30 -ml-5 w-full flex justify-center`}
      >
        <Image
          width={290}
          height={164}
          src="/images/wheel/spin-now-button.png"
          className={` w-[50%] h-auto pump-animation inline-block`}
          alt="spin now button"
        />
      </button>
    </div>
  );
}
