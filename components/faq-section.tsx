"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso saber programar para criar meu sistema?",
    answer:
      "Não. A proposta é usar IA, modelos validados e um processo guiado para você sair da ideia e chegar em um sistema aplicável com muito mais velocidade.",
  },
  {
    question: "O conteúdo serve para quem está começando do zero?",
    answer:
      "Sim. A estrutura foi pensada para quem quer entender o caminho completo: escolher uma ideia, montar o sistema, validar e preparar para vender.",
  },
  {
    question: "Os bônus ficam disponíveis para sempre?",
    answer:
      "Os bônus exclusivos são para quem entrar agora. Eles foram pensados para acelerar implementação, networking e criação dos primeiros sistemas.",
  },
  {
    question: "Vou receber modelos prontos para adaptar?",
    answer:
      "Sim. Você terá acesso a modelos e exemplos reais para usar como base, adaptar ao seu nicho e reduzir o tempo de criação.",
  },
  {
    question: "Posso usar isso para vender sistemas para clientes?",
    answer:
      "Sim. O foco é criar sistemas úteis e vendáveis, com clareza de oferta, entrega e aplicação prática para negócios reais.",
  },
]

export function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-[#121212] py-20">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-b border-white/10 px-5 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold tracking-tight text-white hover:no-underline [&>svg]:stroke-[3] [&>svg]:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm font-medium leading-relaxed text-white/55">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
