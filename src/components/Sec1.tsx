import Image from 'next/image';
import React from 'react'

const Sec1 = () => {
  return (
    <>
    <section className="flex justify-center items-center w-full gap-[180px] mx-auto text-white bg-black border-b-8  h-[500px]  border-[#444546]">
        <div className='first flex flex-col flex-wrap'>
          <span className="block text-[45px] font-extrabold">
            Enjoy on your 
            TV
          </span>
          <span className=" text-[28px]">
            Watch on smart TVs, PlayStation,
            Xbox, 
            <br />
            Chromecast, Apple TV, Blu-
            ray players and 
            <br />
            more.
          </span>
        </div>

        <div className="relative">
          <Image
          width={130}
          height={130}
            src="/Assets/tv.png"
            alt="Smart TV"
            className="w-[555px] relative z-10"
          />
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            autoPlay
            loop
            muted
            className="absolute top-[51px] right-0 w-[555px]"
          />
        </div>
      </section>
      </>
  )
}

export default Sec1;
