import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full max-w-[75rem] mx-auto">
      <div className="w-full max-w-[35.5625rem] flex flex-col items-start gap-[1rem] text-white">
        <p className="text-[1rem] lg:text-[2rem] leading-[22px] lg:leading-[2.625rem] font-medium text-white">
          <span className="border-b-accent-yellow border-b-[3px]">Into</span>{" "}
          African Safaris Invites you to
        </p>
        <div className="w-full flex flex-col gap-[1rem]">
          <h1 className="text-[24px] lg:text-[3rem] leading-[31px] lg:leading-[3.875rem] font-medium text-white">
            Explore The Wonders of the Wild in{" "}
            <span className="text-accent-yellow">Uganda</span>
          </h1>
          <p className="text-[12px] lg:text-[1.35rem] font-normal leading-[18px] lg:leading-[1.8125rem] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="w-full flex justify-start items-center gap-4">
          <Button className="w-fit flex justify-center items-center gap-4 py-[1.25rem] px-[.5rem] uppercase font-semibold bg-primary-brown">
            <p className="w-fit flex items-center justify-center bg-white rounded-full">
              <ArrowRight
                size={12}
                strokeWidth={3}
                className="text-black font-medium"
              />
            </p>
            <p>Vist Now</p>
          </Button>
          <Button className="w-fit flex justify-center items-center gap-3 py-[1.25rem] px-[.5rem] uppercase font-semibold text-black bg-accent-yellow">
            <Search
              size={12}
              strokeWidth={3}
              className="text-black font-medium"
            />
            <p>Explore More</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
