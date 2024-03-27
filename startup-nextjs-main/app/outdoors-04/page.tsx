import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Outdoors 2004",
  description: "AUB Outdoors Archive: 2004",
};

const images = [
    '/images/archive/2004/1.JPG',
    '/images/archive/2004/2.png',
    '/images/archive/2004/3.JPG',
    '/images/archive/2004/4.png',
    '/images/archive/2004/5.JPG',
    '/images/archive/2004/6.jpg',
  ];

const OD2004Page = () => {

  const next = {
    year: '2005',
    link: '/outdoors-05'
  }

  return (
    <>
    <section id='od-2004' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2004</h1>
        <ImageGrid images={images} xs={6} sm={6} md={4} lg={4} width={500}/>
      </div>
      <ArchiveNavigator next={next} prev={null} />
    </section>
    </>
  );
};

export default OD2004Page;