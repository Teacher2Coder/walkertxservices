import { motion } from "framer-motion";
import ContactUsButton from "./ContactUsButton";
import { useLocation } from "react-router-dom";

const Motto = ({ itemVariants }) => {
  const mottoData = {
    parts: [
      "Dependable Work",
      "Honest prices",
      "Family Values",
      "...Located in the heart of Texas",
    ],
    callToAction:
      "Are you ready to see how we can turn your project into a reality?",
  };

  const location = useLocation();

  // TODO: Make the image bigger

  return (
    <motion.div
      variants={itemVariants}
      className="container-padding pb-8 bg-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="order-1 lg:order-2 space-y-6 text-center"
        >
          <div className="flex justify-center items-center">
            <img 
              src="/slogan.svg" 
              alt="Slogan" 
              className={`slogan-image ${location.pathname === "/" ? "h-1/4" : ""}`}
            />
          </div>
          <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed text-white font-medium mt-60 font-copperplate-gothic"
            >
              {mottoData.callToAction}
            </motion.p>

          <ContactUsButton itemVariants={itemVariants} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Motto;
