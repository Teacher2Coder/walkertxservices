import { motion } from "framer-motion";
import { PhoneOutgoing } from "lucide-react";

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
        <p className="text-white font-copperplate-gothic text-xl">Round Rock, Texas</p>
        <p className="text-white font-copperplate-gothic text-xl">78681</p>

        <h4 className="text-lg font-semibold text-white font-copperplate-cc mt-4">
          Call us!
          <PhoneOutgoing className="w-5 h-5 text-accent-500" />
        </h4>
        <a className="text-white font-copperplate-gothic text-xl flex items-center" href="tel:5126087490">
          (512) 608-7490
          <PhoneOutgoing className="w-5 h-5 ml-2 text-primary-500" />
        </a>
      </div>

      <div className="bg-primary-600 p-8 rounded-2xl text-white">
        <h3 className="text-xl font-bold mb-4 font-copperplate-cc">Our hours</h3>
        <ul className="space-y-2 font-copperplate-gothic text-xl">
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