import ComingSoon from "@/components/Common/ComingSoon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch",
  description: "AUB Outdoors 2024 Merch",
};

const MerchPage = () => {
    const description = 'Stay tuned for the AUB Outdoors 2024 Merch Collection.'
  return (
    <>
        <ComingSoon description={description} />
    </>
  );
};

export default MerchPage;
