import Image from "next/image";

const Facilities = () => {
    return (
        <>
        <section id="facilities" className="py-10 md:py-14 lg:py-22">
            <div className="container">
                <div className="border-b-2 border-purple mb-8"/>
                <div className="flex flex-wrap justify-around items-start mb-10">
                    <div 
                        className='flex flex-col justify-start items-center w-[400px] h-[308px] mb-8 px-4 bg-white rounded-md'
                        style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}
                    >
                        <Image 
                            src='/images/facilities/photo-booth.png'
                            alt='booth'
                            width={100}
                            height={100}
                            className="p-4"
                        />
                        <h2 className="text-lg mx-2 text-blue">Top-up Booths</h2>
                        <p className="text-md mt-2 text-justify">
                            There will be top-up booths located throughout the event grounds, 
                            where attendees can charge their bracelets for making cashless purchases.
                        </p>
                    </div>
                    <div 
                        className='flex flex-col justify-start items-center w-[400px] h-[308px] mb-8 px-4 bg-white rounded-md'
                        style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}
                    >
                        <Image 
                            src='/images/facilities/recycle-symbol-of-three-arrows.png'
                            alt='recycling'
                            width={100}
                            height={100}
                            className="p-4"
                        />
                        <h2 className="text-lg mx-2 text-blue">Recycling</h2>
                        <p className="text-md mt-2 text-justify">
                            Recycling is highly encouraged throughout the event, and clearly labeled 
                            recycling bins will be provided for attendees to properly dispose of different 
                            types of waste. The event organizers are committed to promoting sustainability 
                            and minimizing the environmental impact of the event.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-around items-start">
                    <div 
                        className='flex flex-col justify-start items-center w-[400px] md:w-[300px] h-[308px] mb-8 px-4 bg-white rounded-md'
                        style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}
                    >
                        <Image 
                            src='/images/facilities/cancel.png'
                            alt='cancel sign'
                            width={100}
                            height={100}
                            className="p-4"
                        />
                        <h2 className="text-lg mx-2 text-blue">Closure by Area</h2>
                        <p className="text-md mt-2 text-justify">
                            To ensure an optimal experience for attendees during the international 
                            artists{"'"} performances, the Local Business Area will be closed at 08:00 PM to 
                            encourage attendees to gather at the Green Oval.
                        </p>
                    </div>
                    <div 
                        className='flex flex-col justify-start items-center w-[400px] md:w-[300px] h-[308px] mb-8 px-4 bg-white rounded-md'
                        style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}
                    >
                        <Image 
                            src='/images/facilities/no-smoking.png'
                            alt='no smoking sign'
                            width={100}
                            height={100}
                            className="p-4"
                        />
                        <h2 className="text-lg mx-2 text-blue">Smoking Areas</h2>
                        <p className="text-md mt-2 text-justify">
                            No Smoking Areas are available inside the event.
                        </p>
                    </div>
                    <div 
                        className='flex flex-col justify-start items-center w-[400px] md:w-[300px] h-[308px] mb-8 px-4 bg-white rounded-md'
                        style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}
                    >
                        <Image 
                            src='/images/facilities/bean-bag.png'
                            alt='bean bag'
                            width={100}
                            height={100}
                            className="p-4"
                        />
                        <h2 className="text-lg mx-2 text-blue">Resting Areas</h2>
                        <p className="text-md mt-2 text-justify">
                            Resting Areas are provided at two locations during the event.
                            Follow the signages to find the areas.
                        </p>
                    </div>
                </div>
                <div className="border-b-2 border-purple"/>
            </div>
        </section>
        </>
    )
};

export default Facilities;