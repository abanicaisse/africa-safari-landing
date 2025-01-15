import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
interface ISafariCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imgUrl: string;
  textPosition: "left" | "right";
}

const SafariCard = ({
  title,
  description,
  imgUrl,
  textPosition,
}: ISafariCardProps) => {
  return (
    <div
      className={`w-full flex flex-col-reverse ${
        textPosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`w-full flex-1 pt-[2rem] pb-[4rem]  md:py-[5.25rem]`}>
        <div
          className={`w-full max-w-[33.5rem] flex flex-col gap-[1.25rem] pl-8 pr-8 ${
            textPosition === "left"
              ? "md:ml-auto md:pl-[0] md:pr-[3.875rem]"
              : "md:mr-auto md:pl-[3.875rem] md:pr-[0]"
          }`}
        >
          <h1 className="text-[1.25rem] lg:text-[2rem] leading-[28px] lg:leading-[40px] font-bold text-primary-brown">
            {title}
          </h1>
          <p className="text-[0.875rem] lg:text-[1.25rem] leading-[24px] font-normal text-primary-brown">
            {description}
          </p>
          <Button className="w-fit flex justify-center items-center gap-3 py-[1.25rem] lg:py-[1.65rem] px-[.5rem] lg:px-[1.5rem] uppercase font-semibold bg-primary-brown">
            <Image
              src={"/assets/right-arrow.svg"}
              width={14}
              height={14}
              alt="r-arrow"
            />
            <p>Vist Now</p>
          </Button>
        </div>
      </div>
      <div
        className="w-full flex-1 py-[10.875rem]"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      ></div>
    </div>
  );
};

// px-8 lg:px-[7.5rem]

const SafarisGrid = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[1.5rem] lg:gap-[2rem] mx-auto">
      <h1 className="w-fit flex flex-col justify-center items-center text-[24px] lg:text-[36px] lg:leading-[40px] font-bold text-primary-brown text-center">
        <span>Have a look at our Safaris</span>
        <span className="w-[80px] h-[4px] bg-accent-yellow mt-2"></span>
      </h1>
      <div className="w-full bg-peach-white">
        <SafariCard
          title="21 Days Uganda Tour"
          description="This safari tour will give you a chance of visiting the most amazing
          tourism destinations in Uganda."
          imgUrl="assets/cameleon.png"
          textPosition="left"
        />
        <SafariCard
          title="4 Days Best to Explore Queen Elizabeth NP in Western Uganda"
          description="Our 4 Days at Queen Elizabeth National Park Safari takes you to Uganda’s most-visited National Park."
          imgUrl="assets/lioness.png"
          textPosition="right"
        />
        <SafariCard
          title="7 Days Mountain Gorilla, Chimpanzee and Game Viewing Safari in Uganda"
          description="Your 7 days chimpanzee tracking, game viewing and gorilla tracking will take you to completely different wonderful adventure"
          imgUrl="assets/elephant-paysage.png"
          textPosition="left"
        />
        <SafariCard
          title="3 Days Murchison Falls NP Safari"
          description="3 Days Murchison Safari is an incredible vacation to Uganda’s largest national park – Murchison Falls National Park"
          imgUrl="assets/bull.png"
          textPosition="right"
        />
      </div>
    </div>
  );
};

export default SafarisGrid;
