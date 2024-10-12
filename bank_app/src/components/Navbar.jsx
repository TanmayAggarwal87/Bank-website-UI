import React, { useState } from "react";
import {close,logo,menu} from "../assets"
import {navLinks} from "../constants"

const Navbar = ()=>{
    const [toggle,setToggle]= useState(false)
    return(
        <nav className="w-full flex py-6 justify-between items-center navbar">
            
            <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>
            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav,index)=>(
                    
                    <li
                    key= {nav.id}
                    className={`font-mono font-normal cursor-pointer text-[16px] ${index===navLinks.length-1?"mr-0":"mr-10"}
                     text-white mr-10`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                        
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src = {toggle?close:menu} className="h-[24px] w-[24px] object-contain"
                onClick={()=>setToggle((prev)=>!prev)}></img>

                <div className={`${toggle?"flex":"hidden"} p-6 bg-gradient-to-r from-[#292524] to-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-md `}>
                    <ul className="list-none md:flex justify-end items-center flex-1">
                        {navLinks.map((nav,index)=>(
                        
                        <li
                            key= {nav.id}
                            className={`font-mono font-normal cursor-pointer text-[16px] mb-3 ${index===navLinks.length-1?"mr-0":"mr-10"}
                            text-white mr-10`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                                
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </nav>
        
    )
}

export default Navbar