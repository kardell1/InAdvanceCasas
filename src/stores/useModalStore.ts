import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    viewModal: false as boolean,
  }),

  actions: {
    setMode(newMode: boolean) {
      this.viewModal = newMode
    },
  },
})
