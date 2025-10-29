<script setup lang="ts">
// recupera el nombre del boton
// recupera el titulo de los sub titulos
// recupera la ruta de donde debe redireccionar el link
defineProps<{
  title: string
  subtitles: string[]
  router: string
}>()
</script>

<template>
  <div class="group">
    <div class="group-hover:bg-blue-500 group-hover:text-slate-50 p-2 rounded-md">
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
            class="hover:bg-slate-300 p-3 hover:underline transition-background duration-50 ease-in-out font-light"
          >
            {{ subtitle }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
