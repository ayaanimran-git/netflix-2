import React from 'react'

const Sec6 = () => {
  return (
   <>
   
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
  )
}

export default Sec6;
