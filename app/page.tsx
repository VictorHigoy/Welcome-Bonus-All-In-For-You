"use client";
import FreeSpins from "@/components/FreeSpins";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    const handleLoad = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener("load", handleLoad);
        img.addEventListener("error", handleLoad);
      }
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-screen overflow-hidden">
      <FreeSpins />
    </div>
  );
}
