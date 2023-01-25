import React from 'react'
import css from './Portfolio.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'

const Portfolio = () => {
  return (
    <motion.section 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}>
        <a className="anchor" id="portfolio"></a>
        <div className={`flexCenter innerWidth ${css.container}`}>
            <div className={`flexCenter ${css.heading}`}>
                <div>
                    <span className='primaryText' >My latest works</span>
                    <p style={{marginTop: "10px"}} >Great solutions</p>
                </div>
                <span className="secondaryText">Explore More Works</span>
            </div>

            <div className={`flexCenter ${css.showcase}`}>
                <motion.img
                src="./showcase1.png"
                variants={fadeIn("up", "tween", 0.5, 0.6)} 
                alt="Showcase image 1" />
                <motion.img
                src="./showCase2.png" 
                variants={fadeIn("up", "tween", 0.7, 0.6)} 
                alt="Showcase image 2" />
                <motion.img
                src="./showCase3.png" 
                variants={fadeIn("up", "tween", 0.9, 0.6)} 
                alt="Showcase image 3" />
            </div>

        </div>
    </motion.section>
  )
}

export default Portfolio