'use client'

import Image from "next/image";
import * as motion from "motion/react-client"
import { useEffect, useRef } from "react";
import { useAnimation, useScroll, useTransform, MotionValue } from "motion/react";


export default function About(){
  const controls = useAnimation();
    useEffect(() => {
      controls.start({
        scale: [1, 1.3, 1],
        transition: { ease: "easeInOut", duration: 4, repeat: Infinity },
      });
    }, [controls]);

    const element = useRef<HTMLParagraphElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.45"],
    });

    const value = `Hi there! 👋 I’m Wilson Prajnawira, Computer Science student at BINUS University specializing in Artificial Intelligence. 
    I’m passionate about developing innovative AI-driven solutions, with a strong focus on deep learning, machine learning models, and scalable AI systems. 
    I work extensively with TensorFlow and PyTorch to design, train, and deploy models . besides AI, I also have skills in front-end development with  React, Tailwind CSS, and Next.js, 
    enabling me to build clean, responsive, and user-friendly interfaces that can integrate it with intelligent systems. I’m always open to exciting projects and collaborations that push boundaries, 
    so feel free to reach out! 🚀`;

    const wordArray = value.split(" ");

    interface WordProps {
      children: React.ReactNode;
      range: number[];
      progress: MotionValue<number>;
    }

    const Word: React.FC<WordProps> = ({ children, range, progress }) => {
      const opacity = useTransform(progress, range, [0, 1]);
      return (
        <motion.span style={{ opacity }} className="word relative">
          {children}
        </motion.span>
      );
    }

    return(
        <>
        <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-[24px] lg:text-[64px] font-bold ">About me</h1>
            <div ref={element} className="relative">
                <motion.p
                    className="relative text-[10px] lg:text-[24px] mt-8 px-5 lg:px-0 text-center lg:text-start"
                    style={{ opacity: scrollYProgress }}
                >
                    {wordArray.map((word, i) => {
                    const start = i / wordArray.length;
                    const end = Math.min(start + 1 / wordArray.length, 1); // jangan lebih dari 1
                    return (
                        <Word key={i} range={[start, end]} progress={scrollYProgress}>
                        {word}{" "}
                        </Word>
                    );
                    })}
                </motion.p>
            </div>
      </div>
      <div className="flex justify-between mt-30 lg:-mx-23 sm:mx-10">
        <div className="absolute hidden [@media(width:280px)]:block 2xl:block">
        {/* Penghubung kiri */}
            <svg
            viewBox="0 0 456 316"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-[90px] ml-7 mt-2 lg:ml-24 lg:mt-8 lg:w-[456px] lg:h-[316px]"
            >
            <path
                d="M455 315C331.74 153.386 251.012 48.075 1 1"
                stroke="white"
            />
            <image
                href="/comet.png"
                width="45"
                height="15"
                x="-22.5"
                y="-7.5"
            >
                <animateMotion
                dur="7s"
                repeatCount="indefinite"
                rotate="auto"
                path="M455 315C331.74 153.386 251.012 48.075 1 1"
                keyTimes="0;0.1;1"
                keyPoints="1;0;0"
                />
                <animate
                attributeName="opacity"
                values="1;1;0"
                keyTimes="0;0.1;1"
                dur="7s"
                repeatCount="indefinite"
                />
            </image>
            </svg>


            <svg viewBox="0 0 412 181" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[77px] mt-11 ml-7 lg:w-[412px] lg:h-[181px] absolute lg:ml-24 lg:mt-45">
            <path d="M411 180C221.043 56.4653 130.97 16.7289 1 1" stroke="white"/>
            <image
                href="/comet.png"
                width="45"
                height="15"
                x="-22.5"
                y="-7.5"
            >
                <animateMotion
                dur="7s"
                repeatCount="indefinite"
                rotate="auto"
                path="M411 180C221.043 56.4653 130.97 16.7289 1 1"
                keyTimes="0;0.1;1"
                keyPoints="1;0;0"
                begin="1.5s"
                />
                <animate
                attributeName="opacity"
                values="1;1;0"
                keyTimes="0;0.1;1"
                dur="8.5s"
                repeatCount="indefinite"
                />
            </image>
            </svg>
            <svg viewBox="0 0 413 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[75px] mt-22 ml-7 lg:w-[413px] lg:h-[2px] lg:ml-[93px] lg:mt-107">
            <path d="M0.00256348 1.02026L412.5 1.02026" stroke="white"/>
            <image
            href="/comet2.png"
            width="45"
            height="15"
            x="-22.5"
            y="-7.5"
            >
            <animateMotion
                dur="9s"
                repeatCount="indefinite"
                rotate="auto"
                path="M0 1 L412.5 1"
                keyTimes="0;0.1;1"
                keyPoints="0;1;1"
                begin="3s"
            />
            <animate
                attributeName="opacity"
                values="1;1;0"
                keyTimes="0;0.1;1"
                dur="9s"
                repeatCount="indefinite"
            />
            </image>
            </svg>
            <svg viewBox="0 0 465 154" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[90px] mt-25 ml-7 lg:w-[465px] lg:-[154px] lg:ml-20 lg:mt-119">
            <path d="M464 1C312.208 99.9075 216.64 138.573 1 153" stroke="white"/>
            <image
                href="/comet.png"
                width="45"
                height="15"
                x="-22.5"
                y="-7.5"
            >
                <animateMotion
                dur="7s"
                repeatCount="indefinite"
                rotate="auto"
                path="M464 1C312.208 99.9075 216.64 138.573 1 153"
                keyTimes="0;0.1;1"
                keyPoints="1;0;0"
                begin="1.5s"
                />
                <animate
                attributeName="opacity"
                values="1;1;0"
                keyTimes="0;0.1;1"
                dur="8.5s"
                repeatCount="indefinite"
                />
            </image>
            </svg>
            <svg viewBox="0 0 481 295" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute ml-5 mt-25 w-[110px] lg:w-[481px] lg:h-[295px] lg:ml-25 lg:mt-119">
            <path d="M480 1C367.92 171.57 243.101 220.791 1 294" stroke="white"/>
            <image
                href="/comet.png"
                width="45"
                height="15"
                x="-22.5"
                y="-7.5"
            >
                <animateMotion
                dur="7s"
                repeatCount="indefinite"
                rotate="auto"
                path="M480 1C367.92 171.57 243.101 220.791 1 294"
                keyTimes="0;0.1;1"
                keyPoints="1;0;0"
                />
                <animate
                attributeName="opacity"
                values="1;1;0"
                keyTimes="0;0.1;1"
                dur="7s"
                repeatCount="indefinite"
                />
            </image>
            </svg>

            {/* Penghubung kanan */}
            <svg viewBox="0 0 456 316" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[90px] ml-40.5 mt-2 lg:ml-185 lg:mt-8 lg:w-[456px] lg:h-[316px]">
            <path d="M1 315C124.26 153.386 204.988 48.075 455 1" stroke="white"/>
            <image
                href="/comet.png"
                width="45"
                height="15"
                x="-22.5"
                y="-7.5"
            >
                <animateMotion
                dur="7s"
                repeatCount="indefinite"
                rotate="auto"
                path="M1 315C124.26 153.386 204.988 48.075 455 1"
                keyTimes="0;0.1;1"
                keyPoints="1;0;0"
                />
                <animate
                attributeName="opacity"
                values="1;1;0"
                keyTimes="0;0.1;1"
                dur="7s"
                repeatCount="indefinite"
                />
            </image>
            </svg>
            <svg viewBox="0 0 412 181" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[77px] mt-11 ml-45 lg:w-[412px] lg:h-[181px] absolute lg:ml-190 lg:mt-45">
            <path d="M1.00001 180C190.957 56.4653 281.03 16.7289 411 1" stroke="white"/>
            <image
                href="/comet.png"
                width="45"
                height="15"
                x="-22.5"
                y="-7.5"
            >
                <animateMotion
                dur="7s"
                repeatCount="indefinite"
                rotate="auto"
                path="M1.00001 180C190.957 56.4653 281.03 16.7289 411 1"
                keyTimes="0;0.1;1"
                keyPoints="1;0;0"
                begin="1.5s"
                />
                <animate
                attributeName="opacity"
                values="1;1;0"
                keyTimes="0;0.1;1"
                dur="8.5s"
                repeatCount="indefinite"
                />
            </image>
            </svg>
            <svg viewBox="0 0 413 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[75px] mt-22 ml-45 lg:w-[413px] lg:h-[2px] lg:ml-190 lg:mt-107">
            <path d="M0.00256348 1.02026L412.5 1.02026" stroke="white"/>
                    <image
                    href="/comet2.png"
                    width="45"
                    height="15"
                    x="-22.5"
                    y="-7.5"
                >
                    <animateMotion
                    dur="9s"
                    repeatCount="indefinite"
                    rotate="auto"
                    path="M412.5 1 L0 1"
                    keyTimes="0;0.1;1"
                    keyPoints="0;1;1"
                    begin="3s"
                    />
                    <animate
                    attributeName="opacity"
                    values="1;1;0"
                    keyTimes="0;0.1;1"
                    dur="9s"
                    repeatCount="indefinite"
                    />
                </image>
            </svg>
            <svg viewBox="0 0 465 154" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[90px] mt-25.5 ml-40 lg:w-[465px] lg:-[154px] lg:ml-180 lg:mt-119">
            <path d="M1.00001 1C152.792 99.9075 248.36 138.573 464 153" stroke="white"/>
                    <image
                        href="/comet.png"
                        width="45"
                        height="15"
                        x="-22.5"
                        y="-7.5"
                    >
                        <animateMotion
                        dur="7s"
                        repeatCount="indefinite"
                        rotate="auto"
                        path="M1.00001 1C152.792 99.9075 248.36 138.573 464 153"
                        keyTimes="0;0.1;1"
                        keyPoints="1;0;0"
                        begin="1.5s"
                        />
                        <animate
                        attributeName="opacity"
                        values="1;1;0"
                        keyTimes="0;0.1;1"
                        dur="8.5s"
                        repeatCount="indefinite"
                        />
                    </image>
            </svg>
            <svg viewBox="0 0 481 295" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute ml-37 mt-25 w-[110px] lg:w-[481px] lg:h-[295px] lg:ml-170 lg:mt-119">
            <path d="M0.999988 1C113.08 171.57 237.899 220.791 480 294" stroke="white"/>
                    <image
                    href="/comet.png"
                    width="45"
                    height="15"
                    x="-22.5"
                    y="-7.5"
                    >
                    <animateMotion
                        dur="7s"
                        repeatCount="indefinite"
                        rotate="auto"
                        path="M0.999988 1C113.08 171.57 237.899 220.791 480 294"
                        keyTimes="0;0.1;1"
                        keyPoints="1;0;0"
                    />
                    <animate
                        attributeName="opacity"
                        values="1;1;0"
                        keyTimes="0;0.1;1"
                        dur="7s"
                        repeatCount="indefinite"
                    />
                    </image>
            </svg>
        </div>
        <div className="flex flex-col justify-between gap-1.5 lg:gap-25">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/react.png" alt="react" width={88} height={88} className="w-[16px] h-[16px] lg:w-[88px] lg:h-[88px]"/>
              <p className="text-[8px] lg:text-[22px] text-white">React JS</p>
            </div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/python.png" alt="python" width={88} height={88} className="w-[16px] h-[16px] lg:w-[88px] lg:h-[88px]"/>
              <p className="text-[8px] lg:text-[22px] text-white">Python</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/html.png" alt="html" width={88} height={88} className="w-[16px] h-[16px] lg:w-[88px] lg:h-[88px]"/>
              <p className="text-[8px] lg:text-[22px]">HTML</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/tailwind-css.svg" alt="tailwind" width={88} height={88} className="w-[16px] h-[16px] lg:w-[88px] lg:h-[88px]"/>
              <p className="text-[8px] lg:text-[22px]">Tailwind CSS</p>
            </div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/mysql.png" alt="mysql" width={88} height={88} className="w-[16px] h-[16px] lg:w-[88px] lg:h-[88px]"/>
              <p className="text-[8px] lg:text-[22px]">MY SQL</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <div className="bg-black w-[80px] h-[30px] lg:w-[254px] lg:h-[128px] rounded-2xl flex justify-center items-center font-bold font-nunito">
          <span className="text-[20px] lg:text-[70px] bg-gradient-to-b from-gray-100 to-gray-700 bg-clip-text text-transparent">
            Skills
          </span>
        </div>
        </div>
        <div className="flex flex-col justify-between lg:gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/js.png" alt="js" width={88} height={88} className="w-[16px] h-[16px] lg:w-[88px] lg:h-[88px]"/>
              <p className="text-[8px] lg:text-[22px]">JavaScript</p>
            </div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/NextJs.svg" alt="nextjs" width={88} height={88} className="w-[16px] h-[16px] lg:w-[88px] lg:h-[88px]"/>
              <p className="text-[8px] lg:text-[22px]">Next JS</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/css.png" alt="css" width={88} height={88} className="w-[16px] h-[16px] lg:w-[88px] lg:h-[88px]"/>
              <p className="text-[8px] lg:text-[22px]">CSS</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/tensorflow.svg" alt="tensorflow" width={88} height={88} className="w-[16px] h-[16px] lg:w-[88px] lg:h-[88px]"/>
              <p className="text-[8px] lg:text-[22px]">Tensorflow</p>
            </div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/C.png" alt="C" width={128} height={142} className="w-[16px] lg:w-[88px] h-auto"/>
              <p className="text-[8px] lg:text-[22px]">C</p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}