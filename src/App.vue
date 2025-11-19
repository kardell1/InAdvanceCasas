<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import ColapseHeader from './components/home/ColapseHeader.vue'
import { ref } from 'vue'

import { useModalStore } from './stores/useModalStore'
import { watch } from 'vue'
import InputSearchHome from './components/home/InputSearchHome.vue'
import ColapseItem from './components/departaments/ColapseItem.vue'
import { useModalFactory } from './components/home/ModalFactory'

const menu = ref(false)

const handleMenu = () => {
  viewMenu.value = -1
  menu.value = !menu.value
}

const useModal = useModalStore()

const data = [
  {
    titulo: 'Comprar',
    subtitulo: [
      { label: 'Casas en venta' },
      { label: 'Departamentos en venta' },
      { label: 'Terrenos y lotes' },
      { label: 'Proyectos nuevos' },
    ],
  },
  {
    titulo: 'Rentar',
    subtitulo: [
      { label: 'Casas en alquiler' },
      { label: 'Departamentos en alquiler' },
      { label: 'Oficinas y locales comerciales' },
      { label: 'Alquiler temporal o vacacional' },
    ],
  },
  {
    titulo: 'Información local',
    subtitulo: [
      { label: 'Barrios y zonas destacadas' },
      { label: 'Colegios y servicios cercanos' },
      { label: 'Transporte y accesibilidad' },
      { label: 'Seguridad y calidad de vida' },
    ],
  },
  {
    titulo: 'Recursos adicionales',
    subtitulo: [
      { label: 'Calculadora hipotecaria' },
      { label: 'Guía para compradores' },
      { label: 'Guía para arrendadores' },
      { label: 'Preguntas frecuentes' },
    ],
  },
]

const viewMenu = ref(0)
const handleView = (id: number) => {
  viewMenu.value = id
}
const route = useRoute()

const currentRoute = ref(true)

watch(
  () => route.fullPath,
  () => {
    route.fullPath != '/' ? (currentRoute.value = false) : (currentRoute.value = true)
    // console.log('valor es:', currentRoute.value)
  },
  { immediate: true },
)

const currentElement = ref('')
const handleViewOptions = (event: Event) => {
  const element = event.currentTarget as HTMLElement
  const nombre = element.getAttribute('element') || '' // evita null
  currentElement.value = nombre
  // console.log('El name es:', nombre)
}

const { HeroFa } = useModalFactory()

const handleViewModal = () => {
  useModal.setMode(!useModal.viewModal, 'register')
}
</script>

<template>
  <div class="relative font-[Ubuntu]">
    <header class="sticky top-0 left-0 z-10 bg-white">
      <nav class="flex justify-between px-5 py-3 font-bold text-slate-700 text-[0.90rem]">
        <!-- header izquierdo -->
        <div class="flex items-center gap-7 w-full">
          <RouterLink to="/"> InAdvance </RouterLink>
          <!-- input de busqueda  -->
          <div v-if="!currentRoute" class="flex-1">
            <InputSearchHome
              width="w-full"
              background="bg-slate-100"
              icon_size="w-5 h-5"
              padding="p-3"
            />
          </div>
          <!-- opciones del header -->
          <div :class="`flex items-center ${currentRoute ? '' : 'max-lg:hidden'}`">
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
        <!-- header derecho -->
        <div
          :class="`flex items-center gap-3  max-lg:hidden ${currentRoute ? '' : 'max-lg:hidden'} `"
        >
          <RouterLink
            to="/"
            class="hover:bg-blue-500 text-nowrap transition-all duration-100 hover:text-slate-50 p-2 rounded-md"
          >
            Casas guardadas
          </RouterLink>
          <RouterLink
            to="/"
            class="hover:bg-blue-500 transition-all text-nowrap duration-100 hover:text-slate-50 p-2 rounded-md"
          >
            Busquedas guardadas
          </RouterLink>
          <button
            @click="handleViewModal"
            class="hover:bg-slate-200 border-2 text-nowrap border-slate-300 rounded-lg p-2"
          >
            Registrate o Inicia sesion
          </button>
        </div>
        <!-- boton de menu -->
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
      </nav>
      <!-- sidebar -->
      <div
        :class="`fixed top-0 right-0 z-20 h-screen max-h-screen overflow-y-auto w-[400px] py-3 px-7 text-slate-50 ${menu ? 'translate-0 bg-slate-700 ' : ' translate-x-[100vh] '}`"
      >
        <div class="flex justify-end">
          <button
            @click="handleMenu"
            class="hover:text-red-400 text-4xl cursor-pointer text-end w-min"
          >
            x
          </button>
        </div>
        <ul class="flex flex-col gap-6 font-bold">
          <button class="text-start relative cursor-pointer hover:text-blue-400">
            Registrate o Inicia sesion
          </button>
          <button
            class="text-start relative cursor-pointer hover:text-blue-400"
            :key="index"
            v-for="(values, index) in data"
            @click="handleView(index)"
          >
            {{ values.titulo }}
            <div
              :class="{
                'py-3 font-light hover:underline': true,
                block: index === viewMenu,
                hidden: index !== viewMenu,
              }"
              :key="i"
              v-for="(sub, i) in values.subtitulo"
            >
              {{ sub.label }}
            </div>
          </button>
        </ul>
      </div>
      <!-- opciones de filtrado -->
      <div v-if="!currentRoute" class="flex gap-2 px-4 py-2">
        <ColapseItem
          title="Todos los precios"
          @focusin="handleViewOptions"
          :current-element="currentElement"
          element="prices"
        >
          <div class="p-2 rounded-b-lg shadow-lg flex flex-col gap-2">
            <p class="text-[0.90rem] font-light text-slate-700">Rangos de precios</p>
            <div class="flex gap-2 items-center">
              <select name="hola" id="" class="p-2 border-2 border-slate-400 rounded-lg">
                <option value="">Sin minimo</option>
              </select>
              -
              <select name="hola" id="" class="p-2 border-2 border-slate-400 rounded-lg">
                <option value="">Sin maximo</option>
              </select>
            </div>
          </div>
        </ColapseItem>
        <ColapseItem
          title="Dormitorios"
          @focusin="handleViewOptions"
          :current-element="currentElement"
          element="rooms"
        >
          <div class="p-2 rounded-b-lg shadow-lg flex flex-col gap-2">
            <p class="text-[0.90rem] font-light text-slate-700">Todos los dormitorios</p>
            <div class="flex gap-2 items-center">
              <span
                class="border-2 border-slate-500 rounded-lg px-2 py-1 font-semibold hover:bg-slate-200"
                >1+</span
              >
              <span
                class="border-2 border-slate-500 rounded-lg px-2 py-1 font-semibold hover:bg-slate-200"
                >2+</span
              >
              <span
                class="border-2 border-slate-500 rounded-lg px-2 py-1 font-semibold hover:bg-slate-200"
                >3+</span
              >
              <span
                class="border-2 border-slate-500 rounded-lg px-2 py-1 font-semibold hover:bg-slate-200"
                >4+</span
              >
              <span
                class="border-2 border-slate-500 rounded-lg px-2 py-1 font-semibold hover:bg-slate-200"
                >5+</span
              >
            </div>
          </div>
        </ColapseItem>
      </div>
    </header>
    <!-- donde se renderiza el main  -->
    <main class="px-5">
      <RouterView />
    </main>
    <!-- modal seccion -->
    <div
      class="fixed top-0 h-full left-0 z-20 flex justify-center items-center bg-slate-700/30 w-full"
      v-if="useModal.viewModal"
    >
      <component :is="HeroFa" />
    </div>
  </div>
</template>
