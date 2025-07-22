import { motion } from 'framer-motion';
import Transition from "./Transitions";

const Hero = () => {
  return (
    <section className="relative hero-section flex justify-center items-center overflow-hidden">
      <Transition />
      
      {/* Logo in top right corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6 lg:top-8 lg:right-8"
      >
        <img 
          src="/wts-dark.svg" 
          alt="Walker TX Services Logo" 
          className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex justify-center items-center px-4 sm:px-6 lg:px-8"
      >
      </motion.div>
    </section>
  );
};

export default Hero;