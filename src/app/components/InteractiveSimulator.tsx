import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Store, Dumbbell, Scissors, Stethoscope, BarChart3, Calendar, ShoppingCart, Users } from "lucide-react";

const niches = [
  {
    id: "loja",
    name: "Loja",
    icon: Store,
    features: [
      { icon: ShoppingCart, title: "Sistema de Vendas", desc: "Controle completo de produtos e pedidos" },
      { icon: BarChart3, title: "Dashboard de Vendas", desc: "Métricas em tempo real" },
      { icon: Users, title: "Gestão de Clientes", desc: "CRM integrado" },
    ],
  },
  {
    id: "academia",
    name: "Academia",
    icon: Dumbbell,
    features: [
      { icon: Calendar, title: "Agendamento Online", desc: "Aulas e treinos personalizados" },
      { icon: Users, title: "Gestão de Alunos", desc: "Fichas e evolução" },
      { icon: BarChart3, title: "Dashboard Admin", desc: "Controle financeiro" },
    ],
  },
  {
    id: "barbearia",
    name: "Barbearia",
    icon: Scissors,
    features: [
      { icon: Calendar, title: "Agenda Inteligente", desc: "Agendamento automático" },
      { icon: Users, title: "Base de Clientes", desc: "Histórico e preferências" },
      { icon: BarChart3, title: "Relatórios", desc: "Faturamento e desempenho" },
    ],
  },
  {
    id: "clinica",
    name: "Clínica",
    icon: Stethoscope,
    features: [
      { icon: Calendar, title: "Prontuário Digital", desc: "Sistema médico completo" },
      { icon: Users, title: "Gestão de Pacientes", desc: "Histórico completo" },
      { icon: BarChart3, title: "Dashboard Médico", desc: "Indicadores de saúde" },
    ],
  },
];

export function InteractiveSimulator() {
  const [selectedNiche, setSelectedNiche] = useState(niches[0]);

  return (
    <section id="simulador" className="relative px-6 py-32">
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
            Veja seu negócio digitalizado
          </h2>
          <p className="text-xl text-white/70">
            Escolha seu segmento e descubra as possibilidades
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {niches.map((niche, index) => {
            const Icon = niche.icon;
            const isSelected = selectedNiche.id === niche.id;

            return (
              <motion.button
                key={niche.id}
                onClick={() => setSelectedNiche(niche)}
                className={`group relative overflow-hidden rounded-xl border p-6 transition-all ${
                  isSelected
                    ? "border-[#00ff88] bg-[#00ff88]/10"
                    : "border-[#00ff88]/20 bg-black/50 hover:border-[#00ff88]/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className={`mx-auto mb-3 h-10 w-10 ${isSelected ? "text-[#00ff88]" : "text-white/70"}`} />
                <p className={`font-semibold ${isSelected ? "text-[#00ff88]" : "text-white"}`}>
                  {niche.name}
                </p>
                {isSelected && (
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-[#00ff88]/20 to-transparent"
                    layoutId="selectedNiche"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNiche.id}
            className="grid gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {selectedNiche.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-[#00ff88]/20 bg-gradient-to-br from-black/80 to-[#0a0a0a] p-8 backdrop-blur-sm transition-all hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-[#00ff88]/30 bg-[#00ff88]/10">
                    <Icon className="h-7 w-7 text-[#00ff88]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-white/70">{feature.desc}</p>
                  <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-8 translate-y-8 rounded-full bg-[#00ff88]/10 blur-2xl transition-all group-hover:translate-x-4 group-hover:translate-y-4" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
