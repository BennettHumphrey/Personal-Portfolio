import React, { useState } from 'react'
import css from './Portfolio.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'
import { projects } from '../../utils/data'
import ProjectShowcase from '../ProjectShowcase/ProjectShowcase'

const Portfolio = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const showcaseProjects = projects.filter(x => x.showcase === true);
    // console.log(showcaseProjects)
  return (
    <>
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
                    {
                        showcaseProjects.map((p, i) => (
                            <motion.img
                            key={i}
                            src={p.mainscreenshotSrc}
                            variants={fadeIn("up", "tween", 0.5, 0.6)} 
                            alt={`Project ${i} screenshot`} 
                            onMouseDown={() => {
                                setSelectedProject(p);
                            }}
                            />
                        ))
                    }
                </div>
    
            </div>
        </motion.section>
        {selectedProject && <ProjectShowcase project={selectedProject} />}
    </>
  )
}

export default Portfolio