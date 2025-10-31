<script setup lang="ts">
import { useModalStore } from '@/stores/useModalStore'
import { useRoute } from 'vue-router'

const route = useRoute()

const department = route.params.department
const city = route.params.city

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
  {
    precio: 98000,
    dormitorios: 2,
    banos: 2,
    ubicacion: 'Equipetrol, Santa Cruz',
    images: 'https://i.pinimg.com/1200x/78/5a/f5/785af5c1e469c435a68f62ba980b4a2b.jpg',
  },
  {
    precio: 65000,
    dormitorios: 1,
    banos: 1,
    ubicacion: 'El Alto, La Paz',
    images: 'https://i.pinimg.com/1200x/2f/b1/6e/2fb16e469739c7e2994bb914101aebd6.jpg',
  },
  {
    precio: 220000,
    dormitorios: 4,
    banos: 3,
    ubicacion: 'Urubo, Santa Cruz',
    images: 'https://i.pinimg.com/1200x/2f/b1/6e/2fb16e469739c7e2994bb914101aebd6.jpg',
  },
  {
    precio: 75000,
    dormitorios: 2,
    banos: 1,
    ubicacion: 'Cochabamba Centro',
    images: 'https://i.pinimg.com/1200x/2f/b1/6e/2fb16e469739c7e2994bb914101aebd6.jpg',
  },
  {
    precio: 140000,
    dormitorios: 3,
    banos: 2,
    ubicacion: 'Tarija, San Luis',
    images: 'https://i.pinimg.com/1200x/2f/b1/6e/2fb16e469739c7e2994bb914101aebd6.jpg',
  },
  {
    precio: 110000,
    dormitorios: 3,
    banos: 2,
    ubicacion: 'Sucre, Barrio Petrolero',
    images: 'https://i.pinimg.com/1200x/2f/b1/6e/2fb16e469739c7e2994bb914101aebd6.jpg',
  },
  {
    precio: 56000,
    dormitorios: 1,
    banos: 1,
    ubicacion: 'Warnes, Santa Cruz',
    images: 'https://i.pinimg.com/1200x/2f/b1/6e/2fb16e469739c7e2994bb914101aebd6.jpg',
  },
  {
    precio: 185000,
    dormitorios: 4,
    banos: 3,
    ubicacion: 'Sopocachi, La Paz',
    images: 'https://i.pinimg.com/1200x/2f/b1/6e/2fb16e469739c7e2994bb914101aebd6.jpg',
  },
]

const useModal = useModalStore()

const handleViewModal = () => {
  useModal.setMode(!useModal.viewModal)
}
</script>

<template>
  <div class="flex w-full gap-2">
    <div class="grid grid-cols-2 gap-2 w-full">
      <div class="col-span-2 flex flex-col gap-3 py-3">
        <h1 class="text-xl font-bold">
          Departamentos para rentar en : {{ city }} ({{ department }})
        </h1>
        <p class="font-light text-[0.90rem]">3341 resultados obtenidos</p>
      </div>
      <div
        v-for="(property, index) in propiedades"
        class="col-span-1 flex flex-col gap-2"
        :key="index"
      >
        <div class="h-[300px] rounded-xl relative overflow-hidden">
          <div
            class="w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
            :style="{
              backgroundImage: `url(${property.images})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              backgroundPositionY: '90%',
            }"
          ></div>
        </div>
        <div>
          <p class="font-bold text-lg">$ {{ property.precio }}</p>
          <div class="text-sm flex gap-2 text-slate-600">
            <span class="w-[20px] h-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M64 96C81.7 96 96 110.3 96 128L96 352L320 352L320 224C320 206.3 334.3 192 352 192L512 192C565 192 608 235 608 288L608 512C608 529.7 593.7 544 576 544C558.3 544 544 529.7 544 512L544 448L96 448L96 512C96 529.7 81.7 544 64 544C46.3 544 32 529.7 32 512L32 128C32 110.3 46.3 96 64 96zM144 256C144 220.7 172.7 192 208 192C243.3 192 272 220.7 272 256C272 291.3 243.3 320 208 320C172.7 320 144 291.3 144 256z"
                />
              </svg>
            </span>
            <p>{{ property.dormitorios }} Dormitorios</p>
            <span class="w-[20px] h-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M120 64C106.7 64 96 74.7 96 88C96 101.3 106.7 112 120 112L128 112L128 260.9C126.1 262.3 124.2 263.8 122.4 265.3C106.9 278.5 96 296.9 96 319.9C96 366.8 110.3 404 133 432.4C147.2 450.1 164.1 463.7 181.5 474.2L161.6 533.9C158.3 543.7 160 554.4 166 562.7C172 571 181.7 576 192 576L448 576C458.3 576 467.9 571.1 474 562.7C480.1 554.3 481.7 543.6 478.4 533.9L458.6 474.4C476 463.9 492.9 450.3 507.1 432.6C529.8 404.2 544.1 367.1 544.1 320.1C544.1 297 533.2 278.6 517.7 265.5C515.9 264 514 262.5 512.1 261.1L512.1 112.2L520.1 112.2C533.4 112.2 544.1 101.5 544.1 88.2C544.1 74.9 533.3 64 520 64L120 64zM192 144C192 135.2 199.2 128 208 128L240 128C248.8 128 256 135.2 256 144C256 152.8 248.8 160 240 160L208 160C199.2 160 192 152.8 192 144zM320 352C231.6 352 160 337.7 160 320C160 302.3 231.6 288 320 288C408.4 288 480 302.3 480 320C480 337.7 408.4 352 320 352z"
                />
              </svg>
            </span>
            <p class="text-sm">{{ property.banos }} Baños</p>
          </div>
          <p class="text-sm text-slate-600">
            {{ property.ubicacion }}
          </p>
          <button
            @click="handleViewModal"
            class="px-3 my-3 py-1 text-blue-600 font-semibold text-sm rounded-xl hover:bg-blue-600/10 border-2 border-blue-600 w-full"
          >
            Revisar disponibilidad
          </button>
        </div>
      </div>
    </div>

    <div class="basis-[70%] relative px-5">
      <iframe
        class="w-full h-screen rounded-2xl sticky top-0 right-0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.197343039146!2d-68.11929392499937!3d-16.500260240162683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edfcb4e0d41af%3A0x9965f49f9b8adf7!2sPlaza%20Murillo!5e0!3m2!1ses!2sbo!4v1730314234560!5m2!1ses!2sbo"
      ></iframe>
    </div>
  </div>
</template>
