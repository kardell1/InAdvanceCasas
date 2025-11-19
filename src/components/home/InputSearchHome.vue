<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  width: string
  background: string
  padding: string
  icon_size: string
}>()
const view_component = ref(false)
const handleViewComponent = () => {
  view_component.value = !view_component.value
}

// ciudades
const cityes = [
  'Murillo',
  'San pedro',
  'San miguel',
  'Santa Ana',
  'San José',
  'La Victoria',
  'San Carlos',
  'El Carmen',
  'La Esperanza',
  'San Andrés',
  'Villa Nueva',
  'San Juan',
  'Santa María',
]
// el tamano debe ser modificable , el ancho
// el background debe ser modificable
// con el padding del button controlamos el tamano
// tambien necesitamos pasar el tamano al icon
// los demas navs deben borrarse cuando la pantalla sea demasiado corta
//
</script>

<template>
  <div class="relative">
    <label for="" :class="`${background} flex justify-between rounded-xl ${width}`">
      <input
        @focus="handleViewComponent"
        type="text"
        class="text-slate-800 px-3 w-full focus:outline-none"
        placeholder="Busca en una zona especifica"
      />
      <button
        :class="` text-white ${padding} cursor-pointer hover:bg-red-700 rounded-r-xl  ${view_component ? 'bg-transparent' : 'bg-red-600'}`"
      >
        <span class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="currentColor"
            :class="`${icon_size}`"
          >
            <path
              d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
            />
          </svg>
        </span>
      </button>
    </label>

    <!-- es el segundo elemento que se carga dentro  -->

    <!-- dentro del label deberia cargarse  -->
    <div
      :class="`bg-white rounded-xl w-full ${view_component ? 'absolute -top-1 left-0' : 'hidden'}`"
    >
      <label for="" :class="` p-[0.4rem] flex justify-between ${width} `">
        <input
          type="text"
          class="text-slate-800 px-3 w-full focus:outline-none ring-blue-600 ring-4 rounded-lg"
          placeholder="Busca en una zona especifica"
        />
        <button @click="handleViewComponent" class="text-blue-600 p-4 cursor-pointer">
          cancelar
        </button>
      </label>
      <div class="max-h-[400px] overflow-y-scroll">
        <ul class="text-slate-600 py-2 flex flex-col">
          <!-- este boton toma la ubicacion -->
          <li
            class="text-blue-600 border-b-3 border-slate-100 pl-6 flex items-center gap-3 py-3 hover:bg-slate-100"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              fill="currentColor"
            >
              <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M541.9 139.5C546.4 127.7 543.6 114.3 534.7 105.4C525.8 96.5 512.4 93.6 500.6 98.2L84.6 258.2C71.9 263 63.7 275.2 64 288.7C64.3 302.2 73.1 314.1 85.9 318.3L262.7 377.2L321.6 554C325.9 566.8 337.7 575.6 351.2 575.9C364.7 576.2 376.9 568 381.8 555.4L541.8 139.4z"
              />
            </svg>
            Ubicacion actual
          </li>
          <!-- este boton cambia el contenido a dos selects -->
          <li
            class="text-blue-600 pl-6 border-b-3 border-slate-100 flex items-center gap-3 py-3 hover:bg-slate-100"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              fill="currentColor"
            >
              <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M541.9 139.5C546.4 127.7 543.6 114.3 534.7 105.4C525.8 96.5 512.4 93.6 500.6 98.2L84.6 258.2C71.9 263 63.7 275.2 64 288.7C64.3 302.2 73.1 314.1 85.9 318.3L262.7 377.2L321.6 554C325.9 566.8 337.7 575.6 351.2 575.9C364.7 576.2 376.9 568 381.8 555.4L541.8 139.4z"
              />
            </svg>
            Buscar por tiempo de conduccion
          </li>
          <!-- desde aca mapeamos las zonas -->
          <li
            class="border-b-3 border-slate-100 pl-6 flex items-center gap-3 py-3 hover:bg-slate-100"
            :key="index"
            v-for="(city, index) in cityes"
          >
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
              />
            </svg>
            {{ city }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
