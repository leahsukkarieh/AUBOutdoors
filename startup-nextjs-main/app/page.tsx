import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AUB Outdoors",
  description: "Home",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Countdown />
    </>
  );
}
