import React from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Linkedin,
  Facebook,
  MapPin,
  Mail,
  Phone
} from "lucide-react";

export function Footer() {
  const linkStyle =
    "relative text-slate-400 hover:text-white transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">


          <div>
            <img src="/logo.png" alt="ToucheBouche" className="h-32 w-auto object-contain mb-4" />

            <p className="text-slate-400 mb-6">
              Empowering businesses with scalable, reliable,
              and enterprise-grade software solutions.
            </p>


            <div className="flex space-x-4">

              <a href="https://www.linkedin.com/company/touchebouche-software-solutions" target="_" className="group p-2 rounded-full bg-slate-900 hover:bg-[#0A66C2]/20 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:drop-shadow-[0_0_6px_#0A66C2]" />
              </a>

              <a href="#" className="group p-2 rounded-full bg-slate-900 hover:bg-[#1DA1F2]/20 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5 text-[#1DA1F2] group-hover:drop-shadow-[0_0_6px_#1DA1F2]" />
              </a>

              <a href="https://www.facebook.com/SoftwareDevelopCompany/" target="_" className="group p-2 rounded-full bg-slate-900 hover:bg-[#1877F2]/20 transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5 text-[#1877F2] group-hover:drop-shadow-[0_0_6px_#1877F2]" />
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-4">
              <li><Link to="/" className={linkStyle}>Home</Link></li>
              <li><Link to="/about" className={linkStyle}>About Us</Link></li>
              <li><Link to="/services" className={linkStyle}>Services</Link></li>
              <li><Link to="/technologies" className={linkStyle}>Technologies</Link></li>
              <li><Link to="/portfolio" className={linkStyle}>Portfolio</Link></li>
              <li><Link to="/contact" className={linkStyle}>Contact</Link></li>
            </ul>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>

            <ul className="space-y-4">
              {[
                "Custom Software",
                "Web Development",
                "CRM Integration",
                "Cloud Deployment",
                "API Integration",
                "Workflow Automation"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className={linkStyle}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>

            <ul className="space-y-5 text-slate-400">

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <span>

                  Floor-1, Orient Compound, <br />
                  150 Feet Rd, New Chungi,<br />
                  Jajmau, Kanpur, Uttar Pradesh 208010
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@touchebouche.com" className="hover:text-white transition-colors duration-300">
                  info@touchebouche.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+919140637843" className="hover:text-white transition-colors duration-300">
                  +91 9140637843
                </a>
              </li>

            </ul>
          </div>

        </div>


        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} ToucheBouche Software Solutions.
            All rights reserved.
          </p>

          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a></a>
            <a href="#" className={linkStyle}>Privacy Policy</a>
            <a href="#" className={linkStyle}>Terms of Service</a>
          </div> */}

        </div>
      </div>
    </footer>
  );
}