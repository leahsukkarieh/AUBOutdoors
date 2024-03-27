import Link from 'next/link';

const ArchiveNavigator = ({next, prev}) => {
  return (
    <>
      <div 
        className="container w-full flex justify-between text-blue text-lg font-bold mt-8 mb-2"
        style={{textShadow: '2px 2px 4px rgb(138 134 134 / 50%)', fontFamily: 'Gotham Medium Italic, sans-serif'}}
      >
        {prev ? (
            <Link
                href={prev.link}
            >
                &lt; {prev.year}
            </Link>
        ) : <div /> }
        {next ? (
            <Link
                href={next.link}
            >
                &gt; {next.year}
            </Link>
        ) : <div /> }
      </div>
    </>
  );
};

export default ArchiveNavigator;
