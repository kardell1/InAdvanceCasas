<script setup lang="ts">
import CardFeaturesSection from './CardFeaturesSection.vue'
</script>

<template>
  <div>
    <p class="text-center text-3xl font-extrabold text-slate-700 py-7">
      Mira como InAdvance puede ayudarte
    </p>
    <div class="flex justify-center gap-20">
      <CardFeaturesSection
        image="as"
        text="Con más de 1 millón de viviendas en venta disponibles en el sitio web, InAdvance puede ayudarte a encontrar la casa que querrás llamar hogar."
        title="Compra una casa"
        button-title="Encuentra una casa"
      />
      <CardFeaturesSection
        image="as"
        text="Con más de 1 millón de viviendas en venta disponibles en el sitio web, InAdvance puede ayudarte a encontrar la casa que querrás llamar hogar."
        title="Renta una casa "
        button-title="Encuentra una renta"
      />
      <CardFeaturesSection
        image="as"
        text="Con más de 1 millón de viviendas en venta disponibles en el sitio web, InAdvance puede ayudarte a encontrar la casa que querrás llamar hogar."
        title="Mira las oferas "
        button-title="Lee mas "
      />
    </div>
  </div>
</template>
