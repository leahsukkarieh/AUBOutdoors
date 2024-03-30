import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2006",
  description: "AUB Outdoors Archive: 2006",
};

const OD2006Page = () => {

  const next = {
    year: '2007',
    link: '/outdoors-07'
  }

  const prev = {
    year: '2005',
    link: '/outdoors-05'
  }

  const images = [
    'https://ik.imagekit.io/nh7xswppky/2006/1.jpg?updatedAt=1711626620653',
    'https://ik.imagekit.io/nh7xswppky/2006/2.jpeg?updatedAt=1711626665496',
    'https://ik.imagekit.io/nh7xswppky/2006/4.JPG?updatedAt=1711626688452',
    'https://ik.imagekit.io/nh7xswppky/2006/5.JPG?updatedAt=1711626692858',
    'https://ik.imagekit.io/nh7xswppky/2006/6.JPG?updatedAt=1711626698017',
    'https://ik.imagekit.io/nh7xswppky/2006/7.JPG?updatedAt=1711626696948',
    'https://ik.imagekit.io/nh7xswppky/2006/8.JPG?updatedAt=1711626698040',
    'https://ik.imagekit.io/nh7xswppky/2006/combo1.jpg?updatedAt=1711626676875',
    'https://ik.imagekit.io/nh7xswppky/2006/11.jpeg?updatedAt=1711626654072',
    'https://ik.imagekit.io/nh7xswppky/2006/12.JPG?updatedAt=1711626652370',
    'https://ik.imagekit.io/nh7xswppky/2006/13.JPG?updatedAt=1711626655044',
    'https://ik.imagekit.io/nh7xswppky/2006/14.JPG?updatedAt=1711626660654',
    'https://ik.imagekit.io/nh7xswppky/2006/15.JPG?updatedAt=1711626672531',
    'https://ik.imagekit.io/nh7xswppky/2006/16.JPG?updatedAt=1711626669309',
    'https://ik.imagekit.io/nh7xswppky/2006/17.JPG?updatedAt=1711626678740',
    'https://ik.imagekit.io/nh7xswppky/2006/18.JPG?updatedAt=1711626672387',
    'https://ik.imagekit.io/nh7xswppky/2006/19.JPG?updatedAt=1711626689406',
    'https://ik.imagekit.io/nh7xswppky/2006/20.JPG?updatedAt=1711626697341',
    'https://ik.imagekit.io/nh7xswppky/2006/21.JPG?updatedAt=1711626689677',
  ];

  return (
    <>
     <section id='od-2006' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-xl md:text-3xl text-black text-center font-semibold'>OUTDOORS 2006</h1>
        <ImageGrid images={images} xs={12} sm={12} md={3} lg={3}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2006Page;