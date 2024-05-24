import { Item } from "@/types/item";
import Image from "next/image";

const SingleItem = ({ item }: { item: Item }) => {
    const { image, name, description} = item;
    const imageSrc = image.toString();
    return (
    <div 
        className={'rounded-sm flex justify-center items-center w-[500px] m-10'}
        style={{
          borderRadius: '0.35rem', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
        }}
    >
         <Image 
            src={imageSrc}
            alt='prohibited item'
            className="w-[50%]"
        />
        <div className="flex flex-col ml-4 p-2">
            <h2 className="text-lg text-purple font-semibold">{name}</h2>
            <p className="text-md">{description}</p>
        </div>
    </div>
    )
}

export default SingleItem;