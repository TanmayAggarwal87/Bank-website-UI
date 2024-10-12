import React from "react";
import { apple,bill,google } from "../assets";
import styles, {layout} from "../style";

const Billing = ()=>{
    return(
        <section id="product" className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImgReverse}`}>
                <img src={bill}  className="w-[100%] h-[100%] relative z-[5]"></img>
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full bg-white/60 blur-[750px]"/>
            <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full bg-gradient-to-r from-[#f4c4f3] to-[#fc67fa] blur-[900px]"/>
            </div>

            <div>
                <h2 className={styles.heading2}>
                    Easily control your <br className="sm:block hidden" /> billing &
                    invoicing
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Effortlessly manage your banking needs with easy-to-use tools for billing and invoicing. 
                    Stay on top of transactions, generate invoices, and keep your finances organized—all in one place.
                </p>

                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img src={apple} className="mr-4 w-[128px] h-[42px] cursor-pointer"></img>
                    <img src={google} className="w-[128px] h-[42px] cursor-pointer"></img>
                </div>
            </div>
        </section>
    )
}

export default Billing