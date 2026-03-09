"use client";
import FreeSpins from "@/components/FreeSpins";
import { useEffect, useRef, useState } from "react";
import Loading from "./loading";
import WinModal from "@/components/Modals/WinModal";
import LoseModal from "@/components/Modals/LoseModal";

export default function Home() {
  const [isWon, setIsWon] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleSpinRef = useRef<() => void>(null);

  return (
    <div className="w-full overflow-hidden">
      <FreeSpins
        setIsWon={setIsWon}
        setIsClicked={setIsClicked}
        handleSpinRef={handleSpinRef}
      />
      {isClicked &&
        (isWon ? (
          <WinModal setIsClicked={setIsClicked} />
        ) : (
          <LoseModal
            onPlayAgain={() => {
              setIsClicked(false);
              handleSpinRef.current?.();
            }}
          />
        ))}
    </div>
  );
}
