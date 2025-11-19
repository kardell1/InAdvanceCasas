<script setup lang="ts"></script>

<template>
  <div class="px-40 flex flex-col gap-10">
    <div class="flex gap-20">
      <ul class="flex gap-3 flex-col">
        <li class="font-semibold text-xl">Recursos</li>
        <li class="hover:underline">Nuevas ofertas</li>
        <li class="hover:underline">Aprende a arrendar</li>
      </ul>
      <ul class="flex gap-3 flex-col">
        <li class="font-semibold text-xl">Sobre nosotros</li>
        <li class="hover:underline">Quienes somos?</li>
        <li class="hover:underline">Nuestra vision</li>
        <li class="hover:underline">Trabaja con nosotros</li>
        <li class="hover:underline">Conoce mas de nuestros servicios</li>
      </ul>
      <ul class="flex gap-3 flex-col">
        <li class="font-semibold text-xl">Legal</li>
        <li class="hover:underline">Terminos de uso</li>
        <li class="hover:underline">Privacidad</li>
        <li class="hover:underline">Accesibilidad</li>
        <li class="hover:underline">Politicas de cookies</li>
        <li class="hover:underline">Ejerce tu privacidad correctamente</li>
        <li class="hover:underline">Oportunidades iguales</li>
      </ul>
    </div>
    <div class="text-[0.80rem]">
      <p>
        InAdvance es una marca registrada de InAdvance S.R.L. InAdvance S.R.L. posee licencias y
        autorizaciones para la intermediación inmobiliaria en todo el territorio nacional de
        Bolivia.
      </p>
      <p>Santa cruz de la cierra - #456 Calle San javier</p>
      <p>Matrícula de Comercio N° 1522444</p>
      <p>InAdvance S.R.L. — Santa Cruz, Bolivia</p>
      <p class="pt-10">Copyright © 2025 InAdvance, LLC. All rights reserved.</p>
    </div>
    <div
      class="h-[200px] w-full bg-red-700"
      :style="{
        backgroundImage: `url(https://i.pinimg.com/1200x/2a/10/70/2a1070f5458848f13aa350b2efb68385.jpg)`,
        backgroundRepeat: 'repeat',
        backgroundSize: '40% 100%',
        backgroundPositionY: '40%',
      }"
    ></div>
  </div>
</template>
