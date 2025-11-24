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
    <h2 class="pb-5 text-center font-bold">Contacto esta propiedad</h2>
    <button
      @click="handleCloseModal"
      class="hover:bg-slate-300 rounded-full absolute top-0 right-0 px-2 py-1 m-5"
    >
      X
    </button>
    <div class="flex flex-col gap-5">
      <InputsModal placeholder="Nombre" />
      <InputsModal placeholder="Correo electronico" />
      <InputsModal placeholder="Celular" />
      <div>
        <textarea
          name=""
          id=""
          class="w-full focus-within:outline-blue-600 focus-within:outline-4 transition-all duration-100 ease-in-out rounded-sm border border-slate-300"
        >
 Mi text area  </textarea
        >
      </div>

      <div>
        <button class="bg-red-600 w-full rounded-xl text-white font-semibold py-3 cursor-pointer">
          Revisa su disponibilidad
        </button>
      </div>
      <p class="text-[0.80rem] font-light text-slate-500">
        Estoy interesado en esta propiedad en alquiler y me gustaría programar una visita. Por
        favor, hágame saber cuándo sería posible.
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
