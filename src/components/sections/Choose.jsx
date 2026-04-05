import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ShieldCheck, Rocket, Users, Clock } from "lucide-react";

const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered", gradient: "from-blue-500 to-indigo-500" },
  { value: 50, suffix: "+", label: "Enterprise Clients", gradient: "from-teal-400 to-blue-500" },
  { value: 10, suffix: "+", label: "Years Experience", gradient: "from-purple-500 to-pink-500" },
  { value: 99, suffix: "%", label: "Client Satisfaction", gradient: "from-green-400 to-teal-500" }
];

const reasons = [
  {
    icon: Rocket,
    title: "High Performance Solutions",
    description: "We build scalable, secure and high-performance systems using modern architecture and best engineering practices."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade Security",
    description: "Security-first development with industry standard practices ensuring safe and reliable applications."
  },
  {
    icon: Users,
    title: "Client Focused Development",
    description: "Your business goals guide our development process ensuring software that truly solves real problems."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Agile workflows and experienced engineers allow us to deliver projects efficiently without compromising quality."
  }
];

export function Choose() {
  return (
    <SectionWrapper id="why-us" className="bg-white relative overflow-hidden py-12 md:py-24">

      
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium border border-primary-100 mb-6">
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Why Businesses
            <span className="bg-gradient-to-tr from-blue-500 to-indigo-500 bg-clip-text text-transparent"> Trust Us</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-xl md:max-w-2xl mx-auto">
            We combine deep technical expertise with strategic thinking to deliver reliable software solutions that drive business growth.
          </p>
        </div>

        
        <div className="grid lg:grid-cols-2 gap-16 items-center h-full">

  

          
          <div className="grid sm:grid-cols-2 gap-8">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="p-6 border border-slate-200 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          
          <motion.img
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="/chooseus.png"
            alt="Global Connections Map"
            className="rounded-3xl w-full h-full object-cover"
          />
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:mt-28 sm:mt-24 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`rounded-3xl md:p-8 p-6 text-white bg-gradient-to-br ${stat.gradient} shadow-2xl hover:scale-105 transition-transform`}
            >
              <div className="text-2xl sm:text-3xl md:text-5xl  font-bold mb-2">
                <CountUp end={stat.value} duration={2.5} enableScrollSpy />
                {stat.suffix}
              </div>
              <p className="text-white/90 sm:text-sm text-[13px] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}