import valueData from "./valueData";
import FlipCard from "./FlipCard";

const Values = () => {
  return (
    <section 
      className="h-auto py-14 md:py-18 lg:py-26"
      style={{fontFamily: "Aptos, sans-serif"}}
    >
      <h1 className="text-center text-4xl text-blue mb-4 font-bold">Core Values</h1>
      <div className='container flex flex-wrap justify-center'>
        {valueData.map((value) => (
            <FlipCard key={value.id} frontContent={value.title} backContent={value.description} bgImage={value.image} />
        ))}
      </div>
    </section>
  );
};

export default Values;