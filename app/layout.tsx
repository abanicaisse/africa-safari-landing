import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";

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
      <body className={`${roboto.variable} ${montserrat.variable} antialiased`}>
        <div className="w-full bg-accent-yellow px-8 lg:px-[7.5rem] py-[0.6875rem] lg:py-[0.5625rem]">
          <TopBar />
        </div>
        {children}
      </body>
    </html>
  );
}
