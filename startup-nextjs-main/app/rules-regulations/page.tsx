import Breadcrumb from "@/components/Common/Breadcrumb";
import EntranceDetails from "@/components/Rules-Regulations/EntranceDetails";
import ProhibitedItems from "@/components/Rules-Regulations/ProhibitedItems";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules and Regulations",
  description: "AUB Outdoors 2024 Event Rules and Regulations",
};

const RulesRegulationsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Rules & Regulations"
        description="Stay informed about the policy to ensure a smooth and enjoyable experience at this year’s event."
      />
      <ProhibitedItems />
      <EntranceDetails />
    </>
  );
};

export default RulesRegulationsPage;