const Mission = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Conditionally render based on screen size */}
          <div className="w-full px-4 lg:w-1/2 order-2 lg:order-1">
            <div className="max-w-[470px] lg:max-w-none">
              <div className="mb-9">
                <h3 
                  className="mb-4 text-xl font-bold text-center sm:text-2xl lg:text-xl xl:text-2xl"
                  style={{color: 'rgb(78 15 188)'}}
                >
                  Mission Statement
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify lg:text-left">
                  AUB Outdoors fosters an empowering community, championing unity in diversity through vibrant cultural celebrations and world-class entertainment. As a student-driven platform, we donate proceeds to support peers facing adversities, ensuring accessibility to quality education.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 order-1 lg:order-2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src="https://ik.imagekit.io/nh7xswppky/about/mission.jpg?updatedAt=1711805635025"
                alt="concert"
                className="drop-shadow-three rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
