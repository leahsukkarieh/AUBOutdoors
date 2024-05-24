import SingleItem from "./SingleItem";
import itemsData from "./itemsData";

const ProhibitedItems = () => {
    return (
        <>
        <section id='prohibited-items' className="py-10 md:py-14 lg:py-22">
            <div className="container">
                <h1 className="text-xl font-bold text-blue mb-4">Prohibited Items</h1>
                <p className="my-4 text-base">For the safety and comfort of all attendees, the following items are strictly prohibited:</p>
                <div className="flex flex-wrap">
                    {itemsData.map((item) => (
                        <SingleItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
        </>
    )
};

export default ProhibitedItems;