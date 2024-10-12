import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = ()=>{

    return(
    
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {stats.map((stat)=>(
                <div key ={stat.id} className="flex-1 flex justify-start items-center m-3 flex-row">
                    <h4 className="font-sans font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[42px] text-white">{stat.value}</h4>
                    <p className="font-sans font-semibold xs:text-[20px] text-[15px] xs:leading-[15px] leading-[21px] bg-gradient-to-r from-teal-500 to-teal-100 bg-clip-text text-transparent uppercase ml-3 ">{stat.title}</p>
                </div>
            ))}

        </section>
    )
}

export default Stats