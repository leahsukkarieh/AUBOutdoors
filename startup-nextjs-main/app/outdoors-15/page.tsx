import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2015",
  description: "AUB Outdoors Archive: 2015",
};

const OD2015Page = () => {

  const next = {
    year: '2016',
    link: '/outdoors-16'
  }

  const prev = {
    year: '2014',
    link: '/outdoors-14'
  }

  const images = [
    'https://ik.imagekit.io/nh7xswppky/2015/1.jpg?updatedAt=1711630212145',
    'https://ik.imagekit.io/nh7xswppky/2015/2.jpg?updatedAt=1711630213115',
    'https://ik.imagekit.io/nh7xswppky/2015/3.jpg?updatedAt=1711630215696',
    'https://ik.imagekit.io/nh7xswppky/2015/4.jpg?updatedAt=1711630217319',
    'https://ik.imagekit.io/nh7xswppky/2015/5.jpg?updatedAt=1711630217688',
    'https://ik.imagekit.io/nh7xswppky/2015/6.jpg?updatedAt=1711630217538',
    'https://ik.imagekit.io/nh7xswppky/2015/7.jpg?updatedAt=1711630218101',
    'https://ik.imagekit.io/nh7xswppky/2015/8.jpg?updatedAt=1711630218099',
    'https://ik.imagekit.io/nh7xswppky/2015/9.jpg?updatedAt=1711630218430',
    'https://ik.imagekit.io/nh7xswppky/2015/10.jpg?updatedAt=1711630211959',
    'https://ik.imagekit.io/nh7xswppky/2015/11.jpg?updatedAt=1711630211308',
    'https://ik.imagekit.io/nh7xswppky/2015/12.jpg?updatedAt=1711630211537',
    'https://ik.imagekit.io/nh7xswppky/2015/13.jpg?updatedAt=1711630211832',
    'https://ik.imagekit.io/nh7xswppky/2015/14.jpg?updatedAt=1711630212275',
    'https://ik.imagekit.io/nh7xswppky/2015/15.jpg?updatedAt=1711630212273',
    'https://ik.imagekit.io/nh7xswppky/2015/16.jpg?updatedAt=1711630212412',
    'https://ik.imagekit.io/nh7xswppky/2015/17.jpg?updatedAt=1711630212433',
    'https://ik.imagekit.io/nh7xswppky/2015/18.jpg?updatedAt=1711630212549',
    'https://ik.imagekit.io/nh7xswppky/2015/19.jpg?updatedAt=1711630213000',
    'https://ik.imagekit.io/nh7xswppky/2015/20.jpg?updatedAt=1711630213496',
    'https://ik.imagekit.io/nh7xswppky/2015/21.jpg?updatedAt=1711630213630',
    'https://ik.imagekit.io/nh7xswppky/2015/22.jpg?updatedAt=1711630213933',
    'https://ik.imagekit.io/nh7xswppky/2015/23.jpg?updatedAt=1711630214147',
    'https://ik.imagekit.io/nh7xswppky/2015/24.jpg?updatedAt=1711630214852',
    'https://ik.imagekit.io/nh7xswppky/2015/25.jpg?updatedAt=1711630214688',
    'https://ik.imagekit.io/nh7xswppky/2015/26.jpg?updatedAt=1711630214818',
    'https://ik.imagekit.io/nh7xswppky/2015/27.jpg?updatedAt=1711630215049',
    'https://ik.imagekit.io/nh7xswppky/2015/28.jpg?updatedAt=1711630215392',
    'https://ik.imagekit.io/nh7xswppky/2015/29.jpg?updatedAt=1711630215375',
    'https://ik.imagekit.io/nh7xswppky/2015/30.jpg?updatedAt=1711630215858',
    'https://ik.imagekit.io/nh7xswppky/2015/31.jpg?updatedAt=1711630216217',
    'https://ik.imagekit.io/nh7xswppky/2015/32.jpg?updatedAt=1711630216331',
    'https://ik.imagekit.io/nh7xswppky/2015/33.jpg?updatedAt=1711630216578',
    'https://ik.imagekit.io/nh7xswppky/2015/34.jpg?updatedAt=1711630216932',
    'https://ik.imagekit.io/nh7xswppky/2015/35.jpg?updatedAt=1711630217242',
  ];

  return (
    <>
     <section id='od-2015' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-xl md:text-3xl text-black text-center font-semibold'>OUTDOORS 2015</h1>
        <ImageGrid images={images} xs={12} sm={12} md={3} lg={3}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2015Page;