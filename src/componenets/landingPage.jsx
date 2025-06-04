import React from "react";
import heroImg from "../landingPage/heroImg.png"

export default function LandingPage(){
    return(
        <div className="w-[100%] h-fit mb-10 flex  no-select flex-col gap-6 items-center justify-center bg-no-repeat bg-contain">
            <img src={heroImg} className="w-[40%]" />
            <div className="font-semibold">I&apos;m Kiran</div>
            <div  className="flex justify-center items-center w-[80%]">"Passionate software engineer driven to create dynamic and user-centric web and mobile applications. Focused on building solutions that are both impactful and practical for real-world needs." </div>
        </div>

    )
}