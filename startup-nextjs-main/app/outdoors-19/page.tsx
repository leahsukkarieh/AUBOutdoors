import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2019",
  description: "AUB Outdoors Archive: 2019",
};

const OD2019Page = () => {

  const next = {
    year: '2023',
    link: '/outdoors-23'
  }

  const prev = {
    year: '2018',
    link: '/outdoors-18'
  }

  const images = [
    '/images/archive/2019/1.png',
    '/images/archive/2019/2.png',
    '/images/archive/2019/3.jpg',
    '/images/archive/2019/4.jpg',
    '/images/archive/2019/5.jpg',
    '/images/archive/2019/6.jpg',
    '/images/archive/2019/7.jpg',
    '/images/archive/2019/9.jpg',
    '/images/archive/2019/10.jpg',
    '/images/archive/2019/11.jpg',
    '/images/archive/2019/12.jpg',
    '/images/archive/2019/13.jpg',
    '/images/archive/2019/14.jpg',
    '/images/archive/2019/15.jpg',
    '/images/archive/2019/16.jpg',
    '/images/archive/2019/17.jpg',
    '/images/archive/2019/18.jpg',
    '/images/archive/2019/19.jpg',
    '/images/archive/2019/20.jpg',
    '/images/archive/2019/21.jpg',
    '/images/archive/2019/22.jpg',
    '/images/archive/2019/23.jpg',
    '/images/archive/2019/24.jpg',
  ];

  return (
    <>
     <section id='od-2019' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2019</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2019Page;