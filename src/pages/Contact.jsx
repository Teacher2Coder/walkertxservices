import { motion } from 'framer-motion'
import Hero from '../components/shared/Hero'
import ContactForm from '../components/contact/ContactForm'
import SidePanel from '../components/contact/SidePanel'

const Contact = () => {
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
    title: "Contact Us",
    description: "Ready to start your project? Get in touch with us today for a free consultation and personalized quote."
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="min-h-screen flex flex-col"
    >
      <Hero itemVariants={itemVariants} pageData={pageData} />

        <div className="bg-neutral-600 mt-20">
          <motion.div
            variants={itemVariants}
            className="container mx-auto container-padding py-12 md:py-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants}>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-white rye-regular">
                    Send us a message!
                  </h2>
                  
                  <ContactForm />

                </div>
              </motion.div>

              <SidePanel itemVariants={itemVariants} />
            </div>
          </motion.div>
        </div>
    </motion.div>
  )
}

export default Contact;