import { motion } from "motion/react";
import { Globe, Layout, Cog, Zap, BarChart, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description: "Sites modernos, responsivos e otimizados para conversão",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Páginas de alta conversão focadas em resultados",
  },
  {
    icon: Cog,
    title: "Sistemas Web",
    description: "Plataformas personalizadas para seu negócio",
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    description: "Otimize operações e economize tempo",
  },
  {
    icon: BarChart,
    title: "Painéis Administrativos",
    description: "Dashboards inteligentes com métricas em tempo real",
  },
  {
    icon: Palette,
    title: "Identidade Visual Digital",
    description: "Design moderno e consistente para sua marca",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative px-6 py-32">
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
            Serviços
          </h2>
          <p className="text-xl text-white/70">
            Soluções completas para transformar seu negócio
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-[#00ff88]/20 bg-gradient-to-br from-black/80 to-[#0a0a0a] p-8 backdrop-blur-sm transition-all hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg border border-[#00ff88]/30 bg-[#00ff88]/10 transition-all group-hover:scale-110 group-hover:border-[#00ff88] group-hover:bg-[#00ff88]/20">
                    <Icon className="h-8 w-8 text-[#00ff88]" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
                <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-12 translate-y-12 rounded-full bg-[#00ff88]/10 blur-3xl transition-all group-hover:translate-x-8 group-hover:translate-y-8" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
