import { motion } from "motion/react";
import { MessageSquare, Send} from "lucide-react";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";


import emailjs from 'emailjs-com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

const userID = import.meta.env.VITE_APP_USER_ID;
const templateID = import.meta.env.VITE_APP_TEMPLATE_ID;
const serviceID = import.meta.env.VITE_APP_SERVICE_ID;

   function sendEmail(e : React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log({
  serviceID,
  templateID,
  userID
});

      emailjs.sendForm(
        serviceID,
        templateID,
        e.currentTarget,
        userID
      )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
    });
    e.currentTarget.reset();
  }




  return (
    <section id="contato" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4 bg-gradient-to-r from-white to-[#00ff88] bg-clip-text text-5xl font-bold text-transparent md:text-6xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Seu negócio merece presença digital de verdade
          </h2>
          <p className="text-xl text-white/70">
            Vamos conversar sobre seu projeto
          </p>
        </motion.div>

        <motion.div
          className="mb-12 grid gap-4 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="https://wa.me/557399916255"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-[#00ff88]/30 bg-gradient-to-br from-[#00ff88]/10 to-transparent p-6 text-center transition-all hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="mx-auto mb-3 h-8 w-8 text-[#00ff88]" />
            <p className="font-semibold text-white">WhatsApp</p>
          </motion.a>

          <motion.a
            href="https://w.app/djlonc"
            className="group relative overflow-hidden rounded-xl border border-[#00ff88]/30 bg-gradient-to-br from-[#00ff88]/10 to-transparent p-6 text-center transition-all hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="mx-auto mb-3 h-8 w-8 text-[#00ff88]" />
            <p className="font-semibold text-white">Orçamento</p>
          </motion.a>

          <motion.a
            href="https://instagram.com/digitalmatos"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-[#00ff88]/30 bg-gradient-to-br from-[#00ff88]/10 to-transparent p-6 text-center transition-all hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram className="mx-auto mb-3 h-8 w-8 text-[#00ff88]"/>
            <p className="font-semibold text-white">Instagram</p>
          </motion.a>
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          className="overflow-hidden rounded-2xl border border-[#00ff88]/30 bg-gradient-to-br from-black/80 to-[#0a0a0a] p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white/90">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-[#00ff88]/30 bg-black/50 px-4 py-3 text-white placeholder-white/50 transition-all focus:border-[#00ff88] focus:outline-none focus:ring-2 focus:ring-[#00ff88]/50"
              placeholder="Seu nome"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white/90">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-[#00ff88]/30 bg-black/50 px-4 py-3 text-white placeholder-white/50 transition-all focus:border-[#00ff88] focus:outline-none focus:ring-2 focus:ring-[#00ff88]/50"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white/90">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full resize-none rounded-lg border border-[#00ff88]/30 bg-black/50 px-4 py-3 text-white placeholder-white/50 transition-all focus:border-[#00ff88] focus:outline-none focus:ring-2 focus:ring-[#00ff88]/50"
              placeholder="Conte-nos sobre seu projeto..."
              required
            />
          </div>

          <motion.button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#00ff88] px-8 py-4 font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enviar Mensagem
            <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
