import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon, isHighlighted }: IBenefitBullet) => {
    return (
        <motion.div
            className={`flex flex-col items-center mt-8 gap-3 lg:gap-5 lg:flex-row lg:items-center ${isHighlighted ? 'bg-amber-50/50 border border-amber-200 p-4 rounded-xl shadow-sm' : ''}`}
            variants={childVariants}
        >
            <div className={`flex justify-center mx-auto lg:mx-0 flex-shrink-0 w-fit ${isHighlighted ? 'text-amber-600' : ''}`}>
                {icon}
            </div>
            <div>
                <h4 className={`text-lg font-semibold ${isHighlighted ? 'text-amber-900' : ''}`}>
                    {title}
                </h4>
                <p className={`text-base ${isHighlighted ? 'text-amber-800/80' : 'text-foreground-accent'}`}>
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet