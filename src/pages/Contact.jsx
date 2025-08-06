import { motion } from 'framer-motion'
import { usePageSEO } from '../utils/usePageTitle';
import Hero from '../components/shared/Hero'
import ContactForm from '../components/contact/ContactForm'
import SidePanel from '../components/contact/SidePanel'

const Contact = () => {
  
  usePageSEO({
    title: 'Contact Us - Walker Texas Services',
    description: 'Get your free estimate today! Contact Walker Texas Services in Round Rock, TX. Call (512) 608-7490 or send us a message. Monday-Friday 8AM-5PM, Saturday by appointment.',
    ogTitle: 'Contact Us - Walker Texas Services | Free Estimates in Round Rock, TX',
    ogDescription: 'Get your free estimate today! Contact Walker Texas Services in Round Rock, TX. Call (512) 608-7490 or send us a message. Monday-Friday 8AM-5PM, Saturday by appointment.',
    twitterTitle: 'Contact Us - Walker Texas Services | Free Estimates in Round Rock, TX',
    twitterDescription: 'Get your free estimate today! Contact Walker Texas Services in Round Rock, TX. Call (512) 608-7490 or send us a message. Monday-Friday 8AM-5PM, Saturday by appointment.'
  });
  
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

        <div className="bg-neutral-800">
          <motion.div
            variants={itemVariants}
            className="container mx-auto container-padding py-12 md:py-16 contact-panel"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants}>
                <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-white font-copperplate-gothic">
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