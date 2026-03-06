import localFont from "next/font/local";
import Image from "next/image";

const futuraBold = localFont({
  src: "../fonts/Futura-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-futura-bold",
});

const licenses = [
  {
    src: "/images/gaming-license/gaming-curacao.svg",
    width: 115,
    height: 37,
    className: "w-[57.5px] lg:w-[115px] h-auto",
    alt: "gaming-curacao",
  },
  {
    src: "/images/gaming-license/pagcor.svg",
    width: 135,
    height: 28,
    className: "w-[67.5px] lg:w-[135px] h-auto",
    alt: "pagcor",
  },
  {
    src: "/images/gaming-license/bmm.svg",
    width: 86,
    height: 27,
    className: "w-[43px] lg:w-[86px] h-auto",
    alt: "bmm",
  },
  {
    src: "/images/gaming-license/malta-gaming-authority.svg",
    width: 189,
    height: 37,
    className: "w-[94.5px] lg:w-[189px] h-auto",
    alt: "malta-gaming-authority",
  },
];

export default function GameLicense() {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <h1
        className={`${futuraBold.className} text-[10px] sm:text-[12px] text-center tracking-widest lg:text-[20px] mb-3`}
      >
        GAMING LICENSE
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center flex-wrap gap-3">
          {licenses.map((license, index) => (
            <Image
              key={index}
              src={license.src}
              width={license.width}
              height={license.height}
              className={license.className}
              alt={license.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
