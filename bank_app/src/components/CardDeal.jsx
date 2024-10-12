import React from "react";
import styles,{layout} from "../style";
import { card } from "../assets";
import Button from "./Button";
const CardDeal = ()=>{
    return(
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Find a better card deal <br className="sm:block hidden" /> in few easy
                    steps.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-4`}>
                Discover the perfect card deal tailored to your needs in just a few simple steps. 
                Compare options, choose what fits best, 
                and start enjoying the benefits right away.
                </p>

                <Button styles={`mt-10`} />
                </div>

                <div className={layout.sectionImg}>
                <img src={card} alt="billing" className="w-[100%] h-[100%]" />
            </div>

        </section>
    )
}

export default CardDeal