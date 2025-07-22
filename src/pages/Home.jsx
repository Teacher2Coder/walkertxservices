import { motion } from 'framer-motion'
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Motto from '../components/shared/Motto';

import '../styles/home.css';

const Home = () => {

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      delay: 0.3,
    },
  }
};

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className='min-h-screen pt-20'>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          variants={itemVariants}
        >
          <Hero />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Motto itemVariants={itemVariants} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Services itemVariants={itemVariants} />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Home;
