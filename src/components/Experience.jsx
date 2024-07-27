import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#9faaff",
        color: "#EFF5EF",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-white text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const ExperienceCardNormal = ({ experience }) => {
  return (
    <>
      <div>
        <h3 className='text-primary text-[24px] font-semibold'>{experience.title}</h3>
      
        <p
          style={{ 
            margin: 0, 
            display: 'flex', 
            alignItems: 'center', 
          }}
          className="text-secondary text-[16px] font-medium"
        >
          {experience.company_name}
          <span style={{ marginLeft: 'auto' }}>
            {experience.date}
          </span>
        </p>

        <p
          style={{ 
            marginTop: 10,
            marginBottom: -10, 
            display: 'flex', 
            alignItems: 'center', 
          }}
          className="text-secondary text-[15px]"
        >
          <span style={{ margin: 0, }}>
            {experience.company_description ? experience.company_description : ""}
          </span>
        </p>
      
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>

        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-secondary text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      <div style={{ paddingTop: '20px', paddingBottom: '20px' }}></div>
    </>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Experience.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          (Cool stuff I've been up to)
        </motion.p>
      </div>

      <div className='mt-14 flex flex-col'>
          {experiences.map((experience, index) => (
            <ExperienceCardNormal
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
