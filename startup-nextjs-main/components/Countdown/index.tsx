"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

const Countdown = () => {

  const targetDate = new Date('2024-05-24T23:59:59');

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      // If the target date has passed, set the countdown to 0
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState(calculateTimeRemaining());

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
    });

  return (
    <>
      <section id="countdown" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div
            className={"w-full mx-auto text-center"}
            style={{ maxWidth: '660px', marginBottom: '60px' }}
          >
            <h2 
              className="mb-8 text-4xl font-bold !leading-tight text-blue"
              style={{ fontFamily: 'Gotham Black, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}
            >
              Disco Fever
            </h2>
            <p 
              className="text-lg !leading-relaxed text-body-color md:text-xl text-justify"
              style={{fontFamily: 'Gotham Medium Italic, sans-serif'}}
            >
              Join us at the American University of Beirut (AUB) on May 25th and 26th for an unforgettable weekend! 
              Immerse yourself in a vibrant festival featuring a lineup of international and local artists, 
              delicious food offerings, exciting games, and top-notch entertainment. 
            </p>
          </div>
          <div 
            className="relative flex justify-center"
            style={{fontFamily: 'Gotham Medium Italic, sans-serif'}}
          >
            <Image
              src="/images/countdown/disco-ball.png"
              alt="Disco Ball"
              className="w-full max-w-md"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div 
                className="flex flex-wrap justify-between rounded-md px-4 py-2 w-full md:w-[60%] lg:w-[35%]"
                style={{background: 'rgb(235 231 231 / 80%)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}
              >
                <div className="flex flex-col items-center mr-6">
                  <p className="font-semibold text-3xl text-purple">{countdown.days}</p>
                  <p className="font-normal text-sm ml-1">Days</p>
                </div>
                <div className="flex flex-col items-center mr-6">
                  <p className="font-semibold text-3xl text-purple">{countdown.hours}</p>
                  <p className="font-normal text-sm ml-1">Hours</p>
                </div>
                <div className="flex flex-col items-center mr-6">
                  <p className="font-semibold text-3xl text-purple">{countdown.minutes}</p>
                  <p className="font-normal text-sm ml-1">Minutes</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold text-3xl text-purple">{countdown.seconds}</p>
                  <p className="font-normal text-sm ml-1">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Countdown;
