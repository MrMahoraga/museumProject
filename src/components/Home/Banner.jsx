import React, { useRef } from 'react';
import Slider from "react-slick";



function Navbar() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>


      {/* Banner Section */}
      <div>
        <section className="mt-4">
          <Slider {...settings} ref={sliderRef}>
            {/* Slide 1 */}

            <div className="h-[600px] bg-cover bg-center slide1" >
              <div className="h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-3xl font-bold mb-4">Explore Art and History</h2>
                <div className="flex gap-4">
                 
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="h-[600px] bg-cover bg-center slide2"  >
              <div className="h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-3xl font-bold mb-4">Explore Art and History</h2>
                <div className="flex gap-4">
                 
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="h-[600px] bg-cover bg-center slide3" >
              <div className="h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-3xl font-bold mb-4">Book Your Visit Today</h2>
                <div className="flex gap-4">
                 
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="h-[600px] bg-cover bg-center slide4" >
              <div className="h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-3xl font-bold mb-4">Discover Timeless Art</h2>
                <div className="flex gap-4">
                 
                </div>
              </div>
            </div>

            {/* Slide 5 */}
            <div className="h-[600px] bg-cover bg-center slide5" >
              <div className="h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-3xl font-bold mb-4">Join Us for Special Exhibits</h2>
                <div className="flex gap-4">
                 
                </div>
              </div>
            </div>
          </Slider>
        </section>
      </div>
    </div>
  );
}

export default Navbar;






// import React from 'react'

// import img1 from "../../images/Bihar.jpeg"

// function Banner() {
//   return (
//     <div className='h-[500px] bg-no-repeat w-[500px]' style={{ backgroundImage: `url(${img1})` }}>
//       dbfsdjafdsalnfsdj
//     </div>
//   )
// }

// export default Banner