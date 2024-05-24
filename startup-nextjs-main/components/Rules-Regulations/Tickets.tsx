import Image from "next/image";

const Tickets = () => {
    return (
        <>
        <section id='tickets' className="py-10 md:py-14 lg:py-22">
            <div className="container">
                <h1 className="text-xl font-bold text-blue mb-8">Tickets</h1>
                <div className="flex flex-col justify-center items-center">
                    <Image
                        src='/images/tickets/ticket.avif'
                        alt='AUB Outdoors ticket'
                        className="rounded-lg w-[70%]"
                    />
                    <ul className='list-disc mt-10'>
                        <li>
                            All event tickets are{" "}
                            <span className="text-purple font-semibold">non-refundable</span>
                            {" "}and{" "}
                            <span className="text-purple font-semibold">non-transferable</span>.
                        </li>
                        <li>
                            Attendees with Fast Pass two-day (Day 1 and Day 2) tickets must keep their
                            bracelets on throughout both days and{" "}
                            <span className="text-purple font-semibold">not</span> 
                            {" "}remove it until the end of the event.
                        </li>
                        <li>
                            Fast Pass Two-day tickets will{" "}
                            <span className="text-purple font-semibold">not</span>
                            {" "}be available for purchase at the door on the event days.
                        </li>
                        <li>
                            Once the event reaches its{" "} 
                            <span className="text-purple font-semibold">maximum capacity</span>
                            ,no further entry will be allowed, even for attendees with pre-purchased tickets.
                        </li>
                        <li>
                            Upon successful security screening, attendees{"'"} tickets will be 
                            activated and validated in the form of a non-removable bracelet containing an 
                            embedded chip for cashless payments.
                        </li>
                        <li>
                            Event tickets include access to all entertainment and activities on the West Stage and 
                            Green Oval Stage but do{" "}
                            <span className="text-purple font-semibold">not</span> 
                            {" "}cover food and beverage purchases.
                        </li>
                        <li>
                            All the tickets include{" "}
                            <span className="text-purple font-semibold">multiple entries</span>
                            ; however, every time someone goes out, they are required to undergo the security 
                            screening again.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
};

export default Tickets;