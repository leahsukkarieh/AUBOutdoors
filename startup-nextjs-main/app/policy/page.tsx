import ComingSoon from "@/components/Common/ComingSoon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policy",
  description: "AUB Outdoors 2024 Policy, Rules and Regulations",
};

const PolicyPage = () => {
  const description = 'Discover the essential rules and regulations for AUB Outdoors 2024! Stay informed to ensure a smooth and enjoyable experience at this year’s event.';
  return (
    <>
        <ComingSoon description={description} />
    </>
  );
};

export default PolicyPage;