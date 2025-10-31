<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="group">
    <div class="group-hover:bg-blue-500 group-hover:text-slate-50 p-2 rounded-md">
      {{ title }}
    </div>
    <div class="relative">
      <div class="absolute top-0 left-0">
        <div
          class="list-inside space-y-1 hidden group-hover:block w-max bg-white rounded-sm shadow-2xl"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
