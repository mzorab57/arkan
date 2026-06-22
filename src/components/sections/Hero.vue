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

      <div class="relative z-10 flex w-full flex-col items-center mt-9 ">
        <div class="w-full items-end overflow-clip">
          <div class="flex w-full gap-10 px-1">
            <MyName />
            <Star id="star" class="hide-on-mobile translate-x-full" />
          </div>
        </div>

 <!-- Overlay text kurdi lagall image ka   background -->
        <div class="spacing-t  lg:column-gap grid w-full grid-cols-12 gap-y-8 md:gap-y-0">
          <div
            class="order-1 col-span-full flex flex-col items-start gap-12 md:col-span-4 md:gap-14"
          >
            <div class="overflow-hidden">
              <svg
                id="down-arrow"
                stroke="currentColor"
                fill="none"
                stroke-width="1.25"
                viewBox="6 6 12 12"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="hide-on-mobile m-0 size-4 -translate-x-full p-0 md:size-6"
                color="#8C8C73"
                style="color: #8c8c73"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </div>

            <p
              id="whoAmI"
              dir="rtl"
              class="heading-5 font-doran w-full text-flax-smoke-300 max-w-none overflow-clip px-1 text-right leading-relaxed  md:max-w-[37ch] lg:text-start"
            >
              سنوورەکانت تێپەڕێنە، پرۆژەی خۆت دەست پێ بکە و بۆ هیجرەت ئامادە ببە
              فێرکارییە پیشەییەکان و ڕاوێژکاری تایبەت بۆ بەدەستهێنانی
              ئامانجەکانت
            </p>

            <div  class="relative px-1 origin-left overflow-hidden sm:pb-5 md:scale-150">
              <div id="contact-btn" class="flex -translate-y-full">
                <Button
                  label="ئێستا دەستبکە بە گۆڕانکاری"
                  url="https://wa.me/967775367671"
                />
              </div>
            </div>
          </div>

          <div
            id="profile-container"
            class="relative order-2 col-span-full   h-[49vh] w-full  flex-col overflow-hidden rounded-[1.75rem]  md:col-span-6 md:translate-x-10 lg:translate-x-0 lg:col-span-4  md:flex md:h-[50vh]  "
          >
            <img
              id="profile-img"
              :src="profile"
              alt="Arkan K Arif profile"
              class="relative z-10 size-full scale-125 object-contain object-bottom  pt-4 brightness-90   md:pt-5"
            />
          </div>

          <div
            class="relative order-2 col-span-full hidden size-full overflow-clip text-end md:order-3 md:col-span-4 lg:block"
          >
            <div
              id="available-for-work"
              class="absolute right-0 bottom-0 flex translate-y-full flex-col items-end"
            >
              <p
                class="3xl:heading-2 pb-2 font-doran text-flax-smoke-300 heading-2 leading-snug font-medium -tracking-tight uppercase"
              >
                {{ AvailableForWorkDate }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-svh"></div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { MyName, Star } from '../design';
  import { Button } from '@/components/common';
  import { profile } from '@/assets/images';
  
  // وێنەی background import بکە
  import bgHero from '@/assets/images/bg-hero.jpg'; // ڕێگای وێنەکە بگۆڕە
  
  const AvailableForWorkDate = ref('بەخێربێن، سەرکردەکانی سبەینێ');
</script>