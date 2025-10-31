<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ColapseHeader from './components/home/ColapseHeader.vue'
import { ref } from 'vue'
import FormModal from './components/modal/FormModal.vue'
import { useModalStore } from './stores/useModalStore'
const menu = ref(false)

const handleMenu = () => {
  menu.value = !menu.value
}

const useModal = useModalStore()
</script>

<template>
  <div class="relative">
    <header class="sticky top-0 left-0 z-10 bg-white">
      <nav class="flex justify-between px-5 py-3 font-bold text-slate-700 text-[0.90rem]">
        <div class="flex items-center gap-7">
          <RouterLink to="/"> InAdvance </RouterLink>
          <div class="flex gap-7 items-center max-md:hidden">
            <ColapseHeader
              title="Comprar"
              :subtitles="[
                'Casas en venta',
                'Nuevas casas',
                'Casas abiertas',
                'Recientemente vendidas',
              ]"
              router=""
            />
            <ColapseHeader
              title="Rentar"
              :subtitles="['Todas las disponibles', 'Departamentos en renta', 'Casas para rentar']"
              router=""
            />
            <ColapseHeader title="Hipotecas" :subtitles="['Casas en venta']" router="" />
          </div>
        </div>

        <div class="flex items-center">
          <button @click="handleMenu" class="text-slate-700 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill="currentColor"
              class="w-6 h-6"
            >
              <!-- Font Awesome Bars icon -->
              <path
                d="M96 160C96 142.3 110.3 128 128 128H512C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192H128C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288H512C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352H128C110.3 352 96 337.7 96 320zM96 480C96 462.3 110.3 448 128 448H512C529.7 448 544 462.3 544 480C544 497.7 529.7 512 512 512H128C110.3 512 96 497.7 96 480z"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        :class="`fixed top-0 right-0 z-10 h-screen w-[300px] p-3 text-slate-50 ${menu ? 'translate-0 bg-slate-800 ' : ' translate-x-[100vh] '}`"
      >
        <button @click="handleMenu" class="text-4xl cursor-pointer text-end w-full">x</button>
        <p>
          Menu <br />
          hamburguesa
        </p>
      </div>
    </header>
    <main class="px-5">
      <RouterView />
    </main>
    <div
      class="fixed top-0 h-full left-0 z-20 flex justify-center items-center bg-slate-700/30 w-full"
      v-if="useModal.viewModal"
    >
      <FormModal />
    </div>
  </div>
</template>
