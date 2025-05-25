// src/components/MotionSection.tsx
import {
    component$,
    Slot,
    useVisibleTask$,
    useSignal,
    type PropFunction,
  } from '@builder.io/qwik'
  import { animate } from 'motion'
  
  interface MotionSectionProps {
    keyframes?: Record<string, string | number | Array<number | string>>
    options?: any
    onMount$?: PropFunction<() => void>
    class?: string
    id?: string
  }
  
  export const MotionSection = component$((props: MotionSectionProps) => {
  const {
    keyframes = { opacity: [0, 1], y: [30, 0] },
    options = { duration: 0.6, easing: 'ease-out' },
    onMount$,
    class: className,
    id,
  } = props
  
    const ref = useSignal<Element>()
  
    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
      const element = ref.value
      if (!element) return
  
      // Set initial state
      (element as HTMLElement).style.opacity = '0'
      ;(element as HTMLElement).style.transform = 'translateY(30px)'
  
      // Animate after a short delay
      setTimeout(() => {
        animate(element, keyframes, options)
      }, options.delay || 100)
  
      if (onMount$) onMount$()
    })
  
    return (
      <section
        ref={ref}
        id={id}
        class={className ?? ''}
      >
        <Slot />
      </section>
    )
  })
  