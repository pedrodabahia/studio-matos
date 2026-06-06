import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer: "O prazo varia de acordo com a complexidade. Um site institucional leva de 2 a 4 semanas, enquanto sistemas completos podem levar de 1 a 3 meses. Sempre trabalhamos com cronogramas claros e entregas parciais.",
  },
  {
    question: "Qual o investimento necessário?",
    answer: "Cada projeto é único e o investimento depende das funcionalidades necessárias. Após entender suas necessidades, apresentamos uma proposta personalizada com valores transparentes e sem surpresas.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Todo projeto inclui período de garantia e suporte. Também oferecemos planos de manutenção mensal para atualizações, melhorias contínuas e suporte técnico.",
  },
  {
    question: "Posso solicitar alterações durante o desenvolvimento?",
    answer: "Absolutamente! Trabalhamos com metodologia ágil, apresentando entregas parciais para que você acompanhe e solicite ajustes. Sua satisfação é nossa prioridade.",
  },
  {
    question: "Os sites são responsivos para mobile?",
    answer: "Todos os nossos projetos são desenvolvidos com design responsivo, garantindo perfeita visualização e usabilidade em smartphones, tablets e desktops.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-32">
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
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-white/70">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl border border-[#00ff88]/20 bg-gradient-to-br from-black/80 to-[#0a0a0a] backdrop-blur-sm transition-all hover:border-[#00ff88]/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#00ff88]/5"
                >
                  <span className="pr-8 text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <Minus className="h-6 w-6 text-[#00ff88]" />
                    ) : (
                      <Plus className="h-6 w-6 text-[#00ff88]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-[#00ff88]/20 p-6 text-white/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
