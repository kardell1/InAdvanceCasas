<script setup lang="ts">
// import mainImage from '@/assets/MainImage.jpg'
import ButtonComponent from './ButtonComponent.vue'
import InputSearchHome from './InputSearchHome.vue'
</script>

<template>
  <div
    class="h-[75vh] bg-orange-500 rounded-2xl flex justify-center items-center text-slate-50 flex-col gap-10 bg-top bg-no-repeat max-lg:bg-size-[100%_100%] bg-cover max-sm:bg-cover"
    :style="{
      backgroundImage: `url(https://i.pinimg.com/1200x/a6/2e/8c/a62e8c507e08efc469bb37d481adda4e.jpg)`,
    }"
  >
    <p class="text-6xl font-bold text-center max-md:text-4xl">
      Descubre el lugar <br />
      de tus sueños
    </p>
    <div class="flex items-center flex-col gap-2">
      <div class="bg-slate-800/50 w-max rounded-sm">
        <ButtonComponent title="Alquilar" router="buy" />
        <ButtonComponent title="Comprar" router="rent" />
      </div>
      <InputSearchHome
        width="w-[80vh]  max-sm:w-auto "
        background="bg-white"
        icon_size="w-7 h-7"
        padding="p-4"
      />
    </div>
  </div>
</template>
