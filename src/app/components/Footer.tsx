import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative border-t border-[#00ff88]/20 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3
              className="mb-4 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] bg-clip-text text-2xl font-bold text-transparent"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Studio Matos
            </h3>
            <p className="text-white/70">
              Transformando negócios com soluções digitais premium.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Links</h4>
            <ul className="space-y-2">
              {["Serviços", "Projetos", "Sobre", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 transition-colors hover:text-[#00ff88]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contato</h4>
            <ul className="space-y-2 text-white/70">
              <li>pedromatosproff@gmail.com</li>
              <li>+55 (73) 99991-6255</li>
            </ul>
          </div>
        </div>

        <motion.div
          className="border-t border-[#00ff88]/20 pt-8 text-center text-sm text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} Studio Matos. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
