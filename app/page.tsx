import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import SafarisGrid from "@/components/SafarisGrid";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-start gap-[3rem] lg:gap-[3rem]">
      <div
        className="w-full flex flex-col px-8 lg:px-[7.5rem] pb-[6.75rem] md:pb-[6.75rem] pt-[3rem] md:pt-[4.75rem]  bg-hero-bg-mobile md:bg-hero-bg-desktop"
        style={{
          backgroundSize: "100vw",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <HeroSection />
      </div>
      <div className="w-full bg-background px-8 lg:px-[7.5rem]">
        <OverviewSection />
      </div>
      <div className="w-full bg-background">
        <SafarisGrid />
      </div>
    </div>
  );
}
