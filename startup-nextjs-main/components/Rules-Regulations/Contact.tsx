import Link from "next/link";

const Contact = () => {
    return (
        <>
        <section id='contact' className="py-10 md:py-14 lg:py-22">
            <div className="container">
                <p>
                    Kindly note that attendees are advised to check the official event website or{" "}
                    <Link
                        href="https://www.instagram.com/auboutdoors/"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="text-blue underline"
                        style={{cursor: 'pointer'}}
                    >
                        Instagram page 
                    </Link>
                    {" "}for any required information for the most up-to-date information.
                </p>
            </div>
        </section>
        </>
    )
};

export default Contact;