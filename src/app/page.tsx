
export default function Home() {
  return (
    <>
    {/* main start */}
    <main className="bg-img h-screen bg-center bg-no-repeat bg-cover relative pt-[150px] border-b-[15px] border-[#d6d6d6]">
      {/* box start */}
      <div className="h-screen w-full opacity-[0.60] absolute top-0 bg-black">
      </div> 
      {/* box end */}
      {/* hero start */}

      
      {/* b/w1 start */}
      <div className="font-martel-sans h-[calc(100%-100px)] flex items-center justify-center flex-col text-white relative gap-[23px] px-[30px]">
      <span className="font-poppins font-bold text-[48px] text-center">
        Enjoy big movies, hit series and more from ₹ 149.
      </span>
      <span className="font-normal text-[24px] text-center">
        Join today. Cancel anytime.
      </span>
      <span className="text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </span>
      {/* b/w1 end */}

      {/* b/w2 start */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Email Address"
          className="px-10 py-2 bg-transparent border border-white rounded"
        />
        <button className="px-4 rounded-md text-white text-lg py-1.5 border-2 border-white font-normal bg-[red]">
          Get Started &gt;
        </button>
      </div>
      {/* b/w2 end */}

    </div>
    {/* hero end */}
    </main>
    {/* main end */}

    {/*  2nd section */}
        <section className="flex justify-center w-full bg-black mx-auto text-white items-center  border-b-[15px] border-[#565656]">
            <div className="flex flex-col py-[34px]">
                <span className="text-4xl font-extrabold">ENJOY ON YOUR TV</span>
                <span className="mt-2 mt-2 w-[80%] text-[22px] font-normal">
                    Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                </span>
            </div>

            <div className="relative">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                    alt=""
                    className="w-[555px] relative z-10"
                />
                <video
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                    autoPlay
                    loop
                    muted
                    className="absolute top-[51px] right-0 w-[555px]"
                ></video>
            </div>
        </section>
        

        <section className="flex flex-col md:flex-row items-center py-8 w-full bg-black  border-b-[15px] border-[#565656]">
        <div className="relative">
          <img 
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
            alt="" 
            className="w-[555px] relative z-10"
          />
        </div>
        <div className="flex flex-col py-8">
          <span className="text-3xl md:text-4xl font-bold">DOWNLOAD YOUR SHOWS TO WATCH OFFLINE</span>
          <span className="text-lg md:text-xl mt-2 w-[80%] text-[22px] font-normal">Save your favourites easily and always have something to watch.</span>
        </div>
      </section>
      <section className="flex justify-center w-full bg-black mx-auto text-white items-center  border-b-[15px] border-[#565656]">
        <div className="flex flex-col py-8 pl-[150px] pr-[150px]">
          <span className="text-4xl font-extrabold">WATCH EVERYWHERE</span>
          <span className="mt-2 w-[80%] text-[22px] font-normal">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
        </div>
        <div className="relative">
          <img 
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" 
            alt="" 
            className="w-[555px] relative z-10"
          />
          <video 
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" 
            autoPlay 
            loop 
            muted 
            className="absolute top-[51px] right-0 w-[555px]"
          ></video>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center py-8 w-full bg-black  border-b-[15px] border-[#565656]">
        <div className="relative">
          <img 
            src="https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" 
            alt="" 
            className="w-[555px]"
          />
        </div>
        <div className="flex flex-col py-8 ">
          <span className="text-3xl md:text-4xl font-bold">CREATE PROFILES FOR KIDS</span>
          <span className="text-lg md:text-xl mt-2 w-[80%] text-[22px] font-normal">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
        </div>
      </section>
      <section className="bg-black text-white py-8 w-full bg-black border-b-[15px] border-[#565656]">
        <h2 className="text-center text-3xl md:text-4xl">Frequently Asked Questions</h2>
        <div className="faqbox max-w-5xl mx-auto my-8 bg-[#2D2D2D] hover:bg-[#3F3F3F] text-white p-6 flex justify-between items-center cursor-pointer">
          <span className="text-lg md:text-xl">What is Netflix</span>
          <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="faqbox max-w-5xl mx-auto my-8 bg-[#2D2D2D] hover:bg-[#3F3F3F] text-white p-6 flex justify-between items-center cursor-pointer">
          <span className="text-lg md:text-xl">What is Netflix</span>
          <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="faqbox max-w-5xl mx-auto my-8 bg-[#2D2D2D] hover:bg-[#3F3F3F] text-white p-6 flex justify-between items-center cursor-pointer">
          <span className="text-lg md:text-xl">What is Netflix</span>
          <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="faqbox max-w-5xl mx-auto my-8 bg-[#2D2D2D] hover:bg-[#3F3F3F] text-white p-6 flex justify-between items-center cursor-pointer ">
          <span className="text-lg md:text-xl">What is Netflix</span>
          <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Repeat .faqbox for other FAQ items */}
      </section>
      <footer className="text-white px-[250px] mx-auto py-16 w-screen bg-black">
        <div className="py-8">Questions? Call 000-800-919-1694</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col space-y-2">
            <a href="./components/error.tsx" className="hover:underline">Investor Relations</a>
            <a href="faq" className="hover:underline">Jobs</a>
            <a href="faq" className="hover:underline">Ways to Watch</a>
            <a href="faq" className="hover:underline">Terms of Use</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="faq" className="hover:underline">Help Centre</a>
            <a href="faq" className="hover:underline">Account</a>
            <a href="faq" className="hover:underline">Speed Test</a>
            <a href="faq" className="hover:underline">Legal Notices</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="faq" className="hover:underline">Media Centre</a>
            <a href="faq" className="hover:underline">Privacy</a>
            <a href="faq" className="hover:underline">Cookie Preferences</a>
            <a href="faq" className="hover:underline">Corporate</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="faq" className="hover:underline">Contact Us</a>
            <a href="faq" className="hover:underline">Speed Test</a>
            <a href="faq" className="hover:underline">Legal Notices</a>
            <a href="faq" className="hover:underline">Only on Netflix</a>
          </div>
        </div>
      </footer>

  

          </>
  );
}
