'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn,  } from "../utils/motion";
import { TypingText, TitleText } from "../components";
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col gap-3`}
    >
      <TypingText title={"| View The Multiverse 🗺️📍"} texStyles={'text-center'}/>
      <TitleText title={(<>Track Friends around the Multi-verse and invite the to play together in your spiderverse.</>)} texStyles={'text-center'}/>


      <motion.div
        variants={fadeIn('down', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full"
        >
          <img src="/map.png" alt="map" className="h-full w-full object-cover " />

          <div className="absolute right-[5rem] md:right-[20rem] top-0  w-[50px]  md:w-[70px] p-[6px] rounded-full bg-[#5d6680]  ">
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute left-[10%] top-20 w-[50px]  md:w-[70px] p-[6px] rounded-full bg-[#5d6680]  ">
            <img src="people-02.png" alt="people" className="w-full md:h-full" />
          </div>
          <div className="absolute top-1/3 left-[40%] w-[70px] p-[6px] rounded-full bg-[#5d6680]  ">
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
