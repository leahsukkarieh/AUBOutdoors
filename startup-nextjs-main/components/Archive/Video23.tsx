"use client";
import React, { useEffect } from 'react';

function Video23() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='container'>
      <div className='mt-8' style={{padding: '50% 0 0 0', position: 'relative'}}>
        <iframe 
          src="https://player.vimeo.com/video/927735160?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
          style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} 
          title="AUB Outdoors 2023 Recap Video"
        >
        </iframe>
      </div>
    </div>
  );
}

export default Video23;
