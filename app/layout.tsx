import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Into Africa Safaris - Website",
  description: "Into Africa Safaris - Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable} bg-background antialiased font-roboto`}
      >
        <div className="w-full bg-accent-yellow px-8 lg:px-[7.5rem] py-[0.6875rem] lg:py-[0.5625rem]">
          <TopBar />
        </div>
        <div className="w-full bg-secondary-brown px-8 lg:px-[7.5rem] py-[0.6875rem] lg:py-[0.5625rem]">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
