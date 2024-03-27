import Image from "next/image";

const Purpose = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/purpose.jpg"
                alt="concert"
                fill
                className="drop-shadow-three rounded-sm"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
              <h3 
                className="mb-4 text-xl font-bold text-center sm:text-2xl lg:text-xl xl:text-2xl"
                style={{color: 'rgb(78 15 188)'}}
              >
                Purpose
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                    AUB Outdoors aims to annually celebrate diversity, foster community spirit, 
                    and provide unforgettable experiences for participants through food, games, concerts, 
                    entertainment, and cultural exploration. Proceeds support student financial aid and 
                    university renovation projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;