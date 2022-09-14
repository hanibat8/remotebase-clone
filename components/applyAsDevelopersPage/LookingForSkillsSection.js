import React from 'react'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import LookingForSkillsCard from './LookingForSkillsCard'

const LookingForSkills = () => {
  return (
    <section className='mt-40 xl:px-48 lg:px-32 px-10'>
        <LazyMotion features={domAnimation}>
            <AnimatedElement>
                <h2 className=' xl:px-40 lg:px-28 px-10 text-center font-semibold text-3xl'>
                Currently Looking For...
                </h2>
            </AnimatedElement>
            <AnimatedElement>
                <h3 className='xl:px-40 lg:px-28 mb-12 text-center text-lg mt-5 md:w-[75%] 
                                mx-auto px-10 leading-relaxed'>
                These are the top skills we are currently hiring for. If you are a software engineer with these skills, 
                or willing to switch your stack to these frameworks, apply away!
                </h3>
            </AnimatedElement>
            <AnimatedElement className='flex flex-col md:flex-row mt-16'>
                <LookingForSkillsCard img='/reactImg.svg' title='React.js'/>
                <LookingForSkillsCard img='/nodejsImg.svg' title='Node.js'/>
                <LookingForSkillsCard img='/pythonImg.svg' title='Python'/>
                <LookingForSkillsCard img='/rorImg.svg' title='Ruby on Rails'/>
            </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default LookingForSkills