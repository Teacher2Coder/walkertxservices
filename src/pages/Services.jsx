import { motion } from "framer-motion";
import Hero from "../components/shared/Hero";
import IntroContent from "../components/shared/IntroContent";
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
    description: "No matter the job, we will get it done.",
    introTitle: "Service over everything",
    introParagraphs: [
      "From an early age, my roots were developed on the family's cotton farm and cattle operation.  Now, in 2025, we are in our 19th year of developing our roots in central Texas.",
      "Throughout my early career \"service\" was the constant variable when working as a teacher/coach, and an oil & gas landman. Our new venture, Walker Texas Services, presents further opportunities to serve.",
      "From land clearing, hauling away old fencing, building a raised garden, our service options are numerous.  How can we serve you?",
    ],
    image: "/skidsteer-shovel.jpg",
    imageAlt: "Skidsteer",
    cardTitle: "Our Services",
    items: [
      "Land Clearing",
      "Fencing Removal",
      "Garden Raised Beds",
      "Fencing Installation",
      "Fencing Repair",
      "Fencing Maintenance",
      "Fencing Replacement",
      "And much much more!"
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

      <div
        style={{
          backgroundImage: "url('/geopattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
        }}
      >
        <div className="bg-white/90">
          <IntroContent itemVariants={itemVariants} pageData={pageData} />
        </div>
      </div>

      <CardList itemVariants={itemVariants} pageData={pageData} />
    </motion.div>
  );
};

export default Services;