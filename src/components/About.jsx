import React from 'react'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  // to add tilt effect
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 5,
          scale: 1,
          speed: 40,
        }}
        className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-21 h-21 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      {/* motion. allows to add framer motion and animate */}
      {/* textVariant animation allows all text containing elements like p tags to be animated */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am Swostik Pati, a double major in Computer Science and Interactive Media, with a minor in Economics and Design at New York University in Abu Dhabi. I have experience working in various companies in positions such as Full-stack web developer, Product Manager, UI/UX Designer, and Business Analyst.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")