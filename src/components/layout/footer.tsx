import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="text-2xl font-bold flex items-center mb-4">
              <span className="text-white">Nova</span>
              <span className="gradient-heading">AI</span>
            </a>
            <p className="text-white/70 mb-4">
              Next-generation AI solutions for modern businesses. Transform your
              operations with cutting-edge artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/60 hover:text-nova-cyan transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-nova-cyan transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-nova-cyan transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-nova-cyan transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-nova-cyan transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  AI Assistants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  Analytics Suite
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  Business Intelligence
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  Enterprise Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-nova-cyan transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NovaAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white/60 hover:text-nova-cyan transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-nova-cyan transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-nova-cyan transition-colors text-sm"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
