"use client"
import { useState, useRef } from 'react';
import SingleEvent from '@/components/Archive/SingleEvent';
import { archiveData } from '@/components/Archive/archiveData';

const ArchiveSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const width = container.offsetWidth;
    const newPosition = direction === 'left' ? scrollPosition - width : scrollPosition + width;
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
    setScrollPosition(newPosition);
  };

  return (
    <>
      <div className="p-8 mb-16 mr-8 ml-8 mt-0 relative">
        <div className="flex items-center space-x-4 overflow-x-auto" ref={containerRef}>
          {archiveData.map((event) => (
            <SingleEvent key={event.id} event={event} />
          ))}
        </div>
        <button
          className="absolute top-0 left-0 h-full bg-gray-300 text-xl px-4 flex items-center"
          onClick={() => handleScroll('left')}
        >
          &lt;
        </button>
        <button
          className="absolute top-0 right-0 h-full bg-gray-300 text-xl px-4 flex items-center"
          onClick={() => handleScroll('right')}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default ArchiveSlider;
