import Breadcrumb from "@/components/Common/Breadcrumb";
import Content from "@/components/Merch/Content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch",
  description: "AUB Outdoors 2024 Merch",
};

const MerchPage = () => {
  return (
    <>
    <Breadcrumb
        pageName="Merch"
        description='Take home a piece of the AUB Outdoors 2024 groove! Shop our merch available at the event.'
    />
    <Content />
    </>
  );
};

export default MerchPage;
