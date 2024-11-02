<script setup>
import Menu from './Menu.vue'
</script>

<template>
  <header>
    <div class="bg-[url('@/assets/images/mobile_header_bg.png')] md:bg-[url('@/assets/images/header_bg.png')] bg-no-repeat bg-cover bg-top md:mb-[80px]">
      
      <Menu></Menu>
    
      <div class="container max-w-[1440px] px-[20px] py-[80px] flex items-center flex-col md:gap-[40px] gap-[59px]">
        <div class="max-w-[826px] p-0 md:p-[20px] flex flex-col gap-[10px] text-light-text text-center">
          <h1 class="p-[10px] hidden md:block">The best products start with Figma</h1>
          <h2 class="p-[10px] md:hidden">The best products start with Figma</h2>
          <h4 class="p-[10px]">Most calendars are designed for teams. <span class="hidden md:inline">Slate is designed for freelancers</span></h4>
        </div>
        <div class="p-[20px]">
          <button class="btn-primary">Try For Free</button>
        </div>
        <div class="h-[138px]"></div>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
