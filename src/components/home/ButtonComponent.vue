<script setup lang="ts">
import { useRouterHome } from '@/stores/useRouterHome'

const props = defineProps<{
  title: string
  router: string
}>()
const routerHome = useRouterHome()
const handleClick = () => {
  routerHome.setMode(props.router)
}
</script>

<template>
  <button
    @click="handleClick"
    class="px-4 py-2 text-white font-semibold rounded hover:bg-blue-600 cursor-pointer"
  >
    {{ title }}
  </button>
</template>
