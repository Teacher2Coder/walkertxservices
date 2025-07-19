import { Link } from 'react-router-dom';
import { PhoneOutgoing, Mail, Send } from 'lucide-react';
import handleSmoothScroll from '../utils/handleSmoothScroll';
import '../styles/footer.css';

const Footer = () => {
  
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/equipment", label: "Our Equipment" },
    { path: "/contact", label: "Contact Us" },
  ]
  
  return (
    <footer className="bg-primary-600 border-t border-gray-200 dark:border-accent-700">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
          <img
              src="/wts-white.svg"
              alt="Walker Texas Services"
              className="footer-logo"
            />
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4 sansation-regular">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-white hover:text-white transition-colors duration-300 sansation-regular"
                  onClick={() => handleSmoothScroll()}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4 sansation-regular">
              Connect With us!
            </h4>
            <div className="contact-icons">
              <div className="flex flex-row items-center">
                <span className="text-sm mb-1 text-white">Call us now!</span>
                <Link
                  className="p-1 bg-white rounded-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center contact-icon"
                  to="tel:+18175678900"
                  onClick={() => handleSmoothScroll()}
                  aria-label="Call us"
                >
                  <PhoneOutgoing className="w-5 h-5 text-primary-500" />
                </Link>
              </div>
              <div className="flex flex-row items-center">
                <span className="text-sm mb-1 text-white">Email us!</span>
                <Link
                  className="p-1 bg-white rounded-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center contact-icon"
                  to="mailto:ethan.owens4@gmail.com"
                  onClick={() => handleSmoothScroll()}
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5 text-primary-500" />
                </Link>
              </div>
              <div className="flex flex-row items-center">
                <span className="text-sm mb-1 text-white">Send us a message!</span>
                <Link
                  className="p-1 bg-white rounded-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center contact-icon"
                  to="/contact"
                  onClick={() => handleSmoothScroll()}
                  aria-label="Contact form"
                >
                  <Send className="w-5 h-5 text-primary-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4 md:mb-0 sansation-regular">
              © {new Date().getFullYear()} Walker Texas Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
