<template>
  <section class=" mb-[-100svh] py-0 ">
    <div
      id="hero"
      class="sticky top-0  lg:px-4 flex min-h-svh w-full items-start pt-24  md:items-end md:pt-0  "
    >
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          id="bg-hero"
          :src="bgHero"
          alt="Arkan K Arif hero background"
          class="w-full h-full object-cover "
        />
        <!-- Overlay بۆ تاریککردنی background -->
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <div class="relative z-10 w-full lg:mt-6 ">
        <div class="relative grid w-full grid-cols-12 gap-y-8 md:gap-y-0 lg:min-h-[82vh] lg:items-start">
          <div
            class="order-1 col-span-full flex flex-col items-start gap-5 md:col-span-4 md:gap-16 lg:order-2 lg:col-span-6 lg:col-start-6 lg:items-end lg:self-start lg:pt-6"
          >
            <div class="w-full overflow-clip lg:flex   lg:justify-end">
              <MyName />
            </div>

            <p
              id="whoAmI"
              dir="rtl"
              class="heading-5 font-doran text-flax-smoke-300 max-w-none overflow-clip px-4 text-right leading-relaxed md:max-w-[37ch] lg:-mt-3 lg:max-w-[32ch]"
            >
              سنوورەکانت تێپەڕێنە، پرۆژەی خۆت دەست پێ بکە و بۆ هیجرەت ئامادە ببە
              فێرکارییە پیشەییەکان و ڕاوێژکاری تایبەت بۆ بەدەستهێنانی
              ئامانجەکانت
            </p>

            <div class="relative origin-left overflow-visible px-1 sm:pb-5 md:scale-150 lg:origin-right lg:scale-110">
              <div id="contact-btn" class="relative z-20 flex -translate-y-full">
                <Button
                  label="ئێستا دەستبکە بە گۆڕانکاری"
                  url="https://wa.me/967775367671"
                />
              </div>
            </div>
          </div>

          <div
            id="profile-container"
            class="relative order-2 col-span-full mt-2 h-[49vh] w-full scale-110 flex-col overflow-hidden rounded-[1.75rem] md:col-span-6 md:flex md:h-[50vh] md:translate-x-10 lg:order-1 lg:col-span-5 lg:col-start-1 lg:mt-0 lg:h-[78vh] lg:translate-x-0   "
          >
            <img
              id="profile-img"
              :src="profile"
              alt="Arkan K Arif profile"
              class="relative z-10 size-full object-contain object-bottom brightness-90"
            />
          </div>

          <div
            class="pointer-events-none absolute bottom-[7rem] left-1/2 z-20 hidden w-[19rem] -translate-x-1/2 rounded-[1.5rem]  p-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm lg:block"
          >
            <img
              :src="qiamLogo"
              alt="Qiyam Group logo"
              class="h-auto w-full object-contain"
            />
          </div>

          <div
            class="pointer-events-none absolute right-3 bottom-[4.5rem] z-20 w-[7.5rem] rounded-[1.25rem]  p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-sm lg:hidden"
          >
            <img
              :src="qiamLogo"
              alt="Qiyam Group logo"
              class="h-auto w-full object-contain"
            />
          </div>

          <div
            class="relative order-3 col-span-full hidden size-full overflow-clip text-end lg:absolute lg:right-0 lg:bottom-0 lg:block lg:w-[32rem]"
          >
            <div
              id="available-for-work"
              class="absolute right-0 bottom-0 flex translate-y-full flex-col items-end"
            >
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-svh"></div>
  </section>
</template>

<script setup lang="ts">
  import gsap from 'gsap';
  import { onMounted } from 'vue';
  import { MyName } from '../design';
  import { Button } from '@/components/common';
  import { profile } from '@/assets/images';
  import qiamLogo from '@/assets/images/result (1).png';
  
  // وێنەی background import بکە
  import bgHero from '@/assets/images/bg-hero.jpg'; // ڕێگای وێنەکە بگۆڕە
  
  onMounted(() => {
    if (document.body.classList.contains('stop-scrolling')) {
      return;
    }

    gsap.set('#svg-my-en-name > *', { y: 0 });
    gsap.set('#profile-img', { scale: 1 });
    gsap.set(['#down-arrow', '#contact-btn', '#available-for-work'], {
      x: 0,
      y: 0,
    });
  });
</script>
