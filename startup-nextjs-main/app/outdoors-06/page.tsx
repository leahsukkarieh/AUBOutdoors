import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2006",
  description: "AUB Outdoors Archive: 2006",
};

const OD2006Page = () => {

  const next = {
    year: '2007',
    link: '/outdoors-07'
  }

  const prev = {
    year: '2005',
    link: '/outdoors-05'
  }

  const images = [
    '/images/archive/2006/1.jpg',
    '/images/archive/2006/2.jpeg',
    '/images/archive/2006/4.JPG',
    '/images/archive/2006/5.JPG',
    '/images/archive/2006/6.JPG',
    '/images/archive/2006/7.JPG',
    '/images/archive/2006/8.JPG',
    '/images/archive/2006/combo1.jpg',
    '/images/archive/2006/11.jpeg',
    '/images/archive/2006/12.JPG',
    '/images/archive/2006/13.JPG',
    '/images/archive/2006/14.JPG',
    '/images/archive/2006/15.JPG',
    '/images/archive/2006/16.JPG',
    '/images/archive/2006/17.JPG',
    '/images/archive/2006/18.JPG',
    '/images/archive/2006/19.JPG',
    '/images/archive/2006/20.JPG',
    '/images/archive/2006/21.JPG',
  ];

  return (
    <>
     <section id='od-2006' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2006</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2006Page;