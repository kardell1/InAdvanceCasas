<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useModalStore } from '@/stores/useModalStore'
import departaments from '../data/departaments.json'
const route = useRoute()
const department = route.params.department
const city = route.params.city ?? ''
const options = computed(() => route.params.option)

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
        v-for="(property, index) in departaments"
        :key="index"
        class="col-span-1 flex flex-col gap-2"
      >
        <div class="h-[300px] rounded-xl relative overflow-hidden">
          <!-- imagen del card -->
          <div
            class="w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
            :style="{
              backgroundImage: `url(${property.url_image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              backgroundPositionY: '90%',
            }"
          ></div>
          <!-- aca dentro el icon -->
          <div class="absolute top-2 right-2 w-10 h-10 text-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
              <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"
              />
            </svg>
          </div>
        </div>
        <!-- texto descriptivo de la propiedad  -->
        <div>
          <p class="font-extrabold text-lg">$ {{ property.price }}</p>
          <div class="text-sm flex gap-2 text-slate-600">
            <span class="w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M64 96C81.7 96 96 110.3 96 128L96 352L320 352L320 224C320 206.3 334.3 192 352 192L512 192C565 192 608 235 608 288L608 512C608 529.7 593.7 544 576 544C558.3 544 544 529.7 544 512L544 448L96 448L96 512C96 529.7 81.7 544 64 544C46.3 544 32 529.7 32 512L32 128C32 110.3 46.3 96 64 96zM144 256C144 220.7 172.7 192 208 192C243.3 192 272 220.7 272 256C272 291.3 243.3 320 208 320C172.7 320 144 291.3 144 256z"
                />
              </svg>
            </span>
            <p>{{ property.rooms }} Dormitorios</p>
            <span class="w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M120 64C106.7 64 96 74.7 96 88C96 101.3 106.7 112 120 112L128 112L128 260.9C126.1 262.3 124.2 263.8 122.4 265.3C106.9 278.5 96 296.9 96 319.9C96 366.8 110.3 404 133 432.4C147.2 450.1 164.1 463.7 181.5 474.2L161.6 533.9C158.3 543.7 160 554.4 166 562.7C172 571 181.7 576 192 576L448 576C458.3 576 467.9 571.1 474 562.7C480.1 554.3 481.7 543.6 478.4 533.9L458.6 474.4C476 463.9 492.9 450.3 507.1 432.6C529.8 404.2 544.1 367.1 544.1 320.1C544.1 297 533.2 278.6 517.7 265.5C515.9 264 514 262.5 512.1 261.1L512.1 112.2L520.1 112.2C533.4 112.2 544.1 101.5 544.1 88.2C544.1 74.9 533.3 64 520 64L120 64zM192 144C192 135.2 199.2 128 208 128L240 128C248.8 128 256 135.2 256 144C256 152.8 248.8 160 240 160L208 160C199.2 160 192 152.8 192 144zM320 352C231.6 352 160 337.7 160 320C160 302.3 231.6 288 320 288C408.4 288 480 302.3 480 320C480 337.7 408.4 352 320 352z"
                />
              </svg>
            </span>
            <p class="text-sm">{{ property.bathrooms }} Baños</p>
          </div>
          <p class="text-sm text-slate-600">{{ property.direction }}</p>
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
