<script setup>
import Header from './components/Header.vue'
import Features from './components/body/Features.vue'
import Hero from './components/body/Hero.vue'
import CTA from './components/body/CTA.vue'
import Partners from "@/components/body/Partners.vue";
</script>

<template>
  <Header></Header>

  <main>
    <Features></Features>
    <Hero></Hero>
    <CTA></CTA>
    <Partners></Partners>
  </main>
</template>

<style scoped>
</style>
