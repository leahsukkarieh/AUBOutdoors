import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2018",
  description: "AUB Outdoors Archive: 2018",
};

const OD2018Page = () => {

  const next = {
    year: '2019',
    link: '/outdoors-19'
  }

  const prev = {
    year: '2017',
    link: '/outdoors-17'
  }

  const images = [
    'https://ik.imagekit.io/nh7xswppky/2018/1.png?updatedAt=1711630394359',
    'https://ik.imagekit.io/nh7xswppky/2018/2.png?updatedAt=1711630390733',
    'https://ik.imagekit.io/nh7xswppky/2018/3.jpg?updatedAt=1711630359463',
    'https://ik.imagekit.io/nh7xswppky/2018/4.jpg?updatedAt=1711630360442',
    'https://ik.imagekit.io/nh7xswppky/2018/5.jpg?updatedAt=1711630360564',
    'https://ik.imagekit.io/nh7xswppky/2018/6.jpg?updatedAt=1711630362835',
    'https://ik.imagekit.io/nh7xswppky/2018/7.jpg?updatedAt=1711630362844',
    'https://ik.imagekit.io/nh7xswppky/2018/9.jpg?updatedAt=1711630363120',
    'https://ik.imagekit.io/nh7xswppky/2018/10.jpg?updatedAt=1711630352470',
    'https://ik.imagekit.io/nh7xswppky/2018/11.jpg?updatedAt=1711630352700',
    'https://ik.imagekit.io/nh7xswppky/2018/12.jpg?updatedAt=1711630354153',
    'https://ik.imagekit.io/nh7xswppky/2018/13.jpg?updatedAt=1711630352427',
    'https://ik.imagekit.io/nh7xswppky/2018/14.jpg?updatedAt=1711630354564',
    'https://ik.imagekit.io/nh7xswppky/2018/15.jpg?updatedAt=1711630354775',
    'https://ik.imagekit.io/nh7xswppky/2018/16.jpg?updatedAt=1711630354358',
    'https://ik.imagekit.io/nh7xswppky/2018/17.jpg?updatedAt=1711630353603',
    'https://ik.imagekit.io/nh7xswppky/2018/18.jpg?updatedAt=1711630354391',
    'https://ik.imagekit.io/nh7xswppky/2018/19.jpg?updatedAt=1711630355904',
    'https://ik.imagekit.io/nh7xswppky/2018/20.jpg?updatedAt=1711630358985',
    'https://ik.imagekit.io/nh7xswppky/2018/21.jpg?updatedAt=1711630357485',
    'https://ik.imagekit.io/nh7xswppky/2018/22.jpg?updatedAt=1711630359195',
    'https://ik.imagekit.io/nh7xswppky/2018/23.jpg?updatedAt=1711630358968',
  ];

  return (
    <>
     <section id='od-2018' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-3xl text-black text-center font-semibold'>OUTDOORS 2018</h1>
        <ImageGrid images={images} xs={4} sm={4} md={3} lg={3} width={300}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2018Page;