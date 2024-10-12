import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = ()=>{
    return(
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-teal-100 to-teal-500 cursor-pointer p-[2px]`}>
            <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-sans font-medium text-[18px] leading-[23px] mr-2">
                        <span className="bg-gradient-to-r from-teal-500 to-teal-100 bg-clip-text text-transparent text-[18px]">
                            Get
                        </span>
                    </p>
                    <img src={arrowUp} className="w-[23px] h-[23px] object-contain"></img>
                </div>

                <p className="font-sans font-medium text-[18px] leading-[23px]">
                        <span className="bg-gradient-to-r from-teal-500 to-teal-100 bg-clip-text text-transparent text-[18px]">
                            Started
                        </span>
                        
                </p>

            </div>
        </div>
    )
}

export default GetStarted