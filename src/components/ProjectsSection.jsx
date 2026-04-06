import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import IconsFlow from './IconsFlow'

const ProjectsSection = ({ projects }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isExpanded]);

    // Project color themes for placeholder cards
    const projectThemes = [
        { bg: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', accent: '#00d4ff', label: '💳 AI Credit' },
        { bg: 'linear-gradient(135deg, #1a0533, #2d1b3d, #0f0c1a)', accent: '#ff6b9d', label: '🕵️ Threat Intel' },
        { bg: 'linear-gradient(135deg, #0a2342, #126782, #2ca58d)', accent: '#f9d56e', label: '📊 Equity Analytics' },
        { bg: 'linear-gradient(135deg, #1a0a0a, #3d1515, #6b2020)', accent: '#ff4444', label: '🔍 AML Detection' },
    ];

    const projectData = projects;

    return (
        <>
            <motion.h2
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className=' font-[600] text-[var(--color-maintext)] text-4xl max-md:text-2xl mt-18 max-md:mt-[8vh] mb-10 max-md:mb-[6vh] text-center'
            >
                Here's What I've <br />Been Building.
            </motion.h2>

               <div className='mt-8 mb-8'>
                    <IconsFlow />
            </div>

            <div className='flex flex-col gap-2'>

                {projectData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 60 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className='border-[var(--color-gray)] border-solid border-[0.5px] rounded-3xl p-4 max-md:p-3 pb-6 flex flex-col max-md:pb-5 gap-4 m-2 max-md:m-0 max-md:mb-4 hover:shadow-md hover:scale-101 transition-all ease-in-out duration-120 bg-[var(--color-projectcardbg)]'
                    >
                        {/* Stylish project hero section */}
                        <div
                            className='rounded-2xl w-full border-[var(--color-darkgray)] border-solid border flex items-center justify-center'
                            style={{
                                background: projectThemes[index % projectThemes.length]?.bg || 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
                                minHeight: '180px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)' }} />
                            <div style={{ textAlign: 'center', padding: '2rem', zIndex: 1 }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                                    {projectThemes[index % projectThemes.length]?.label?.split(' ')[0] || '🚀'}
                                </div>
                                <p style={{ color: projectThemes[index % projectThemes.length]?.accent || '#fff', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                                    {project.title}
                                </p>
                                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginTop: '0.3rem' }}>
                                    {project.para?.substring(0, 60)}...
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 mx-auto w-[90%]'>
                            <p className='font-[600] text-[var(--color-maintext)] text-2xl max-md:text-xl'>{project.title}</p>
                            <p className=' text-sm text-[var(--color-sidetext)] mt-[-10px] max-md:text-xs'>{project.para}</p>
                            <span>
                                <button className='bg-[var(--color-lightgray)] text-[var(--color-maintext)] rounded-2xl px-6 py-3 h-full font-[500] text-md max-md:text-sm border-[var(--color-gray)] border-[0.2px] hover:shadow-lg hover:scale-101 transition-all ease-in-out duration-120'>
                                    <a href={project.link} target="_blank">View Project &gt;</a>
                                </button>
                            </span>
                        </div>

                    </motion.div>
                ))}

            </div>
        </>
    )
}

export default ProjectsSection