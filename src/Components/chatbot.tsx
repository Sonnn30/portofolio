import Image from "next/image";
import {motion, AnimatePresence} from "motion/react";
import { useState, useRef, useEffect} from "react";

export default function Chatbot(){
    const [isHide, setIsHide] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { text: "Hello! What I Can Help?", sender: 'bot' }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch("https://wilsonnnnn30-chatbot.hf.space/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: currentInput }),
            });

            const data = await response.json();
            const botReply = data.response || "Sorry, I dont Understand";
            
            setMessages((prev) => [...prev, { text: botReply, sender: 'bot' }]);
        } catch (error) {
            console.error("Error fetching bot:", error);
            setMessages((prev) => [...prev, { text: "Error: Gagal terhubung ke server.", sender: 'bot' }]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
        <AnimatePresence mode="wait">
            {isHide ? (
                <motion.div
                key="chat"
                initial={{ y: 50, scale: 0.5 }}
                animate={{ y: 0, scale: 1}}
                exit={{ y: 50, scale: 0.5 }}
                transition={{ duration: 0.1 }}
                className="fixed flex flex-col items-center bottom-10 left-1/2 -translate-x-1/2 sm:left-auto sm:-translate-x-0 sm:right-10 z-50 w-[350px] sm:w-[400px] h-[500px] bg-[#CFE7FF] gap-1 rounded-2xl">
                    <div className="absolute flex justify-center bg-[#34699A] rounded-full p-2 shadow-xl/12 mt-3">
                        <Image src="/chatbot.svg" alt="logo" width={30} height={30}/>
                    </div>
                    <div className="absolute right-4 top-2 hover:cursor-pointer" onClick={() => setIsHide(!isHide)}>
                        <Image src="/cancel.png" alt="cancel" width={25} height={25}/>
                    </div>
                    <div className="bg-white flex flex-col items-center w-[98%] h-[140px] gap-1 mt-9 rounded-lg text-[18px]">
                        <p className="mt-10 font-semibold">Welcome!</p>
                        <p className="text-center">What information would you like <br />to know about Wilson?</p>
                    </div>

                    <div className="bg-white flex flex-col w-[98%] h-[325px] mb-1.5 rounded-lg shadow-lg">
                        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3 scroll-smooth custom-scrollbar">
                            {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`max-w-[80%] p-3 rounded-xl text-[14px] break-words ${
                                    msg.sender === 'bot' 
                                        ? 'bg-[#CFE7FF] self-start' 
                                        : 'bg-[#65A0D8] text-white self-end'
                                }`}
                            >
                                {msg.text}
                            </div>
                            ))}
                            {isLoading && <p className="text-[10px] italic text-gray-400">Bot is typing…</p>}
                            <div ref={bottomRef} />
                        </div>

                        <div className="flex justify-around border-t-2 border-[#CFE7FF] p-3 gap-2">
                            <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your question here..."
                            className="border border-black rounded-2xl outline-none px-4 py-2 w-full text-[12px]"
                            />
                            <button onClick={handleSend} disabled={isLoading}>
                            <Image 
                                src="/send.svg" 
                                alt="send" 
                                width={30} 
                                height={30} 
                                className={`hover:cursor-pointer ${isLoading ? 'opacity-50' : ''}`}
                            />
                            </button>
                        </div>
                    </div>

                </motion.div>
            ): (
                <motion.div 
                key="icon"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="flex fixed bottom-10 right-10 z-50 hover:cursor-pointer" onClick={() =>setIsHide(true)}>
                    <div className="bg-[#34699A] rounded-full p-3">
                        <Image
                            src="/chatbot.svg"
                            alt="chatbot"
                            width={50}
                            height={50}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    )
}

