import {
  MapPin,
  Plane,
  ClipboardCheck,
  MapIcon,
  Building2,
  Layers,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    {
      title: "Regularização Fundiária",
      description:
        "Regularize sua propriedade com segurança jurídica e conformidade com a legislação vigente.",
      icon: <MapPin size={48} strokeWidth={1.5} />,
      color: "#004b6b",
    },
    {
      title: "Aerolevantamento com Drone",
      description:
        "Mapeamento aéreo de alta precisão para diversos fins, com tecnologia de ponta.",
      icon: <Plane size={48} strokeWidth={1.5} />,
      color: "#1a5f7a",
    },
    {
      title: "Cadastro Ambiental Rural (CAR)",
      description:
        "Registro eletrônico obrigatório para imóveis rurais, garantindo conformidade ambiental.",
      icon: <ClipboardCheck size={48} strokeWidth={1.5} />,
      color: "#2a6f8a",
    },
    {
      title: "Georreferenciamento de Imóveis",
      description:
        "Definição precisa dos limites, forma e localização de imóveis rurais e urbanos.",
      icon: <MapIcon size={48} strokeWidth={1.5} />,
      color: "#3a7f9a",
    },
    {
      title: "Projetos de Engenharia Civil",
      description:
        "Desenvolvimento de projetos estruturais, hidráulicos e arquitetônicos com excelência técnica.",
      icon: <Building2 size={48} strokeWidth={1.5} />,
      color: "#4a8faa",
    },
    {
      title: "Loteamentos e Desmembramentos",
      description:
        "Projetos de parcelamento do solo urbano e rural, com aprovação junto aos órgãos competentes.",
      icon: <Layers size={48} strokeWidth={1.5} />,
      color: "#5a9fba",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-16 sm:py-20 bg-[#f8f9fa] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#004b6b]/5 to-transparent" />
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#004b6b]"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.1,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-[#004b6b]/10 backdrop-blur-sm px-4 py-2 rounded-full text-[#004b6b] text-sm mb-4 border border-[#004b6b]/20 mx-auto"
          >
            Soluções Completas
          </motion.div>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1f2a38] mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-[#004b6b] to-[#5a9fba] bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Oferecemos soluções completas em geotecnologia e engenharia para
            atender às suas necessidades com precisão e qualidade.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                z: 20,
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="perspective-1000"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#004b6b]/5 rounded-full blur-3xl" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#004b6b]/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ServicesSection;
