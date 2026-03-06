import localFont from "next/font/local";
import Image from "next/image";

const futuraBold = localFont({
  src: "../fonts/Futura-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-futura-bold",
});

const providers = [
  {
    src: "/images/gaming-provider/provider-1.svg",
    width: 42,
    height: 60,
    className: "w-[21px] lg:w-[42px] -mt-3",
  },
  {
    src: "/images/gaming-provider/provider-2.svg",
    width: 30,
    height: 41,
    className: "w-[15px] lg:w-[30px]",
  },
  {
    src: "/images/gaming-provider/provider-3.svg",
    width: 57,
    height: 26,
    className: "w-[28.5px] lg:w-[57px]",
  },
  {
    src: "/images/gaming-provider/provider-4.svg",
    width: 49,
    height: 47,
    className: "w-[24.5px] lg:w-[49px]",
  },
  {
    src: "/images/gaming-provider/provider-5.svg",
    width: 39,
    height: 52,
    className: "w-[19.5px] lg:w-[39px]",
  },
  {
    src: "/images/gaming-provider/provider-6.svg",
    width: 40,
    height: 49,
    className: "w-[20px] lg:w-[40px] mt-2",
  },
  {
    src: "/images/gaming-provider/provider-7.svg",
    width: 40,
    height: 52,
    className: "w-[20px] lg:w-[40px] -mt-2",
  },
  {
    src: "/images/gaming-provider/provider-8.svg",
    width: 62,
    height: 22,
    className: "w-[31px] lg:w-[62px] -ml-2",
  },
];

export default function GameProvider() {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <h1
        className={`${futuraBold.className} text-[10px] tracking-widest text-center sm:text-[12px] lg:text-[20px] mb-3`}
      >
        GAMING PROVIDERS
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-3">
        {providers.map((provider, index) => (
          <Image
            key={index}
            src={provider.src}
            width={provider.width}
            height={provider.height}
            className={`${provider.className} h-auto`}
            alt={`provider-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
