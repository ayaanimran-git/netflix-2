import React from "react";
import Sec1 from "@/components/Sec1";
import Sec2 from "@/components/Sec2";
import Sec3 from "@/components/Sec3";
import Sec4 from "@/components/Sec4";
import Sec5 from "@/components/Sec5";
import Sec6 from "@/components/Sec6";



const Page = () => {
  return (
    <>
      <main className="bg-[url('/Assets/main-image.jpg')] h-screen w-screen bg-center bg-no-repeat bg-cover max-h-[644px] relative border-b-8 border-[gray-500]">
        {/* Overlay */}
        <div className="h-[644px] w-full absolute top-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="h-full flex items-center justify-center flex-col text-white relative top-12 gap-6 px-6 py-8">
          <h1 className="font-extrabold text-[44px] text-center">
            Enjoy big movies, hit series, and more from ₹149.
          </h1>
          <p className="font-normal text-center text-[26px]">
            Join today. Cancel anytime.
          </p>
          <p className="text-center text-[24px]">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Email Address "
              className="text-white text-xs bg-[rgba(23,23,23,0.7)] pl-2 w-[250px] py-2 rounded border border-[white]"
              aria-label="Email Address"
            />
            <button
              type="button"
              className="bg-[red] text-white text-xl font-normal px-7 py-1 border border-white rounded"
            >
              Get Started &gt;
            </button>
          </div>
        </div>
      </main>

      {/* Sections */}
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
    </>
  );
};

export default Page;
