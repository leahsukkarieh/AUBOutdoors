import Image from "next/image";

const SundayArtist = () => {
    
    return (
    <>
    <section id='sunday-artist' className="py-10 md:py-14 lg:py-22">
        <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
                    <div className="max-w-[470px]">
                        <div className="mb-9">
                            <h3 
                                className="mb-4 text-xl font-bold text-center sm:text-2xl lg:text-xl xl:text-2xl"
                                style={{color: 'rgb(78 15 188)'}}
                            >
                                ADONIS
                            </h3>
                            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                                Sing your heart out with Adonis on Sunday, May 26th at AUB Outdoors 2024!
                                Dance along with us to hits like {"'Shou Awlak'"}, {"'Shayef'"} and {"'Eza Shi Nhar'"}!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                    <div
                        className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                        data-wow-delay=".15s"
                    >
                        <Image 
                            src='/images/lineup/adonis.jpg'
                            alt="Adonis"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
};

export default SundayArtist;