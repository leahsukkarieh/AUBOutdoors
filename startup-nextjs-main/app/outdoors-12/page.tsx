import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2012",
  description: "AUB Outdoors Archive: 2012",
};

const OD2012Page = () => {

  const next = {
    year: '2013',
    link: '/outdoors-13'
  }

  const prev = {
    year: '2011',
    link: '/outdoors-11'
  }

  const images = [
    '/images/archive/2012/1.png',
    '/images/archive/2012/1.jpg',
    '/images/archive/2012/2.jpg',
    '/images/archive/2012/3.jpg',
    '/images/archive/2012/4.jpg',
    '/images/archive/2012/6.jpg',
    '/images/archive/2012/7.jpg',
    '/images/archive/2012/8.jpg',
    '/images/archive/2012/9.jpg',
    '/images/archive/2012/10.jpg',
    '/images/archive/2012/11.jpg',
    '/images/archive/2012/12.jpg',
    '/images/archive/2012/13.jpg',
    '/images/archive/2012/14.jpg',
    '/images/archive/2012/15.jpg',
    '/images/archive/2012/16.jpg',
    '/images/archive/2012/17.jpg',
    '/images/archive/2012/18.jpg',
    '/images/archive/2012/19.jpg',
    '/images/archive/2012/20.jpg',
    '/images/archive/2012/22.jpg',
    '/images/archive/2012/24.jpg',
    '/images/archive/2012/25.jpg',
    '/images/archive/2012/26.jpg',
    '/images/archive/2012/27.jpg',
    '/images/archive/2012/28.jpg',
    '/images/archive/2012/29.jpg',
    '/images/archive/2012/30.jpg',
  ];

  return (
    <>
     <section id='od-2012' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2012</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2012Page;