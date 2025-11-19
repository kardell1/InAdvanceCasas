import { defineStore } from 'pinia'

export const useModalStore = defineStore('useModalStore', {
  state: () => ({
    viewModal: false as boolean,
    modalName: '' as string,
  }),

  actions: {
    setMode(newMode: boolean, newModalName: string) {
      console.log('valor recibido es : ' + newModalName)

      console.log('boolean es : ' + newMode)
      this.viewModal = newMode
      this.modalName = newModalName
    },
  },
})
