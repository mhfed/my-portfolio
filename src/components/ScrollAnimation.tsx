import {
  component$,
  Slot,
  useVisibleTask$,
  useSignal,
  type PropFunction,
} from '@builder.io/qwik'
import { animate } from 'motion'

interface ScrollAnimationProps {
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn' | 'slideInUp'
  duration?: number
  delay?: number
  threshold?: number
  onVisible$?: PropFunction<() => void>
  class?: string
  id?: string
  triggerOnce?: boolean
}

export const ScrollAnimation = component$((props: ScrollAnimationProps) => {
  const {
    animation = 'fadeInUp',
    duration = 0.6,
    delay = 0,
    threshold = 0.1,
    onVisible$,
    class: className,
    id,
    triggerOnce = true,
  } = props

  const ref = useSignal<Element>()
  const hasAnimated = useSignal(false)

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const element = ref.value
    if (!element) return

    // Set initial state
    const initialStyle = (element as HTMLElement).style
    initialStyle.opacity = '0'
    
    if (animation === 'fadeInUp' || animation === 'slideInUp') {
      initialStyle.transform = 'translateY(50px)'
    } else if (animation === 'fadeInLeft') {
      initialStyle.transform = 'translateX(-50px)'
    } else if (animation === 'fadeInRight') {
      initialStyle.transform = 'translateX(50px)'
    } else if (animation === 'scaleIn') {
      initialStyle.transform = 'scale(0.8)'
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!triggerOnce || !hasAnimated.value)) {
            // Animate element
            setTimeout(() => {
              let keyframes: any = {}
              
              switch (animation) {
                case 'fadeInUp':
                  keyframes = { opacity: [0, 1], transform: ['translateY(50px)', 'translateY(0px)'] }
                  break
                case 'fadeInLeft':
                  keyframes = { opacity: [0, 1], transform: ['translateX(-50px)', 'translateX(0px)'] }
                  break
                case 'fadeInRight':
                  keyframes = { opacity: [0, 1], transform: ['translateX(50px)', 'translateX(0px)'] }
                  break
                case 'fadeIn':
                  keyframes = { opacity: [0, 1] }
                  break
                case 'scaleIn':
                  keyframes = { opacity: [0, 1], transform: ['scale(0.8)', 'scale(1)'] }
                  break
                case 'slideInUp':
                  keyframes = { transform: ['translateY(100%)', 'translateY(0%)'] }
                  break
                default:
                  keyframes = { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] }
              }
              
              animate(element, keyframes as any, {
                duration,
              } as any)
              
              if (onVisible$) onVisible$()
              hasAnimated.value = true
            }, delay * 1000)
          } else if (!triggerOnce && !entry.isIntersecting && hasAnimated.value) {
            // Reset animation if triggerOnce is false
            const resetStyle = (element as HTMLElement).style
            resetStyle.opacity = '0'
            if (animation === 'fadeInUp' || animation === 'slideInUp') {
              resetStyle.transform = 'translateY(50px)'
            } else if (animation === 'fadeInLeft') {
              resetStyle.transform = 'translateX(-50px)'
            } else if (animation === 'fadeInRight') {
              resetStyle.transform = 'translateX(50px)'
            } else if (animation === 'scaleIn') {
              resetStyle.transform = 'scale(0.8)'
            }
            hasAnimated.value = false
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)

    // Cleanup
    return () => {
      observer.disconnect()
    }
  })

  return (
    <div
      ref={ref}
      id={id}
      class={className ?? ''}
    >
      <Slot />
    </div>
  )
}) 