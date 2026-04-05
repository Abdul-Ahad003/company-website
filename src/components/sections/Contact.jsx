import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-slate-50 relative overflow-hidden px-4 sm:px-6 lg:px-16 py-16 sm:py-20">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block py-1.5 px-4 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6 border border-primary-100 relative z-10">
            Get In Touch
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-snug sm:leading-tight relative z-10">
            Ready to Transform{' '}
            <span className="block sm:inline bg-gradient-to-tr from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mb-10 font-light leading-relaxed">
            Let's discuss your project requirements. Our enterprise solutions team is ready to
            provide a comprehensive technical assessment.
          </p>

          <div className="space-y-6 sm:space-y-8">
            
            <div className="flex items-start space-x-3 sm:space-x-4 group">
              <div className="p-3 sm:p-4 bg-slate-50 rounded-lg text-primary-600 group-hover:bg-primary-50 transition-colors border border-slate-100 group-hover:border-primary-100 flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  Global Headquarters
                </h4>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-snug">
                  Floor-1, Orient Compound<br />
                  150 Feet Rd, New Chungi,<br />
                  Jajmau, Kanpur, Uttar Pradesh 208010
                </p>
              </div>
            </div>

            
            <div className="flex items-start space-x-3 sm:space-x-4 group">
              <div className="p-3 sm:p-4 bg-slate-50 rounded-lg text-primary-600 group-hover:bg-primary-50 transition-colors border border-slate-100 group-hover:border-primary-100 flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">Call Us Directly</h4>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-snug">
                  +91 9140637843<br />Mon-Fri from 10am to 6pm IST
                </p>
              </div>
            </div>

            
            <div className="flex items-start space-x-3 sm:space-x-4 group">
              <div className="p-3 sm:p-4 bg-slate-50 rounded-lg text-primary-600 group-hover:bg-primary-50 transition-colors border border-slate-100 group-hover:border-primary-100 flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">Send an Email</h4>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-snug">
                  info@touchebouche.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 glass-panel p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary-200/30 rounded-full blur-3xl" />
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 relative z-10">
            Request a Consultation
          </h3>

          <form className="space-y-4 sm:space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all shadow-sm text-sm sm:text-base"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all shadow-sm text-sm sm:text-base"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all shadow-sm text-sm sm:text-base"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">Project Details</label>
              <textarea
                rows="4"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none shadow-sm text-sm sm:text-base"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-12 sm:h-14 text-base sm:text-lg bg-primary-600 hover:bg-primary-700 border-none shadow-md shadow-primary-500/20"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}