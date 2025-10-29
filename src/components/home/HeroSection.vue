<script setup lang="ts">
import mainImage from '@/assets/MainImage.jpg'
import ButtonComponent from './ButtonComponent.vue'
</script>

<template>
  <div
    class="h-[80vh] bg-orange-500 rounded-2xl flex justify-center items-center text-slate-50 flex-col gap-10"
    :style="{
      backgroundImage: `url(${mainImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPositionY: '90%',
    }"
  >
    <p class="text-5xl font-medium text-center">
      Descubre el lugar <br />
      de tus suenos
    </p>
    <div class="flex items-center flex-col gap-2">
      <div class="bg-slate-800/50 w-max">
        <ButtonComponent title="Alquilar" router="buy" />
        <ButtonComponent title="Comprar" router="rent" />
      </div>
    </div>
  </div>
</template>
