import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp, } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const socialLinks = [
  { id: 1, icon: <FaFacebook />, url: "https://www.facebook.com/share/1HgF1Wd8VF/" },
  { id: 2, icon: <FaWhatsapp />, url: "https://wa.me/9317427672?text=Hy%2C%0AI%20am%20interested%20to%20admit%20my%20child%20in%20your%20school." },
  { id: 3, icon: <FaYoutube />, url: "https://youtube.com/@devbhoomiadarshvidyalaya" },
];

const FloatingSidebar = () => {
  return (
    <motion.div
      className="fixed right-0 top-1/3 flex flex-col gap-2 p-2 bg-gray-800 rounded-l-2xl shadow-lg z-10"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {socialLinks.map((key) => (
        <motion.a
          key={key.id}
          href={key.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 text-white rounded-md hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.1, x: 10 }}
        >
          {key.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingSidebar;
