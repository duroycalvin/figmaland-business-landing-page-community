<template>
  <section class="flex justify-center py-[80px] md:py-[43px] md:px-[50px]">
    <div class="max-w-[1243px] grid grid-cols-1 md:grid-cols-2 gap-[50px]">
      <div class="p-[18px] hidden md:block">
        <img src="@/assets/images/undraw_newsletter_vovu.png" alt="Newsletter">
      </div>
      <div class="flex flex-col gap-[60px] max-w-[532px] text-center md:text-left">
        <div class="flex flex-col gap-[59px] md:gap-[7px]">
          <div class="md:py-[15px] flex flex-col gap-[7px] md:gap-0 md:block">
            <h3 class="text-primary-text py-[10px]">At your fingertips</h3>
            <h2 class="text-primary-text py-[10px] hidden md:block">Lightning fast prototyping</h2>
            <h2 class="text-primary-text py-[10px] md:hidden">Newsletter</h2>
            <h4 class="text-second-text py-[10px] md:hidden">Most calendars are designed for teams. Slate is designed for freelancers</h4>
          </div>
          <div class="p-[20px] md:hidden">
            <img src="@/assets/images/undraw_newsletter_vovu.png" alt="Newsletter">
          </div>
          <div class="p-[10px] md:p-[12px] flex flex-col gap-[10px] md:gap-0 md:block">
            <h3 class="text-primary-text md:py-[10px]">Subscribe to our Newsletter</h3>
            <p class="text-second-text">Available exclusivery on Figmaland</p>
            <div class="grid md:grid-flow-col md:auto-cols-auto gap-[12px] py-[24px] md:py-[34px]">
              <input class="px-[39px] py-[19px] rounded-[39px] bg-[#f4f4f4] border outline-primary border-[#E8E8E8] text-[14px] placeholder:text-[#18171D]" type="email" placeholder="Your Email">
              <button class="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
