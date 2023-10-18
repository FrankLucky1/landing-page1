'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants  } from "../utils/motion";
import { TypingText, NewFeatures, TitleText } from "../components";
import {newFeatures} from '../constants'

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
     
      <motion.div
        variants={fadeIn('left', 'tween', 0.25, 1)}
        className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={'| New in SpiderVerse 🎃🕷️'} />
          <TitleText title={<>Checkout whats new to the Spiderverse</>} />
          <div 
            className="mt-[40px] flex flex-wrap justify-between gap-[24px]"
            >
              {newFeatures.map((feature) => (
                <NewFeatures 
                key={feature}
                {...feature }
                />
              ))}
          </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
        >
          <img src="/whats-new.png" alt="whatsnew" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
  </motion.div>
</section>
);

export default WhatsNew;