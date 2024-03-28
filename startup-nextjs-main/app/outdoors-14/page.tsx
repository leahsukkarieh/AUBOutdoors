import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2014",
  description: "AUB Outdoors Archive: 2014",
};

const OD2014Page = () => {

  const next = {
    year: '2015',
    link: '/outdoors-15'
  }

  const prev = {
    year: '2013',
    link: '/outdoors-13'
  }

  const images = [
    'https://ik.imagekit.io/nh7xswppky/2014/1.jpg?updatedAt=1711628676082',
    'https://ik.imagekit.io/nh7xswppky/2014/2.jpg?updatedAt=1711628676516',
    'https://ik.imagekit.io/nh7xswppky/2014/3.jpg?updatedAt=1711628680067',
    'https://ik.imagekit.io/nh7xswppky/2014/4.jpg?updatedAt=1711628685105',
    'https://ik.imagekit.io/nh7xswppky/2014/5.jpg?updatedAt=1711628690733',
    'https://ik.imagekit.io/nh7xswppky/2014/6.jpg?updatedAt=1711628690395',
    'https://ik.imagekit.io/nh7xswppky/2014/7.jpg?updatedAt=1711628690422',
    'https://ik.imagekit.io/nh7xswppky/2014/8.jpg?updatedAt=1711628690647',
    'https://ik.imagekit.io/nh7xswppky/2014/9.jpg?updatedAt=1711628690729',
    'https://ik.imagekit.io/nh7xswppky/2014/10.jpg?updatedAt=1711628676112',
    'https://ik.imagekit.io/nh7xswppky/2014/11.jpg?updatedAt=1711628676086',
    'https://ik.imagekit.io/nh7xswppky/2014/12.jpg?updatedAt=1711628672910',
    'https://ik.imagekit.io/nh7xswppky/2014/13.jpg?updatedAt=1711628675949',
    'https://ik.imagekit.io/nh7xswppky/2014/14.jpg?updatedAt=1711628676190',
    'https://ik.imagekit.io/nh7xswppky/2014/15.jpg?updatedAt=1711628674590',
    'https://ik.imagekit.io/nh7xswppky/2014/16.jpg?updatedAt=1711628674632',
    'https://ik.imagekit.io/nh7xswppky/2014/17.jpg?updatedAt=1711628676158',
    'https://ik.imagekit.io/nh7xswppky/2014/18.jpg?updatedAt=1711628674778',
    'https://ik.imagekit.io/nh7xswppky/2014/19.jpg?updatedAt=1711628676199',
    'https://ik.imagekit.io/nh7xswppky/2014/20.jpg?updatedAt=1711628677528',
    'https://ik.imagekit.io/nh7xswppky/2014/21.jpg?updatedAt=1711628677712',
    'https://ik.imagekit.io/nh7xswppky/2014/22.jpg?updatedAt=1711628678238',
    'https://ik.imagekit.io/nh7xswppky/2014/23.jpg?updatedAt=1711628678375',
    'https://ik.imagekit.io/nh7xswppky/2014/24.jpg?updatedAt=1711628678320',
    'https://ik.imagekit.io/nh7xswppky/2014/25.jpg?updatedAt=1711628679210',
    'https://ik.imagekit.io/nh7xswppky/2014/26.jpg?updatedAt=1711628678670',
    'https://ik.imagekit.io/nh7xswppky/2014/27.jpg?updatedAt=1711628679743',
    'https://ik.imagekit.io/nh7xswppky/2014/28.jpg?updatedAt=1711628679081',
    'https://ik.imagekit.io/nh7xswppky/2014/29.jpg?updatedAt=1711628679209',
    'https://ik.imagekit.io/nh7xswppky/2014/30.jpg?updatedAt=1711628680376',
    'https://ik.imagekit.io/nh7xswppky/2014/31.jpg?updatedAt=1711628680932',
    'https://ik.imagekit.io/nh7xswppky/2014/32.jpg?updatedAt=1711628681582',
    'https://ik.imagekit.io/nh7xswppky/2014/33.jpg?updatedAt=1711628681861',
    'https://ik.imagekit.io/nh7xswppky/2014/34.jpg?updatedAt=1711628681713',
    'https://ik.imagekit.io/nh7xswppky/2014/35.jpg?updatedAt=1711628683252',
    'https://ik.imagekit.io/nh7xswppky/2014/36.jpg?updatedAt=1711628683432',
    'https://ik.imagekit.io/nh7xswppky/2014/37.jpg?updatedAt=1711628684690',
    'https://ik.imagekit.io/nh7xswppky/2014/38.jpg?updatedAt=1711628684908',
    'https://ik.imagekit.io/nh7xswppky/2014/39.jpg?updatedAt=1711628684986',
    'https://ik.imagekit.io/nh7xswppky/2014/40.jpg?updatedAt=1711628685599',
    'https://ik.imagekit.io/nh7xswppky/2014/41.jpg?updatedAt=1711628685708',
    'https://ik.imagekit.io/nh7xswppky/2014/42.jpg?updatedAt=1711628685762',
    'https://ik.imagekit.io/nh7xswppky/2014/43.jpg?updatedAt=1711628686647',
    'https://ik.imagekit.io/nh7xswppky/2014/44.jpg?updatedAt=1711628687936',
    'https://ik.imagekit.io/nh7xswppky/2014/45.jpg?updatedAt=1711628687921',
  ];

  return (
    <>
     <section id='od-2014' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2014</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2014Page;