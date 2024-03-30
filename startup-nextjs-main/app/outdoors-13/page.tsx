import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';
import ImageGrid from '@/components/Archive/ImageGrid';

export const metadata: Metadata = {
  title: "Outdoors 2013",
  description: "AUB Outdoors Archive: 2013",
};

const OD2013Page = () => {

  const next = {
    year: '2014',
    link: '/outdoors-14'
  }

  const prev = {
    year: '2012',
    link: '/outdoors-12'
  }

  const images = [
    'https://ik.imagekit.io/nh7xswppky/2013/1.jpg?updatedAt=1711628577827',
    'https://ik.imagekit.io/nh7xswppky/2013/2.jpg?updatedAt=1711628628320',
    'https://ik.imagekit.io/nh7xswppky/2013/3.jpg?updatedAt=1711628636498',
    'https://ik.imagekit.io/nh7xswppky/2013/4.jpg?updatedAt=1711628636397',
    'https://ik.imagekit.io/nh7xswppky/2013/5.jpg?updatedAt=1711628648709',
    'https://ik.imagekit.io/nh7xswppky/2013/6.jpg?updatedAt=1711628648033',
    'https://ik.imagekit.io/nh7xswppky/2013/7.jpg?updatedAt=1711628647652',
    'https://ik.imagekit.io/nh7xswppky/2013/8.jpg?updatedAt=1711628649095',
    'https://ik.imagekit.io/nh7xswppky/2013/9.jpg?updatedAt=1711628647129',
    'https://ik.imagekit.io/nh7xswppky/2013/10.jpg?updatedAt=1711628578859',
    'https://ik.imagekit.io/nh7xswppky/2013/11.jpg?updatedAt=1711628576881',
    'https://ik.imagekit.io/nh7xswppky/2013/12.jpg?updatedAt=1711628570462',
    'https://ik.imagekit.io/nh7xswppky/2013/13.jpg?updatedAt=1711628571921',
    'https://ik.imagekit.io/nh7xswppky/2013/14.jpg?updatedAt=1711628591294',
    'https://ik.imagekit.io/nh7xswppky/2013/15.jpg?updatedAt=1711628562158',
    'https://ik.imagekit.io/nh7xswppky/2013/16.jpg?updatedAt=1711628578443',
    'https://ik.imagekit.io/nh7xswppky/2013/17.jpg?updatedAt=1711628578519',
    'https://ik.imagekit.io/nh7xswppky/2013/18.jpg?updatedAt=1711628584060',
    'https://ik.imagekit.io/nh7xswppky/2013/19.jpg?updatedAt=1711628600751',
    'https://ik.imagekit.io/nh7xswppky/2013/20.jpg?updatedAt=1711628599450',
    'https://ik.imagekit.io/nh7xswppky/2013/21.jpg?updatedAt=1711628602472',
    'https://ik.imagekit.io/nh7xswppky/2013/22.jpg?updatedAt=1711628631312',
    'https://ik.imagekit.io/nh7xswppky/2013/23.jpg?updatedAt=1711628632455',
    'https://ik.imagekit.io/nh7xswppky/2013/24.jpg?updatedAt=1711628631281',
    'https://ik.imagekit.io/nh7xswppky/2013/25.jpg?updatedAt=1711628616948',
    'https://ik.imagekit.io/nh7xswppky/2013/26.jpg?updatedAt=1711628610495',
    'https://ik.imagekit.io/nh7xswppky/2013/27.jpg?updatedAt=1711628625078',
    'https://ik.imagekit.io/nh7xswppky/2013/28.jpg?updatedAt=1711628628739',
    'https://ik.imagekit.io/nh7xswppky/2013/29.jpg?updatedAt=1711628644656',
    'https://ik.imagekit.io/nh7xswppky/2013/30.jpg?updatedAt=1711628648396',
  ];

  return (
    <>
     <section id='od-2013' className="pt-16 md:pt-20 lg:pt-28 mb-10">
      <div 
        className='container'
        style={{fontFamily: 'Gotham Black, sans-serif', width: '85%', textShadow: '2px 2px 4px rgb(138 134 134 / 50%)'}}
      >
        <h1 className='xs:mt-16 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8 mb-8 text-xl md:text-3xl text-black text-center font-semibold'>OUTDOORS 2013</h1>
        <ImageGrid images={images} xs={12} sm={12} md={3} lg={3}/>
      </div>
      <ArchiveNavigator next={next} prev={prev} />
    </section>
    </>
  );
};

export default OD2013Page;