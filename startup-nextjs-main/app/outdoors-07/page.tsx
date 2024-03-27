import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2007",
  description: "AUB Outdoors Archive: 2007",
};

const OD2007Page = () => {

  const next = {
    year: '2009',
    link: '/outdoors-09'
  }

  const prev = {
    year: '2006',
    link: '/outdoors-06'
  }

  const images = [
    '/images/archive/2007/1.JPG',
    '/images/archive/2007/2.JPG',
    '/images/archive/2007/3.JPG',
    '/images/archive/2007/4.JPG',
    '/images/archive/2007/5.JPG',
    '/images/archive/2007/6.JPG',
    '/images/archive/2007/7.JPG',
    '/images/archive/2007/8.JPG',
    '/images/archive/2007/9.JPG',
    '/images/archive/2007/10.JPG',
    '/images/archive/2007/11.png',
    '/images/archive/2007/12.png',
    '/images/archive/2007/13.png',
    '/images/archive/2007/14.png',
    '/images/archive/2007/15.png',
    '/images/archive/2007/16.png',
    '/images/archive/2007/17.png',
    '/images/archive/2007/18.png',
    '/images/archive/2007/19.png',
    '/images/archive/2007/20.png',
    '/images/archive/2007/21.png',
    '/images/archive/2007/22.png',
    '/images/archive/2007/23.png',
    '/images/archive/2007/24.png',
    '/images/archive/2007/25.png',
    '/images/archive/2007/26.png',
    '/images/archive/2007/27.png',
    '/images/archive/2007/28.png',
    '/images/archive/2007/29.png',
    '/images/archive/2007/30.png',
    '/images/archive/2007/31.png',
  ];

  return (
    <>
     <section id='od-2007' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2007</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2007Page;