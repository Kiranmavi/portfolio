'use client';
import React, { useState } from "react";

export default function Passions() {
  const [hoverIndex, setHoverIndex] = useState(0); // Default to first skill
  const [mouseHovered,setMouseHovered]=useState(false);
  const passionItems = [
    {
      id: 0,
      title: "Front-End Development",
      subTitle: "React, Next.js, Angular, Flutter",
      description:
        "Experienced in building high-performance and responsive user interfaces using modern front-end frameworks. Developed many dynamic applications with React, Next.js, and Angular, and built cross-platform mobile apps with Flutter. Skilled in optimizing performance and accessibility, implementing SEO strategies using Next.js (SSR/SSG), and delivering clean, scalable code with strong design consistency.",
    },
    {
      id: 1,
      title: "Back-End Development",
      subTitle: "Node.js, Express, MongoDB, Python",
      description:
        "Proficient in building robust RESTful APIs, real-time services, and scalable server-side architectures. Successfully implemented backend systems that power healthcare platforms and bug tracking tools. Experience includes database modeling with MongoDB, handling authentication/authorization flows, and automating data extraction with Python for enhanced operational efficiency.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      subTitle: "Figma, Adobe XD",
      description:
        "Passionate about crafting intuitive and user-centric designs. Created modern and engaging UIs for client-facing web apps and e-commerce platforms that improved user engagement by over 30%. Experienced with wireframing, prototyping, and high-fidelity design systems using Figma and Adobe XD, and collaborating across teams for design feedback and implementation.",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-6 p-6">
      <div className="w-full text-center text-2xl font-semibold">Technical Skillset & Specializations</div>

      <div className="flex flex-col items-center justify-center w-full gap-6">
        {/* Tab Buttons */}
        <div className="flex flex-row items-center border rounded-[20px] px-2 py-2 gap-3 bg-gray-100 shadow-lg">
          {passionItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <div
                className={`transition duration-300 text-center text-sm md:text-base font-medium px-4 py-2 rounded-[20px] cursor-pointer ${
                  hoverIndex === index ? 'bg-black text-white' : 'bg-white text-black'
                }`}
                onClick={() => setHoverIndex(index)}
              >
                {item.title}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Selected Skill Content */}
        <div className={`w-full md:w-[100%] lg:w-[100%] relative bg-gray-100 cursor-pointer rounded-[20px] shadow-lg p-6`}  onMouseEnter={()=>{setMouseHovered(true)}} onMouseLeave={()=>{setMouseHovered(false)}}>
          <div className="flex flex-row justify-between"> 
            <div className="text-xl font-semibold mb-2">{passionItems[hoverIndex].title}</div>
            <div className={`absolute right-[2rem] top-[2rem] w-[2rem] h-[2rem] rounded-full p-1 border-black border-2 ${!mouseHovered ? 'animate-bounce' : ''}`}>
                <img src="/landingPage/right-arrow.png" />
            </div>
          </div>
          <div className="text-gray-600 font-medium mb-4">{passionItems[hoverIndex].subTitle}</div>
          <div className="text-gray-700 text-sm leading-relaxed">{passionItems[hoverIndex].description}</div>
        </div>
      </div>
    </div>
  );
}
