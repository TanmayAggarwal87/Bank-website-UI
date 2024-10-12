import React from "react";
import styles from "../style";
import { discount,robot } from "../assets";
import GetStarted from "./GetStarted"

const Hero = ()=>{
    return(
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-16 px-6`}>
                <div className="flex flex-row items-center py-[16px] px-4 rounded-[10px] mb-2 bg-gradient-to-r from-neutral-700 to-neutral-900">
                    <img src={discount} className="w-[32px] h-[32px]"></img>
                    <p className={`${styles.paragraph} ml-2 text-white`}>
                        <span className="text-white font-semibold">20%{" "}</span>
                        Discount For {" "}
                        <span className="text-white font-semibold">1 Month {" "}</span>
                        Account
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full ">
                    <h1 className="flex-1 font-sans font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100px] leading-[75px]">
                        The Next 
                        <br/>
                        <span className="bg-gradient-to-r from-teal-500 to-teal-100 bg-clip-text font-bold text-transparent">Generation {" "}</span><br/>
                    </h1>
                    <div className="sm:flex hidden md:mr-4 mr-0">
                        <GetStarted/>

                    </div>

                </div>

                <h1 className=" font-sans font-semibold sm:text-[68px] text-[52px] text-white sm:leading-[100px] leading-[75px] w-full">
                    Payment Method

                </h1>
                <p className= {`${styles.paragraph} max-w-[470px] mt-5 text-white`} >
                    Our team of experts uses a methodology to identify the credit cards
                    most likely to fit your needs. We examine annual percentage rates,
                    annual fees.
                </p>
            </div>
            <div className={`flex-1 flex  md:my-0 my-10 relative`}>
                <img src={robot} className="h-[100%] w-[100%] relative z-[5]"></img>
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 bg-gradient-to-r from-[#f4c4f3] to-[#fc67fa] blur-[900px]"></div>
                <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 bg-white/60 blur-[750px]"></div>
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 bg-gradient-to-b from-[rgba(188,165,255,0)] to-[#214d76] blur-[123px]"></div>
                <div className={`sm:hidden ${styles.flexCenter}`}>
                    <GetStarted/>
                </div>

            </div>
        </section>
    )
}

export default Hero