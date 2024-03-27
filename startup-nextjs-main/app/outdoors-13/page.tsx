import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2013",
  description: "AUB Outdoors Archive: 2013",
};

const OD2013Page = () => {

  const next = {
    year: '2014',
    link: '/outdoors-14'
  }

  const prev = {
    year: '2012',
    link: '/outdoors-12'
  }

  const images = [
    '/images/archive/2013/1.jpg',
    '/images/archive/2013/2.jpg',
    '/images/archive/2013/3.jpg',
    '/images/archive/2013/4.jpg',
    '/images/archive/2013/5.jpg',
    '/images/archive/2013/6.jpg',
    '/images/archive/2013/7.jpg',
    '/images/archive/2013/8.jpg',
    '/images/archive/2013/9.jpg',
    '/images/archive/2013/10.jpg',
    '/images/archive/2013/11.jpg',
    '/images/archive/2013/12.jpg',
    '/images/archive/2013/13.jpg',
    '/images/archive/2013/14.jpg',
    '/images/archive/2013/15.jpg',
    '/images/archive/2013/16.jpg',
    '/images/archive/2013/17.jpg',
    '/images/archive/2013/18.jpg',
    '/images/archive/2013/19.jpg',
    '/images/archive/2013/20.jpg',
    '/images/archive/2013/21.jpg',
    '/images/archive/2013/22.jpg',
    '/images/archive/2013/23.jpg',
    '/images/archive/2013/24.jpg',
    '/images/archive/2013/25.jpg',
    '/images/archive/2013/26.jpg',
    '/images/archive/2013/27.jpg',
    '/images/archive/2013/28.jpg',
    '/images/archive/2013/29.jpg',
    '/images/archive/2013/30.jpg',
  ];

  return (
    <>
     <section id='od-2013' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2013</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2013Page;