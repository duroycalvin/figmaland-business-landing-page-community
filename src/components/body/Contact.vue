<template>
  <section class="py-[99px] md:py-[52px]">
    <div class="hidden md:block h-[100px]"></div>
    <div class="flex flex-col items-center text-center gap-[50px] py-[50px] max-w-[358px] md:max-w-[1228px] mx-auto">
      <div class="flex flex-col gap-[7px] max-w-[552px]">
        <h2 class="text-primary-text py-[10px]">Contact Us</h2>
        <h4 class="text-second-text py-[10px]">Most calendars are designed for teams. Slate is designed for freelancers</h4>
      </div>
      <div class="flex flex-col-reverse md:flex-row gap-[50px] items-center w-full">
        <div class="flex flex-col gap-[45px] py-[52px] px-[49px] md:px-[50px] border border-[#dddddd] rounded-[20px] min-w-[378px] md:min-w-[453px] shadow-md">
          <h3 class="text-primary-text">Contact Us</h3>
          <input class="px-[20px] py-[19px] rounded-[39px] bg-[#f5f5f5] border outline-primary border-[#E8E8E8] text-[16px] placeholder:text-[#18171D]" type="text" placeholder="Your Name">
          <input class="px-[20px] py-[19px] rounded-[39px] bg-[#f5f5f5] border outline-primary border-[#E8E8E8] text-[16px] placeholder:text-[#18171D]" type="email" placeholder="Your Email">
          <textarea rows="5" class="px-[20px] py-[23px] bg-[#f5f5f5] border outline-primary border-[#E8E8E8] text-[16px] placeholder:text-[#18171D] resize-none" placeholder="Your Message"></textarea>
          <div class="text-left">
            <button class="btn-primary">Send</button>
          </div>
        </div>
        <div class="flex flex-col-reverse md:flex-col gap-[50px] text-second-text w-full">
            <div class="flex flex-col md:flex-row gap-[10px] md:gap-[15px] md:items-center [&_h6]:text-left md:[&_h6]:text-center [&_img]:mx-auto py-[18px] md:py-0">
              <div class="flex flex-row md:flex-col items-center gap-[10px]">
                <div class="flex-none md:flex-auto">
                  <img src="@/assets/images/icon_adress.png" alt="Address">
                </div>
                <h6 class="p-[10px]">6386 Spring St undefined Anchorage, Georgia 12473 United States</h6>
              </div>
              <div class="md:shrink-0 flex flex-row md:flex-col items-center gap-[10px]">
                <div>
                  <img src="@/assets/images/icon_phone.png" alt="Phone">
                </div>
                <h6 class="p-[10px]">(843) 555-0130</h6>
              </div>
              <div class="flex flex-row md:flex-col items-center gap-[10px]">
                <div>
                  <img src="@/assets/images/icon_mail.png" alt="Mail">
                </div>
                <h6 class="p-[10px]">willie.jennings@example.com</h6>
              </div>
            </div>
            <div class="hidden md:block py-[10px]">
              <img src="@/assets/images/map.png" alt="Map" class="mx-auto">
            </div>
            <div class="flex gap-[24px] p-[10px] justify-center md:justify-normal">
              <a href="#">
                <img src="@/assets/images/twitter_filled.png" alt="Twitter">
              </a>
              <a href="#">
                <img src="@/assets/images/facebook_filled.png" alt="Facebook">
              </a>
              <a href="#">
                <img src="@/assets/images/linkedin_filled.png" alt="LinkedIn">
              </a>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
