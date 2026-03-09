import localFont from "next/font/local";
import Image from "next/image";

const futuraBold = localFont({
  src: "../fonts/Futura-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-futura-bold",
});

export default function PaymentMethod() {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <h1
        className={`${futuraBold.className} text-white text-[10px] tracking-widest sm:text-[12px] text-center lg:text-[20px] mb-3`}
      >
        PAYMENT METHOD
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-3">
        <Image
          width={418}
          height={41}
          src="/images/payment-method/payment-method.svg"
          className="w-52.25 lg:w-104.5 h-auto"
          alt="payment method"
        />
      </div>
    </div>
  );
}
