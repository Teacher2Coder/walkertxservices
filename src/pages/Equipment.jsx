import { motion } from "framer-motion";
import Hero from "../components/shared/Hero";

const Equipment = () => {
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
    title: "Our Equipment",
    description: "Transform your house into the home of your dreams with our comprehensive residential construction services.",
    subTitle: "Choose us for whole-home, kitchen or bathroom remodeling services.",
    subTitle2: "We turn unappealing houses in the DFW area and beyond into dream homes.",
    subDescription: "Is your kitchen, bathroom or another area of your house outdated? Maybe it has an awkward layout or just isn’t your style. At TRYCON ENTERPRISES, our goal is to turn your house into a home that fits your lifestyle. We offer a wide range of residential services — from home additions to bathroom remodeling — in the Dallas-Fort Worth area.",
    subDescription2: "We’re here to provide you with an easy experience. Count on us to stay within your budget and finish remodeling your kitchen, bathroom or other space in a timely manner with as little disruption to your life as possible.",
    offeringTitle: "If you want it, we can deliver it.",
    offeringImage: "/services/sink.webp",
    imageAlt: "Sink",
    offeringDescription: "Let us help you refresh or improve your favorite spaces. We offer:",
    offerings: [
      "Home Additions",
      "Kitchen Remodeling",
      "Bathroom Remodeling",
      "Deck and dock construction",
      "Outdoor kitchen and living space remodeling",
      "Office, living room, and bedroom remodeling",
    ],
    callToAction: "Are you ready to see how we can turn your project into a reality?",
    callToAction2: "Schedule a free consultation with us today!",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col"
    >
      <Hero itemVariants={itemVariants} pageData={pageData} />
    </motion.div>
  );
};

export default Equipment;