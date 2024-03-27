import ComingSoon from "@/components/Common/ComingSoon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lineup",
  description: "AUB Outdoors 2024 Lineup",
};

const LineupPage = () => {
  const description = 'Stay tuned for the AUB Outdoors 2024 Lineup!';
  return (
    <>
        <ComingSoon description={description} />
    </>
  );
};

export default LineupPage;