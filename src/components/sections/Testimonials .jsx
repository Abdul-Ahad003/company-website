import { useState, useEffect } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Stephen Smith",
    role: "General Manager, Brookville Lime",
    feedback:
      "From planning to deployment, everything was seamless. Their technical expertise is truly remarkable.",
  },
  {
    name: "Alisa Svider ",
    role: "Staff Director, Private Label Manufacturers Association",
    feedback:
      "Their team delivered a highly scalable platform that transformed our operations. Exceptional quality and professionalism.",
  },
  {
    name: "Jeremy Jestin",
    role: "Senior Manager, Whalen Furniture",
    feedback:
      "They understood our vision perfectly and built a product that exceeded expectations. Highly recommended!",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="testimonials" className="bg-white relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4">
      
      <div className="absolute top-10 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium border border-primary-100 mb-6">
            Client Feedback
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 md:mb-12 tracking-tight">
            What Our{" "}
            <span className="bg-gradient-to-tr from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <div className="relative max-w-xl mx-auto lg:mx-0">
            <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-white/20 to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex justify-center lg:justify-start gap-1 mb-4 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                      “{testimonials[index].feedback}”
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                          {testimonials[index].name}
                        </h4>
                        <p className="text-slate-500 text-xs sm:text-sm">
                          {testimonials[index].role}
                        </p>
                      </div>
                      <img src="./client.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-primary-600"
                    : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        
        <div className="hidden lg:flex relative justify-end">
          <motion.img
            src="/feedback.png"
            alt="Testimonials Illustration"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md drop-shadow-2xl"
          />

          <div className="absolute w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        </div>
      </div>
    </SectionWrapper>
  );
}