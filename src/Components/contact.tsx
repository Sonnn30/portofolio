'use client'
import Image from "next/image";
import Models from "@/Components/models";
import { sendEmail } from "@/lib/resend";
import { Children, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useAnimation } from "motion/react";




export default function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [Err_N, setErr_N] = useState("");
    const [Err_E, setErr_E] = useState("");
    const [Err_S, setErr_S] = useState("");
    const [Err_M, setErr_M] = useState("");
    const controls = useAnimation();

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

    return(
        <>
            <div className="w-full h-full -mt-10 justify-center hidden lg:flex">
                <Models/>
            </div>
            <div className="flex flex-col  space-y-5 mb-20 ">
                <h1 className="flex justify-center lg:justify-start font-nunito font-bold text-black text-[32px] mb-20">Contact</h1>
                <input type="text" placeholder="Your name" id="name" name="name"autoComplete="name" className="border-b-2 w-[200px] sm:w-[500px] xl:w-[700px] placeholder:text-[18px] placeholder:text-black py-2" value={name} onChange={(e) => setName(e.target.value)}/>
                {Err_N && <p className="text-red-500 -mt-3 ">{Err_N}</p>}
                <input type="text" placeholder="Your email" id="email" name="email" autoComplete="email" className="border-b-2  w-[200px] sm:w-[500px] xl:w-[700px] placeholder:text-[18px] placeholder:text-black py-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {Err_E && <p className="text-red-500 -mt-3 ">{Err_E}</p>}
                <input type="text" placeholder="Subject" id="subject" name="subject" autoComplete="subject" className="border-b-2  w-[200px] sm:w-[500px] xl:w-[700px] placeholder:text-[18px] placeholder:text-black py-2" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                {Err_S && <p className="text-red-500 -mt-3 ">{Err_S}</p>}
                <textarea placeholder="Your message" rows={4} id="message" name="message" autoComplete="message" className="border-b-2  w-[200px] sm:w-[500px] xl:w-[700px] placeholder:text-[18px] placeholder:text-black" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                {Err_M && <p className="text-red-500 -mt-3">{Err_M}</p>}
                <form onSubmit={send} className="flex justify-center lg:justify-start mt-5">
                <Toaster position="bottom-right" reverseOrder={false} />
                <button className="flex justify-center bg-black text-[#F1EFEC] w-[120px] h-[50px] items-center gap-2 text-[22px] rounded-2xl hover:cursor-pointer">
                    <Image src="/email.png" alt="email" width={18} height={18} className="self-center"/>
                    Send
                </button>
                </form>
        </div>
        </>
    )
}