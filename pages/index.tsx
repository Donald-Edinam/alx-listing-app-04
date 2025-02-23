import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { HeroSection } from "@/components/home";
import { PropertyGrid } from "@/components/layout/PropertyGrid";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <PropertyGrid properties={PROPERTYLISTINGSAMPLE} />
    </>
  );
}
