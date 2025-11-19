<script setup lang="ts">
import { watch } from 'vue'
import { ref } from 'vue'

type subtitleProp = {
  label: string
}
const props = defineProps<{
  title: string
  element: string
  currentElement: string
  subtitle?: subtitleProp[]
}>()
const view = ref(false)
watch(
  () => props.currentElement,
  (nuevoValor) => {
    if (nuevoValor !== props.element) {
      view.value = false
    }
  },
)

const handleViewOptions = () => {
  view.value = !view.value
}
</script>

<template>
  <div :element="element" v-bind="$attrs" class="group border border-slate-400 w-max rounded-md">
    <button
      @click="handleViewOptions()"
      :name="title"
      class="group-hover:bg-slate-300/50 text-slate-800 font-bold p-2 rounded-md px-4 flex items-center gap-2"
    >
      {{ title }}
      <span class="w-5 h-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
          <path
            d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
          />
        </svg>
      </span>
    </button>
    <div class="relative">
      <div class="absolute top-0 left-0">
        <ul
          :class="`list-inside space-y-1 ${view ? 'block' : 'hidden'} w-max bg-white rounded-sm shadow-2xl`"
        >
          <!-- este elemento deberia ser el hidden -->
          <slot />
        </ul>
      </div>
    </div>
  </div>
</template>
