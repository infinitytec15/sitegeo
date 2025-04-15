import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

const ContactCallToAction = () => {
  const contactWhatsApp = () => {
    window.open("https://wa.me/5500000000000", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-[#004b6b]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Pronto para transformar seu projeto em realidade?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/90 text-xl mb-10"
          >
            Entre em contato conosco hoje mesmo para uma consulta personalizada
            e descubra como podemos ajudar no seu projeto.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={contactWhatsApp}
              className="bg-white text-[#004b6b] hover:bg-gray-100 font-medium text-lg px-8 py-6 rounded-md"
            >
              <MessageCircle className="mr-2" />
              Fale Conosco pelo WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCallToAction;
