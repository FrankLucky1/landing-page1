'use client';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({index, title, subtitle, imgUrl}) => (
  <motion.div
    variants={fadeIn('up', 'tween', index * 0.7, 1)}
    className="flex md:flex-row flex-col gap-4 "
    >
    <img src={imgUrl} alt={title} className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover" />
    <div className=" w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[64px] flex flex-col max-w-[700px]">
        <h4 className="font-normal sm:text-[42px] leading-[45px] text-xl text-white">
          {title}
        </h4>
        <p className="mt-4 font-normal lg:text-lg text-sm text-secondary-white">{subtitle}</p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[80px] h-[80px] cursor-pointer rounded-full bg-transparent border-emerald-100 border">
        <img src="arrow.svg" alt="arrow" className="w-[30%] h-[30%] object-contain" />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
