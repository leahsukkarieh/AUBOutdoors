import Image from "next/image";

const SaturdayArtist = () => {
    
    return (
    <>
    <section id='saturday-artist' className="py-10 md:py-14 lg:py-22">
        <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
                <div className="w-full px-4 lg:w-1/2">
                    <div
                        className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                        data-wow-delay=".15s"
                    >
                        <Image 
                            src='/images/lineup/vegedream.jpg'
                            alt="Vegedream"
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
                                VEGEDREAM
                            </h3>
                            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                                Get ready for a memorable night with Vegedream on Saturday, May 25th at AUB Outdoors 2024!
                                Join us as we groove to hits like {"'La fuite'"} and {"'Ramenez la coupe à la maison"}!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
};

export default SaturdayArtist;