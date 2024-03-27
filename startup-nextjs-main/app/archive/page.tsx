import Breadcrumb from '@/components/Common/Breadcrumb';
import ArchiveSlider from '@/components/Archive/ArchiveSlider';
import { Metadata } from 'next';
import Video23 from '@/components/Archive/Video23';

export const metadata: Metadata = {
  title: "Archive",
  description: "AUB Outdoors Archive 2004-2023",
};

const ArchivePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="AUB Outdoors Archive"
        description="Step into the vibrant history of AUB Outdoors, a beloved tradition since 1982. Explore our online archive capturing the essence of each year, and join us in reliving cherished moments and celebrating the cultural richness that defines the AUB Outdoors legacy."
      />
      <ArchiveSlider />
      <div className='container'>
        <h1
          style={{fontFamily: 'Gotham Black, sans-serif'}}
          className='mb-5 text-xl font-bold text-black sm:text-2xl'
        >
          2023: The Return of AUB Outdoors
        </h1>
        <p
          className='text-base font-medium leading-relaxed text-body-color text-justify'
        >
          After a three-year hiatus due to the global COVID-19 pandemic, 
          AUB Outdoors was halted from 2020 to 2022. However, we are 
          delighted to announce that the event made a triumphant return in 2023! 
          Despite the challenges we faced, we persevered, and with careful planning, 
          we were able to once again bring together the community for an unforgettable experience. 
          Watch the AUB Outdoors 2023 recap video below.
        </p>
        <Video23 />
      </div>
    </>
  );
};

export default ArchivePage;
