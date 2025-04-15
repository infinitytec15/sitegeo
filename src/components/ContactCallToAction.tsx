import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle, Mail, Phone, Calendar } from "lucide-react";
import { useRef } from "react";

const ContactCallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const contactWhatsApp = () => {
    window.open("https://wa.me/5500000000000", "_blank");
  };

  const contactEmail = () => {
    window.location.href = "mailto:contato@alfageo.com.br";
  };

  const contactPhone = () => {
    window.location.href = "tel:+5500000000000";
  };

  const scheduleCall = () => {
    // This would typically link to a calendar booking system
    window.open("https://calendly.com", "_blank");
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-[#004b6b] relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004b6b] via-[#004b6b]/90 to-[#004b6b]/80" />

        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.2,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-4 border border-white/20 mx-auto"
            >
              Vamos Conversar
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6"
            >
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Pronto para transformar seu projeto em realidade?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/90 text-base sm:text-lg md:text-xl mb-10 sm:mb-12 md:mb-14 px-2 sm:px-0 max-w-3xl mx-auto"
            >
              Entre em contato conosco hoje mesmo para uma consulta
              personalizada e descubra como podemos ajudar no seu projeto com
              nossas soluções em geotecnologia e engenharia.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={contactWhatsApp}
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-medium text-base px-4 py-6 rounded-xl w-full h-full flex flex-col gap-3 items-center justify-center"
              >
                <MessageCircle className="h-8 w-8" />
                <span>WhatsApp</span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={contactEmail}
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-medium text-base px-4 py-6 rounded-xl w-full h-full flex flex-col gap-3 items-center justify-center"
              >
                <Mail className="h-8 w-8" />
                <span>E-mail</span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={contactPhone}
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-medium text-base px-4 py-6 rounded-xl w-full h-full flex flex-col gap-3 items-center justify-center"
              >
                <Phone className="h-8 w-8" />
                <span>Telefone</span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={scheduleCall}
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-medium text-base px-4 py-6 rounded-xl w-full h-full flex flex-col gap-3 items-center justify-center"
              >
                <Calendar className="h-8 w-8" />
                <span>Agendar Reunião</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              onClick={contactWhatsApp}
              className="bg-white text-[#004b6b] hover:bg-gray-100 font-medium text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl w-full sm:w-auto max-w-xs sm:max-w-none mx-auto shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-125" />
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Fale Conosco pelo WhatsApp
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCallToAction;
