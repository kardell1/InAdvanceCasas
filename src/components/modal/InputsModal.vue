<script setup lang="ts">
// debo recibir place holder
defineProps<{
  placeholder: string
}>()
//dejamps el label por si necesitamos ingresar algun icon
</script>

<template>
  <label
    class="border border-slate-300 p-3 w-full rounded-sm focus-within:outline-blue-600 focus-within:outline-4 transition-all duration-100 ease-in-out"
  >
    <input type="text" :placeholder="placeholder" class="outline-0 w-full" />
  </label>
</template>
