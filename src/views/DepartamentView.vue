<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useModalStore } from '@/stores/useModalStore'

const route = useRoute()
const department = route.params.department
const city = route.params.city ?? ''
const options = computed(() => route.params.option)

const propiedades = [
  {
    precio: 85000,
    dormitorios: 2,
    banos: 1,
    ubicacion: 'Murillo, La Paz',
    images: 'https://i.pinimg.com/1200x/54/25/0a/54250ab424edf0d8e5af079e1d4bc2d9.jpg',
  },
  {
    precio: 125000,
    dormitorios: 3,
    banos: 2,
    ubicacion: 'Calacoto, La Paz',
    images: 'https://i.pinimg.com/1200x/f8/53/00/f85300b2fe5036ac428ea3ad7ab75c73.jpg',
  },
  // ... el resto de propiedades
]

const useModal = useModalStore()
const handleViewModal = () => {
  useModal.setMode(!useModal.viewModal, 'buyRoom')
}

// Lista de lugares random para el mapa
const places = [
  'Plaza Murillo, La Paz',
  'Cristo Redentor, Santa Cruz',
  'Salar de Uyuni',
  'Plaza 24 de Septiembre, Santa Cruz',
  'Estadio Hernando Siles, La Paz',
  'Parque Urbano Central, La Paz',
  'Lago Titicaca, Copacabana',
  'Terminal de Buses, Cochabamba',
]

const iframeSrc = ref('')
onMounted(() => {
  const randomIndex = Math.floor(Math.random() * places.length)
  const place = encodeURIComponent(places[randomIndex] || '') // <-- aquí
  iframeSrc.value = `https://maps.google.com/maps?q=${place}&z=14&output=embed`
})
</script>

<template>
  <div class="flex w-full gap-2">
    <!-- Sección de propiedades -->
    <div class="basis-[55%] grid grid-cols-2 gap-2 w-full">
      <div class="col-span-2 flex flex-col gap-3 py-3">
        <h1 class="text-xl font-bold">
          Departamentos para rentar en : {{ city }} {{ department }} {{ options }}
        </h1>
        <p class="font-light text-[0.90rem]">3341 resultados obtenidos</p>
      </div>
      <div
        v-for="(property, index) in propiedades"
        :key="index"
        class="col-span-1 flex flex-col gap-2"
      >
        <div class="h-[300px] rounded-xl relative overflow-hidden">
          <div
            class="w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
            :style="{
              backgroundImage: `url(${property.images})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPositionY: '90%',
            }"
          ></div>
        </div>
        <div>
          <p class="font-extrabold text-lg">$ {{ property.precio }}</p>
          <div class="text-sm flex gap-2 text-slate-600">
            <span><!-- ícono dormitorios --></span>
            <p>{{ property.dormitorios }} Dormitorios</p>
            <span><!-- ícono baños --></span>
            <p class="text-sm">{{ property.banos }} Baños</p>
          </div>
          <p class="text-sm text-slate-600">{{ property.ubicacion }}</p>
          <button
            @click="handleViewModal"
            class="px-3 my-3 py-1 text-blue-600 font-semibold text-sm rounded-xl hover:bg-blue-600/10 border-2 border-blue-600 w-full"
          >
            Revisar disponibilidad
          </button>
        </div>
      </div>
    </div>

    <!-- Mapa -->
    <div class="flex-1 relative px-5">
      <iframe
        class="w-full h-[80vh] rounded-2xl sticky top-20 right-0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        :src="iframeSrc"
      ></iframe>
    </div>
  </div>
</template>
