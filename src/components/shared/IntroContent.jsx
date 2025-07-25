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
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-primary-600 font-copperplate-cc"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          {pageData.introTitle}
        </motion.h2>

        <div className="space-y-4">
          {pageData.introParagraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed text-gray-700 text-center font-copperplate-gothic"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default IntroContent;