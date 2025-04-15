import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-[#004b6b] mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-[#1f2a38] mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
