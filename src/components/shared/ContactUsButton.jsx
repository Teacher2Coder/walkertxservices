import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import handleSmoothScroll from "../../utils/handleSmoothScroll";

const ContactUsButton = ({ itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="text-center mt-12"
    >
      <Link
        to="/contact"
        className="btn-primary inline-flex items-center gap-2 text-accent-500"
        onClick={() => handleSmoothScroll()}
      >
        Contact Us
        <ArrowRight className="w-5 h-5 text-accent-500" />
      </Link>
    </motion.div>
  );
};

export default ContactUsButton;