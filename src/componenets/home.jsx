import React, { useState } from "react";
import Nav from "./nav";
import LandingPage from "./landingPage";
import Passions from "./passions";
import Footer from "./footer";
import ContactMe from "./contactMe";
import logoLeft from "../landingPage/lpImage.jpeg"

export default function Home(){
    const [showModal,setShowModal]=useState(false); 
    return(
        <div className="w-full h-screen flex font-poppins overflow-hidden">
      {/* Left: Fixed image */}
      <Nav />
      <div className="w-1/2 h-full fixed top-0 left-0 z-0 ">
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${logoLeft})`}}
        ></div>
      </div>
      {/* Right: Scrollable content */}
      <div className="w-1/2 ml-auto h-screen overflow-y-auto z-10 mt-[16vh]">
        <LandingPage />
        <Passions />
        <Footer />
      </div>
      {showModal &&
        <ContactMe closeModal={()=>{setShowModal(false)}} />
      }
    </div>
    )
}