import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2007",
  description: "AUB Outdoors Archive: 2007",
};

const OD2007Page = () => {

  const next = {
    year: '2009',
    link: '/outdoors-09'
  }

  const prev = {
    year: '2006',
    link: '/outdoors-06'
  }

  const images = [
    'https://ik.imagekit.io/nh7xswppky/2007/1.JPG?updatedAt=1711626848519',
    'https://ik.imagekit.io/nh7xswppky/2007/2.JPG?updatedAt=1711626848223',
    'https://ik.imagekit.io/nh7xswppky/2007/3.JPG?updatedAt=1711626841456',
    'https://ik.imagekit.io/nh7xswppky/2007/4.JPG?updatedAt=1711626841414',
    'https://ik.imagekit.io/nh7xswppky/2007/5.JPG?updatedAt=1711626840983',
    'https://ik.imagekit.io/nh7xswppky/2007/6.JPG?updatedAt=1711626860218',
    'https://ik.imagekit.io/nh7xswppky/2007/7.JPG?updatedAt=1711626858781',
    'https://ik.imagekit.io/nh7xswppky/2007/8.JPG?updatedAt=1711626862067',
    'https://ik.imagekit.io/nh7xswppky/2007/9.JPG?updatedAt=1711626860125',
    'https://ik.imagekit.io/nh7xswppky/2007/10.JPG?updatedAt=1711626840381',
    'https://ik.imagekit.io/nh7xswppky/2007/11.png?updatedAt=1711628069625',
    'https://ik.imagekit.io/nh7xswppky/2007/12.png?updatedAt=1711628056593',
    'https://ik.imagekit.io/nh7xswppky/2007/13.png?updatedAt=1711628092731',
    'https://ik.imagekit.io/nh7xswppky/2007/14.png?updatedAt=1711627490106',
    'https://ik.imagekit.io/nh7xswppky/2007/15.png?updatedAt=1711627470975',
    'https://ik.imagekit.io/nh7xswppky/2007/16.png?updatedAt=1711633934369',
    'https://ik.imagekit.io/nh7xswppky/2007/17.png?updatedAt=1711633935322',
    'https://ik.imagekit.io/nh7xswppky/2007/18.png?updatedAt=1711633918721',
    'https://ik.imagekit.io/nh7xswppky/2007/19.png?updatedAt=1711633929612',
    'https://ik.imagekit.io/nh7xswppky/2007/20.png?updatedAt=1711626947429',
    'https://ik.imagekit.io/nh7xswppky/2007/21.png?updatedAt=1711630067398',
    'https://ik.imagekit.io/nh7xswppky/2007/22.png?updatedAt=1711630107344',
    'https://ik.imagekit.io/nh7xswppky/2007/23.png?updatedAt=1711630033691',
    'https://ik.imagekit.io/nh7xswppky/2007/24.png?updatedAt=1711630021619',
    'https://ik.imagekit.io/nh7xswppky/2007/25.png?updatedAt=1711630018861',
    'https://ik.imagekit.io/nh7xswppky/2007/26.png?updatedAt=1711629197370',
    'https://ik.imagekit.io/nh7xswppky/2007/27.png?updatedAt=1711629258840',
    'https://ik.imagekit.io/nh7xswppky/2007/28.png?updatedAt=1711629246567',
    'https://ik.imagekit.io/nh7xswppky/2007/29.png?updatedAt=1711629187363',
    'https://ik.imagekit.io/nh7xswppky/2007/30.png?updatedAt=1711628453026',
    'https://ik.imagekit.io/nh7xswppky/2007/31.png?updatedAt=1711629446897',
  ];

  return (
    <>
     <section id='od-2007' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2007</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2007Page;