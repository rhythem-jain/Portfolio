import React from 'react'
import { motion } from 'motion/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = ({ Para1, Para2 }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay:0 }}
            >
                <h2 className='font-[550] text-[var(--color-maintext)] text-2xl max-md:text-[22px]'>About</h2>
                <p className='text-[var(--color-sidetext)] text-md max-md:text-sm mt-[15px]'>{Para1}</p>
                <p className='text-[var(--color-sidetext)] text-md max-md:text-sm mt-[15px] '>{Para2}</p>

                {/* Education block */}
                <div className='mt-6 p-4 rounded-2xl border border-[var(--color-gray)] bg-[var(--color-projectcardbg)]'>
                    <p className='font-[600] text-[var(--color-maintext)] text-sm mb-1'>🎓 B.Tech — Mechatronics Engineering</p>
                    <p className='text-[var(--color-sidetext)] text-xs'>Jabalpur Engineering College (JEC) · Sep 2024 – May 2028</p>
                    <p className='text-[var(--color-sidetext)] text-xs mt-1'>CGPA: <span className='font-[600] text-[var(--color-maintext)]'>8.167/10</span> &nbsp;·&nbsp; 3rd Sem SGPA: <span className='font-[600] text-[var(--color-maintext)]'>8.58/10</span></p>
                    <p className='text-[var(--color-sidetext)] text-xs mt-1 opacity-70'>Engineering Mathematics · C Programming · Digital Electronics · Control Systems · Mechanics & Robotics</p>
                </div>

            </motion.div>
        </>
    )
}

export default About