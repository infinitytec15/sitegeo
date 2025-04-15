import {
  MapPin,
  Plane,
  ClipboardCheck,
  MapIcon,
  Building2,
  Layers,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Regularização Fundiária",
      description:
        "Regularize sua propriedade com segurança jurídica e conformidade com a legislação vigente.",
      icon: <MapPin size={48} strokeWidth={1.5} />,
    },
    {
      title: "Aerolevantamento com Drone",
      description:
        "Mapeamento aéreo de alta precisão para diversos fins, com tecnologia de ponta.",
      icon: <Plane size={48} strokeWidth={1.5} />,
    },
    {
      title: "Cadastro Ambiental Rural (CAR)",
      description:
        "Registro eletrônico obrigatório para imóveis rurais, garantindo conformidade ambiental.",
      icon: <ClipboardCheck size={48} strokeWidth={1.5} />,
    },
    {
      title: "Georreferenciamento de Imóveis",
      description:
        "Definição precisa dos limites, forma e localização de imóveis rurais e urbanos.",
      icon: <MapIcon size={48} strokeWidth={1.5} />,
    },
    {
      title: "Projetos de Engenharia Civil",
      description:
        "Desenvolvimento de projetos estruturais, hidráulicos e arquitetônicos com excelência técnica.",
      icon: <Building2 size={48} strokeWidth={1.5} />,
    },
    {
      title: "Loteamentos e Desmembramentos",
      description:
        "Projetos de parcelamento do solo urbano e rural, com aprovação junto aos órgãos competentes.",
      icon: <Layers size={48} strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-[#f8f9fa] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#004b6b]"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2a38] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em geotecnologia e engenharia para
            atender às suas necessidades com precisão e qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1, z: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
