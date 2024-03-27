const ComingSoon = ({description}) => {
  return (
    <>
       <section
        id="placeholder"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[140px] xl:pt-[140px] 2xl:pb-[200px] 2xl:pt-[210px] h-screen"
        style={{background: "radial-gradient(circle, rgba(28, 98, 211, 0.81) 0%, rgb(81 2 157 / 80%) 100%)"}}
      >
         <div className="container">
            <h1 
                className="mb-10 text-3xl text-white font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                style={{fontFamily: 'Gotham Black, sans-serif', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'}}>
                    Coming Soon
            </h1>
            <p 
                className="mb-16 text-md !leading-relaxed text-white sm:text-lg md:text-xl font-medium"
                style={{fontFamily: 'Gotham Medium Italic, sans-serif', fontWeight: '400'}}
            >
                {description}
            </p>
         </div>
      </section>
    </>
  );
};

export default ComingSoon;