import { computed, defineAsyncComponent } from 'vue'
import { useRouterHome } from '@/stores/useRouterHome'
import { useModalStore } from '@/stores/useModalStore'

export const useModalFactory = () => {
  const routerHome = useModalStore()

  const HeroFa = computed(() => {
    console.log('🔄 Recalculando HeroFa | routerHome.mode =', routerHome.modalName)
    switch (routerHome.modalName) {
      case 'register':
        return defineAsyncComponent(() => import('../modal/RegisterUser.vue'))
      case 'buyRoom':
        return defineAsyncComponent(() => import('../modal/FormModal.vue'))
      default:
        console.warn('No se encontró un componente para el modo:', routerHome.modalName)
        return null
    }
  })
  return { HeroFa }
}
