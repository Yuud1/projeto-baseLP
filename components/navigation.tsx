"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLenis } from "lenis/react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.querySelector<HTMLElement>(id)
    if (element && lenis) {
      lenis.scrollTo(element, { offset: -100 })
    }
  }

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Planos", href: "#flavours" },
    { label: "Clientes", href: "#creators" },
    { label: "Solucoes", href: "#distributors" },
    { label: "Contato", href: "#careers" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#121212]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <motion.span
            className="text-2xl font-black tracking-tighter"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className={scrolled ? "text-white" : "text-[#121212]"}>Turbo</span>
            <motion.span
              className="text-[#AFFF00]"
              animate={{
                textShadow: scrolled
                  ? ["0 0 10px rgba(175,255,0,0.5)", "0 0 20px rgba(175,255,0,0.8)", "0 0 10px rgba(175,255,0,0.5)"]
                  : "none",
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              SaaS
            </motion.span>
          </motion.span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item, i) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium tracking-wide transition-colors relative ${
                scrolled ? "text-white/80 hover:text-[#AFFF00]" : "text-[#121212]/80 hover:text-[#121212]"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#AFFF00] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </motion.button>
          ))}
        </div>

        <motion.button
          className="bg-[#AFFF00] text-[#121212] px-5 py-2.5 rounded-full font-bold text-xs tracking-wide relative overflow-hidden sm:px-6 sm:text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{
              boxShadow: [
                "0 0 20px rgba(175,255,0,0.3)",
                "0 0 40px rgba(175,255,0,0.6)",
                "0 0 20px rgba(175,255,0,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
          />
          <span className="relative z-10">Comecar agora</span>
        </motion.button>
      </div>
    </motion.nav>
  )
}
