import { defineStore } from 'pinia'

export const useRouterHome = defineStore('routerHome', {
  state: () => ({
    mode: 'buy' as string, // ejemplo de tipos posibles
  }),

  actions: {
    // Función que recibe una prop y tiene un valor por defecto
    setMode(newMode: string = 'buy') {
      this.mode = newMode
      // console.log('Modo actualizado a:', this.mode)
    },
  },
})
