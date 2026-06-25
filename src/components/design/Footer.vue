<template>
  <footer
    dir="rtl"
    class="relative flex flex-col items-center justify-center gap-16 p-[2%]"
  >
    <div class="grid w-full grid-cols-1 text-base sm:gap-x-6 md:grid-cols-12">
      <div
        v-for="section in footerSections"
        :key="section.title"
        class="flex flex-col md:col-span-3"
        :class="{ 'md:col-span-6': section.title === 'مێنیو' }"
      >
        <p
          class="heading-5 border-flax-smoke-400 w-full border-b pt-6 lg:pt-0 text-right font-bold"
        >
          {{ section.title }}
        </p>
        <div class="mt-2 space-y-1 text-right">
          <p v-for="link in section.links" :key="link.label" class="heading-6">
            <Link
              v-if="link.url"
              class="font-medium tracking-wider"
              :label="link.label"
              :url="link.url"
            />
            <span v-else class="font-medium tracking-wider">
              {{ link.label }}
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-12">
      <div class="col-span-7 place-content-center md:col-span-6">
        <h6 class="heading-6  leading-none font-bold">
        
          هەموو مافەکان پارێزراون.
        </h6>
        <p class="heading-6 mt-4 flex items-center justify-start gap-2 text-flax-smoke-400">
          <span>دروستکراوە لەلایەن</span>
          <a
            class="text-flax-smoke-200 underline underline-offset-4"
            href="https://wa.me/9647701411893"
            target="_blank"
            rel="noreferrer"
          >
            al-code
          </a>
        </p>
      </div>

      <div
        class="col-span-5 place-content-center max-sm:place-content-start md:col-span-3"
      >
       
        <p class="heading-6 mt-2 font-bold">کاتی تۆ</p>
        <p class="heading-6">{{ userLocalTime }}</p>
      </div>

      <div
        class="hidden md:col-span-2 md:col-start-11 md:block lg:col-span-1 lg:col-start-12"
      >
        <MagneticEffect divId="scroll-to-top" textId="scroll-to-top-icon">
          <div
            @click="lenis.scrollTo('#app', { duration: 2 })"
            id="scroll-to-top"
            class="flex-center bg-flax-smoke-400 size-20 cursor-pointer flex-col rounded-full"
          >
            <svg
              class="size-1/2"
              id="scroll-to-top-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M12 4L12 20"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.9998 8.99996C16.9998 8.99996 13.3174 4.00001 11.9998 4C10.6822 3.99999 6.99982 9 6.99982 9"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </MagneticEffect>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { navbarLinks, resourceLinks, socialLinks } from '@/data';
  import { Link } from '..';
  import { onMounted, ref } from 'vue';
  import { lenis } from '@/lib/lenis';
  import MagneticEffect from '../MagneticEffect.vue';
  import moment from 'moment-timezone';

  // Combine footer sections dynamically
  const footerSections = [
    { title: 'مێنیو', links: navbarLinks },
    { title: 'سۆشیال', links: socialLinks },
    { title: 'زیاتر', links: resourceLinks },
  ].filter((section) => section.links.length > 0);

  const myLocalTime = ref('');
  const userLocalTime = ref('');

  onMounted(() => {
    myLocalTime.value = moment.tz('Asia/Aden').format('h:mm:ss a');
    setInterval(() => {
      myLocalTime.value = moment.tz('Asia/Aden').format('h:mm:ss a');
    }, 1000);

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    userLocalTime.value = moment.tz(userTimeZone).format('h:mm:ss a');
    setInterval(() => {
      userLocalTime.value = moment.tz(userTimeZone).format('h:mm:ss a');
    }, 1000);
  });
</script>
