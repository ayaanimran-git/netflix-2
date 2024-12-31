import React from 'react'

const Sec5 = () => {
  return (
    <>
    <section className="bg-black text-white py-8 w-full bg-black border-b-8 border-[#565656]">
        <h2 className="text-center text-3xl md:text-4xl">Frequently Asked Questions</h2>
        <div className="faqbox max-w-5xl mx-auto my-8 bg-[#2D2D2D] hover:bg-[#3F3F3F] text-white p-6 flex justify-between items-center cursor-pointer">
          <span className="text-lg md:text-xl">What is Netflix</span>
          <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="faqbox max-w-5xl mx-auto my-8 bg-[#2D2D2D] hover:bg-[#3F3F3F] text-white p-6 flex justify-between items-center cursor-pointer">
          <span className="text-lg md:text-xl">How much does Netflix cost?</span>
          <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="faqbox max-w-5xl mx-auto my-8 bg-[#2D2D2D] hover:bg-[#3F3F3F] text-white p-6 flex justify-between items-center cursor-pointer">
          <span className="text-lg md:text-xl">What can I watch on Netflix?</span>
          <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="faqbox max-w-5xl mx-auto my-8 bg-[#2D2D2D] hover:bg-[#3F3F3F] text-white p-6 flex justify-between items-center cursor-pointer ">
          <span className="text-lg md:text-xl">Where can I watch?</span>
          <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Repeat .faqbox for other FAQ items */}
      </section>
    </>
  )
}

export default Sec5;
