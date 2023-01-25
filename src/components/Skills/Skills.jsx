import React from 'react'
import css from './Skills.module.scss'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';
import { skills } from '../../utils/data';


const Skills = () => {
  return (
    <motion.section 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={`flexCenter paddings ${css.wrapper}`}>
        <div className={`innerWidth ${css.container}`}>
            <p className={`primaryText ${css.header}`} >Things I'm Good At</p>
            
            <div className={css.skills} >
                {skills.map((s, i) => (
                    <div key={i} className={css.skill} >
                    <CircularProgressbar styles={buildStyles({pathColor: '#F26042', textColor: '#0D2F3F'})} value={s.percentage} text={`${s.percentage}%`} />;
                    <p>{s.name}</p>
                </div>
                ))}
            </div>
        </div>
    </motion.section>
  )
}

export default Skills