import { motion } from "framer-motion";
import { usePageSEO } from '../utils/usePageTitle';
import Hero from "../components/shared/Hero";
import CardList from "../components/shared/CardList";

const Services = () => {
  
  usePageSEO({
    title: 'Our Services - Walker Texas Services',
    description: 'Professional services in Round Rock, TX: Land clearing with track loader, dump trailer services, fencing installation/repair, hauling services. Free estimates available.',
    ogTitle: 'Our Services - Walker Texas Services',
    ogDescription: 'Professional services in Round Rock, TX: Land clearing with track loader, dump trailer services, fencing installation/repair, hauling services. Free estimates available.',
    twitterTitle: 'Our Services - Walker Texas Services',
    twitterDescription: 'Professional services in Round Rock, TX: Land clearing with track loader, dump trailer services, fencing installation/repair, hauling services. Free estimates available.'
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const pageData = {
    title: "Our Services",
    description: "Dependable Work, Honest Prices, Family Values\nDeep in the Heart of Texas",
    introTitle: "Service over everything",
    image: "/skidsteer-shovel.webp",
    imageAlt: "Skidsteer",
    cardTitle: "Our Services",
    items: [
      "Land Clearing",
      "Fencing Repair",
      "Fencing Removal",
      "Fencing Installation",
      "Raised Garden Beds",
      "Dump Trailer Services",
      "And much, much more!"
    ],
    callToAction: "Are you ready to see how we can turn your project into a reality?",
    callToAction2: "Schedule a free estimate with us today!",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col"
    >
      <Hero itemVariants={itemVariants} pageData={pageData} />
      <CardList itemVariants={itemVariants} pageData={pageData} />
    </motion.div>
  );
};

export default Services;