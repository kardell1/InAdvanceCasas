<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import { useHeroFactory } from '@/components/home/HeroFactory'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
import FooterSection from '@/components/home/FooterSection.vue'

const { HeroFa } = useHeroFactory()
</script>

<template>
  <main class="flex flex-col gap-15">
    <HeroSection />
    <component :is="HeroFa" v-if="HeroFa" />
    <FeaturesSection />
    <FooterSection />
  </main>
</template>
