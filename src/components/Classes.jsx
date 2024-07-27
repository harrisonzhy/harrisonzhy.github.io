import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { classes, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ClassCard = ({ course, index }) => {
    return (
        <motion.div>
            <div>
                <p className="text-secondary text-[17px] mb-3">
                    {course.name} [{course.number}]
                </p>
            </div>
        </motion.div>
    );
};

const Classes = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText}`}>Classes.</h2>
            </motion.div>
            
            <div className='w-full flex'>
                <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                (Course numbers with decimals are at MIT, *Graduate-level)
                </motion.p>
            </div>
            
            <div className='mt-14 flex-wrap gap-7'>
                {classes.map((course, index) => (
                    <ClassCard key={`course-${index}`} index={index} course={course} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Classes, "");
