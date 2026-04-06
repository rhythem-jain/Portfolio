import { BadgeCheckIcon } from "lucide-react"
import { Badge } from "./ui/badge"
import { motion } from "motion/react"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { type: "spring", stiffness: 350, damping: 25 } 
    }
}

const MotionBadgeWrap = ({ children }) => (
    <motion.div variants={itemVariants}>
        {children}
    </motion.div>
)

export default function TechSection() {
    return (
        <div className="flex flex-col items-center gap-2 ">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex w-full flex-wrap gap-3"
            >
                <MotionBadgeWrap>
                    <Badge>
                        <BadgeCheckIcon color="var(--color-maintext)" />
                        Languages
                    </Badge>
                </MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Python</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">TypeScript</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">JavaScript</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">C / C++</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Rust</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">SQL</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Bash</Badge></MotionBadgeWrap>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex w-full flex-wrap gap-2 mt-4"
            >
                <MotionBadgeWrap><Badge>AI / ML</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Gemini API</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">OpenAI API</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">scikit-learn</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">TensorFlow</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">PyTorch</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Pandas</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">NumPy</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Prompt Engineering</Badge></MotionBadgeWrap>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex w-full flex-wrap gap-2 mt-4"
            >
                <MotionBadgeWrap><Badge>Web & Frameworks</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Next.js</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">React</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">FastAPI</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Flask</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Django</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Node.js</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">REST APIs</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Tailwind CSS</Badge></MotionBadgeWrap>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex w-full flex-wrap gap-2 mt-4"
            >
                <MotionBadgeWrap><Badge>Cloud & DevOps</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Microsoft Azure</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">AWS</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Google Cloud</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Docker</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Vercel</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">GitHub Actions</Badge></MotionBadgeWrap>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex w-full flex-wrap gap-2 mt-4"
            >
                <MotionBadgeWrap><Badge>Databases</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">PostgreSQL</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">MySQL</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">SQLite</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">MongoDB</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Supabase</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Redis</Badge></MotionBadgeWrap>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex w-full flex-wrap gap-2 mt-4"
            >
                <MotionBadgeWrap><Badge>Hardware & Other</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Arduino</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Raspberry Pi</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">ROS</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">MATLAB</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Simulink</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Solidity</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Web3</Badge></MotionBadgeWrap>
            </motion.div>
        </div>
    )
}
