"use client"
import Image from "next/image";
import { useState } from "react";
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    function Open(){
        const x = !isOpen;
        setOpen(x)
        console.log(x)
    }

  return (
    <nav className="fixed top-0 left-0 right-0 font-oswald text-white text-[42px] flex justify-between mx-5  lg:mx-12 my-3 z-[100]">
      <h1 className="text-[20px] lg:text-[50px]">Wilson</h1>
      <button onClick={Open} className="hover:cursor-pointer z-50">
      <Image src={isOpen ? "/x-mark.png": "/menu.png"} alt="Menu" width={50} height={50} className="w-[30px] lg:w-[50px]"/>
      </button>
      <AnimatePresence>
        {isOpen ? 
            <motion.div className="fixed right-0 top-0 font-nunito text-black bg-[#F1EFEC] w-70 lg:w-1/3 h-[102vh] lg:h-[118vh] px-8 -mx-12 -my-3"
              initial={{x:500}} animate={{x:-48}} exit={{x:500}} transition={{duration: 1, ease: "easeInOut"}}
            >
                <div className="flex flex-col items-start my-20">
                    <h3 className="border-b mb-30 text-[20px] font-bold w-full py-1">Navigation</h3>
                    <a href="#" className="underline decoration-transparent hover:decoration-black decoration-2 transition duration-400">Home</a>
                    <a href="#about" className="underline decoration-transparent hover:decoration-black decoration-2 transition duration-400">About</a>
                    <a href="#projects" className="underline decoration-transparent hover:decoration-black decoration-2 transition duration-400">Projects</a>
                    <a href="#contact" className="underline decoration-transparent hover:decoration-black decoration-2 transition duration-400">Contact</a>
                    <h3 className="text-[20px] font-semibold mt-30 border-b w-full py-1">Links</h3>
                    <div className="flex flex-col lg:flex-row text-[18px] gap-3 mt-3">
                        <a href="https://www.linkedin.com/in/wilson-prajnawira/" className="hover:underline decoration-black decoration-1">LinkedIn</a>
                        <a href="https://github.com/Sonnn30" className="hover:underline decoration-black decoration-1">Github</a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wilsonprajnawira345@gmail.com" className="hover:underline decoration-black decoration-1">Email</a>
                        <a href="https://www.instagram.com/wilson_.p/" className="hover:underline decoration-black decoration-1">Instagram</a>
                    </div>
                </div>
            </motion.div>
        : ""}
      </AnimatePresence>
    </nav>
  );
}