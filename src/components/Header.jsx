import React from "react";
import Image from "next/image";

const Header = () => {
  return (
   <header className="absolute w-screen">
     <nav className="max-w-[60vw] flex justify-between items-center mx-auto h-[100px]">
      <span>
        <Image src="/Logos/logo.svg" 
        alt="Netflix" 
        width={130}   
        height={100}
        className="w-[130px] relative z-10" 
        />
      </span>
      <div className="button">
        <button type="button" className="relative z-10 btn">English</button>
        <button type="button" className="relative z-10 btn btn-red-sm">Sign In</button>
      </div>
    </nav>   
   </header>
  );
};

export default Header;
