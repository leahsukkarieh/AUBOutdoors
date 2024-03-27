import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2016",
  description: "AUB Outdoors Archive: 2016",
};

const OD2016Page = () => {

  const next = {
    year: '2017',
    link: '/outdoors-17'
  }

  const prev = {
    year: '2015',
    link: '/outdoors-15'
  }

  const images = [
    '/images/archive/2016/1.jpg',
    '/images/archive/2016/2.jpg',
    '/images/archive/2016/3.jpg',
    '/images/archive/2016/4.jpg',
    '/images/archive/2016/5.jpg',
    '/images/archive/2016/6.jpg',
    '/images/archive/2016/7.jpg',
    '/images/archive/2016/9.jpg',
    '/images/archive/2016/10.jpg',
    '/images/archive/2016/11.jpg',
    '/images/archive/2016/12.jpg',
    '/images/archive/2016/13.jpg',
    '/images/archive/2016/14.jpg',
    '/images/archive/2016/15.jpg',
    '/images/archive/2016/16.jpg',
    '/images/archive/2016/17.jpg',
    '/images/archive/2016/18.jpg',
    '/images/archive/2016/19.jpg',
    '/images/archive/2016/20.jpg',
    '/images/archive/2016/21.jpg',
    '/images/archive/2016/22.jpg',
    '/images/archive/2016/23.jpg',
    '/images/archive/2016/24.jpg',
    '/images/archive/2016/25.jpg',
    '/images/archive/2016/26.jpg',
    '/images/archive/2016/27.jpg',
    '/images/archive/2016/28.jpg',
    '/images/archive/2016/29.jpg',
    '/images/archive/2016/30.jpg',
    '/images/archive/2016/31.jpg',
    '/images/archive/2016/32.jpg',
  ];

  return (
    <>
     <section id='od-2016' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2016</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2016Page;