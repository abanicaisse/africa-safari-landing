import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="w-full max-w-[75rem] flex justify-between items-center gap-8 text-xs mx-auto">
      <div className="flex justify-start items-center gap-2 md:gap-[1.5625rem]">
        <div className="w-fit flex justify-start items-center gap-2 text-xs">
          <Image src={"/assets/phone.svg"} width={16} height={16} alt="phone" />
          <Link href="tel:+256392178125">+256 392 178 125</Link>
        </div>
        <div className="w-fit flex justify-start items-center gap-2">
          <Image src={"/assets/sms.svg"} width={16} height={16} alt="mail" />
          <Link href="mailto:info@intoafricasafaris.net">
            info@intoafricasafaris.net
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex justify-start items-center gap-[1.5625rem]">
        <div className="w-fit flex justify-start items-center gap-2 text-xs">
          <Image
            src={"/assets/whatsapp.svg"}
            width={16}
            height={16}
            alt="whatsapp"
          />
          <Link href="https://whatsapp.com">Whatsapp</Link>
        </div>
        <div className="w-fit flex justify-start items-center gap-2 text-xs">
          <Image
            src={"/assets/facebook.svg"}
            width={16}
            height={16}
            alt="phone"
          />
          <Link href="https://facebook.com/IntoAfricaSafaris">Facebook</Link>
        </div>
        <div className="w-fit flex justify-start items-center gap-2 text-xs">
          <Image
            src={"/assets/instagram.svg"}
            width={16}
            height={16}
            alt="phone"
          />
          <Link href="https://instagram.com/IntoAfricaSafaris">Instagram</Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
