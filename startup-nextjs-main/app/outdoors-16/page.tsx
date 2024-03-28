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
    'https://ik.imagekit.io/nh7xswppky/2016/1.jpg?updatedAt=1711630257676',
    'https://ik.imagekit.io/nh7xswppky/2016/2.jpg?updatedAt=1711630259295',
    'https://ik.imagekit.io/nh7xswppky/2016/3.jpg?updatedAt=1711630264014',
    'https://ik.imagekit.io/nh7xswppky/2016/4.jpg?updatedAt=1711630267301',
    'https://ik.imagekit.io/nh7xswppky/2016/5.jpg?updatedAt=1711630268357',
    'https://ik.imagekit.io/nh7xswppky/2016/6.jpg?updatedAt=1711630268492',
    'https://ik.imagekit.io/nh7xswppky/2016/7.jpg?updatedAt=1711630268531',
    'https://ik.imagekit.io/nh7xswppky/2016/9.jpg?updatedAt=1711630267911',
    'https://ik.imagekit.io/nh7xswppky/2016/10.jpg?updatedAt=1711630258012',
    'https://ik.imagekit.io/nh7xswppky/2016/11.jpg?updatedAt=1711630256553',
    'https://ik.imagekit.io/nh7xswppky/2016/12.jpg?updatedAt=1711630254748',
    'https://ik.imagekit.io/nh7xswppky/2016/13.jpg?updatedAt=1711630257578',
    'https://ik.imagekit.io/nh7xswppky/2016/14.jpg?updatedAt=1711630257915',
    'https://ik.imagekit.io/nh7xswppky/2016/15.jpg?updatedAt=1711630255947',
    'https://ik.imagekit.io/nh7xswppky/2016/16.jpg?updatedAt=1711630256090',
    'https://ik.imagekit.io/nh7xswppky/2016/17.jpg?updatedAt=1711630256182',
    'https://ik.imagekit.io/nh7xswppky/2016/18.jpg?updatedAt=1711630255391',
    'https://ik.imagekit.io/nh7xswppky/2016/19.jpg?updatedAt=1711630257929',
    'https://ik.imagekit.io/nh7xswppky/2016/20.jpg?updatedAt=1711630259806',
    'https://ik.imagekit.io/nh7xswppky/2016/21.jpg?updatedAt=1711630263962',
    'https://ik.imagekit.io/nh7xswppky/2016/22.jpg?updatedAt=1711630263959',
    'https://ik.imagekit.io/nh7xswppky/2016/23.jpg?updatedAt=1711630263992',
    'https://ik.imagekit.io/nh7xswppky/2016/24.jpg?updatedAt=1711630263668',
    'https://ik.imagekit.io/nh7xswppky/2016/25.jpg?updatedAt=1711630262038',
    'https://ik.imagekit.io/nh7xswppky/2016/26.jpg?updatedAt=1711630262887',
    'https://ik.imagekit.io/nh7xswppky/2016/27.jpg?updatedAt=1711630264134',
    'https://ik.imagekit.io/nh7xswppky/2016/28.jpg?updatedAt=1711630263539',
    'https://ik.imagekit.io/nh7xswppky/2016/29.jpg?updatedAt=1711630264127',
    'https://ik.imagekit.io/nh7xswppky/2016/30.jpg?updatedAt=1711630265230',
    'https://ik.imagekit.io/nh7xswppky/2016/31.jpg?updatedAt=1711630265827',
    'https://ik.imagekit.io/nh7xswppky/2016/32.jpg?updatedAt=1711630267068',
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