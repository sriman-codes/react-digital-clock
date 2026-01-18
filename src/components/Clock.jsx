import React, { useState, useEffect } from 'react'
import { FaRegClock } from "react-icons/fa6";
import { IoSunny, IoMoon } from "react-icons/io5";


function Clock() {

    const [item, setitem] = useState(true)
    const [formate, setformate] = useState(true)

    const [time, setTime] = useState(new Date())

    useEffect(() => {
      const Interval = setInterval(
        () => {
            setTime(new Date())
        }, 1000
      );
    
      return () => {
        clearInterval(Interval)
        
      }
    }, [])

    const formateTime = (value) => String(value).padStart(2,"0");

    const Hour = time.getHours();
    const Min = time.getMinutes();
    const seconds = time.getSeconds();

    const ispm = Hour >= 12 ;
    const ampm = ispm ? "PM" : "AM";

    const formattedHours = formateTime(Hour % 12 || 12 );
    const formattedMinutes = formateTime(Min);
    const formattedseconds = formateTime(seconds);

    const date = time.toLocaleDateString("en-in",{
        weekday : "long",
        day : "numeric",
        month : "long",
        year : "numeric"
    })

  return (
    <>
        <div className={
            item ? "h-screen w-full bg-[#111827] flex justify-center items-center " :
            "h-screen w-full bg-[#E5E7EB] flex justify-center items-center "
        }>
            <div className={
                item ? 
                "h-60 lg:h-80 w-[700px] mx-5 bg-linear-to-bl from-gray-900 to-blue-950 rounded-2xl p-8 shadow-2xl flex flex-col justify-center items-center gap-9 lg:gap-0"
                :
                "h-60 lg:h-80 w-[700px] mx-5 bg-white text-blue-900 rounded-2xl p-8 shadow-2xl flex flex-col justify-center items-center gap-9 lg:gap-0"
            } >

                <div className="theme w-full h-[20%]  flex justify-between items-center  rounded-xl">
                    <div className={
                        item ? 
                        "time lg:h-full h-10 lg:w-[100px] w-19 bg-[#111827] flex justify-center items-center rounded-xl gap-2 text-white cursor-pointer hover:opacity-60 transition-opacity duration-500"
                        :
                        "time lg:h-full h-10 lg:w-[100px] w-19 bg-[#E5E7EB] flex justify-center items-center rounded-xl gap-2 text-blue-900 cursor-pointer hover:opacity-60 transition-opacity duration-500"
                    } onClick={() => setformate(!formate)} >
                        <FaRegClock /> {
                            formate ? "24H" : "12H"
                        }
                    </div>
                    <div className={
                        item ? "theme lg:h-full h-10 lg:w-[50px] w-10 bg-[#111827] flex justify-center items-center rounded-xl text-white cursor-pointer hover:scale-105 hover:opacity-60 transition-opacity duration-500" :
                        "theme lg:h-full h-10 lg:w-[50px] w-10 bg-[#E5E7EB] flex justify-center items-center rounded-xl text-blue-900 cursor-pointer hover:scale-105 hover:opacity-60 transition-opacity duration-500"
                    } 
                    onClick={
                        () => setitem(!item)
                    }>
                        {
                            item ? <IoSunny /> : <IoMoon />
                        }
                        
                        
                    </div>
                </div>

                <div className={
                    item ? 
                    "body lg:w-full lg:h-[60%] flex justify-center items-center lg:gap-9 gap-10 lg:text-8xl text-4xl font-bold text-white"
                    :
                    "body lg:w-full lg:h-[60%]  flex justify-center items-center lg:gap-9 gap-10 lg:text-8xl text-4xl font-bold text-blue-950"
                }>
                    {
                        formate ? formattedHours+" : " : formateTime(Hour)+" : " 
                    }  
                     {
                        formate ? formattedMinutes+" : "  : formateTime(Min)+" : " 
                    } 
                    {
                        formate ? formattedseconds : formateTime(seconds)
                    } 
                    <div className="lg:text-[40px] text-[20px]">
                        
                    {
                        formate ?  ampm : undefined
                    }
                    </div>
                </div>

                <div className={
                    item ? 
                    "foot w-full h-[20%] flex justify-center items-center text-2xl  text-[#7B716D] "
                    :
                    "foot w-full h-[20%] flex justify-center items-center text-2xl  text-shadow-blue-900 "
                }>
                        {date}
                </div>
                




            </div>
        </div>
    </>
  )
}

export default Clock