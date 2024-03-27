import Mission from "@/components/About/Mission";
import Purpose from "@/components/About/Purpose";
import Vision from "@/components/About/Vision";
import Values from "@/components/About/Values";
import Goals from "@/components/About/Goals";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AUB Outdoors",
  description: "AUB Outdoors Purpose, Mission, Vision, Values, and Goals",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About AUB Outdoors"
        description="Discover the essence of AUB Outdoors. Dive into our purpose, mission, vision, core values, goals, and objectives. Learn what drives us, inspires us, and unites us in celebration."
      />
      <Purpose />
      <Mission />
      <Vision />
      <Values />
      <Goals />
    </>
  );
};

export default AboutPage;