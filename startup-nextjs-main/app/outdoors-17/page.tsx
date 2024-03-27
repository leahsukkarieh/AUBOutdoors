import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2017",
  description: "AUB Outdoors Archive: 2017",
};

const OD2017Page = () => {

  const next = {
    year: '2018',
    link: '/outdoors-18'
  }

  const prev = {
    year: '2016',
    link: '/outdoors-16'
  }

  const images = [
    '/images/archive/2017/1.png',
    '/images/archive/2017/2.png',
    '/images/archive/2017/3.jpg',
    '/images/archive/2017/4.jpg',
    '/images/archive/2017/5.jpg',
    '/images/archive/2017/6.jpg',
    '/images/archive/2017/7.jpg',
    '/images/archive/2017/9.jpg',
    '/images/archive/2017/10.jpg',
    '/images/archive/2017/11.jpg',
    '/images/archive/2017/12.jpg',
    '/images/archive/2017/13.jpg',
    '/images/archive/2017/14.jpg',
    '/images/archive/2017/15.jpg',
    '/images/archive/2017/16.jpg',
    '/images/archive/2017/17.jpg',
    '/images/archive/2017/18.jpg',
    '/images/archive/2017/19.jpg',
    '/images/archive/2017/20.jpg',
    '/images/archive/2017/21.jpg',
    '/images/archive/2017/22.jpg',
    '/images/archive/2017/23.jpg',
    '/images/archive/2017/24.jpg',
    '/images/archive/2017/25.jpg',
    '/images/archive/2017/26.jpg',
    '/images/archive/2017/27.jpg',
  ];

  return (
    <>
     <section id='od-2017' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2017</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2017Page;