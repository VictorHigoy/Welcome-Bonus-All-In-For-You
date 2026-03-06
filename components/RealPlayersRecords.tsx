import localFont from "next/font/local";
import Image from "next/image";

const futuraBold = localFont({
  src: "../fonts/Futura-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-futura-bold",
});

export default function RealPlayersRecords() {
  return (
    <div className=" flex justify-center flex-col items-center mb-4 sm:mb-0">
      <h1
        className={`${futuraBold.className} text-[10px] sm:text-[12px] tracking-widest text-center lg:text-[20px] mb-2 sm:mb-0`}
      >
        BP9 REAL PLAYERS' RECORDS
      </h1>
      <Image
        width={576}
        height={240}
        src="/images/bp9-real-players-record.svg"
        className="w-full h-auto"
        alt="BP9 REAL PLAYERS' RECORDS"
      />
    </div>
  );
}
