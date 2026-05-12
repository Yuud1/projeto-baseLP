"use client"

import type React from "react"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    subtitle: "Automacao",
    description: "Fluxos repetitivos rodando no piloto",
    accent: "#AFFF00",
    image: "/placeholder.svg?height=260&width=420&query=automation workflow dashboard",
  },
  {
    subtitle: "Monitoramento",
    description: "Dados criticos sempre visiveis",
    accent: "#FF6B35",
    image: "/placeholder.svg?height=260&width=420&query=real time monitoring analytics",
  },
  {
    subtitle: "Clareza",
    description: "Prioridades e funis em um so lugar",
    accent: "#00D4FF",
    image: "/placeholder.svg?height=260&width=420&query=saas funnel clarity dashboard",
  },
  {
    subtitle: "Pronto para vender",
    description: "Estrutura para converter e reter",
    accent: "#AFFF00",
    image: "/placeholder.svg?height=260&width=420&query=b2b sales platform",
  },
  {
    subtitle: "Criação guiada",
    description: "Prompts e fluxos para acelerar sua entrega",
    accent: "#AFFF00",
    image: "/placeholder.svg?height=260&width=420&query=ai app builder interface",
  },
  {
    subtitle: "Validação rápida",
    description: "Do primeiro protótipo ao teste com clientes",
    accent: "#FF6B35",
    image: "/placeholder.svg?height=260&width=420&query=mvp prototype validation",
  },
  {
    subtitle: "Sistema lucrativo",
    description: "Oferta, entrega e venda conectadas",
    accent: "#00D4FF",
    image: "/placeholder.svg?height=260&width=420&query=profitable software revenue dashboard",
  },
]

const carouselFeatures = [...features, ...features]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group w-[260px] shrink-0 cursor-pointer md:w-[300px]"
    >
      <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl bg-[#1a1a1a]">
        <img
          src={feature.image}
          alt={feature.subtitle}
          className="h-full min-h-[320px] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      </div>
    </motion.div>
  )
}

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="formula" className="relative py-16 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#AFFF00]/5 to-white" />

      <div ref={ref} className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-5xl px-6 text-center"
        >
          <motion.span
            className="inline-block font-mono text-[#121212]/60 text-[10px] tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            Por dentro
          </motion.span>

          <div className="overflow-hidden mt-2">
            <motion.h2
              className="text-4xl font-black tracking-tighter text-[#121212] md:text-6xl"
              initial={{ y: 60 }}
              animate={isInView ? { y: 0 } : { y: 60 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              O que você vai ver por dentro
            </motion.h2>
          </div>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-[#121212]/55 md:text-base"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Um passo a passo completo para você sair do zero e construir sistemas lucrativos com IA.
          </motion.p>

          <motion.div
            className="h-[2px] w-12 bg-[#AFFF00] mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          />
        </motion.div>

        <div className="relative w-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.98)_18%,rgba(255,255,255,0.88)_34%,rgba(255,255,255,0.66)_52%,rgba(255,255,255,0.36)_72%,rgba(255,255,255,0)_100%)] md:w-44" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-[linear-gradient(270deg,#fff_0%,rgba(255,255,255,0.98)_18%,rgba(255,255,255,0.88)_34%,rgba(255,255,255,0.66)_52%,rgba(255,255,255,0.36)_72%,rgba(255,255,255,0)_100%)] md:w-44" />

          <div className="flex w-max gap-3 animate-marquee">
            {carouselFeatures.map((feature, index) => (
              <FeatureCard key={`${feature.subtitle}-${index}`} feature={feature} index={index % features.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
