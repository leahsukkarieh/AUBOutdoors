import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Outdoors 2005",
  description: "AUB Outdoors Archive: 2005",
};

const images = [
    '/images/archive/2005/1.JPG',
    '/images/archive/2005/2.JPG',
    '/images/archive/2005/3.JPG',
    '/images/archive/2005/4.JPG',
    '/images/archive/2005/5.JPG',
    '/images/archive/2005/6.JPG',
    '/images/archive/2005/7.JPG',
    '/images/archive/2005/8.JPG',
    '/images/archive/2005/9.JPG',
    '/images/archive/2005/10.JPG',
    '/images/archive/2005/12.JPG',
    '/images/archive/2005/13.JPG',
  ];

const OD2005Page = () => {
  const next = {
    year: '2006',
    link: '/outdoors-06'
  }

  const prev = {
    year: '2004',
    link: '/outdoors-04'
  }
  return (
    <>
    <section id='od-2005' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2005</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2005Page;