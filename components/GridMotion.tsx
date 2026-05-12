import type { ReactNode } from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import "./GridMotion.css"

type GridMotionProps = {
  items?: ReactNode[]
  gradientColor?: string
}

const totalItems = 28

const defaultItems = [
  "MRR",
  "ARR",
  "Churn",
  "Pipeline",
  "Leads",
  "Onboarding",
  "Automacao",
  "Retencao",
  "Growth",
  "CRM",
  "Dashboards",
  "Insights",
  "Funil",
  "Suporte",
  "Ativacao",
  "Vendas",
  "Receita",
  "Clientes",
  "Sprints",
  "Produtos",
  "Escala",
  "Operacao",
  "Eventos",
  "Relatorios",
  "Playbooks",
  "Conversao",
  "Turbo",
  "SaaS",
]

export default function GridMotion({ items = [], gradientColor = "black" }: GridMotionProps) {
  const rowRefs = useRef<Array<HTMLDivElement | null>>([])
  const mouseXRef = useRef(typeof window === "undefined" ? 0 : window.innerWidth / 2)
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems

  useEffect(() => {
    gsap.ticker.lagSmoothing(0)

    const handleMouseMove = (event: MouseEvent) => {
      mouseXRef.current = event.clientX
    }

    const updateMotion = () => {
      const maxMoveAmount = 300
      const baseDuration = 0.8
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]

      rowRefs.current.forEach((row, index) => {
        if (!row) return

        const direction = index % 2 === 0 ? 1 : -1
        const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction

        gsap.to(row, {
          x: moveAmount,
          duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
          ease: "power3.out",
          overwrite: "auto",
        })
      })
    }

    gsap.ticker.add(updateMotion)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      gsap.ticker.remove(updateMotion)
    }
  }, [])

  return (
    <div className="grid-motion" aria-hidden="true">
      <section
        className="grid-motion__intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="grid-motion__container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid-motion__row"
              ref={(element) => {
                rowRefs.current[rowIndex] = element
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex]

                return (
                  <div key={itemIndex} className="grid-motion__item">
                    <div className="grid-motion__item-inner">
                      {typeof content === "string" && content.startsWith("http") ? (
                        <div
                          className="grid-motion__item-img"
                          style={{
                            backgroundImage: `url(${content})`,
                          }}
                        />
                      ) : (
                        <div className="grid-motion__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
