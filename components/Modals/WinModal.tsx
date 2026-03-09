import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function WinModal({
  setIsClicked,
}: {
  setIsClicked: (value: boolean) => void;
}) {
  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(9 * 60 + 10); // 9:10 in seconds

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatted = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div
      className={`fixed z-40 flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen transition-all duration-300 ease-out ${
        visible ? "bg-black/60" : "bg-black/0"
      }`}
    >
      <div
        className={`transition-all duration-600 ease-out px-3 sm:px-0 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-[20%] opacity-0"
        }`}
      >
        <Image
          width={359}
          height={52}
          src="/images/Modals/win-modal.svg"
          alt="win modal"
          className="relative "
        />
        <div className="absolute bottom-5 sm:bottom-7 flex flex-col items-center justify-center left-1/2 w-full -translate-x-1/2">
          <button className="w-full" onClick={() => setIsClicked(false)}>
            <Image
              width={290}
              height={164}
              src="/images/Modals/claim-now-button.png"
              className="w-[50%] h-auto cursor-pointer pump-animation inline-block"
              alt="claim now button"
            />
          </button>
          <p
            style={{ fontFamily: "Arial, sans-serif" }}
            className="italic text-[8px] uppercase mt-1"
          >
            This limited-time bonus will expire in{" "}
            <span className="text-red-500">{formatted}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
