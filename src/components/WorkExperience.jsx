import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Code2, Brain, Award } from 'lucide-react'

const WorkExperience = ({ experience }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const hackathons = [
        {
            time_period: "Mar 2026",
            role: "Intelli-Credit — AI B2B Credit Underwriting Platform",
            event: "IIT Hyderabad Hackathon",
            icon: "🏆",
            color: "#4f46e5"
        },
        {
            time_period: "Feb–Mar 2026",
            role: "Honeypot API — Threat Intelligence Platform",
            event: "HCL GUVI India AI Buildathon · 40,000+ participants",
            icon: "🛡️",
            color: "#059669"
        },
        {
            time_period: "Mar 2026",
            role: "AadhaarIQ — Aadhaar Equity Intelligence Platform",
            event: "UIDAI Data Hackathon 2026 · Team Leader · Team UIDAI_6127",
            icon: "📊",
            color: "#0284c7"
        }
    ];

    const certifications = [
        { name: "Intro to Model Context Protocol", issuer: "Anthropic", date: "Mar 2026", icon: "🤖" },
        { name: "Prompt Engineering & Programming with OpenAI", issuer: "Columbia+", date: "Mar 2026", icon: "🧠" },
        { name: "AI Fluency + Claude 101", issuer: "Anthropic", date: "Jan 2026", icon: "🎓" },
        { name: "Gemini Certified University Student", issuer: "Google", date: "Jan 2026–2029", icon: "☁️" },
        { name: "Complete Python Bootcamp + C & C++", issuer: "Udemy", date: "Dec 2025", icon: "🐍" },
        { name: "Introduction to MATLAB & Simulink", issuer: "NIELIT", date: "Jan 2026", icon: "📐" },
    ];

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className='font-[500] text-3xl max-md:text-2xl mb-8 mt-8 text-[var(--color-maintext)]'>Hackathons & Competitions</h2>

                <div className='flex flex-col gap-4'>
                    {hackathons.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className='flex justify-content items-start gap-4 p-4 rounded-2xl border border-[var(--color-gray)] bg-[var(--color-projectcardbg)]'
                        >
                            <div style={{ fontSize: '1.5rem', minWidth: '2rem', textAlign: 'center' }}>{h.icon}</div>
                            <div className='flex flex-col gap-1'>
                                <p className='font-[600] text-sm text-[var(--color-maintext)]'>{h.role}</p>
                                <p className='text-xs text-[var(--color-sidetext)]'>{h.event}</p>
                                <p className='text-xs opacity-50 text-[var(--color-maintext)]'>{h.time_period}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <h2 className='font-[500] text-3xl max-md:text-2xl mb-6 mt-10 text-[var(--color-maintext)]'>Certifications</h2>

                <div className='flex flex-col gap-3'>
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className='flex md:items-center w-[100%] max-md:flex-col gap-2'
                        >
                            <p className='w-[30%] max-md:w-[100%] font-[450] max-md:text-sm text-sm opacity-40 text-[var(--color-maintext)]'>{cert.issuer} · {cert.date}</p>
                            <div className='flex items-center gap-2'>
                                <span style={{ fontSize: '1rem' }}>{cert.icon}</span>
                                <p className='font-[500] max-md:text-sm text-md text-[var(--color-maintext)]'>{cert.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </motion.div>

        </>
    )
}

export default WorkExperience