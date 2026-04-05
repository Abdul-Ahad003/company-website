import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function SectionWrapper({
    children,
    id,
    className,
    containerClassName
}) {
    return (
        <section
            id={id}
            className={cn("py-12 md:py-20 overflow-hidden", className)}
        >
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        }
                    }
                }}
                className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full", containerClassName)}
            >
                {children}
            </motion.div>
        </section>
    );
}
