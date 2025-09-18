'use client'
import Navbar from "../Components/navbar";
import "./globals.css";
import {useEffect, useState } from "react";
import { useAnimation} from "motion/react";
import * as motion from "motion/react-client"
import Image from "next/image";
import About from "@/Components/about";
import Projects from "@/Components/projects";
import Contact from "@/Components/contact";


export default function Home() {
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
      const handleResize = () => setIsLarge(window.innerWidth >= 1024); 
      handleResize(); 
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    const [mousePosition, setMousePosition] = useState({
      x:0,
      y:0
    })
    useEffect(() => {
      const Mousemove = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        })
      }

      window.addEventListener("mousemove", Mousemove);

      return () => {
        window.removeEventListener("mousemove", Mousemove);
      }
    }, [])


  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center mt-30 lg:flex-row lg:justify-around text-white lg:gap-25 2xl:mb-20 2xl:mt-60 2xl:mx-50">
        {/* Text Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center text-center lg:pl-20 xl:pl-0 lg:text-start lg:items-start">
          <h3 className="font-nsimsun text-[18px] lg:text-[36px]">Wilson Prajnawira</h3>
          <h1 className="lg:text-[64px] font-bold lg:w-[512px]">AI Engineer</h1>
          <p className="text-[15px] px-10 lg:px-0 lg:text-[22px] lg:w-[613px] mt-5">
            Computer Science student at BINUS University specializing in AI, 
            with interests in scalable systems, deep learning solutions, and front-end development 
            to integrate AI into user-friendly applications
          </p>
          <a href="#contact">
            <button className="border-2 border-[#D4C9BE] text-[#D4C9BE] lg:text-[24px] rounded-4xl px-5 py-3 mt-7 hover:cursor-pointer hover:border-white transition duration-500 hover:text-white">
              Contact Me
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="w-[200px] lg:w-full lg:-mt-15 lg:-mr-40 lg:order-2 order-1">
          <Image
            src="/pp.png"
            alt="pp"
            width={837}
            height={768}
            priority
            className="w-[550px] h-auto"
          />
        </div>
{isLarge && (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 800"
          opacity="0.67"
          className="absolute top-0 right-0 left-0 w-[800px] z-[-10]"
          initial={{x: mousePosition.x - 400, y: Math.min(mousePosition.y - 400, 100)}}
          animate={{
            scale: [1, 1.3, 1],
            x: mousePosition.x - 400,
            y: Math.min(mousePosition.y - 400, 100),
            transition: { ease: "easeInOut", duration: 4, repeat: Infinity },
          }}
        >
          <defs>
            <filter
              id="bbblurry-filter"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="60"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              />
            </filter>
          </defs>

          <g filter="url(#bbblurry-filter)">
            <ellipse
              rx="92.5"
              ry="93"
              cx="392.0801408278692"
              cy="349.66581913107495"
              fill="hsla(0, 0%, 100%, 1)"
            />
            <ellipse
              rx="92.5"
              ry="93"
              cx="311.93226896291753"
              cy="457.71253234738685"
              fill="hsla(212, 72%, 59%, 1)" 
            />
            <ellipse
              rx="92.5"
              ry="93"
              cx="462.5644222021821"
              cy="465.1023500966595"
              fill="rgba(253,245,170,1)"
            />
          </g>
        </motion.svg>
      )}
          

    </div>
    <div id="about" className="text-white mt-30 lg:mx-57 lg:mt-40 relative">
      <About/>
    </div>
    <div id="projects" className="text-white mt-20 mb-30 lg:mt-30 lg:mx-57">
      <Projects/>
    </div>
    <div id="contact" className="flex justify-between bg-[#F1EFEC] w-full h-[655px] pt-10 lg:pt-30 px-10 gap-10">
      <div className="flex justify-center w-full">
        <Contact/>
      </div>
    </div>
    </>
  );
}