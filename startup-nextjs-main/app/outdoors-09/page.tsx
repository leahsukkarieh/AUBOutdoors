import { Metadata } from 'next';
import ArchiveNavigator from '@/components/Archive/ArchiveNavigator';

export const metadata: Metadata = {
  title: "Outdoors 2009",
  description: "AUB Outdoors Archive: 2009",
};

const OD2009Page = () => {

  const next = {
    year: '2010',
    link: '/outdoors-10'
  }

  const prev = {
    year: '2007',
    link: '/outdoors-07'
  }

  return (
    <>
    <section id='od-2009' className="py-16 md:py-20 lg:py-28">
      <div className="container mt-8">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img 
                src='https://ik.imagekit.io/nh7xswppky/Posters/OD2009.png?updatedAt=1711799935602' 
                className='rounded-md transform-none lg:transform translate-x-1/3'
                style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}
              />
            </div>
          </div>
          <div 
            className="w-full px-4 lg:w-1/2"
            style={{fontFamily: 'Gotham Black, sans-serif'}}
          >
            <div className="max-w-[470px]">
              <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-center text-black sm:text-2xl lg:text-xl xl:text-2xl">
                OUTDOORS 2009
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                    Unfortunately, we could not find any photos from the event in 2009. 
                    However, we did manage to locate the event poster from that year.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ArchiveNavigator next={next} prev={prev} />
      </div>
     </section>
    </>
  );
};

export default OD2009Page;