import React from 'react'

import {motion} from 'framer-motion/dist/framer-motion';

const Center = ({style, children, horizontal, vertical, ...otherProps}) => {

    const frame = {
        ...style,
        display:'flex'
    }
    frame.justifyContent = (typeof(horizontal)==='undefined' || horizontal) ? 'center' : 'flex-start';
    frame.alignItems = (typeof(vertical) === 'undefined' || vertical) ? 'center': 'flex-start'
  return (
    <motion.div style={frame}{...otherProps} initial={{opacity:0}} animate={ {opacity:1}} exit={ {opacity:0}}>  
      {children}
    </motion.div>
  )
}

export default Center;