'use client'
import Image from "next/image";
import { useState } from "react";


export default function Projects(){
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);

    return(
        <>
        <h1 className="flex justify-center lg:justify-start font-bold text-[20px] sm:text-[32px] lg:text-[64px] mb-8 lg:mb-15">Recent Projects</h1>
        <div className="flex flex-col items-center gap-4">
            {/* <div className="bg-[#34699A] flex justify-between w-[350px] h-[190px] sm:w-[500px] sm:h-[260px] lg:w-[935px] lg:h-[478px] rounded-xl lg:rounded-2xl pt-10 sm:pt-15 lg:pt-[102.5px] lg:mb-10 gap-1 lg:gap-0">
                <div className="ml-2 lg:ml-10">
                <h2 className="text-[18px] sm:text-[32px] lg:text-[48px] font-bold">Waste Wise</h2>
                <p className="text-[6px] sm:text-[8px] lg:text-[12px] w-[120px] sm:w-[220px] lg:w-[313px] mt-1 sm:mt-2 lg:mt-3">A platform that combines educational recycling videos with an interactive community forum, empowering people to learn, share, and take action towards a more sustainable future.</p>
                <h3 className="text-[8px] sm:text[12px] lg:text-[15px] w-[100px] sm:w-[200px] lg:w-[241px] mt-2 sm:mt-3 lg:mt-3">React JS, No SQL db, Tailwind CSS, and Express JS</h3>
                </div>
                <div className="flex justify-center items-center hover:brightness-50 duration-300" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <Image src="/wastewise.png" alt="wastewise" width={543} height={375} className="w-[200px] h-[150px] sm:w-[250px] sm:h-[200px] lg:w-[543px] lg:h-[375px] rounded-xl lg:rounded-2xl"/>
                {isHover ? 
                <div className="absolute flex justify-between gap-3">
                    <a href="https://github.com/Sonnn30">
                    <Image src="/github.png" alt="github" width={50} height={50} className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"/>
                    </a>
                    <a href="">
                    <Image src="/linkP.png" alt="link" width={50} height={50} className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"/>
                    </a>
                </div>
                : "" }
                </div>
            </div> */}

            <div className="bg-[#34699A] flex justify-between w-[350px] h-[190px] sm:w-[500px] sm:h-[260px] lg:w-[935px] lg:h-[478px] rounded-xl lg:rounded-2xl pt-10 sm:pt-15 lg:pt-[102.5px] lg:mb-10 gap-1 lg:gap-0">
                <div className="ml-2 lg:ml-10 flex flex-col items-start gap-2">
                <h2 className="text-[18px] sm:text-[32px] lg:text-[48px] font-bold">Hishot 2025</h2>
                <p className="text-[6px] sm:text-[8px] lg:text-[12px] w-[120px] sm:w-[220px] lg:w-[313px] mt-1 sm:mt-2 lg:mt-3">A website providing event details for HISHOT 2025, featuring information on workshops and seminars.</p>
                <h3 className="text-[8px] sm:text[12px] lg:text-[15px] w-[100px] sm:w-[200px] lg:w-[241px] mt-2 sm:mt-3 lg:mt-3 font-semibold">React JS, and Tailwind CSS</h3>
                </div>
                <div className="flex justify-center items-center hover:brightness-70 duration-300" onMouseEnter={() => setIsHover2(true)} onMouseLeave={() => setIsHover2(false)}>
                <Image src="/hishot.png" alt="hishot" width={426} height={290} className="w-[200px] h-[150px] sm:w-[250px] sm:h-[200px] lg:w-[543px] lg:h-[375px] rounded-xl lg:rounded-2xl"/>
                    {isHover2 ? 
                    <div className="absolute flex justify-between gap-3">
                    <a href="https://github.com/Sonnn30">
                        <Image src="/github.png" alt="github" width={50} height={50} className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"/>
                    </a>
                    <a href="https://hishot.himtibinus.or.id/">
                        <Image src="/linkP.png" alt="link" width={50} height={50} className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"/>
                    </a>
                    </div>
                    : "" }
                </div>
            </div>
            <div className="bg-[#34699A] flex justify-between w-[350px] h-[190px] sm:w-[500px] sm:h-[260px] lg:w-[935px] lg:h-[478px] rounded-xl lg:rounded-2xl pt-10 sm:pt-15 lg:pt-[102.5px] lg:mb-10 gap-1 lg:gap-0">
                <div className="ml-2 lg:ml-10 flex flex-col items-start gap-2">
                <h2 className="text-[18px] sm:text-[32px] lg:text-[48px] font-bold">CampusThrift</h2>
                <p className="text-[6px] sm:text-[8px] lg:text-[12px] w-[120px] sm:w-[220px] lg:w-[313px] mt-1 sm:mt-2 lg:mt-3">A secure secondhand e-commerce platform where only verified students can sell, with trusted profiles and safe COD recommendations.</p>
                <h3 className="text-[8px] sm:text[12px] lg:text-[15px] w-[100px] sm:w-[200px] lg:w-[241px] mt-2 sm:mt-3 lg:mt-3 font-semibold">React JS, Tailwind CSS, Laravel, and MySQL</h3>
                </div>
                <div className="flex justify-center items-center hover:brightness-70 duration-300" onMouseEnter={() => setIsHover2(true)} onMouseLeave={() => setIsHover2(false)}>
                <Image src="/campusthrift.png" alt="hishot" width={426} height={290} className="w-[200px] h-[150px] sm:w-[250px] sm:h-[200px] lg:w-[543px] lg:h-[375px] rounded-xl lg:rounded-2xl"/>
                    {isHover2 ? 
                    <div className="absolute flex justify-between gap-3">
                    <a href="https://github.com/Sonnn30/CampusThrift-Final">
                        <Image src="/github.png" alt="github" width={50} height={50} className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"/>
                    </a>
                    <a href="https://campusthrift-final-production.up.railway.app">
                        <Image src="/linkP.png" alt="link" width={50} height={50} className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"/>
                    </a>
                    </div>
                    : "" }
                </div>
            </div>
        </div>
        <a href="/CV.pdf" download="WilsonPrajnawiraV.pdf">
        <div className="flex justify-center mt-20 mb-20 lg:mb-40 lg:mt-60">
            <div className="group flex justify-center gap-3 border-[#D4C9BE] border-2 rounded-[80px] w-[200px] h-[100px] lg:w-[459px] lg:h-[160px] hover:border-white">
            <Image 
                src="/download.png" 
                alt="download" 
                width={74} 
                height={74} 
                className="self-center w-[32px] h-[32px] lg:w-[74px] lg:h-[74px]  group-hover:brightness-900" 
            />
            <h1 className="flex items-center text-[18px] lg:text-[48px] text-[#D4C9BE] group-hover:text-white">
                Download CV
            </h1>
            </div>
        </div>
        </a>
        </>
    )
}