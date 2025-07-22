import { motion } from "framer-motion";
import ContactUsButton from "./ContactUsButton";

const Motto = ({ itemVariants }) => {
  const mottoData = {
    title: "Our motto:",
    image: "/skidsteer-shovel.jpg",
    imageAlt: "Skidsteer",
    description: "Providing you with:",
    parts: [
      "Dependable Work",
      "Honest prices",
      "Family Values",
      "...Located in the heart of Texas"
    ],
    callToAction: "Are you ready to see how we can turn your project into a reality?",
  }
  
  return (
    <motion.div
      variants={itemVariants}
      className="container-padding section-padding bg-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Section - Left Side */}
          <motion.div
            variants={itemVariants}
            className="order-2 lg:order-1"
          >
            <img
              src={mottoData.image}
              alt={mottoData.imageAlt}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-4"
            >
              {mottoData.title}
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed text-white mb-6"
            >
              {mottoData.description}
            </motion.p>
            
            <motion.ul 
              variants={itemVariants} 
              className="space-y-3"
              style={{
                alignItems: "center",
                listStyleType: "none",
              }}
            >
              {mottoData.parts.map((part, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                  style={{ marginLeft: `${index * 2.5}rem` }}
                >
                  <span className="text-white leading-relaxed">{part}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            {mottoData.callToAction && (
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg leading-relaxed text-white font-medium mt-6"
              >
                {mottoData.callToAction}
              </motion.p>
            )}
            
            {mottoData.callToAction2 && (
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg leading-relaxed text-primary-600 font-semibold"
              >
                {mottoData.callToAction2}
              </motion.p>
            )}
            <ContactUsButton itemVariants={itemVariants}/>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Motto;