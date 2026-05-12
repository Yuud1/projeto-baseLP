"use client"

import { AnimatePresence, motion, useInView, type Variants } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const activations = [
  {
    image: "/placeholder.svg?height=320&width=420&query=saas founder testimonial portrait office",
    title: "Bia, Founder",
    description: "O TurboSaaS nos deu clareza para sair do improviso e acompanhar cada etapa do funil.",
    role: "Startup B2B",
  },
  {
    image: "/placeholder.svg?height=320&width=420&query=sales leader testimonial dashboard",
    title: "Leo, Head de Vendas",
    description: "A equipe ganhou velocidade sem perder controle. Hoje todo mundo sabe onde agir.",
    role: "Time comercial",
  },
  {
    image: "/placeholder.svg?height=320&width=420&query=operations manager testimonial workspace",
    title: "Mari, Operacoes",
    description: "Centralizamos processos que antes viviam em planilhas e mensagens soltas.",
    role: "Operacao B2B",
  },
  {
    image: "/placeholder.svg?height=320&width=420&query=startup team testimonial product meeting",
    title: "Rafa, Produto",
    description: "Conseguimos testar, ajustar e escalar playbooks sem montar uma stack gigante.",
    role: "Produto e growth",
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

function TestimonialCard({ activation }: { activation: (typeof activations)[0] }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.015,
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }}
      className="group bg-white/5 rounded-2xl px-4 py-6 cursor-pointer relative overflow-hidden border border-white/10"
    >
      <div className="relative z-10">
        <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#121212]">
          <img
            src={activation.image}
            alt={`Foto de ${activation.title}`}
            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 via-transparent to-transparent" />
        </div>

        <h3 className="text-lg font-black text-white tracking-tight mb-2">
          {activation.title}
        </h3>
        <p className="mb-4 text-sm font-medium leading-relaxed text-white/60">
          “{activation.description}”
        </p>

        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#AFFF00]">
          {activation.role}
        </span>
      </div>
    </motion.div>
  )
}

export function ActivationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % activations.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="distributors" className="relative py-16 bg-[#121212] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#121212]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#AFFF00] text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            SOLUCOES
          </motion.span>
          <h2 className="mt-2 overflow-hidden text-4xl font-black tracking-tighter text-white md:text-6xl">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              USE{" "}
            </motion.span>
            <motion.span
              className="text-[#AFFF00] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              TURBOSAAS
            </motion.span>
          </h2>
          <motion.p
            className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-white/60 md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Do primeiro lead ao cliente recorrente, coloque o TurboSaaS no centro da sua operacao.
          </motion.p>
        </motion.div>

        <div ref={ref}>
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activations[activeIndex].title}
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <TestimonialCard activation={activations[activeIndex]} />
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex justify-center gap-2">
              {activations.map((activation, index) => (
                <button
                  key={activation.title}
                  type="button"
                  aria-label={`Ver testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-[#AFFF00]" : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {activations.map((activation) => (
              <TestimonialCard key={activation.title} activation={activation} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
