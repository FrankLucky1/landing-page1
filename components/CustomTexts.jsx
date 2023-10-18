'use client';
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({title, texStyles}) => (
  <motion.p variants={textContainer} className={`${texStyles} font-normal text-[14px] sm:text-[16px] text-secondary-white`}>
    
  {Array.from(title).map((letter, index) =>  (
    <motion.span variants={textVariant2} key={index} >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span> 
    ))
    } 
  </motion.p>
);

export const TitleText = ({title, texStyles}) => (
  <motion.h2 variants={textVariant2}
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${texStyles}`} 
    >
      {title}
    </motion.h2>
);
