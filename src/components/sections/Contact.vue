<template>
  <section
    id="contact-section"
    class="relative min-h-svh w-full overflow-y-clip p-[2vh]  select-none"
  >
    <div
      class="flex-center relative h-[92vh] w-full flex-col rounded-lg bg-black uppercase"
    >
      <video
        class="absolute bottom-0 left-0 size-full rounded-lg object-cover object-bottom brightness-90"
        :src="contact"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <div class="flex-center z-10 w-full max-w-6xl flex-col gap-y-10 px-4">
        <p
          dir="rtl"
          class="text-6xl lg:text-8xl  text-flax-smoke-300 max-w-[30ch] text-center"
        >
        بابەیەکەوە دەست پێبکەین
        </p>
        <div
          class="mt-[5%] flex scale-125 items-center  "
        >
          <Button label="ئێستا دەست پێبکە" url="https://wa.me/966567302842" />
        </div>

       
      </div>
      <div
        class="absolute bottom-5 flex w-full items-center justify-center px-5 md:justify-between"
      >
        <div class="hidden md:flex">
          <div class="border-flax-smoke-300 relative border">
            <Vue3Lottie
              ref="customControl"
              :animationData="earthLottie"
              :loop="true"
              :autoPlay="true"
            />
          </div>
          <div
            class="flex-center py border-flax-smoke-300 text-flax-smoke-300 w-fit flex-col border border-l-0 font-mono"
          >
            <p
              class="border-flax-smoke-300 flex size-full items-center justify-start border-b pr-2 pl-1 font-bold"
            >
              ئامادە بۆ هاوکاری
            </p>
            <p class="flex size-full items-center justify-start pr-2 pl-1">
              وەڵامدانەوەی خێرا
            </p>
          </div>
        </div>

        <div class="heading-6 text-flax-smoke-500 w-fit">
          <p dir="ltr" class="w-full font-bold tracking-[4px]">بۆ زانیاری زیاتر</p>
          <Link
            class="text-flax-smoke-300 h-6 text-right font-medium tracking-wider lowercase"
            label="info@arkankareem.com"
            :icon="true"
            url="mailto:info@arkankareem.com"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { earthLottie } from '@/assets/videos';
  import { Button } from '@/components/common';
  import { Vue3Lottie } from 'vue3-lottie';
  import Link from '../Link.vue';
  import { contact } from '@/assets/videos';
  // import { dataCalConfig, dataCalLink, dataCalNamespace } from '@/data';
</script>

<style>
  .lottie-animation-container {
    height: 100% !important;
  }
  .lottie-animation-container svg {
    height: 100px !important;
    width: fit-content !important;
    margin: -10px -30px !important;
    padding: 0 !important;
  }

  .lottie-animation-container {
    --lottie-animation-container-width: fit-content !important;
    --lottie-animation-container-height: 0% !important;
  }
</style>
