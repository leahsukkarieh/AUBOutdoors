"use client";
import { useState } from 'react';

const FullScreenImage = ({ src, onClose }) => {

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'zoom-out',
      }}
      onClick={onClose}
    >
      <img 
        src={src}
        width={800}
        height={600}
      />
    </div>
  );
};

const Content= () => {

  const [fullScreenImage, setFullScreenImage] = useState('');

  const closeFullScreen = () => {
    setFullScreenImage('');
  };

  return (
    <section className="pb-10 md:pb-14 lg:pb-22">
      <div className="container justify-center xs:hidden md:flex">
        <div className="flex items-center">
          <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/merch1.png?updatedAt=1716231755771'
            width={500}
            height={500}
            className='shadow-md rounded-sm transition-transform duration-300 transform hover:scale-105'
            onClick={() => setFullScreenImage('https://ik.imagekit.io/nh7xswppky/Merch/merch1.png?updatedAt=1716231755771')}
          />
          <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/design.png?updatedAt=1716241564621'
            width={300}
            height={500}
            className='ml-32 translate-y-[15%]'
          />
        </div>
      </div>
      <div className="container flex justify-center mt-6 xs:hidden md:flex">
        <div className="flex items-center">
          <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/design2-removebg-preview.png?updatedAt=1716243420803'
            width={250}
            height={500}
          />
          <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/merch2.png?updatedAt=1716231755658'
            width={500}
            height={500}
            className='ml-32 translate-y-[15%] shadow-md rounded-sm transition-transform duration-300 transform hover:scale-105'
            onClick={() => setFullScreenImage('https://ik.imagekit.io/nh7xswppky/Merch/merch2.png?updatedAt=1716231755658')}
          />
        </div>
      </div>
      <div className="container flex justify-center mt-32 xs:hidden md:flex">
        <div className="flex items-center">
          <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/merch3.png?updatedAt=1716231755003'
            width={500}
            height={500}
            className='shadow-md rounded-sm transition-transform duration-300 transform hover:scale-105'
            onClick={() => setFullScreenImage('https://ik.imagekit.io/nh7xswppky/Merch/merch3.png?updatedAt=1716231755003')}
          />
          <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/design3.png?updatedAt=1716244520669'  
            width={300}
            height={500}
            className='ml-32 translate-y-[15%]'
          />
        </div>
      </div>
      <div className="container flex justify-center mt-16 xs:hidden md:flex">
        <div className="flex items-center">
          <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/design4.png?updatedAt=1716245118122'
            width={300}
            height={500}
          />
          <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/merch4.png?updatedAt=1716231755258'  
            width={500}
            height={500}
            className='ml-32 translate-y-[20%] shadow-md rounded-sm transition-transform duration-300 transform hover:scale-105'
            onClick={() => setFullScreenImage('https://ik.imagekit.io/nh7xswppky/Merch/merch4.png?updatedAt=1716231755258')}
          />
        </div>
      </div>
      <div className='container xs:flex xs:flex-col xs:items-center xs:justify-center md:hidden'>
        <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/merch1.png?updatedAt=1716231755771'
            width={500}
            className='mt-8 shadow-md rounded-sm transition-transform duration-300 transform hover:scale-105'
            onClick={() => setFullScreenImage('https://ik.imagekit.io/nh7xswppky/Merch/merch1.png?updatedAt=1716231755771')}
          />
          <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/merch2.png?updatedAt=1716231755658'
            width={500}
            className='mt-8 shadow-md rounded-sm transition-transform duration-300 transform hover:scale-105'
            onClick={() => setFullScreenImage('https://ik.imagekit.io/nh7xswppky/Merch/merch2.png?updatedAt=1716231755658')}
          />
          <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/merch3.png?updatedAt=1716231755003'
            width={500}
            className='mt-8 shadow-md rounded-sm transition-transform duration-300 transform hover:scale-105'
            onClick={() => setFullScreenImage('https://ik.imagekit.io/nh7xswppky/Merch/merch3.png?updatedAt=1716231755003')}
          />
          <img 
            src='https://ik.imagekit.io/nh7xswppky/Merch/merch3.png?updatedAt=1716231755003'
            width={500}
            className='mt-8 shadow-md rounded-sm transition-transform duration-300 transform hover:scale-105'
            onClick={() => setFullScreenImage('https://ik.imagekit.io/nh7xswppky/Merch/merch3.png?updatedAt=1716231755003')}
          />
      </div>
      {fullScreenImage && (
        <FullScreenImage src={fullScreenImage} onClose={closeFullScreen} />
      )}
    </section>
  );
};

export default Content;
