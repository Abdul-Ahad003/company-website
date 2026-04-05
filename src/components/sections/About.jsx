import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {

  const expertise = [
    ".NET Development",
    "Web Application Development",
    "API & System Integration",
    "CRM Development",
    "Azure Cloud Deployment",
    "Enterprise Software Solutions"
  ];

  return (
    <SectionWrapper id="about" className="bg-white relative overflow-hidden" >

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden shadow-xl mb-12 md:mb-20"
      >

        <div
          className="w-full h-[320px] sm:h-[400px] md:h-[520px] bg-cover bg-center"
          style={{ backgroundImage: "url('/aboutsoftware.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl px-6 sm:px-10 md:px-16">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Building Modern
              <span className="text-primary-400"> Software Solutions</span>
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              ToucheBouche Software Solutions helps organizations build
              scalable digital platforms, enterprise systems and cloud
              solutions that enable innovation, efficiency and long-term
              business growth.
            </p>

          </div>
        </div>

      </motion.div>



      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >


          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-5 border border-primary-100">
            Our Expertise
          </div>


          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
            Delivering
            <span className="bg-gradient-to-tr from-blue-500 to-indigo-500 bg-clip-text text-transparent">  Scalable Technology</span>
            <br />
            Solutions for Modern Businesses
          </h3>


          <div className="w-16 h-1 bg-gradient-to-tr from-blue-600 to-indigo-300 rounded-full mb-6" />

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            We design and develop powerful software platforms that help
            organizations streamline operations, automate workflows and
            improve productivity through intelligent digital systems.
          </p>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10">
            Our engineers combine deep technical expertise with modern
            development practices to build secure, scalable and
            high-performance enterprise solutions tailored for real
            business challenges.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-5">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-3 group transition-all duration-300"
              >
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-primary-500 group-hover:text-primary-600 transition-colors duration-300" />
                </div>
                <span className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed tracking-[0.2px] group-hover:text-slate-900 transition-colors duration-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <div className="rounded-2xl overflow-hidden">
            <img
              src="about.png"
              alt="Digital technology infrastructure"
              className="w-full h-[420px] object-cover hidden lg:block"
            />
          </div>

        </motion.div>

      </div>

    </SectionWrapper>
  );
}