import { motion } from "framer-motion";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  color = "#004b6b",
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md p-6 sm:p-7 hover:shadow-xl transition-all duration-500 h-full"
      style={{
        boxShadow: isHovered ? `0 10px 30px -10px ${color}40` : "",
        borderTop: `4px solid ${color}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="text-white mb-6 flex justify-center items-center w-16 h-16 rounded-lg mx-auto"
        style={{ backgroundColor: color }}
        animate={{
          rotate: isHovered ? [0, 10, -10, 0] : 0,
          scale: isHovered ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>

      <motion.h3
        className="text-lg font-semibold text-[#1f2a38] mb-3 text-center"
        animate={{ y: isHovered ? -5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-gray-600 text-center"
        animate={{ opacity: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="w-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-4 mx-auto"
        animate={{ width: isHovered ? "80%" : "0%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default ServiceCard;
