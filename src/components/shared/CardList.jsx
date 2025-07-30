import { motion } from "framer-motion";
import ContactUsButton from "./ContactUsButton";
import "../../styles/services.css";

const CardList = ({ itemVariants, pageData }) => {
  
  return (
    <motion.div
      variants={itemVariants}
      className="container-padding section-padding bg-white card-list"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Section - Left Side */}
          <motion.div
            variants={itemVariants}
            className="order-2 lg:order-1"
          >
            <img
              src={pageData.image}
              alt={pageData.imageAlt}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 space-y-6"
          > 
            <motion.ul 
              variants={itemVariants} 
              className="space-y-3"
              style={{
                alignItems: "center",
                listStyleType: "none",
              }}
            >
              {pageData.items.map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <span className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></span>
                  <span className="text-black leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            {pageData.callToAction && (
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg leading-relaxed text-black font-medium mt-6"
              >
                {pageData.callToAction}
              </motion.p>
            )}
            
            {pageData.callToAction2 && (
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg leading-relaxed text-primary-600 font-semibold"
              >
                {pageData.callToAction2}
              </motion.p>
            )}
            <ContactUsButton itemVariants={itemVariants}/>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardList;