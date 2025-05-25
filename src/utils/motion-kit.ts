// src/kit/motion-kit.ts
import { animate, stagger } from 'motion'
import type { AnimationOptions, DOMKeyframesDefinition } from 'motion'
import { useVisibleTask$ } from '@builder.io/qwik'

export const useMotion = (
  selector: string,
  keyframes: DOMKeyframesDefinition,
  options?: AnimationOptions & { delay?: number }
) => {
  useVisibleTask$(() => {
    const el = document.querySelector(selector)
    if (el) animate(el, keyframes, options)
  })
}

export const useStagger = (
  selector: string,
  keyframes: DOMKeyframesDefinition,
  delay = 0.15,
  options?: AnimationOptions & { delay?: number }
) => {
  useVisibleTask$(() => {
    animate(
      `${selector} > *`,
      keyframes,
      { delay: stagger(delay), ...options }
    )
  })
}

export const useScrollReveal = (
  selector = '.reveal',
  keyframes: DOMKeyframesDefinition = { opacity: [0, 1], y: [30, 0] },
  options?: AnimationOptions & { delay?: number }
) => {
  useVisibleTask$(() => {
    const targets = document.querySelectorAll(selector)
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target as Element, keyframes, options)
          io.unobserve(entry.target)
        }
      })
    })
    targets.forEach(el => io.observe(el))
  })
}
