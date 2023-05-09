import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";



const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I am good at
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Skills.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default SectionWrapper(Tech, "");