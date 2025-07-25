import { motion } from "framer-motion";

const SidePanel = ({ itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="space-y-8">
      <div className="bg-accent-500 p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold mb-6 text-white font-copperplate-cc">
          Walker Texas Services, LLC
        </h3>
        <h4 className="text-lg font-semibold text-white font-copperplate-cc">
          Located
        </h4>
        <p className="text-white font-copperplate-gothic">Austin, Texas</p>
        <p className="text-white font-copperplate-gothic">78735</p>

        <h4 className="text-lg font-semibold text-white font-copperplate-cc mt-4">
          Call us
        </h4>
        <a className="text-white font-copperplate-gothic" href="tel:1234567890">
          123-456-7890
        </a>
      </div>

      <div className="bg-primary-600 p-8 rounded-2xl text-white">
        <h3 className="text-xl font-bold mb-4 font-copperplate-cc">Our hours</h3>
        <ul className="space-y-2 font-copperplate-gothic">
          <li className="flex justify-between">
            <span>Monday - Friday</span>
            <span>8:00 AM - 5:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday</span>
            <span>Appointment Only</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span>Closed</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SidePanel;