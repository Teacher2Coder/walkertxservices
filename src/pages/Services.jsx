import { motion } from "framer-motion";
import Hero from "../components/shared/Hero";
import CardList from "../components/shared/CardList";

const Services = () => {
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

      <div
        style={{
          backgroundImage: "url('/geopattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
        }}
      >
      </div>

      <CardList itemVariants={itemVariants} pageData={pageData} />
    </motion.div>
  );
};

export default Services;