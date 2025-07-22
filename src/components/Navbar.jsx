import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GiTexas } from "react-icons/gi";
import handleSmoothScroll from "../utils/handleSmoothScroll";

import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const scrollToTop = () => {
      if (window.innerWidth <= 768) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } else {
        handleSmoothScroll();
      }
    };
    setTimeout(scrollToTop, 50);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/equipment", label: "Our Equipment" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-primary-600 backdrop-blur-lg border-b border-primary-500/30 shadow-md md:shadow-xl" 
          : "bg-primary-600/95 backdrop-blur-md border-b border-primary-500/20 shadow-sm md:shadow-lg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex space-x-3 group"
          >
              <GiTexas className="text-2xl md:text-3xl text-accent-500" />
              <h1 
                className="text-2xl md:text-lg text-accent-500 font-bold sansation-regular"
              >Walker Texas Services</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 sansation-regular ${
                  location.pathname === item.path
                    ? "text-white bg-primary-900/30 backdrop-blur-sm"
                    : "text-white hover:text-white hover:bg-primary-900/30"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-3 right-3 h-0.5 bg-accent-500 rounded-full"
                    layoutId="activeTab"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-primary-900/30 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-primary-500/95 backdrop-blur-md border-t border-primary-500/20 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2 px-4 sm:px-6 lg:px-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 mobile-menu-item ${
                        location.pathname === item.path
                          ? "bg-primary-900/30 text-white backdrop-blur-sm"
                          : "text-white hover:text-white hover:bg-primary-900/30"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
