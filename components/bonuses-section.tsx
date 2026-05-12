"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { LayoutTemplate, PlaySquare, Smartphone, Trophy, Users } from "lucide-react"
import { useRef } from "react"

const bonuses = [
  {
    icon: Users,
    title: "Grupo de Networking (WhatsApp)",
    description:
      "Conecte-se com outros alunos, troque experiências e acelere seus resultados com quem já está aplicando.",
  },
  {
    icon: PlaySquare,
    title: "Minissérie: Sistema do Zero à Venda",
    description: "Acompanhe a criação de um sistema completo até as primeiras vendas acontecendo.",
  },
  {
    icon: Trophy,
    title: "Meus Sistemas Campeões",
    description: "Tenha acesso a sistemas reais que já estão gerando vendas e use como base para os seus.",
  },
  {
    icon: LayoutTemplate,
    title: "Modelos de Criação Validados",
    description: "Modelos prontos para você adaptar e começar mais rápido.",
  },
  {
    icon: Smartphone,
    title: "Criação de Apps Mobile com IA",
    description: "Aprenda a transformar ideias em apps mobile usando IA para acelerar protótipos e entregas.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function BonusesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#AFFF00]/5 to-white" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#AFFF00]/20 blur-[100px]" />
      <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-[#121212]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#121212]/60">Bônus exclusivos</span>
          <h2 className="mt-4 text-4xl font-black tracking-tighter text-[#121212] md:text-6xl">
            Bônus exclusivos para acelerar seus resultados
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-[#121212]/55 md:text-base">
            Disponíveis apenas neste momento para quem entrar agora.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className={`group relative overflow-hidden rounded-3xl border-2 border-[#121212]/10 bg-white p-6 shadow-xl shadow-[#121212]/5 ${
                index === bonuses.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-[#AFFF00]/0 group-hover:bg-[#AFFF00]"
                transition={{ duration: 0.4 }}
              />
              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#121212] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#AFFF00] transition-colors duration-300 group-hover:bg-[#121212]">
                    EXCLUSIVO AGORA!
                  </span>
                  <motion.div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#AFFF00]/20 transition-colors duration-300 group-hover:bg-[#121212]"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <bonus.icon className="h-5 w-5 text-[#121212] transition-colors duration-300 group-hover:text-[#AFFF00]" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-black tracking-tight text-[#121212]">{bonus.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-[#121212]/60">{bonus.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
