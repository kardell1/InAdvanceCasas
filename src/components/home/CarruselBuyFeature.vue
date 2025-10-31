<script setup lang="ts">
import router from '@/router'

const cities = [
  // La Paz
  {
    city: 'Murillo',
    departament: 'LP',
    image: 'https://i.pinimg.com/1200x/10/50/13/1050134123f09edee11da9d7f46b2481.jpg',
  },
  {
    city: 'El Alto',
    departament: 'LP',
    image: 'https://i.pinimg.com/1200x/1c/d6/83/1cd683bc47034376c2814e111051a0ee.jpg',
  },
  {
    city: 'Viacha',
    departament: 'LP',
    image: 'https://i.pinimg.com/1200x/0b/6d/b0/0b6db0c213255bffbf1c43a53982151f.jpg',
  },
  {
    city: 'Achacachi',
    departament: 'LP',
    image: 'https://i.pinimg.com/1200x/43/28/79/432879138e5a34425941614a7504d917.jpg',
  },
  {
    city: 'Copacabana',
    departament: 'LP',
    image: 'https://i.pinimg.com/1200x/b7/b9/0e/b7b90ee8a9574fe6de7320cd3a41339b.jpg',
  },

  // Santa Cruz
  {
    city: 'Montero',
    departament: 'SC',
    image: 'https://i.pinimg.com/1200x/c8/fc/5f/c8fc5f0312c04354bb2921cea7c800cc.jpg',
  },
  {
    city: 'Montero',
    departament: 'SC',
    image: 'https://i.pinimg.com/1200x/10/50/13/1050134123f09edee11da9d7f46b2481.jpg',
  },
  {
    city: 'Warnes',
    departament: 'SC',
    image: 'https://i.pinimg.com/1200x/10/50/13/1050134123f09edee11da9d7f46b2481.jpg',
  },
  {
    city: 'Cotoca',
    departament: 'SC',
    image: 'https://i.pinimg.com/1200x/10/50/13/1050134123f09edee11da9d7f46b2481.jpg',
  },
]
const goToCity = (city: string, department: string) => {
  router.push({ name: 'departments', params: { city, department } })
}
</script>

<template>
  <div class="scroll-container py-5">
    <div class="w-max grid grid-rows-2 grid-flow-col gap-4">
      <div
        v-for="(city, index) in cities"
        :key="index"
        @click="goToCity(city.city, city.departament)"
        :class="[
          'rounded-xl w-[370px] relative overflow-hidden ',
          index % 5 === 0 ? '  row-span-2  ' : ' h-[250px] ',
        ]"
      >
        <div
          class="w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
          :style="{
            backgroundImage: `url(${city.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundPositionY: '90%',
          }"
        ></div>

        <p class="text-slate-50 absolute top-0 left-0 font-extrabold text-xl p-3">
          {{ city.city }} , {{ city.departament }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-container {
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
}

.scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
</style>
