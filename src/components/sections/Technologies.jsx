import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { motion } from "framer-motion";

const TechIcon = ({ name, icon }) => (
  <div className="relative group w-full">

    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-indigo-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

    <div className="relative flex flex-col items-center justify-center 
      p-4 sm:p-5 md:p-6 
      bg-white/70 backdrop-blur 
      border border-slate-200 rounded-2xl 
      shadow-sm hover:shadow-lg 
      hover:-translate-y-1 sm:hover:-translate-y-2 
      transition-all duration-300">

      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
        flex items-center justify-center 
        rounded-xl bg-slate-50 
        group-hover:bg-primary-50 
        transition-all duration-300 mb-3 sm:mb-4">

        <img
          src={icon}
          alt={name}
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
          object-contain 
          group-hover:scale-110 
          transition-transform duration-300"
        />
      </div>

      <span className="text-slate-800 font-medium 
        text-xs sm:text-sm md:text-base 
        text-center 
        group-hover:text-primary-700 
        transition-colors">
        {name}
      </span>

    </div>
  </div>
);

const technologies = [
  { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "ASP.NET Core", icon: "https://raw.githubusercontent.com/campusMVP/dotnetCoreLogoPack/master/ASP.NET%20Core/Bitmap%20RGB/Bitmap-BIG_ASP.NET-Core-Logo_2colors_Square_Boxed_RGB.png" },
  { name: "Windows Forms", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" },
  { name: ".NET MAUI", icon: "https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/dotnet/icon.svg" },
  { name: "Exact Synergy", icon: "https://cdn.brandfetch.io/idYUdCCB5z/w/820/h/174/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "Salesforce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
  { name: "HubSpot", icon: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
  { name: "REST API", icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" },
  { name: "Blazor", icon: "https://static.cdnlogo.com/logos/b/67/blazor.svg" }
];

export function Technologies() {
  return (
    <SectionWrapper id="technologies" className="bg-white relative overflow-hidden">

      
      <div className="absolute top-10 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        
        <div className="text-center mb-10 sm:mb-14 md:mb-16">

          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full 
            bg-primary-50 text-primary-600 
            text-xs sm:text-sm font-medium 
            border border-primary-100 mb-4 sm:mb-6">
            Technology Stack
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl 
            font-bold text-slate-900 
            mb-4 sm:mb-6 tracking-tight leading-tight">
            Technologies Powering
            <span className="block sm:inline bg-gradient-to-tr from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}Our Solutions
            </span>
          </h2>

          <p className="text-base md:text-lg 
            text-slate-600 max-w-xl md:max-w-2xl mx-auto">
            We leverage modern enterprise technologies and cloud platforms
            to build secure, scalable and high-performance applications.
          </p>

        </div>

        <div className="grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-4 sm:gap-6 md:gap-7 
          max-w-6xl mx-auto">

          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <TechIcon name={tech.name} icon={tech.icon} />
            </motion.div>
          ))}

        </div>
      </div>

    </SectionWrapper>
  );
}