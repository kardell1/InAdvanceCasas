<script setup lang="ts">
import router from '@/router'
// recupera el nombre del boton
// recupera el titulo de los sub titulos
// recupera la ruta de donde debe redireccionar el link
defineProps<{
  title: string
  subtitles: string[]
}>()

const handleNav = (option: string) => {
  router.push({ name: 'departmentsOptions', params: { option } })
}
</script>

<template>
  <div class="group">
    <div
      class="group-hover:bg-blue-500 group-hover:text-slate-50 py-2 rounded-md transition-all duration-100 ease-in-out px-4"
    >
      {{ title }}
    </div>
    <div class="relative">
      <div class="absolute top-0 left-0">
        <ul
          v-if="subtitles.length > 0"
          class="list-inside space-y-1 hidden group-hover:block w-max bg-white rounded-sm shadow-2xl"
        >
          <li
            v-for="(subtitle, index) in subtitles"
            :key="index"
            class="hover:bg-slate-300 transition-background duration-50 ease-in-out font-normal cursor-pointer"
          >
            <button
              @click="handleNav(subtitle)"
              class="hover:underline py-2 px-3 text-start text-[0.90rem] cursor-pointer w-full"
            >
              {{ subtitle }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
