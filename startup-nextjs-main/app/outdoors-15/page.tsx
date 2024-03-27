import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2015",
  description: "AUB Outdoors Archive: 2015",
};

const OD2015Page = () => {

  const next = {
    year: '2016',
    link: '/outdoors-16'
  }

  const prev = {
    year: '2014',
    link: '/outdoors-14'
  }

  const images = [
    '/images/archive/2015/1.jpg',
    '/images/archive/2015/2.jpg',
    '/images/archive/2015/3.jpg',
    '/images/archive/2015/4.jpg',
    '/images/archive/2015/5.jpg',
    '/images/archive/2015/6.jpg',
    '/images/archive/2015/7.jpg',
    '/images/archive/2015/8.jpg',
    '/images/archive/2015/9.jpg',
    '/images/archive/2015/10.jpg',
    '/images/archive/2015/11.jpg',
    '/images/archive/2015/12.jpg',
    '/images/archive/2015/13.jpg',
    '/images/archive/2015/14.jpg',
    '/images/archive/2015/15.jpg',
    '/images/archive/2015/16.jpg',
    '/images/archive/2015/17.jpg',
    '/images/archive/2015/18.jpg',
    '/images/archive/2015/19.jpg',
    '/images/archive/2015/20.jpg',
    '/images/archive/2015/21.jpg',
    '/images/archive/2015/22.jpg',
    '/images/archive/2015/23.jpg',
    '/images/archive/2015/24.jpg',
    '/images/archive/2015/25.jpg',
    '/images/archive/2015/26.jpg',
    '/images/archive/2015/27.jpg',
    '/images/archive/2015/28.jpg',
    '/images/archive/2015/29.jpg',
    '/images/archive/2015/30.jpg',
    '/images/archive/2015/31.jpg',
    '/images/archive/2015/32.jpg',
    '/images/archive/2015/33.jpg',
    '/images/archive/2015/34.jpg',
    '/images/archive/2015/35.jpg',
  ];

  return (
    <>
     <section id='od-2015' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2015</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2015Page;