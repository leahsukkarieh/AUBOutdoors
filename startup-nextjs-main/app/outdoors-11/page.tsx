import { Metadata } from 'next';
import ImageGrid from '@/components/Archive/ImageGrid';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';

export const metadata: Metadata = {
  title: "Outdoors 2011",
  description: "AUB Outdoors Archive: 2011",
};

const OD2011Page = () => {

  const next = {
    year: '2012',
    link: '/outdoors-12'
  }

  const prev = {
    year: '2009',
    link: '/outdoors-09'
  }

  const images = [
    'https://ik.imagekit.io/nh7xswppky/2011/2.jpg?updatedAt=1711627781449',
    'https://ik.imagekit.io/nh7xswppky/2011/3.jpg?updatedAt=1711627781759',
    'https://ik.imagekit.io/nh7xswppky/2011/4.jpg?updatedAt=1711627782280',
    'https://ik.imagekit.io/nh7xswppky/2011/5.jpg?updatedAt=1711627782325',
    'https://ik.imagekit.io/nh7xswppky/2011/6.jpg?updatedAt=1711627782473',
    'https://ik.imagekit.io/nh7xswppky/2011/8.jpg?updatedAt=1711627782723',
    'https://ik.imagekit.io/nh7xswppky/2011/9.jpg?updatedAt=1711627782880',
    'https://ik.imagekit.io/nh7xswppky/2011/10.jpg?updatedAt=1711627780535',
    'https://ik.imagekit.io/nh7xswppky/2011/11.jpg?updatedAt=1711627780513',
    'https://ik.imagekit.io/nh7xswppky/2011/12.jpg?updatedAt=1711627780176',
    'https://ik.imagekit.io/nh7xswppky/2011/13.jpg?updatedAt=1711627781532',
    'https://ik.imagekit.io/nh7xswppky/2011/14.jpg?updatedAt=1711627781565',
    'https://ik.imagekit.io/nh7xswppky/2011/15.jpg?updatedAt=1711627780372',
    'https://ik.imagekit.io/nh7xswppky/2011/16.jpg?updatedAt=1711627781545',
    'https://ik.imagekit.io/nh7xswppky/2011/17.jpg?updatedAt=1711627780602',
    'https://ik.imagekit.io/nh7xswppky/2011/18.jpg?updatedAt=1711627778863',
  ];

  return (
    <>
    <section id='od-2011' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-xl md:text-3xl text-black text-center font-semibold'>OUTDOORS 2011</h1>
        <ImageGrid images={images} xs={12} sm={12} md={3} lg={3}/>
      </div>
      <ArchiveNavigator next={next} prev={null} />
    </section>
    </>
  );
};

export default OD2011Page;