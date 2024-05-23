import { saturdayBlissData } from "./saturdayBlissData";
import { saturdayWestData } from "./saturdayWestData";
import Image from "next/image";

const Saturday = () => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path className='fill-[#7334b0] md:fill-[#6d3eb6]' fill-opacity="1" d="M0,192L80,165.3C160,139,320,85,480,80C640,75,800,117,960,112C1120,107,1280,53,1360,26.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
    <section 
      id="saturday" 
      style={{background:'radial-gradient(circle, rgba(28, 98, 211, 0.81) 0%, rgb(81 2 157 / 80%) 100%)'}}
    >
        <div className="container">
            <h2 
              className="mb-8 text-2xl md:text-4xl font-bold !leading-tight text-yellow text-center"
              style={{ fontFamily: 'Gotham Black, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}
            >
              SATURDAY MAY 25 2024
            </h2>
            <div className="flex flex-col justify-center md:flex-row md:justify-around md:items-start w-full">
                <div className="flex flex-col">
                  <div className="flex justify-center items-center">
                    <Image 
                      src="/images/lineup/lightning.png"
                      alt="lightning bolt"
                      width={30}
                    />
                    <h2 
                      className="text-2xl md:text-4xl font-bold !leading-tight text-white text-center"
                      style={{ fontFamily: 'Gotham Black, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}
                    >
                      BLISS STAGE
                    </h2>
                    <Image 
                      src="/images/lineup/lightning.png"
                      alt="lightning bolt"
                      width={30}
                    />
                  </div>
                  <div className="mt-2 border-y-2 border-white text-yellow text-center font-medium">
                    <p>ZAYN ON DECK</p>
                  </div>
                  <table 
                    className="w-full mt-4 mb-4 text-center"
                    style={{ fontFamily: 'Aptos, sans-serif'}}
                  >
                    <tbody className="divide-y divide-white">
                        {saturdayBlissData.map((item, index) => (
                            <tr 
                              key={item.id} 
                              className={`${index % 2 == 0 ? "text-yellow" : "text-white"} font-medium text-sm md:text-base`}>
                                <td className="px-6 py-4">{item.time}</td>
                                <td className="px-6 py-4">{item.name}</td>
                            </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-col mt-4 md:mt-0">
                <div className="flex justify-center items-center">
                    <Image 
                      src="/images/lineup/lightning.png"
                      alt="lightning bolt"
                      width={30}
                    />
                    <h2 
                      className="text-2xl md:text-4xl font-bold !leading-tight text-white text-center"
                      style={{ fontFamily: 'Gotham Black, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}
                    >
                      WEST STAGE
                    </h2>
                    <Image 
                      src="/images/lineup/lightning.png"
                      alt="lightning bolt"
                      width={30}
                    />
                  </div>
                  <div className="mt-2 border-y-2 border-white text-center font-medium">
                    <p className="opacity-0">placeholder</p>
                  </div>
                  <table 
                    className="w-full mt-4 mb-4 text-center"
                    style={{ fontFamily: 'Aptos, sans-serif'}}
                  >
                    <tbody className="divide-y divide-white">
                        {saturdayWestData.map((item, index) => (
                            <tr 
                              key={item.id} 
                              className={`${item.highlight ? "text-yellow" : "text-white"} font-medium text-sm md:text-base`}>
                                <td className="px-6 py-4">{item.time}</td>
                                <td className="px-6 py-4">{item.name}</td>
                            </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </section>  
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path className='fill-[#7334b0] md:fill-[#6d3eb6]' fill-opacity="1" d="M0,192L80,165.3C160,139,320,85,480,80C640,75,800,117,960,112C1120,107,1280,53,1360,26.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </>
  );
};

export default Saturday;