import { useEffect, useRef } from 'react'

type ParallaxOptions = {
  /** Deslocamento horizontal. Negativo = vai pra esquerda ao rolar pra baixo. Positivo = vai pra direita. */
  speedX?: number
  /** Deslocamento vertical. Negativo = sobe ao rolar pra baixo (efeito clássico). Positivo = desce junto, mais rápido que a página. */
  speedY?: number
  /** Suaviza o movimento em ms (0 = acompanha o scroll instantaneamente). */
  ease?: number
  /**
   * 'transform' move o elemento (ótimo pra imagens/blocos soltos, mas pode expor vazio nas bordas).
   * 'background-position' pan a imagem de fundo dentro da própria caixa (precisa de background-image + bg-cover no elemento). Como o cover sempre preenche a caixa, nunca expõe vazio.
   */
  property?: 'transform' | 'background-position'
}

export function useParallax<T extends HTMLElement>({
  speedX = 0,
  speedY = -0.2,
  ease = 0,
  property = 'transform',
}: ParallaxOptions = {}) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.transition = ease > 0 ? `${property} ${ease}ms linear` : ''
    el.style.willChange = property

    let ticking = false
    const update = () => {
      ticking = false
      const x = window.scrollY * speedX
      const y = window.scrollY * speedY
      if (property === 'background-position') {
        el.style.backgroundPosition = `${x}px ${y}px`
      } else {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speedX, speedY, ease, property])

  return ref
}
