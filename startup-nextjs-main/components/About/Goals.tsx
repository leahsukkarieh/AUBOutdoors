import React from 'react';
import { Grid } from '@mui/material';
import goalsData from './goalsData';

const images = [
  'https://ik.imagekit.io/nh7xswppky/goals/1.png?updatedAt=1711804219100',
  'https://ik.imagekit.io/nh7xswppky/goals/2.jpg?updatedAt=1711803740846',
  'https://ik.imagekit.io/nh7xswppky/goals/3.jpg?updatedAt=1711803742451',
  'https://ik.imagekit.io/nh7xswppky/goals/4.jpg?updatedAt=1711803742498',
  'https://ik.imagekit.io/nh7xswppky/goals/5.jpg?updatedAt=1711803742642',
  'https://ik.imagekit.io/nh7xswppky/goals/6.jpg?updatedAt=1711803743204',
  'https://ik.imagekit.io/nh7xswppky/goals/7.jpg?updatedAt=1711803743428',
  'https://ik.imagekit.io/nh7xswppky/goals/8.jpg?updatedAt=1711803745175',
  'https://ik.imagekit.io/nh7xswppky/goals/9.png?updatedAt=1711803764115',
  'https://ik.imagekit.io/nh7xswppky/goals/10.jpg?updatedAt=1711803741493',
  'https://ik.imagekit.io/nh7xswppky/goals/11.jpg?updatedAt=1711803741499',
  'https://ik.imagekit.io/nh7xswppky/goals/12.jpg?updatedAt=1711803741463',
  'https://ik.imagekit.io/nh7xswppky/goals/13.jpg?updatedAt=1711803741652',
  'https://ik.imagekit.io/nh7xswppky/goals/14.jpg?updatedAt=1711803740902',
  'https://ik.imagekit.io/nh7xswppky/goals/15.jpg?updatedAt=1711803740542',
  'https://ik.imagekit.io/nh7xswppky/goals/16.jpg?updatedAt=1711803741439',
  'https://ik.imagekit.io/nh7xswppky/goals/17.jpg?updatedAt=1711803741465',
  'https://ik.imagekit.io/nh7xswppky/goals/18.jpg?updatedAt=1711803741453',
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
          <div className="w-full px-4 lg:w-1/2 hidden md:block">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Grid container spacing={0} className='justify-center'>
                {images.map((image, index) => (
                  <Grid item xs={5} sm={5} md={4} lg={4} key={index}>
                    <img 
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