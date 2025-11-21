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
    class="fade-in-once relative p-5 bg-white shadow-2xs w-[30%] rounded-sm max-h-[80%] overflow-y-scroll"
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
      <!-- redes sociales  -->
      <span class="flex items-center justify-center">
        <span class="flex-1 bg-slate-300 h-[2px]"></span>
        <span class="px-2 text-slate-400">o</span>
        <span class="flex-1 bg-slate-300 h-[2px]"></span>
      </span>
      <div>
        <button
          class="bg-sky-700 w-full rounded-xl text-white font-semibold flex items-center justify-center gap-4 py-3"
        >
          <span class="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
              <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"
              />
            </svg>
          </span>
          Continua con Facebook
        </button>
      </div>
      <div>
        <button
          class="w-full rounded-xl text-slate-700 font-semibold py-3 border-2 border-slate-300 flex items-center justify-center gap-4"
        >
          <span class="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
              <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"
              />
            </svg>
          </span>
          Acceder con Gmail
        </button>
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
