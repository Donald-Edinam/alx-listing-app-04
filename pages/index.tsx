import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { HeroSection } from "@/components/home";
import { PropertyGrid } from "@/components/layout/PropertyGrid";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fetchProperties = async () => {
  const { data } = await axios.get("http://localhost:5000/properties");
  return data;
};

export default function Home() {
  const { data: properties, isLoading, isError } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });

  if (isLoading) return <p>Loading properties...</p>;
  if (isError) return <p>Failed to load properties.</p>;

  return (
    <>
      <HeroSection />
      <PropertyGrid properties={properties} />
    </>
  );
}
