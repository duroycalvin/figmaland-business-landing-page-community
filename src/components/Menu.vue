<script setup>
import { ref } from 'vue'
const show_mobile_menu = ref(false);
</script>

<template>
  <div class="container max-w-[1210px] flex items-center justify-between md:justify-normal py-[17px] px-[16px] md:p-[50px]">
        <ul class="flex-1 md:flex *:p-[10px] gap-[21px] hidden">
          <li>
            <a href="#" class="text-light-text">Home</a>
          </li>
          <li>
            <a href="#" class="text-light-text">Product</a>
          </li>
          <li>
            <a href="#" class="text-light-text">Pricing</a>
          </li>
          <li>
            <a href="#" class="text-light-text">About</a>
          </li>
          <li>
            <a href="#" class="text-light-text">Contact</a>
          </li>
        </ul>
        <a href="#" class="flex-none max-h-[58px] h-screen">
          <img src="@/assets/images/logo-dark.png" alt="logo" class="object-scale-down max-h-full">
        </a>
        <div class="flex-1 md:flex items-center justify-end gap-[24px] *:max-h-[40px] *:h-screen [&_img]:object-scale-down [&_img]:max-h-full hidden">
          <a href="#">
            <img src="@/assets/images/ant-design_twitter-outlined.png" alt="twitter">
          </a>
          <a href="#">
            <img src="@/assets/images/ant-design_facebook-filled.png" alt="facebook">
          </a>
          <a href="#">
            <img src="@/assets/images/ant-design_linkedin-filled.png" alt="linkedin">
          </a>
        </div>
        <button class="md:hidden" @click="show_mobile_menu = !show_mobile_menu">
          <img src="@/assets/images/mobile_menu_btn.png" alt="mobile menu">
        </button>
      </div>
      <div class="block md:hidden">
        <Transition>
        <ul v-if="show_mobile_menu" class="flex flex-col *:p-[10px] *:w-full *:text-center gap-[18px]">
          <li>
            <a href="#" class="text-light-text">Home</a>
          </li>
          <li>
            <a href="#" class="text-light-text">Product</a>
          </li>
          <li>
            <a href="#" class="text-light-text">Pricing</a>
          </li>
          <li>
            <a href="#" class="text-light-text">About</a>
          </li>
          <li>
            <a href="#" class="text-light-text">Contact</a>
          </li>
        </ul>
      </Transition>
      </div>
</template>

<style scoped>
</style>
