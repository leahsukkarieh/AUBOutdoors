import React from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';
import goalsData from './goalsData';

const images = [
  '/images/about/goals/1.png',
  '/images/about/goals/2.jpg',
  '/images/about/goals/3.jpg',
  '/images/about/goals/4.jpg',
  '/images/about/goals/5.jpg',
  '/images/about/goals/6.jpg',
  '/images/about/goals/7.jpg',
  '/images/about/goals/8.jpg',
  '/images/about/goals/9.png',
  '/images/about/goals/10.jpg',
  '/images/about/goals/11.jpg',
  '/images/about/goals/12.jpg',
  '/images/about/goals/13.jpg',
  '/images/about/goals/14.jpg',
  '/images/about/goals/15.jpg',
  '/images/about/goals/16.jpg',
  '/images/about/goals/17.jpg',
  '/images/about/goals/18.jpg',
];

const Goals = () => {
  return (
    <section 
      className="h-auto py-14 md:py-18 lg:py-26"
      style={{fontFamily: "Aptos, sans-serif"}}
    >
      <h1 className="text-center text-4xl text-blue mb-12 font-bold">Goals & Objectives</h1>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              {goalsData.map((goal) => (
                <div key={goal.id} className="mb-9">
                  <h3 
                    className="mb-4 text-xl font-bold flex items-center"
                    style={{color: 'rgb(78 15 188)'}}
                  >
                    {goal.title}{"."}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Grid container spacing={0} className='justify-center'>
                {images.map((image, index) => (
                  <Grid item xs={5} sm={5} md={4} lg={4} key={index}>
                    <Image 
                      src={image} 
                      alt={`Image ${index}`} 
                      width={200}
                      className='shadow-md rounded-sm transition-transform duration-300 transform hover:scale-105'
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;