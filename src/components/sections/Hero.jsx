import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-10 sm:pt-28 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.jpeg"
                    alt="Software Development Workspace"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-slate-900/85"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                >
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center py-1 px-3 sm:px-4 rounded-full 
                        bg-slate-800/50 backdrop-blur-md 
                        text-primary-300 text-xs sm:text-sm 
                        font-semibold mb-6 sm:mb-8 
                        border border-white/10"
                    >
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary-400" />
                        Powering the digital future
                    </motion.div>

                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl 
                        font-bold text-white tracking-tight 
                        leading-tight mb-5 sm:mb-6">
                        Accelerate Your <br className="hidden sm:block" />
                        <span className="bg-gradient-to-tr from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                            Digital Transformation
                        </span>
                    </h1>

                    
                    <p className="text-base md:text-lg lg:text-xl 
                        text-slate-300 mb-14 sm:mb-10 
                        leading-relaxed font-light max-w-xl sm:max-w-2xl">
                        ToucheBouche Software Solutions delivers scalable, secure,
                        and high-performance solutions tailored to streamline
                        operations and enhance productivity.
                    </p>

                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row 
                        gap-4 sm:gap-6 w-full sm:w-auto"
                    >
                        <Link to="/contact" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-1/2 sm:w-auto 
                                text-base sm:text-lg 
                                h-12 sm:h-14 
                                px-6 sm:px-8 
                                bg-primary-600 hover:bg-primary-700  
                                rounded-[2rem] border-none 
                                shadow-md shadow-primary-500/25 group"
                            >
                                Contact Us
                                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>

                        {/* 
                        <Link to="/services" className="w-full sm:w-auto">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="w-full sm:w-auto 
                                text-base sm:text-lg 
                                h-12 sm:h-14 px-6 sm:px-8 
                                text-white border-white/20 
                                hover:bg-white/10 backdrop-blur-sm">
                                Explore Specialties
                            </Button>
                        </Link> 
                        */}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}