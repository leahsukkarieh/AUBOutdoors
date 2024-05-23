import Breadcrumb from "@/components/Common/Breadcrumb";
import Saturday from "@/components/Lineup/Saturday";
import SaturdayArtist from "@/components/Lineup/SaturdayArtist";
import Sunday from "@/components/Lineup/Sunday";
import SundayArtist from "@/components/Lineup/SundayArtist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lineup",
  description: "AUB Outdoors 2024 Lineup",
};

//ben saturday w sunday hatte shi aan vegetable
//baad sunday hatte aan adonis
const LineupPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Lineup"
        description="Get ready for an unforgettable experience at AUB Outdoors 2024! Our lineup features an eclectic mix of international and local artists and emerging talents, hosted by El 3ama on May 25th - 26th weekend. Immerse yourself in the vibrant atmosphere, discover new favorites, and enjoy the best in music and performances. Join us and get your groove on!"
      />
      <Saturday />
      <SaturdayArtist />
      <Sunday />
      <SundayArtist />
    </>
  );
};

export default LineupPage;