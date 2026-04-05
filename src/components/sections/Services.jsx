import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import {
  Code,
  AppWindow,
  Monitor,
  Webhook,
  TerminalSquare,
  Cog,
  Network,
  Users,
  Cloud,
} from "lucide-react";
import { Link } from "react-router-dom";


const services = [
  {
    icon: Code,
    title: "Custom Software Solutions",
    description:
      "Tailored software built to solve your unique business challenges.",
    color: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    icon: AppWindow,
    title: "Web Application Development",
    description:
      "Responsive, high-performance web applications built with modern frontend and backend technologies.",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Monitor,
    title: "Desktop Application Development",
    description:
      "Robust desktop applications targeting Windows, macOS, or cross-platform.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Webhook,
    title: "API Integration",
    description:
      "Seamlessly connect systems and enable data flow across your business ecosystem.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: TerminalSquare,
    title: ".NET Development",
    description:
      "Enterprise-grade backend solutions leveraging Microsoft .NET framework.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Cog,
    title: "Automation & Workflow Optimization",
    description:
      "Optimize productivity by automating repetitive tasks and workflows.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Network,
    title: "Third-party System Integration",
    description:
      "Integrate ERPs, payment gateways, and other critical systems.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Users,
    title: "CRM Development & Integration",
    description:
      "Custom CRM tools or integration with platforms like Salesforce and Dynamics.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Cloud,
    title: "Azure Cloud Deployment & Setup",
    description:
      "Secure, scalable cloud architecture and deployment services on Azure.",
    color: "bg-cyan-100 text-cyan-600",
  },
];


function ServiceCard({ icon: Icon, title, description, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white border border-slate-200 rounded-xl md:rounded-2xl shadow-sm p-5 md:p-6 flex flex-col items-start transition-all hover:shadow-lg"
    >
      <div
        className={`p-3 md:p-4 rounded-full mb-3 md:mb-4 ${color} inline-flex`}
      >
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
      </div>

      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
        {title}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}


export function Services() {
  return (
    <SectionWrapper id="services" className="bg-white relative overflow-hidden py-12 md:py-20">

      <div className="absolute top-10 left-0 w-60 h-60 md:w-[500px] md:h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 md:w-[600px] md:h-[600px] bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 md:mb-20 px-4">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs md:text-sm font-medium border border-primary-100 mb-4 md:mb-6">
          Our Services
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6  tracking-tight leading-tight">
          Our Enterprise{" "}
          <span className="bg-gradient-to-tr from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Services
          </span>
        </h2>

        <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
          Comprehensive software development services to modernize your
          infrastructure and accelerate your business.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 px-4 md:px-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="relative z-10 text-center mt-12 md:mt-20 px-4">
        <Link
          to="/contact"
          className="inline-block w-full sm:w-auto text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          Start A Project
        </Link>
      </div>
    </SectionWrapper>
  );
}