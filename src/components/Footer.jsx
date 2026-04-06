import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

const Footer = ({ footer }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
        >
            <p className='text-center text-md max-md:text-sm font-[400] text-[var(--color-maintext)] opacity-50 mb-6'>{footer.copyright_message}</p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='flex gap-5 justify-center'
            >
                <div className='hover:scale-108 transition-all ease-in-out duration-120'>
                    <a target="_blank" href="mailto:rhythemjain7@gmail.com" ><Mail height={20} stroke='var(--color-maintext)' strokeWidth={1.5} /></a>
                </div>
                <div className='hover:scale-108 transition-all ease-in-out duration-120'>
                    <a target="_blank" href="https://www.linkedin.com/in/rhythemjainofficial/"  ><Linkedin height={20} stroke='var(--color-maintext)' strokeWidth={1.5} /></a>
                </div>
                <div className='hover:scale-108 transition-all ease-in-out duration-120'>
                    <a target="_blank" href="https://github.com/rhythem-jain" ><Github height={20} stroke='var(--color-maintext)' strokeWidth={1.5} /></a>
                </div>
                <div className='hover:scale-108 transition-all ease-in-out duration-120'>
                    <a target="_blank" href="tel:+918770976907" ><Phone height={20} stroke='var(--color-maintext)' strokeWidth={1.5} /></a>
                </div>
            </motion.div>

        </motion.div>
    )
}

export default Footer