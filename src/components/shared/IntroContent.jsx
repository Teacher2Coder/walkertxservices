import { motion } from "framer-motion";

const IntroContent = ({ itemVariants, pageData }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="container mx-auto container-padding py-12 md:py-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-primary-600"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          {pageData.subTitle}
        </motion.h2>

        <div className="space-y-4">
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg leading-relaxed text-gray-700 text-center"
          >
            {pageData.subDescription}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg leading-relaxed text-gray-700 text-center"
          >
            {pageData.subDescription2}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroContent;