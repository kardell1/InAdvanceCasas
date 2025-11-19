// src/components/home/HeroFactory.ts
import { computed, defineAsyncComponent } from 'vue'
import { useModalStore } from '@/stores/useModalStore'

export const useHeroFactory = () => {
  const { modalName } = useModalStore()
  // devolvemos un computed que reacciona automáticamente al cambio de modo
  const HeroFa = computed(() => {
    switch (modalName) {
      case 'buy':
        return defineAsyncComponent(() => import('./BuyFeature.vue'))
      case 'rent':
        return defineAsyncComponent(() => import('./RentFeature.vue'))
      default:
        console.warn('No se encontró un componente para el modo:', modalName)
        return null
    }
  })

  return { HeroFa }
}
