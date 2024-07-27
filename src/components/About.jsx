import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <section className={`relative top-[150px] w-full h-screen mx-auto`}>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Hi, I'm Harrison.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]'
      >
      I'm a computer science student at Harvard University. Broadly, I'm interested in 
      pretty software, hardware accelerators, operating systems, and kernel security.
      
      I love collaborating with others on cool projects and learning new things :)
      </motion.p>
    </section>
  );
};

export default SectionWrapper(About, "about");
