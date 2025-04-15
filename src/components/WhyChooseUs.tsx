import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    "Equipe altamente qualificada e experiente",
    "Tecnologia de ponta para resultados precisos",
    "Atendimento personalizado e consultivo",
    "Compromisso com prazos e qualidade",
    "Soluções completas e integradas",
    "Conformidade com legislação e normas técnicas",
  ];

  return (
    <section id="porque-escolher" className="py-20 bg-[#1f2a38] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Por Que Nos Escolher?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            A ALFAGEO se destaca pela excelência técnica e compromisso com a
            satisfação do cliente.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3"
            >
              <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" />
              <p className="text-lg">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
