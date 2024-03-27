import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2018",
  description: "AUB Outdoors Archive: 2018",
};

const OD2018Page = () => {

  const next = {
    year: '2019',
    link: '/outdoors-19'
  }

  const prev = {
    year: '2017',
    link: '/outdoors-17'
  }

  const images = [
    '/images/archive/2018/1.png',
    '/images/archive/2018/2.png',
    '/images/archive/2018/3.jpg',
    '/images/archive/2018/4.jpg',
    '/images/archive/2018/5.jpg',
    '/images/archive/2018/6.jpg',
    '/images/archive/2018/7.jpg',
    '/images/archive/2018/9.jpg',
    '/images/archive/2018/10.jpg',
    '/images/archive/2018/11.jpg',
    '/images/archive/2018/12.jpg',
    '/images/archive/2018/13.jpg',
    '/images/archive/2018/14.jpg',
    '/images/archive/2018/15.jpg',
    '/images/archive/2018/16.jpg',
    '/images/archive/2018/17.jpg',
    '/images/archive/2018/18.jpg',
    '/images/archive/2018/19.jpg',
    '/images/archive/2018/20.jpg',
    '/images/archive/2018/21.jpg',
    '/images/archive/2018/22.jpg',
    '/images/archive/2018/23.jpg',
  ];

  return (
    <>
     <section id='od-2018' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2018</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2018Page;