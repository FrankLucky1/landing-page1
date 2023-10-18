'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, slideIn, staggerContainer} from "../utils/motion";

import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={'show'}
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title='| Play with the stars! 🎶⭐✨' textStyles= 'text-center'/>

        <motion.p variants={fadeIn('up', 'tween', 0.3, 1)} className="mt-2 font-normal lg:text-[30px] md:[20px] text-[14px] text-center text-secondary-white ">
        So, can we <span className="font-extrabold text-purple-400">Play with the stars </span> tonight?. Can we make them all align?...Well, <span className="font-extrabold text-purple-400"> would you look at the time, </span> (look at the time), I'm racing against it, Your heart to my heart (to my heart) Come place it against it, I stare at your soul (stare at your soul) I'm facing temptations (temptations), I wanna do right, <span className="font-extrabold text-purple-400">"but we both want the sensation"</span>. So, can we? Play with the stars tonight?... Can we make them all align? So what's it gonna be? Yeah, 'Cause tonight's the night, so baby... Can we? (Can we?) Play with the stars tonight? (Play with the stars tonight) Can we make them all align? (Make them all align) <span className="font-extrabold text-purple-400">So what's it gonna be? Yeah (what's it gonna be?)</span> Cause tonight's the night. 
        </motion.p>
        <motion.span variants={slideIn('right', 'tween', 0.2, 1)} className="flex w-full text-xs sm:text-base justify-end text-slate-200 font-bold">~ Lady of Namek ~</motion.span>

        <motion.img variants={fadeIn('up', 'tween', 0.4, 2)} src="/arrow-down.svg" alt="arrow-down" className="w-[24px] h-[24px] sm:w-[34px] sm:h-[34px] object-contain mt-[28px] bg-slate-400 p-1 sm:p-2 cursor-pointer rounded-full"/>
    </motion.div>
  </section>
);

export default About;
