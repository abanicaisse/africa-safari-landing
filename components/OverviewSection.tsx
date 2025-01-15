import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const OverviewSection = () => {
  return (
    <div className="w-full max-w-[75rem] flex flex-col items-center gap-[1.5rem] lg:gap-[2rem] mx-auto">
      <h1 className="w-fit flex flex-col justify-center items-center text-[24px] lg:text-[36px] lg:leading-[40px] font-bold text-primary-brown text-center">
        <span> Overview</span>
        <span className="w-[80px] h-[4px] bg-accent-yellow mt-2"></span>
      </h1>
      <p className="w-full max-w-[53.75rem] text-[14px] lg:text-[20px] leading-[22px] lg:leading-[20px] text-center text-black">
        Into Africa Safaris organizes different African safaris ranging from
        family tours, private tours, group tours, multi-country tours, study
        tours, and fly-in tours depending on the clients&apos; reason of travel
        whether you are out for an adventure, vacation, beach relaxation,
        planning a honey moon or leisure suited to you and your budget.
      </p>
      <Image
        src="/assets/giraffe.svg"
        width={100}
        height={100}
        alt="giraffe"
        className="w-full max-w-[1080px]"
      />
      <Button className="w-fit flex justify-center items-center gap-3 py-[1.25rem] px-[.5rem] uppercase font-semibold text-black bg-accent-yellow">
        <Search size={12} strokeWidth={3} className="text-black font-medium" />
        <p>Explore Africa With Us</p>
      </Button>
    </div>
  );
};

export default OverviewSection;
