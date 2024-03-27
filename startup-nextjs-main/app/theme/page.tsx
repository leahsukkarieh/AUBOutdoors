import Video from "@/components/Video";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disco Fever",
  description: "AUB Outdoors 2024 Theme",
};

const ThemePage = () => {
  return (
    <>
    <section 
        className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]"
        style={{fontFamily: 'Gotham Black, sans-serif'}}
    >
      <div className="container">
        <h1 className="text-xl font-semibold text-body-color">
            AUB OUTDOORS 2024
        </h1>
        <p className="font-bold text-purple" style={{fontSize: '3rem'}}>
            DISCO FEVER
        </p>
      </div>
    </section>
    <section className="py-8">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center justify-around w-full">
          <div className="w-full px-4 md:w-1/2 lg:w-[60%]">
            <div className="max-w-[550px]">
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  The 40th Edition
                </h3>
                <p className="text-base font-medium leading-relaxed text-justify text-body-color sm:text-lg sm:leading-relaxed">
                    Disco Fever is a homage to the era in which birthed AUB
                    Outdoors. Born in a time of political instability and uncertainty,
                    AUB Outdoors was and continues to be an outlet of creative
                    expression for the students of the American University of Beirut.
                    Reaching our 40th edition we honor the 1980s, the era of Disco in
                    Lebanon, the same era that inspired our predecessors to expand
                    what was once called Indoors, to AUB Outdoors. For us, Disco is
                    celebration, creative expression, and unity — an all encompassing
                    theme that will push the Cabinet to new creative limits.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-[25%]">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center mt-4 md:mt-0 lg:m-0"
            >
              <Video />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ThemePage;