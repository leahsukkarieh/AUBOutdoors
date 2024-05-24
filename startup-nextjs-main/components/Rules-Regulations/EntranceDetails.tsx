import Image from "next/image";

const EntranceDetails = () => {
    return (
        <>
        <section id='entrance-details' className="py-10 md:py-14 lg:py-22">
            <div className="container">
                <h1 className="text-xl font-bold text-blue mb-8">Entrance Details</h1>
                <div className="flex flex-wrap justify-around items-start">
                    <div className='flex flex-col justify-center items-center w-[300px] mb-8 px-4'>
                        <Image 
                            src='/images/entranceDetails/verified.png'
                            alt='verified security'
                            width={100}
                            height={100}
                        />
                        <p className="text-md mt-2 text-justify">
                            All attendees (with pre-purchased or walk-in tickets) will be required to 
                            undergo a security screening process before entering the event premises.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[300px] mb-8 px-4'>
                        <Image 
                            src='/images/entranceDetails/prohibition.png'
                            alt='prohibited sign'
                            width={100}
                            height={100}
                        />
                        <p className="text-md mt-2 text-justify">
                            To ensure a smooth security screening process, attendees are advised to leave all 
                            prohibited items in their vehicles or at home.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[300px] mb-8 px-4'>
                        <Image 
                            src='/images/entranceDetails/lanes.png'
                            alt='lanes'
                            width={100}
                            height={100}
                        />
                        <p className="text-md mt-2 text-justify">
                            The entrance area will be divided into separate lanes for Fast Pass holders, 
                            regular pre-purchased ticket holders, and walk-in ticket purchasers.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[300px] mb-8 px-4'>
                        <Image 
                            src='/images/entranceDetails/bracelet.png'
                            alt='bracelet'
                            width={100}
                            height={100}
                        />
                        <p className="text-md mt-2 text-justify">
                            Upon passing the security screening, attendees will receive a non-removable 
                            bracelet which will serve as their event ticket and payment method.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[300px] px-4'>
                        <Image 
                            src='/images/entranceDetails/signage.png'
                            alt='signage'
                            width={100}
                            height={100}
                        />
                        <p className="text-md mt-2 text-justify">
                            Clear signage will be present throughout the event grounds to guide attendees 
                            to different areas and facilities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default EntranceDetails;