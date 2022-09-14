import React from 'react'
import { m } from "framer-motion"

const AnimatedElement = (props) => {
  return (
    <m.div
    className={props.className} 
    initial={{ opacity: 0,y:50 }}
    whileInView={{ opacity: 1,y:0 }}
    viewport={{ once: false,amount: 0.4 }}
    transition={{duration:.75}}>
        {props.children}
    </m.div>
  )
}

export default AnimatedElement