import React,{useState} from "react";

export default function Nav(){
    const [showModalNav,setShowMaodalNav]=useState(false)
    const headerItems=["Home","About","Projects","Contact Me"]
    return(
        <nav className="flex fixed  flex-row items-center z-20 justify-center w-[100%] p-2 bg-black/50 text-white h-[15vh] ">
            <div className="w-[50%] pl-[10%]">
                Kiran
            </div>
            <ol className="flex flex-row justify-evenly w-[50%]">
                {headerItems.map((item,index)=>(
                    <li key={index} className="cursor-pointer" onClick={()=>{if(index+1 === headerItems.length) setSelectedHeaderItem(index)}}>{item}</li>
                ))}
            </ol>
            

            
        </nav>
    )
}