'use client'
import Navbar from "../Components/navbar";
import "./globals.css";
import Image from "next/image";
import * as motion from "motion/react-client"
import Models from "@/Components/models";
import { sendEmail } from "@/lib/resend";
import { Children, useEffect, useRef, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";
import { useAnimation, useScroll, useTransform } from "motion/react";


export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [Err_N, setErr_N] = useState("");
  const [Err_E, setErr_E] = useState("");
  const [Err_S, setErr_S] = useState("");
  const [Err_M, setErr_M] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const controls = useAnimation();

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

    useEffect(() => {
      // looping animasi scale
      controls.start({
        scale: [1, 1.3, 1],
        transition: { ease: "easeInOut", duration: 4, repeat: Infinity },
      });
    }, [controls]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

      // Validation Name
      if (name.trim() === "") {
        setErr_N("Please fill name");
        isValid = false;
      }else if (!/^[A-Za-z\s]+$/.test(name)) {
        setErr_N("Name must only contain letters, Please enter correctly");
        isValid = false;
      } else {
        setErr_N("");
      }

      // Validation Subject
      if (subject.trim() === "") {
        setErr_S("Please fill subject");
        isValid = false;
      } else {
        setErr_S("");
      }

      // Validation Message
      if (message.trim() === "") {
        setErr_M("Please fill message");
        isValid = false;
      } else {
        setErr_M("");
      }

      // Validation Email
      if (email.trim() === "") {
        setErr_E("Please fill email");
        isValid = false;
      } else if (!email.includes("@")) {
        setErr_E("Email address is missing '@'");
        isValid = false;
      } else if (!email.includes(".com")) {
        setErr_E("Email address must include '.com'");
        isValid = false;
      } else {
        setErr_E("");
      }

      if (!isValid) {
        toast.error("Unable to send email");
        return;
      }

      await sendEmail(email, name, subject, message);
      console.log("Email terkirim");
      toast.success("Email sent successfully");
    };

    const element = useRef<HTMLParagraphElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: element,
      offset: ["start 0.9", "start 0.45"],
    });

    const value = `Hi there! 👋 I’m Wilson Prajnawira, Computer Science student at BINUS University with a passion for crafting modern, user-focused front-end experiences and developing innovative AI-driven solutions. I
    specialize in React, Tailwind CSS, and Next.js, creating clean, responsive, and engaging interfaces that deliver seamless user experiences. Beyond coding, I explore new technologies, ranging from web-based AI assistants to machine
    learning projects to bring ideas to life and solve real-world problems. My approach blends creativity, problem-solving, and adaptability, enabling me to deliver impactful and future-ready solutions. I’m always open to exciting projects
    and collaborations that push boundaries, so feel free to reach out! 🚀`;

    const wordArray = value.split(" ");

    interface WordProps {
      children: React.ReactNode;
      range: number[];
      progress: MotionValue<number>;
    }

    const Word: React.FC<WordProps> = ({ children, range, progress }) => {
      const opacity = useTransform(progress, range, [0, 1]);
      return (
        <motion.span style={{ opacity }} className="word">
          {children}
        </motion.span>
      );
    }
  return (
    <>
    <Navbar/>

    <div id=" " className="flex justify-around text-white mb-20 mt-60 mx-50 ">
      <div>
        <h3 className="font-nsimsun text-[36px]">Wilson Prajnawira</h3>
        <h1 className="text-[64px] font-bold w-[512px]">Front End Developer</h1>
        <p className="text-[22px] w-[613px] mt-5">Computer Science student at BINUS University with a passion for crafting modern, user-focused front-end experiences and developing innovative AI-driven solutions.</p>
        <a href="#contact">
          <button className="border-2 border-[#D4C9BE] text-[#D4C9BE] text-[24px] rounded-4xl px-5 py-3 mt-7 hover:cursor-pointer hover:border-white transition duration-500 hover:text-white">Contact Me</button>
        </a>
      </div>
      <div className="-mt-20 -mr-40">
        <Image src="/pp.png" alt="pp" width={837} height={768} priority className="w-[550px] h-auto"/>
      </div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 800"
            opacity="0.67"
            className="absolute top-0 right-0 left-0 w-[800px] z-[-10] "
            initial={{x: 0, y:0}}
            animate={controls}
            style={{
              x: mousePosition.x - 400,
              y: Math.min(mousePosition.y - 400, 100)
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
                fill="hsla(0, 0%, 100%, 1)" // putih
              />
              <ellipse
                rx="92.5"
                ry="93"
                cx="311.93226896291753"
                cy="457.71253234738685"
                fill="hsla(212, 72%, 59%, 1)" // biru
              />
              <ellipse
                rx="92.5"
                ry="93"
                cx="462.5644222021821"
                cy="465.1023500966595"
                fill="rgba(253,245,170,1)" // kuning pastel
              />
            </g>
          </motion.svg>
                 
    </div>
    <div id="about" className="text-white mx-57 mt-40 "
    >
      <div>
        <h1 className="text-[64px] font-bold ">About me</h1>
        <motion.p
            className="text-[24px] mt-8"
            ref={element}
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
      <div className="flex justify-between mt-30 -mx-23">
        {/* Penghubung kiri */}
        <svg
          width="456"
          height="316"
          viewBox="0 0 456 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute ml-24 mt-11"
        >
          {/* Path static */}
          <path
            d="M455 315C331.74 153.386 251.012 48.075 1 1"
            stroke="white"
          />
          {/* Gambar bergerak mengikuti path */}
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


        <svg width="412" height="181" viewBox="0 0 412 181" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute ml-26 mt-45">
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
        <svg width="413" height="2" viewBox="0 0 413 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute ml-[93px] mt-107">
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
        <svg width="465" height="154" viewBox="0 0 465 154" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute ml-21 mt-121.5">
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
        <svg width="481" height="295" viewBox="0 0 481 295" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute ml-25.5 mt-121.5">
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
        <svg width="456" height="316" viewBox="0 0 456 316" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 mr-55 mt-11">
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
        <svg width="412" height="181" viewBox="0 0 412 181" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 mr-57 mt-45">
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
        <svg width="413" height="2" viewBox="0 0 413 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 mr-53 mt-107">
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
        <svg width="465" height="154" viewBox="0 0 465 154" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 mr-50 mt-121.5">
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
        <svg width="481" height="295" viewBox="0 0 481 295" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 mr-55 mt-121.5">
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
        <div className="flex flex-col justify-between gap-25">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/react.png" alt="react" width={88} height={88}/>
              <p className="text-[22px] text-white">React JS</p>
            </div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/python.png" alt="python" width={88} height={88}/>
              <p className="text-[22px] text-white">Python</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/html.png" alt="html" width={88} height={88}/>
              <p className="text-[22px]">HTML</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/tailwind-css.svg" alt="tailwind" width={88} height={88}/>
              <p className="text-[22px]">Tailwind CSS</p>
            </div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/mysql.png" alt="mysql" width={88} height={88}/>
              <p className="text-[22px]">MY SQL</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <div className="bg-black w-[254px] h-[128px] rounded-2xl flex justify-center items-center font-bold font-nunito">
          <span className="text-[70px] bg-gradient-to-b from-gray-100 to-gray-700 bg-clip-text text-transparent">
            Skills
          </span>
        </div>
        </div>
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/js.png" alt="js" width={88} height={88}/>
              <p className="text-[22px]">JavaScript</p>
            </div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/NextJs.svg" alt="nextjs" width={88} height={88}/>
              <p className="text-[22px]">Next JS</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/css.png" alt="css" width={88} height={88}/>
              <p className="text-[22px]">CSS</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/tensorflow.svg" alt="tensorflow" width={88} height={88}/>
              <p className="text-[22px]">Tensorflow</p>
            </div>
            <div className="flex flex-col justify-between items-center filter grayscale brightness-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300">
              <Image src="/C.png" alt="C" width={128} height={142} className="w-[88px] h-auto"/>
              <p className="text-[22px]">C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="projects" className="text-white mt-30 mx-57">
      <h1 className="font-bold text-[64px] mb-15">Recent Projects</h1>
      <div className="flex flex-col items-center">
        <div className="bg-[#34699A] flex justify-between w-[935px] h-[478px] rounded-2xl pt-[102.5px] mb-10">
            <div className="ml-10">
              <h2 className="text-[48px] font-bold">Waste Wise</h2>
              <p className="text-[12px] w-[313px] mt-3">A platform that combines educational recycling videos with an interactive community forum, empowering people to learn, share, and take action towards a more sustainable future.</p>
              <h3 className="text-[15px] w-[241px] mt-3">React JS, No SQL db, Tailwind CSS,  and Express JS</h3>
            </div>
            <div className="flex justify-center items-center hover:brightness-50 duration-300" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
              <Image src="/wastewise.png" alt="wastewise" width={543} height={375} className="rounded-2xl"/>
              {isHover ? 
              <div className="absolute flex justify-between gap-3">
                <a href="https://github.com/Sonnn30">
                  <Image src="/github.png" alt="github" width={50} height={50}/>
                </a>
                <a href="">
                  <Image src="/linkP.png" alt="link" width={50} height={50}/>
                </a>
              </div>
              : "" }
            </div>
        </div>
        <div className="bg-[#34699A] flex justify-between w-[935px] h-[478px] rounded-2xl pt-[108.5px] mb-10">
            <div className="ml-10">
              <h2 className="text-[48px] font-bold">Hishot 2025</h2>
              <p className="text-[12px] w-[313px] mt-3">A website providing event details for HISHOT 2025, featuring information on workshops and seminars.</p>
              <h3 className="text-[15px] w-[241px] mt-3">React JS, and Tailwind CSS</h3>
            </div>
            <div className="flex justify-center items-center hover:brightness-70 duration-300" onMouseEnter={() => setIsHover2(true)} onMouseLeave={() => setIsHover2(false)}>
              <Image src="/hishot.png" alt="hishot" width={426} height={290} className="rounded-2xl w-[543px] h-auto"/>
                {isHover2 ? 
                <div className="absolute flex justify-between gap-3">
                  <a href="https://github.com/Sonnn30">
                    <Image src="/github.png" alt="github" width={50} height={50}/>
                  </a>
                  <a href="https://hishot.himtibinus.or.id/">
                    <Image src="/linkP.png" alt="link" width={50} height={50}/>
                  </a>
                </div>
                : "" }
            </div>
      </div>
    </div>
    <a href="/CV.pdf" download="WilsonPrajnawiraV.pdf">
      <div className="flex justify-center mb-40 mt-60">
        <div className="group flex justify-center gap-3 border-[#D4C9BE] border-2 rounded-[80px] w-[459px] h-[160px] hover:border-white">
          <Image 
            src="/download.png" 
            alt="download" 
            width={74} 
            height={74} 
            className="self-center group-hover:brightness-900" 
          />
          <h1 className="flex items-center text-[48px] text-[#D4C9BE] group-hover:text-white">
            Download CV
          </h1>
        </div>
      </div>
    </a>

    </div>
    <div id="contact" className="flex justify-between bg-[#F1EFEC] h-[650px] pt-30 px-10 gap-10">
      <div className="absolute w-[200px] h-[50px] bg-[#F1EFEC] mt-105 ml-130"></div>
      <div className="w-full h-full -mt-10 flex justify-center">
         <Models/>
      </div>
      <div className="flex flex-col space-y-5">
        <h1 className="font-nunito font-bold text-black text-[32px] mb-20">Contact</h1>
        <input type="text" placeholder="Your name" id="name" name="name"autoComplete="name" className="border-b-2 w-[700px] placeholder:text-[18px] placeholder:text-black py-2" value={name} onChange={(e) => setName(e.target.value)}/>
        {Err_N && <p className="text-red-500 -mt-3 ">{Err_N}</p>}
        <input type="text" placeholder="Your email" id="email" name="email" autoComplete="email" className="border-b-2 w-[700px] placeholder:text-[18px] placeholder:text-black py-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
        {Err_E && <p className="text-red-500 -mt-3 ">{Err_E}</p>}
        <input type="text" placeholder="Subject" id="subject" name="subject" autoComplete="subject" className="border-b-2 w-[700px] placeholder:text-[18px] placeholder:text-black py-2" value={subject} onChange={(e) => setSubject(e.target.value)}/>
        {Err_S && <p className="text-red-500 -mt-3 ">{Err_S}</p>}
        <textarea placeholder="Your message" rows="4" id="message" name="message" autoComplete="message" className="border-b-2 w-[700px] placeholder:text-[18px] placeholder:text-black" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        {Err_M && <p className="text-red-500 -mt-3 ">{Err_M}</p>}
        <form onSubmit={send} className="mt-5 mb-2">
          <Toaster position="bottom-right" reverseOrder={false} />
          <button className="flex justify-center bg-black text-[#F1EFEC] w-[120px] h-[50px] items-center gap-2 text-[22px] rounded-2xl hover:cursor-pointer">
            <Image src="/email.png" alt="email" width={18} height={18} className="self-center"/>
            Send
          </button>
        </form>
      </div>
    </div>

    </>
  );
}


