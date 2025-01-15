import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full max-w-[75rem] mx-auto xl:pb-16">
      <div className="w-full max-w-[35.5625rem] flex flex-col items-start gap-[1.5rem] text-white xl:pt-16">
        <p className="text-[1rem] lg:text-[1.75rem] xl:text-[2rem] leading-[22px] lg:leading-[2.05rem] xl:leading-[2.625rem] font-medium text-white">
          <span className="border-b-accent-yellow border-b-[3px]">Into</span>{" "}
          African Safaris Invites you to
        </p>
        <div className="w-full flex flex-col gap-[1rem]">
          <h1 className="text-[24px] lg:text-[2.5rem] xl:text-[3rem] leading-[31px] lg:leading-[3.25rem] xl:leading-[3.875rem] font-medium text-white">
            Explore The Wonders of the Wild in{" "}
            <span className="text-accent-yellow">Uganda</span>
          </h1>
          <p className="text-[12px] lg:text-[1.35rem] font-normal leading-[18px] lg:leading-[1.8125rem] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="w-full flex justify-start items-center gap-4">
          <Button className="w-fit flex justify-center items-center gap-3 py-[1.25rem] lg:py-[1.65rem] px-[.5rem] lg:px-[1.5rem] uppercase font-semibold bg-primary-brown">
            <Image
              src={"/assets/right-arrow.svg"}
              width={14}
              height={14}
              alt="r-arrow"
            />
            <p>Vist Now</p>
          </Button>
          <Button className="w-fit flex justify-center items-center gap-3 py-[1.25rem] lg:py-[1.65rem] px-[.5rem] lg:px-[1.5rem] uppercase font-semibold bg-accent-yellow text-black hover:bg-white">
            <Image
              src={"/assets/search-icon.svg"}
              width={14}
              height={14}
              alt="search"
            />
            <p>Explore More</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
