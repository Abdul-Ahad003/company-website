import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Quarry Management System",
    category: "Enterprise System",
    description:
      "A comprehensive solution for managing quarry operations, including material extraction, inventory tracking, dispatch management, and reporting.",
    image:
      "/quarry.webp",
    tech: [
      { name: "ASP.NET Core", icon: "https://raw.githubusercontent.com/campusMVP/dotnetCoreLogoPack/master/ASP.NET%20Core/Bitmap%20RGB/Bitmap-BIG_ASP.NET-Core-Logo_2colors_Square_Boxed_RGB.png" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Blazor", icon: "https://static.cdnlogo.com/logos/b/67/blazor.svg" },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    ],
  },
  {
    title: "Cvent–Exact Synergy Data Sync Application",
    category: "Windows Application",
    description:
      "A Windows-based integration tool that automates the transfer of event data from Cvent into Exact Synergy, reducing manual effort and ensuring data accuracy.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
    tech: [
      { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "WinForms", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" },
      { name: "Exact Synergy", icon: "https://cdn.brandfetch.io/idYUdCCB5z/w/820/h/174/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" },,
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    ],
  },
  {
    title: "Marketing Automation Integration",
    category: "API Integration",
    description:
      "An Integration connects your business systems with marketing tools to automate campaigns, streamline lead nurturing, and deliver personalized customer experiences across channels..",
    image:
      "/marketing.jpg",
    tech: [
      { name: "HubSpot", icon: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
      { name: "REST API", icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
  },
];

export function Portfolio() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <SectionWrapper id="portfolio" className="bg-white md:pt-20 pt-12 pb-32 relative overflow-hidden">
      
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium border border-primary-100 mb-6">
          Portfolio
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl  font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight">
          Our Recent
          <span className="bg-gradient-to-tr from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            {" "}Projects
          </span>
        </h2>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A glimpse into the impactful solutions we've delivered across industries.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur border border-slate-200 rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="relative h-56 overflow-hidden group">
              <img
                src={projects[index].image}
                alt={projects[index].title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            </div>

            <div className="p-8 text-center">
              <div className="text-primary-600 font-semibold text-xs mb-3 uppercase tracking-wider">
                {projects[index].category}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {projects[index].title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {projects[index].description}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {projects[index].tech.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full hover:shadow-md transition"
                  >
                    <img src={t.icon} alt={t.name} className="w-4 h-4" />
                    <span className="text-xs text-slate-700 font-medium">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary-600" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
      </div>
    </SectionWrapper>
  );
}