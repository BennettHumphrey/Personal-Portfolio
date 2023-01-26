import React from 'react'
import css from './ProjectShowcase.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/motion'
import { projects } from '../../utils/data'

const ProjectShowcase = ({ project }) => {

    // const project = projects[0];

  return (
    <motion.section 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}    
    className={`flexCenter paddings ${css.wrapper}`}>
        <div className={css.container}>
            <div className={`flexCenter ${css.main}`}>
                <div className={css.text} >
                    <h1 className='primaryText' >{project.title}</h1>
                    <p>{project.description}</p>
                </div>
                <div className={`flexCenter ${css.mediaSection}`} >
                    <div className={css.links} >
                        <div>
                            <a href="">View GitHub</a>
                        </div>
                        <div>
                            <a href="">View deployed site</a>
                        </div>
                    </div>
                    <div className={css.media} >
                        <img
                        src={project.mainscreenshotSrc}
                        alt='Photo'
                        />
                    </div>
                </div>
            </div>
            <div className={css.screenshots} >
                {
                    project.screenshots.map((p, i) => (
                        <img src={p} alt={`Screenshot ${i}`} key={i} />
                    ))
                }
            </div>
        </div>
    </motion.section>
  )
}

export default ProjectShowcase