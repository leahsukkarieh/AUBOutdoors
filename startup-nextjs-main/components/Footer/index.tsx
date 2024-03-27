"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-white pt-2 md:pt-6 lg:pt-10"
        data-wow-delay=".1s"
        style={{ fontFamily: 'Gotham Medium Italic, sans-serif' }}
      >
        <div className="container w-full flex items-center justify-center">
          <Link href="/" className="mb-8 inline-block">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              className="w-full"
              width={100}
              height={20}
            />
          </Link>
          <div 
            className="w-full"
            style={{marginLeft: "10px"}}
          >
            <h2 className="lg:text-xl md:text-lg sm:text-md font-bold text-blue mb-2">
              Contact Us
            </h2>
            <p className="mb-9 lg:text-base text-sm leading-relaxed text-black/80">outdoors@aub.edu.lb</p>
            <div id='social-links' className="flex items-center">
              <a
                href="https://www.instagram.com/auboutdoors/"
                aria-label="instagram"
                className="mr-6 text-blue duration-300 hover:text-blue/80"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  x="0px" 
                  y="0px" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 30 30"
                >
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@auboutdoors2024"
                aria-label="tiktok"
                className="mr-6 text-blue duration-300 hover:text-blue/80"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  x="0px" 
                  y="0px" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                </svg>
              </a>
              <a
                href="https://bere.al/auboutdoors"
                aria-label="tiktok"
                className="mr-6 text-blue duration-300 hover:text-blue/80"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                  <path d="M46,13v24c0,4.962-4.038,9-9,9H13c-4.962,0-9-4.038-9-9V13c0-4.962,4.038-9,9-9h24C41.962,4,46,8.038,46,13z M11.487,27.585	c1.358,0,2.215-0.716,2.215-1.828c0-0.809-0.642-1.455-1.472-1.499v-0.083c0.672-0.092,1.182-0.668,1.182-1.349	c0-0.984-0.747-1.582-2.013-1.582H8.441v6.341H11.487z M10.054,23.828h0.853c0.589,0,0.932-0.272,0.932-0.721	c0-0.453-0.321-0.725-0.87-0.725h-0.914V23.828z M11.029,26.447c0.668,0,1.033-0.294,1.033-0.831c0-0.519-0.374-0.809-1.042-0.809	h-0.967v1.639H11.029z M17.841,26.144c-0.105,0.286-0.417,0.453-0.87,0.453c-0.593,0-0.958-0.396-0.971-1.033v-0.079h3.292v-0.431	c0-1.56-0.879-2.474-2.386-2.474c-1.516,0-2.435,0.98-2.435,2.593c0,1.604,0.896,2.527,2.457,2.527c1.266,0,2.162-0.602,2.333-1.556	H17.841z M16.008,24.592h1.775c-0.026-0.571-0.352-0.91-0.87-0.91C16.404,23.683,16.048,24.039,16.008,24.592z M22.011,25.366h0.835	l1.085,2.219h1.811l-1.266-2.457c0.694-0.303,1.081-1.015,1.081-1.793c0-1.31-0.888-2.092-2.369-2.092h-2.791v6.341h1.613V25.366z M22.011,24.228h0.954c0.593,0,0.945-0.33,0.945-0.879c0-0.541-0.374-0.888-0.949-0.888h-0.949V24.228z M29.662,26.144	c-0.105,0.286-0.417,0.453-0.87,0.453c-0.593,0-0.958-0.396-0.971-1.033v-0.079h3.292v-0.431c0-1.56-0.879-2.474-2.386-2.474	c-1.516,0-2.435,0.98-2.435,2.593c0,1.604,0.896,2.527,2.457,2.527c1.266,0,2.162-0.602,2.333-1.556H29.662z M27.83,24.592h1.775	c-0.026-0.571-0.352-0.91-0.87-0.91C28.225,23.683,27.869,24.039,27.83,24.592z M33.411,27.66c0.62,0,1.156-0.264,1.375-0.681h0.083	v0.606h1.512V24.25c0-1.055-0.769-1.67-2.118-1.67c-1.323,0-2.188,0.589-2.259,1.538h1.397c0.101-0.259,0.365-0.396,0.773-0.396	c0.431,0,0.677,0.198,0.677,0.527v0.382l-1.068,0.062c-1.261,0.075-1.956,0.593-1.956,1.485C31.829,27.075,32.47,27.66,33.411,27.66	z M34.852,25.827v-0.321l-0.822,0.053c-0.461,0.035-0.703,0.215-0.703,0.51c0,0.312,0.259,0.505,0.65,0.505	C34.47,26.574,34.852,26.249,34.852,25.827z M37.608,27.585h1.551v-6.724h-1.551V27.585z M41.055,27.73	c0.558,0,0.888-0.343,0.888-0.835c0-0.497-0.33-0.839-0.888-0.839c-0.554,0-0.883,0.343-0.883,0.839	C40.172,27.387,40.501,27.73,41.055,27.73z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent mt-5"></div>
          <div className="py-4 flex justify-center items-center">
            <div className="text-blue text-lg mr-2">
              &copy;
            </div>
            <p className="text-center text-base text-body-color">
              AUB Outdoors 2024 | All Rights Reserved
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-center text-base text-body-color">Please read our{" "} 
              <Link
                href='/terms-conditions'
                className="font-medium text-blue underline whitespace-nowrap"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Terms of Use
              </Link>
              {" "}and{" "}
              <Link
                href='/privacy-policy'
                className="font-medium text-blue underline mt-3"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
      </footer>
    </>
  );
};

export default Footer;