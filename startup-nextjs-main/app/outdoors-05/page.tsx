import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Outdoors 2005",
  description: "AUB Outdoors Archive: 2005",
};

const images = [
    'https://ik.imagekit.io/nh7xswppky/2005/1.JPG?updatedAt=1711626418883',
    'https://ik.imagekit.io/nh7xswppky/2005/2.JPG?updatedAt=1711626413400',
    'https://ik.imagekit.io/nh7xswppky/2005/3.JPG?updatedAt=1711626427990',
    'https://ik.imagekit.io/nh7xswppky/2005/4.JPG?updatedAt=1711626427934',
    'https://ik.imagekit.io/nh7xswppky/2005/5.JPG?updatedAt=1711626428050',
    'https://ik.imagekit.io/nh7xswppky/2005/6.JPG?updatedAt=1711626426617',
    'https://ik.imagekit.io/nh7xswppky/2005/7.JPG?updatedAt=1711626425321',
    'https://ik.imagekit.io/nh7xswppky/2005/8.JPG?updatedAt=1711626428565',
    'https://ik.imagekit.io/nh7xswppky/2005/9.JPG?updatedAt=1711626429345',
    'https://ik.imagekit.io/nh7xswppky/2005/10.JPG?updatedAt=1711626425881',
    'https://ik.imagekit.io/nh7xswppky/2005/12.JPG?updatedAt=1711626426305',
    'https://ik.imagekit.io/nh7xswppky/2005/13.JPG?updatedAt=1711626423577',
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