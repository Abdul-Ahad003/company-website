import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import { ClipboardList, Route, Code2, Beaker, Rocket, Wrench } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Requirement Analysis", desc: "Understanding your business needs and defining the optimal technical approach." },
  { icon: Route, title: "Architecture & Planning", desc: "Designing scalable and secure system architecture for long-term success." },
  { icon: Code2, title: "Development", desc: "Agile development cycles focused on performance, quality and speed." },
  { icon: Beaker, title: "Testing", desc: "Comprehensive QA including automated and manual testing." },
  { icon: Rocket, title: "Deployment", desc: "Smooth CI/CD deployment pipelines ensuring reliable releases." },
  { icon: Wrench, title: "Maintenance", desc: "Continuous monitoring, support and system improvements." }
];

export function Process() {
  return (
    <SectionWrapper id="process" className="bg-white relative overflow-hidden">

      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-30 right-0 w-[600px] h-[400px] bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium border border-primary-100 mb-6">
            Our Process
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            How We Build
            <span className="bg-gradient-to-tr from-blue-500 to-indigo-500 bg-clip-text text-transparent"> Reliable Software</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 max-w-xl md:max-w-2xl mx-auto">
            A streamlined development workflow that ensures quality,
            transparency and successful project delivery.
          </p>

        </div>



        <div className="relative max-w-7xl mx-auto">

          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-primary-100" />

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">

                  <step.icon className="w-6 h-6" />

                </div>

                <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                  <div className="text-primary-600 font-semibold text-sm mb-2">
                    Step {index + 1}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h4>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {/* {step.desc} */}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>

    </SectionWrapper>
  );
}