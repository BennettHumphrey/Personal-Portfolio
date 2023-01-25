import React, { useState, useRef } from 'react'
import css from './Nav.module.scss'
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
import { useWindowWidth } from '../../hooks/useWindowWidth'





const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef();
    const width = useWindowWidth();

    useOutsideAlerter(
        {menuRef, setMenuOpen}
    );

  return (
    <motion.div 
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}
        style={{boxShadow: headerShadow}} >
        <div className={`flexCenter innerWidth ${css.container}`} >
            <p className={css.name} >
                Ben
            </p>
            <ul
            ref={menuRef} 
            style={getMenuStyles(menuOpen)}
            className={`flexCenter ${css.menu}`} >
                <li><a href="#expertise">Services</a></li>
                <li><a href="#work">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#reviews">Testimonials</a></li>
                <li className={`flexCenter ${css.phone}`} >
                    <p>555-555-5555</p>
                    <BiPhoneCall size={40}/>
                </li>
            </ul>

            <div
            style={getMenuStyles(!menuOpen)} 
            className={css.menuIcon}
            onMouseDown={() => setMenuOpen(!menuOpen)} >
                {width <= 768 ? <BiMenuAltRight size={30} /> : null}
            </div>

        </div>
    </motion.div>
  )
}

export default Nav