import ComingSoon from "@/components/Common/ComingSoon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tickets",
  description: "AUB Outdoors 2024 Tickets",
};

const TicketsPage = () => {
    const description = 'Stay tuned for updates on tickets for AUB Outdoors 2024. Get ready to secure your spot at the most anticipated event of the year!'
  return (
    <>
        <ComingSoon description={description} />
    </>
  );
};

export default TicketsPage;