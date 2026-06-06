import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-[#00ff88]/30 bg-gradient-to-br from-[#00ff88]/10 via-black/80 to-transparent p-1 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-black via-[#0a0a0a] to-black p-12 md:p-20">
            <div className="relative z-10 text-center">
              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/10 px-4 py-2 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4 text-[#00ff88]" />
                <span className="text-sm text-[#00ff88]">Pronto para crescer?</span>
              </motion.div>

              <motion.h2
                className="mb-6 bg-gradient-to-r from-white via-white to-[#00ff88] bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Transforme seu negócio hoje mesmo
              </motion.h2>

              <motion.p
                className="mb-10 text-xl text-white/70 md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Não deixe seu negócio ficar para trás. Comece agora a construir sua presença digital premium.
              </motion.p>

              <motion.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.a
                  href="#contato"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#00ff88] px-10 py-5 font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,136,0.6)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">Começar Agora</span>
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#00ff88]/30 bg-[#00ff88]/5 px-10 py-5 font-semibold text-white backdrop-blur-sm transition-all hover:border-[#00ff88] hover:bg-[#00ff88]/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">Falar no WhatsApp</span>
                </motion.a>
              </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-0 -z-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-[#00ff88]"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 3,
                  }}
                />
              ))}
            </div>

            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#00ff88]/20 blur-[100px]" />
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#00ff88]/20 blur-[100px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
