import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2014",
  description: "AUB Outdoors Archive: 2014",
};

const OD2014Page = () => {

  const next = {
    year: '2015',
    link: '/outdoors-15'
  }

  const prev = {
    year: '2013',
    link: '/outdoors-13'
  }

  const images = [
    '/images/archive/2014/1.jpg',
    '/images/archive/2014/2.jpg',
    '/images/archive/2014/3.jpg',
    '/images/archive/2014/4.jpg',
    '/images/archive/2014/5.jpg',
    '/images/archive/2014/6.jpg',
    '/images/archive/2014/7.jpg',
    '/images/archive/2014/8.jpg',
    '/images/archive/2014/9.jpg',
    '/images/archive/2014/10.jpg',
    '/images/archive/2014/11.jpg',
    '/images/archive/2014/12.jpg',
    '/images/archive/2014/14.jpg',
    '/images/archive/2014/14.jpg',
    '/images/archive/2014/15.jpg',
    '/images/archive/2014/16.jpg',
    '/images/archive/2014/17.jpg',
    '/images/archive/2014/18.jpg',
    '/images/archive/2014/19.jpg',
    '/images/archive/2014/20.jpg',
    '/images/archive/2014/21.jpg',
    '/images/archive/2014/22.jpg',
    '/images/archive/2014/23.jpg',
    '/images/archive/2014/24.jpg',
    '/images/archive/2014/25.jpg',
    '/images/archive/2014/26.jpg',
    '/images/archive/2014/27.jpg',
    '/images/archive/2014/28.jpg',
    '/images/archive/2014/29.jpg',
    '/images/archive/2014/30.jpg',
    '/images/archive/2014/31.jpg',
    '/images/archive/2014/32.jpg',
    '/images/archive/2014/33.jpg',
    '/images/archive/2014/34.jpg',
    '/images/archive/2014/35.jpg',
    '/images/archive/2014/36.jpg',
    '/images/archive/2014/37.jpg',
    '/images/archive/2014/38.jpg',
    '/images/archive/2014/39.jpg',
    '/images/archive/2014/40.jpg',
    '/images/archive/2014/41.jpg',
    '/images/archive/2014/42.jpg',
    '/images/archive/2014/43.jpg',
    '/images/archive/2014/44.jpg',
    '/images/archive/2014/45.jpg',
  ];

  return (
    <>
     <section id='od-2014' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2014</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2014Page;