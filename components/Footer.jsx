'use client';
import styles from "../styles";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import { socials } from "../constants";
const Footer = () => (
  <motion.footer 
    variants={footerVariants}
    initial= 'hidden'
    whileInView={'show'}
    className={`${styles.paddings} py-8 relative `}
    >
      <div className="footer-gradient"/>
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:ext-[64px] text-[44px] text-secondary-white">
              Contact the SpiderVerse
          </h4>
          <button className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[30px] gap-3">
            <img src="/headset.svg" alt="headset" className="w-6 h-6 object-contain" />
            <span className="text-base text-white "> Contact</span>
          </button>
        </div>

        <div className="flex flex-col ">
          <div className="mb-4 h-1 bg-white opacity-10"/>
 
          <div className="flex gap-4 items-center justify-between flex-wrap">
            <h4 className="font-extrabold text-[24px] text-white">Spidie Team</h4>
            <p className="text-sm text-white opacity-50">Copyright 2020 - 2023 Spidere-verse. All rights reserved.</p>
           
            <div className="flex gap-4">
              {socials.map((social)=>(
                <img src={social.url} alt={social.name} key={social.name} className="w-6 h-6 object-contain cursor-pointer" />
              ))}
            </div>
          
          </div>
        </div>
      </div>
  </motion.footer>
);

export default Footer;
