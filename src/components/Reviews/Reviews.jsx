import React from 'react'
import css from './Reviews.module.scss'
import { motion } from 'framer-motion'
import { footerVariants, staggerContainer } from '../../utils/motion'
import Slider from 'react-slick'
import { comments, sliderSettings } from '../../utils/data'

const Reviews = () => {
  return (
    <motion.section 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}>
        <a className="anchor" id="reviews"></a>
        <motion.div 
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}>
            <div className={`flexCenter ${css.heading}`} >
                <span className="primaryText">People talk</span>
                <p style={{marginTop: '2rem'}} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, recusandae!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>

            <div className={`yPaddings ${css.comments}`}>
                <Slider  
                    {...sliderSettings}
                    className={css.slider}
                    >
                        {comments.map((c, i) => {
                            return (
                                <div key={i} className={`flexCenter ${css.comment}`}>
                                    <img src={c.img} alt="Review Image" />
                                    <p>{c.comment}</p>
                                    <div className={css.line}></div>
                                    <div className={css.bio}>
                                        <span>{c.name}</span>
                                        <span>{c.post}</span>
                                    </div>
                                </div>
                            )
                        })}
                </Slider>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Reviews