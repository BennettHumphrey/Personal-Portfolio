import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'


const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`} >
            <div className={css.upperElements} >
                <motion.span 
                variants={fadeIn("right", "tween", 0.2, 1)}
                className='primaryText' >Hello, <br/> I'm Ben.</motion.span>
                <motion.span 
                variants={fadeIn("left", "tween", 0.4, 1)}
                className='secondaryText' >Lorem ipsum <br/> dolor sit amet.</motion.span>
            </div>

            <motion.div 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person} >
                <motion.img 
                variants={slideIn("up", "tween", 0.5, 1.3)} 
                src="./person.png" 
                alt="Person" />
            </motion.div>

            <a className={css.email} href="mailto:bennetthumphrey98@gmail.com">bennetthumphrey98@gmail.com</a>

            <div className={css.lowerElements} >
                <motion.div 
                variants={fadeIn("right", "tween", 0.3, 1)}
                className={css.experience} >
                    <div className='primaryText' >10</div>
                    <div className='secondaryText' >
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                </motion.div>
                <motion.div
                variants={fadeIn("left", "tween", 0.5, 1)}
                className={css.certificate}>
                    <img src="./certificate.png" alt="Certificate" />
                    <span>Certified Pro</span>
                    <span>Web Dev</span>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero