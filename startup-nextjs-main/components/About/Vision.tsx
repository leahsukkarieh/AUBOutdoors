import Image from "next/image";

const Vision = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img src="https://upcdn.io/12a1ytL/image/vision.jpg?w=500&h=700"/>  
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
              <h3 
                className="mb-4 text-xl font-bold text-center sm:text-2xl lg:text-xl xl:text-2xl"
                style={{color: 'rgb(78 15 188)'}}
              >
                  Vision Statement
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                    AUB Outdoors strives to be the leading student-run platform in the Middle East, organizing 
                    impactful events centered on cultural enrichment, talent incubation, and social responsibility. 
                    We aim to empower students to pursue academic dreams despite hardships, setting new standards of 
                    excellence in university events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;