"use client"
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

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

const ImageGrid = ({ images, xs, sm, md, lg, width}) => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const openFullScreen = (image) => {
    setFullScreenImage(image);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={xs} sm={sm} md={md} lg={lg} key={index}>
            <div 
              className='shadow-md rounded-sm transition-transform duration-300 transform hover:scale-105'
              onClick={() => openFullScreen(image)}
            >
              <img 
                src={image}
                width={500}
              />
            </div>
          </Grid>
        ))}
      </Grid>
      {fullScreenImage && (
        <FullScreenImage src={fullScreenImage} onClose={closeFullScreen} />
      )}
    </React.Fragment>
  );
};

export default ImageGrid;
