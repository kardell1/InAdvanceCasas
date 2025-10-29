// src/components/home/HeroFactory.ts
import { computed, defineAsyncComponent } from 'vue'
import { useRouterHome } from '@/stores/useRouterHome'

export const useHeroFactory = () => {
  const routerHome = useRouterHome()

  // devolvemos un computed que reacciona automáticamente al cambio de modo
  const HeroFa = computed(() => {
    switch (routerHome.mode) {
      case 'buy':
        return defineAsyncComponent(() => import('./BuyFeature.vue'))
      case 'rent':
        return defineAsyncComponent(() => import('./RentFeature.vue'))
      default:
        console.warn('No se encontró un componente para el modo:', routerHome.mode)
        return null
    }
  })

  return { HeroFa }
}
