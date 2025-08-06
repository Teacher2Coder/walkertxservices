import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import usePageTitle from '../utils/usePageTitle';
import Hero from "../components/shared/Hero";
import CardList from "../components/shared/CardList";

const Services = () => {
  
  usePageTitle('Our Services - Walker Texas Services');
  
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
      <Helmet>
        <title>Our Services - Walker Texas Services</title>
        <meta name="description" content="Professional construction services in Round Rock, TX: Land clearing with track loader, dump trailer services, fencing installation/repair, hauling services. Free estimates available." />
        <meta property="og:title" content="Our Services - Walker Texas Services | Land Clearing, Fencing & Dump Trailer" />
        <meta property="og:description" content="Professional construction services in Round Rock, TX: Land clearing with track loader, dump trailer services, fencing installation/repair, hauling services. Free estimates available." />
        <meta property="twitter:title" content="Our Services - Walker Texas Services | Land Clearing, Fencing & Dump Trailer" />
        <meta property="twitter:description" content="Professional construction services in Round Rock, TX: Land clearing with track loader, dump trailer services, fencing installation/repair, hauling services. Free estimates available." />
      </Helmet>
      <Hero itemVariants={itemVariants} pageData={pageData} />
      <CardList itemVariants={itemVariants} pageData={pageData} />
    </motion.div>
  );
};

export default Services;