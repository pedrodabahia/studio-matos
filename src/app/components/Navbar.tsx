import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#" },
  { label: "Simulador", href: "#simulador" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 300);
  });

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-40 border-b border-[#00ff88]/20 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] bg-clip-text text-2xl font-bold text-transparent"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Studio Matos
          </a>

          <ul className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-medium text-white/80 transition-colors hover:text-[#00ff88]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <motion.a
            href="#contato"
            className="hidden rounded-lg bg-[#00ff88] px-6 py-2 font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar Projeto
          </motion.a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute right-6 top-6 text-white"
              >
                <X size={32} />
              </button>

              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white transition-colors hover:text-[#00ff88]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 rounded-lg bg-[#00ff88] px-8 py-4 text-xl font-semibold text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                Começar Projeto
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
