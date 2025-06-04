import React from "react";

export default function Nav(){
    const headerItems=["Home","About","Projects","Contact Me"]
    return(
        <nav className="flex fixed  flex-row items-center z-20  no-select justify-center w-[100%] p-2 bg-black/50 text-white h-[15vh] ">
            <div className="w-[50%] pl-[10%]">
                Kiran
            </div>
            <ol className="flex flex-row justify-evenly w-[50%]">
                {headerItems.map((item,index)=>(
                    <li key={index} className="cursor-pointer" onClick={()=>{}}>{item}</li>
                ))}
            </ol>
            

            
        </nav>
    )
}