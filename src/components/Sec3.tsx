import React from 'react'

const Sec3 = () => {
  return (
   <>
  <section className="flex justify-center items-center w-full bg-black mx-auto text-white border-b-8 border-gray-500 h-[500px]">
        <div>
          <span className="block text-[44px] font-bold ">
            Watch <br /> everywhere
          </span>
          <span className="block text-[26px]">
            Stream unlimited movies and TV <br /> shows on your phone, tablet,
            <br /> laptop, and TV.
          </span>
        </div>

        <div className="relative">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="Watch everywhere"
            className="w-[555px] relative z-10"
          />
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
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

export default Sec3;
