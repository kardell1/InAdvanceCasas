<script setup lang="ts">
import { useModalStore } from '@/stores/useModalStore'
import InputsModal from './InputsModal.vue'

const useModal = useModalStore()
const handleCloseModal = () => {
  useModal.setMode(false, '')
}
</script>

<template>
  <div
    class="fade-in-once relative p-5 bg-white shadow-2xs w-[40%] rounded-sm max-h-[80%] overflow-y-scroll"
  >
    <h2 class="pb-5 text-center font-bold">Registrate o Inicia Sesion</h2>
    <button
      @click="handleCloseModal"
      class="hover:bg-slate-300 rounded-full absolute top-0 right-0 px-2 py-1 m-5"
    >
      X
    </button>
    <div class="flex flex-col gap-5">
      <InputsModal placeholder="Correo electronico" />
      <div>
        <button class="bg-blue-600 w-full rounded-xl text-white font-semibold py-3">Enviar</button>
      </div>
      <p class="text-[0.80rem] font-light text-slate-500">
        Yo acepto los terminos y condiciones de InAdvance
      </p>
    </div>
  </div>
</template>

<style scoped>
.fade-in-once {
  opacity: 0;
  transform: translateY(30px);
  scale: 0.5;
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    scale: 1;
    transform: translateY(0);
  }
}
</style>
