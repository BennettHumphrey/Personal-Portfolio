import React from 'react'
import css from './MoreWorks.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, footerVariants, staggerContainer } from '../../utils/motion'
import Slider from 'react-slick'
import { moreWorksSliderSettings, imageSizes } from '../../utils/data'

const MoreWorks = ({extraProjects, setSelectedProject}) => {

  return (
    <>
    <a className="anchor" id="moreWorks"></a>
    <motion.section 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={footerVariants}
        className={`innerWidth ${css.container}`}>
            
            <div className={css.comments}>
                <Slider  
                    {...moreWorksSliderSettings}
                    className={css.slider}
                    >
                        {extraProjects.map((p, i) => {
                            return (
                                <a 
                                key={i} 
                                href="#projectShowcase">
                                    <motion.div
                                    variants={fadeIn("left", "tween", 0.1+i/2, 0.5)}
                                    key={i}
                                    className={css.project}
                                    onMouseDown={() => {
                                        setSelectedProject(p);
                                    }}
                                    >
                                        <img 
                                        srcset={p.mainscreenshotSrc} 
                                        sizes={imageSizes.moreWorks}
                                        alt={`Screenshot ${i+1}`} />
                                        <div className={`flexCenter ${css.tech}`}>
                                            <p>{p.tech}</p>
                                        </div>
                                    </motion.div>
                            </a>
                            )
                        })}
                </Slider>
            </div>
        </motion.div>
    </motion.section>
    </>
  )
}

export default MoreWorks