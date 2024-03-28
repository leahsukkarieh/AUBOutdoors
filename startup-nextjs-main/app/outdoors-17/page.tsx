import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2017",
  description: "AUB Outdoors Archive: 2017",
};

const OD2017Page = () => {

  const next = {
    year: '2018',
    link: '/outdoors-18'
  }

  const prev = {
    year: '2016',
    link: '/outdoors-16'
  }

  const images = [
    'https://ik.imagekit.io/nh7xswppky/2017/1.png?updatedAt=1711630948071',
    'https://ik.imagekit.io/nh7xswppky/2017/2.png?updatedAt=1711630947714',
    'https://ik.imagekit.io/nh7xswppky/2017/3.jpg?updatedAt=1711630432344',
    'https://ik.imagekit.io/nh7xswppky/2017/4.jpg?updatedAt=1711630431648',
    'https://ik.imagekit.io/nh7xswppky/2017/5.jpg?updatedAt=1711630432511',
    'https://ik.imagekit.io/nh7xswppky/2017/6.jpg?updatedAt=1711630433254',
    'https://ik.imagekit.io/nh7xswppky/2017/7.jpg?updatedAt=1711630433362',
    'https://ik.imagekit.io/nh7xswppky/2017/9.jpg?updatedAt=1711630433742',
    'https://ik.imagekit.io/nh7xswppky/2017/10.jpg?updatedAt=1711630429400',
    'https://ik.imagekit.io/nh7xswppky/2017/11.jpg?updatedAt=1711630429370',
    'https://ik.imagekit.io/nh7xswppky/2017/12.jpg?updatedAt=1711630429417',
    'https://ik.imagekit.io/nh7xswppky/2017/13.jpg?updatedAt=1711630428796',
    'https://ik.imagekit.io/nh7xswppky/2017/14.jpg?updatedAt=1711630429168',
    'https://ik.imagekit.io/nh7xswppky/2017/15.jpg?updatedAt=1711630429352',
    'https://ik.imagekit.io/nh7xswppky/2017/16.jpg?updatedAt=1711630429367',
    'https://ik.imagekit.io/nh7xswppky/2017/17.jpg?updatedAt=1711630429394',
    'https://ik.imagekit.io/nh7xswppky/2017/18.jpg?updatedAt=1711630429586',
    'https://ik.imagekit.io/nh7xswppky/2017/19.jpg?updatedAt=1711630429136',
    'https://ik.imagekit.io/nh7xswppky/2017/20.jpg?updatedAt=1711630430474',
    'https://ik.imagekit.io/nh7xswppky/2017/21.jpg?updatedAt=1711630430754',
    'https://ik.imagekit.io/nh7xswppky/2017/22.jpg?updatedAt=1711630430790',
    'https://ik.imagekit.io/nh7xswppky/2017/23.jpg?updatedAt=1711630430856',
    'https://ik.imagekit.io/nh7xswppky/2017/24.jpg?updatedAt=1711630431249',
    'https://ik.imagekit.io/nh7xswppky/2017/25.jpg?updatedAt=1711630431241',
    'https://ik.imagekit.io/nh7xswppky/2017/26.jpg?updatedAt=1711630432031',
    'https://ik.imagekit.io/nh7xswppky/2017/27.jpg?updatedAt=1711630432335',
  ];

  return (
    <>
     <section id='od-2017' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2017</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2017Page;