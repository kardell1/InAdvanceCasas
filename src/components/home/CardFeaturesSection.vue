<script setup lang="ts">
defineProps<{
  title: string
  text: string
  image: string
  buttonTitle: string
}>()
</script>

<template>
  <div class="w-[25%] max-md:w-auto flex flex-col gap-5">
    <div class="flex justify-center">
      <img
        src="https://i.pinimg.com/1200x/5b/fe/3d/5bfe3dd92ac7f99cfc08fb77b062acd0.jpg"
        alt=""
        width="200"
        height="200"
      />
    </div>
    <p class="text-center text-2xl text-slate-700 font-extrabold">{{ title }}</p>
    <p class="text-center">{{ text }}</p>
    <div class="flex justify-center">
      <button
        class="px-4 py-2 text-white font-semibold rounded bg-blue-600 hover:text-blue-600 hover:bg-slate-50 border-2 border-blue-600 transition-all duration-150"
      >
        {{ title }}
      </button>
    </div>
  </div>
</template>
