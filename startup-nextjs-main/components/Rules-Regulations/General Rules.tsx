const GeneralRules = () => {
    return (
        <>
        <section id='general-rules' className="py-10 md:py-14 lg:py-22">
            <div className="container">
                <h1 className="text-xl font-bold text-blue mb-8">General Rules</h1>                
                <ul className='list-disc'>
                    <li className="mb-2">
                        Attendees are expected to behave in a{" "}
                        <span className="text-purple font-semibold">responsible</span>
                        {" "}and{" "}
                        <span className="text-purple font-semibold">respectful</span>
                        {" "}manner throughout the event, following all posted rules and instructions from event staff.
                    </li>
                    <li className="mb-2">
                        The possession or consumption of illegal substances is strictly prohibited and will result in{" "} 
                        <span className="text-purple font-semibold">immediate removal</span> 
                        {" "}from the event premises.
                    </li>
                    <li className="mb-2">
                        Event organizers reserve the{" "}
                        <span className="text-purple font-semibold">right</span>
                        {" "}to refuse entry or remove any attendees who exhibit disruptive, unsafe, or illegal behavior.
                    </li>
                    <li className="mb-2">
                        <span className="text-purple font-semibold">Lost and found</span>
                        {" "}services will be available at designated locations throughout the event grounds.
                    </li>
                    <li className="mb-2">
                        <span className="text-purple font-semibold">First aid stations</span>
                        {" "}will be clearly marked and staffed with trained medical personnel in case of 
                        any emergencies or injuries.
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
};

export default GeneralRules;