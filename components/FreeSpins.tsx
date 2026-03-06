import localFont from "next/font/local";
import Image from "next/image";
import GameLicense from "./GameLicense";
import GameProvider from "./GameProvider";
import RealPlayersRecords from "./RealPlayersRecords";
import PaymentMethod from "./PaymentMethod";

const futuraBold = localFont({
  src: "../fonts/Futura-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-futura-bold",
});

export default function FirstRow() {
  return (
    <section
      className="bg-no-repeat bg-cover py-5"
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
      <div className="max-w-[1500px] relative z-30 mx-auto">
        <div className="sm:mx-6 flex sm:flex-row flex-col px-5 sm:px-0 items-center sm:gap-2 mb-0 sm:mb-2">
          {/* Branding */}
          <div className="flex w-full sm:w-1/2 flex-col items-center">
            <div className="flex justify-center mb-2 sm:mb-3 w-full">
              <Image
                width={461}
                height={115}
                src="/images/Sponsor/Sponsor.svg"
                className="w-[200px] min-[375px]:w-[270px] sm:w-[461px] h-auto"
                alt="sponsors' logo"
              />
            </div>
            <div className="relative">
              <Image
                width={758}
                height={875}
                src="/images/Olympus.svg"
                className="w-[758px] h-auto"
                alt="gates of olympus logo"
              />
            </div>
          </div>
          {/* Wheel */}
          <div className="mt-0 w-full sm:w-1/2 z-20 sm:mt-15 ml-7 sm:ml-0">
            <Image
              width={740}
              height={995}
              src="/images/wheel.png"
              className="w-full h-auto"
              alt="wheel"
            />
          </div>
        </div>
        <div className="mt-2 sm:mt-0 px-10 flex flex-col sm:flex-row sm:gap-2 justify-evenly">
          <div className="w-full sm:w-1/2 flex items-start">
            <RealPlayersRecords />
          </div>
          <div className="w-full sm:w-1/2 space-y-2 sm:space-y-3">
            <div className="flex justify-evenly gap-2 items-start">
              <GameLicense />
              <GameProvider />
            </div>
            <PaymentMethod />
          </div>
        </div>
      </div>
    </section>
  );
}
