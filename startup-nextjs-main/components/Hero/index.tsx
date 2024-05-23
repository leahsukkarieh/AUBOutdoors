"use client"
import Link from "next/link";
import Image from "next/image";

const Hero = () => {

  const handleHover = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.backgroundColor = '#7F37C4';
    event.currentTarget.style.color ='#F4C500';
  };

  const handleLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.backgroundColor = '#F4C500';
    event.currentTarget.style.color ='#7F37C4';
  };

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[140px] xl:pt-[140px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{background: "radial-gradient(circle, rgba(28, 98, 211, 0.81) 0%, rgb(81 2 157 / 80%) 100%)"}}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 
                  className="mb-10 text-3xl text-white font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                  style={{fontFamily: 'Gotham Black, sans-serif', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'}}
                  >
                  AUB Outdoors
                </h1>
                <p 
                  className="mb-16 text-md !leading-relaxed text-white sm:text-lg md:text-xl font-medium"
                  style={{fontFamily: 'Gotham Medium Italic, sans-serif', fontWeight: '400'}}
                >
                  Spreading joy since 1982.
                  <p>AUB Outdoors is the largest student-led festival in the MENA region.</p>
                  <p>Join the party for the 40th edition.</p>
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:space-x-4 sm:space-y-0 sm:flex-row">
                  <Link
                    href="/theme"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{fontFamily: 'Aptos, sans-serif', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}}
                    onMouseOver={handleHover}
                    onMouseOut={handleLeave}
                    className="xl:w-[50%] xs:w-[59%] bg-yellow rounded-md px-8 py-4 text-base font-semibold text-purple duration-300 ease-in-out"
                  >
                    Discover Outdoors {"'"}24
                  </Link>
                  <Link
                    href="https://tickit.co/events/OcCmExDEjZr2FNm5HY7H"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{fontFamily: 'Aptos, sans-serif', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}}
                    onMouseOver={handleHover}
                    onMouseOut={handleLeave}
                    className="xl:w-[50%] xs:w-[59%] bg-yellow rounded-md px-8 py-4 text-base font-semibold text-purple duration-300 ease-in-out"
                  >
                    Get Tickets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-70">
        <Image 
            src='/images/hero/disco-ball.png'
            alt='Disco Ball'
            width={200}
          />
        </div>
        <div 
          className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-70"
          style={{transform: 'translate(-30%, 30%)'}}
        >
        <Image 
            src='/images/hero/vinyl.png'
            alt='Vinyl Record'
            width={200}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
