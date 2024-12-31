import Image from 'next/image';
import React from 'react'

const Sec2 = () => {
  return (
   <>
   
   <section className="flex justify-center items-center w-full mx-auto text-white bg-black border-b-8 border-gray-500 h-[500px]">
        <div className="relative">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="Download shows"
            className="w-[555px] relative z-10 "
          />
        </div>
        <div>
          <span className="block text-[44px] font-bold">
            Download your <br /> shows to watch <br />
            offline
          </span>
          <span className="block text-[26px]">
            Save your favourites easily and <br /> always have something to{" "}
            <br /> watch.
          </span>
        </div>
      </section>
      
   </>
  )
}

export default Sec2;
