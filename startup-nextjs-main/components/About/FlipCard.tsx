"use client";
import { useState } from 'react';

const FlipCard = ({ frontContent, backContent, bgImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    console.log('flip');
  };

  return (
    <div 
        className={`rounded-sm flex justify-center items-center w-full relative m-10 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
        style={{
          borderRadius: '0.35rem', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transformStyle: 'preserve-3d', 
          transition: 'transform 150ms ease',
          cursor: 'pointer',
          transformOrigin: 'center',
          perspective: '1000px',
          height: '150px',
          width: '300px',
        }}
        onClick={handleFlip}
    >
        <div 
            className='absolute p-1 font-bold text-white flex justify-center items-center text-lg'
            style={{backfaceVisibility: 'hidden', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', width: 'inherit', height: 'inherit' }}
        >
            {frontContent}
        </div>
        <div 
            className='absolute p-1 text-white font-medium flex justify-center items-center text-center'
            style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: '#985ecfab', height: 'inherit', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}
        >
            {backContent}
        </div>
    </div>
  );
};

export default FlipCard;
