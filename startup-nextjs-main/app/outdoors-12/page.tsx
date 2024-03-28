import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2012",
  description: "AUB Outdoors Archive: 2012",
};

const OD2012Page = () => {

  const next = {
    year: '2013',
    link: '/outdoors-13'
  }

  const prev = {
    year: '2011',
    link: '/outdoors-11'
  }

  const images = [
    'https://ik.imagekit.io/nh7xswppky/2012/1.png?updatedAt=1711630118986',
    'https://ik.imagekit.io/nh7xswppky/2012/1.jpg?updatedAt=1711627840938',
    'https://ik.imagekit.io/nh7xswppky/2012/2.jpg?updatedAt=1711627841687',
    'https://ik.imagekit.io/nh7xswppky/2012/3.jpg?updatedAt=1711627850595',
    'https://ik.imagekit.io/nh7xswppky/2012/4.jpg?updatedAt=1711627849691',
    'https://ik.imagekit.io/nh7xswppky/2012/6.jpg?updatedAt=1711627850764',
    'https://ik.imagekit.io/nh7xswppky/2012/7.jpg?updatedAt=1711627850776',
    'https://ik.imagekit.io/nh7xswppky/2012/8.jpg?updatedAt=1711627851647',
    'https://ik.imagekit.io/nh7xswppky/2012/9.jpg?updatedAt=1711627851303',
    'https://ik.imagekit.io/nh7xswppky/2012/10.jpg?updatedAt=1711627839248',
    'https://ik.imagekit.io/nh7xswppky/2012/11.jpg?updatedAt=1711627840718',
    'https://ik.imagekit.io/nh7xswppky/2012/12.jpg?updatedAt=1711627841102',
    'https://ik.imagekit.io/nh7xswppky/2012/13.jpg?updatedAt=1711627840727',
    'https://ik.imagekit.io/nh7xswppky/2012/14.jpg?updatedAt=1711627838212',
    'https://ik.imagekit.io/nh7xswppky/2012/15.jpg?updatedAt=1711627840958',
    'https://ik.imagekit.io/nh7xswppky/2012/16.jpg?updatedAt=1711627839491',
    'https://ik.imagekit.io/nh7xswppky/2012/17.jpg?updatedAt=1711627841110',
    'https://ik.imagekit.io/nh7xswppky/2012/18.jpg?updatedAt=1711627840897',
    'https://ik.imagekit.io/nh7xswppky/2012/19.jpg?updatedAt=1711627841135',
    'https://ik.imagekit.io/nh7xswppky/2012/20.jpg?updatedAt=1711627841405',
    'https://ik.imagekit.io/nh7xswppky/2012/22.jpg?updatedAt=1711627845203',
    'https://ik.imagekit.io/nh7xswppky/2012/24.jpg?updatedAt=1711627845061',
    'https://ik.imagekit.io/nh7xswppky/2012/25.jpg?updatedAt=1711627849651',
    'https://ik.imagekit.io/nh7xswppky/2012/26.jpg?updatedAt=1711627848382',
    'https://ik.imagekit.io/nh7xswppky/2012/27.jpg?updatedAt=1711627848625',
    'https://ik.imagekit.io/nh7xswppky/2012/28.jpg?updatedAt=1711627848613',
    'https://ik.imagekit.io/nh7xswppky/2012/29.jpg?updatedAt=1711627850499',
    'https://ik.imagekit.io/nh7xswppky/2012/30.jpg?updatedAt=1711627850492',
  ];

  return (
    <>
     <section id='od-2012' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2012</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2012Page;