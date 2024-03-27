import { Event } from "@/types/event";
import Link from "next/link";

const SingleEvent = ({ event }: { event: Event }) => {
  const { year, image, link } = event;
  return (
    <>
    <div 
        className="rounded-lg p-14 shadow-md"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <Link
            href={link}
            className="text-2xl font-bold text-white text-center"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
            {year}
        </Link>
    </div>
    </>
  );
};

export default SingleEvent;
