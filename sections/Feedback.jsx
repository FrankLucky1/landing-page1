'use client';

import { motion } from "framer-motion";
import styles from "../styles";

import { staggerContainer, fadeIn, zoomIn, textContainer } from "../utils/motion";
import { TypingText, TitleText, InsightCard } from "../components";


const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
   <motion.div  
    variants={staggerContainer}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col mb-4 `}>
        <TypingText title={"| Freindly neighbourhood Feedbacks 🕸️🕷️🕸️"} texStyles={'text-center'}/>
        <TitleText title={(<>Quotes from Our Spidie Friends.</>)} texStyles={'text-center'}/>
    
    </motion.div> 
  <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 relative`}
    >
      <motion.div 
        className="flex flex-col flex-[0.5] lg:max-w-[370px] justify-end gradient-05 p-4 sm:p-8 rounded-[32px] border border-[#6a6a6a]"
        variants={fadeIn('right', 'tween', 0.2, 1.25)}
        >
          <div className="feedback-gradient" />
          <div className="">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white" >
              Fiona Lucky
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
              Member | SpiderVerse
            </p>
          </div>
          <p 
            className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            "Being in the spiderverse is not a sacrifice, its a job. One thing i've learnt from the spiderverse is that, Everything is possible"
          </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1.25)}
        className="flex relative flex-1 justify-center items-center"
        >
          <img src="/planet-09.png" alt="planet-09" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />

        <motion.div 
          variants={zoomIn(0.4,1)}
          className="lg:block hidden absolute -left-[10%] top-[5%]">
          <img src="/stamp.png" alt="stamp" className="w-[150px] h-[150px] object-contain" />
        </motion.div>
      </motion.div>

     
  
  </motion.div>
  </section>
);

export default Feedback;
