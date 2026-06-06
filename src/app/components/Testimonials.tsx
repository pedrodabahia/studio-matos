import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechStart",
    content: "O Studio Matos transformou completamente nossa presença digital. O site é incrível e o sistema de gestão aumentou nossa produtividade em 300%.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Proprietária, Studio Fit",
    content: "Profissionalismo do início ao fim. O sistema de agendamento revolucionou minha academia. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Roberto Oliveira",
    role: "Fundador, Barber Shop Premium",
    content: "Investimento que valeu cada centavo. A plataforma é moderna, fácil de usar e meus clientes adoram. Diferencial total!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
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
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-white/70">
            Resultados reais de quem confia no nosso trabalho
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#00ff88]/20 bg-gradient-to-br from-black/80 to-[#0a0a0a] p-8 backdrop-blur-sm transition-all hover:border-[#00ff88] hover:shadow-[0_0_40px_rgba(0,255,136,0.2)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <Quote className="mb-6 h-12 w-12 text-[#00ff88]/30" />

              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#00ff88] text-[#00ff88]" />
                ))}
              </div>

              <p className="mb-6 text-lg text-white/80">{testimonial.content}</p>

              <div className="border-t border-[#00ff88]/20 pt-6">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-[#00ff88]">{testimonial.role}</p>
              </div>

              <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-12 translate-y-12 rounded-full bg-[#00ff88]/10 blur-3xl transition-all group-hover:translate-x-8 group-hover:translate-y-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
