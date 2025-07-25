import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import handleSmoothScroll from "../../utils/handleSmoothScroll";
import "../../styles/home.css";

const Services = ({ itemVariants }) => {
  const services = [
    {
      key: 1,
      title: "Dump Trailer Services",
      description:
        "Our 16 foot dump trailer can assist you with hauling away debris, tree branches, old fencing, and more.",
      link: "/services",
      image: "/trailer.png",
    },
    {
      key: 2,
      title: "Hauling Services",
      description:
        "Do you have equipment, machinery or landscaping items that need to be hauled? We can help you with a variety of tasks.",
      link: "/services",
      image: "/skid-in-truck.png",
    },
    {
      key: 3,
      title: "Land Clearing",
      description:
        "Need land cleared, need open spaces, or have unwanted brush in your way? Our track loader can assist you.",
      link: "/services",
      image: "/skidsteer-close.png",
    },
  ];

  return (
    <section className="p-6 bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent-500 font-copperplate-cc">
            Services at a Glance
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.key}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg card-hover outline-black outline-6"
            >
              <div className="h-48 relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <Link to={service.link}>
                  <h3 className="text-xl font-semibold mb-2 text-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer font-copperplate-cc">
                    {service.title}
                  </h3>
                </Link>

                <p className="text-white mb-4 font-copperplate-gothic">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div variants={itemVariants} className="flex justify-center mt-8">
        <Link
          to="/services"
          className="btn-primary bg-primary-400 hover:bg-primary-700 inline-flex items-center justify-center gap-2 text-accent-500 font-copperplate-gothic"
          onClick={() => handleSmoothScroll()}
        >
          Learn more
          <ArrowRight className="w-5 h-5 text-accent-500" />
        </Link>
      </motion.div>
      
    </section>
  );
};

export default Services;