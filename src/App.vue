<script setup>
import Header from './components/Header.vue'
import Features from './components/body/Features.vue'
import Hero from './components/body/Hero.vue'
import CTA from './components/body/CTA.vue'
import Partners from "@/components/body/Partners.vue";
import Testimonials from "@/components/body/Testimonials.vue";
import Pricing from "@/components/body/Pricing.vue";
import Contact from "@/components/body/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header></Header>

  <main>
    <Features></Features>
    <Hero></Hero>
    <CTA></CTA>
    <Partners></Partners>
    <Testimonials></Testimonials>
    <Pricing></Pricing>
    <Contact></Contact>
  </main>

  <Footer></Footer>
</template>

<style scoped>
</style>
