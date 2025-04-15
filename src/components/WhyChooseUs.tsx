import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Award, Clock, Users, Zap, Shield } from "lucide-react";
import { useRef } from "react";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const reasons = [
    {
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados e experientes",
      icon: <Users className="text-green-400 w-8 h-8" />,
    },
    {
      title: "Tecnologia Avançada",
      description:
        "Equipamentos e softwares de última geração para resultados precisos",
      icon: <Zap className="text-green-400 w-8 h-8" />,
    },
    {
      title: "Atendimento Personalizado",
      description:
        "Consultoria e soluções adaptadas às suas necessidades específicas",
      icon: <CheckCircle2 className="text-green-400 w-8 h-8" />,
    },
    {
      title: "Compromisso com Prazos",
      description: "Entrega pontual e respeito aos cronogramas estabelecidos",
      icon: <Clock className="text-green-400 w-8 h-8" />,
    },
    {
      title: "Excelência Reconhecida",
      description: "Qualidade comprovada e reconhecida pelos nossos clientes",
      icon: <Award className="text-green-400 w-8 h-8" />,
    },
    {
      title: "Conformidade Legal",
      description:
        "Projetos em total conformidade com legislação e normas técnicas",
      icon: <Shield className="text-green-400 w-8 h-8" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="porque-escolher"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-[#1f2a38] text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80')] bg-cover bg-center blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a38] via-[#1f2a38]/80 to-[#1f2a38]/60" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-400"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-4 border border-white/20 mx-auto"
          >
            Nossos Diferenciais
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
              Por Que Nos Escolher?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            A ALFAGEO se destaca pela excelência técnica e compromisso com a
            satisfação do cliente em todos os projetos que realizamos.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#1f2a38]/80 p-3 rounded-lg shadow-inner">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
