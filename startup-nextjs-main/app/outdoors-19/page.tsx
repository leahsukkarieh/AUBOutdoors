import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2019",
  description: "AUB Outdoors Archive: 2019",
};

const OD2019Page = () => {

  const next = {
    year: '2023',
    link: '/outdoors-23'
  }

  const prev = {
    year: '2018',
    link: '/outdoors-18'
  }

  const images = [
    'https://ik.imagekit.io/nh7xswppky/2019/1.png?updatedAt=1711630607794',
    'https://ik.imagekit.io/nh7xswppky/2019/2.png?updatedAt=1711630608709',
    'https://ik.imagekit.io/nh7xswppky/2019/3.jpg?updatedAt=1711630573730',
    'https://ik.imagekit.io/nh7xswppky/2019/4.jpg?updatedAt=1711630568313',
    'https://ik.imagekit.io/nh7xswppky/2019/5.jpg?updatedAt=1711630571622',
    'https://ik.imagekit.io/nh7xswppky/2019/6.jpg?updatedAt=1711630567803',
    'https://ik.imagekit.io/nh7xswppky/2019/7.jpg?updatedAt=1711630573412',
    'https://ik.imagekit.io/nh7xswppky/2019/8.jpg?updatedAt=1711630573386',
    'https://ik.imagekit.io/nh7xswppky/2019/9.jpg?updatedAt=1711630573726',
    'https://ik.imagekit.io/nh7xswppky/2019/10.jpg?updatedAt=1711630557594',
    'https://ik.imagekit.io/nh7xswppky/2019/11.jpg?updatedAt=1711630556881',
    'https://ik.imagekit.io/nh7xswppky/2019/12.jpg?updatedAt=1711630557594',
    'https://ik.imagekit.io/nh7xswppky/2019/13.jpg?updatedAt=1711630557301',
    'https://ik.imagekit.io/nh7xswppky/2019/14.jpg?updatedAt=1711630555689',
    'https://ik.imagekit.io/nh7xswppky/2019/15.jpg?updatedAt=1711630557585',
    'https://ik.imagekit.io/nh7xswppky/2019/16.jpg?updatedAt=1711630555150',
    'https://ik.imagekit.io/nh7xswppky/2019/17.jpg?updatedAt=1711630555430',
    'https://ik.imagekit.io/nh7xswppky/2019/18.jpg?updatedAt=1711630555024',
    'https://ik.imagekit.io/nh7xswppky/2019/19.jpg?updatedAt=1711630560040',
    'https://ik.imagekit.io/nh7xswppky/2019/20.jpg?updatedAt=1711630563557',
    'https://ik.imagekit.io/nh7xswppky/2019/21.jpg?updatedAt=1711630560650',
    'https://ik.imagekit.io/nh7xswppky/2019/22.jpg?updatedAt=1711630565413',
    'https://ik.imagekit.io/nh7xswppky/2019/23.jpg?updatedAt=1711630569672',
    'https://ik.imagekit.io/nh7xswppky/2019/24.jpg?updatedAt=1711630567748',
  ];

  return (
    <>
     <section id='od-2019' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-xl md:text-3xl text-black text-center font-semibold'>OUTDOORS 2019</h1>
        <ImageGrid images={images} xs={12} sm={12} md={3} lg={3}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2019Page;