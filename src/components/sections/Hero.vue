<template>
  <section class="padding-x mb-[-100svh] py-0">
    <div
      id="hero"
      class="sticky top-0 flex min-h-svh w-full items-end pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <div class="relative flex w-full flex-col items-center">
        <div class="w-full items-end overflow-clip">
          <div class="flex w-full  gap-10 ">
            <MyName />
            <Star id="star" class="hide-on-mobile translate-x-full" />
          </div>
        </div>

        <div class="lg:column-gap spacing-t grid w-full grid-cols-12">
          <div
            class="col-span-full flex flex-col items-start gap-14 md:col-span-4"
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

            <p dir="rtl" class="3xl:heading-3 heading-3 xl:heading-4 lg:heading-5 sm:heading-6 text-justify px-2">
            سنوورەکانت تێپەڕێنە، پرۆژەی خۆت دەست پێ بکە و بۆ هیجرەت ئامادە ببە
فێرکارییە پیشەییەکان و ڕاوێژکاری تایبەت بۆ بەدەستهێنانی ئامانجەکانت
            </p>
          

            <div class="relative origin-left overflow-hidden ld:scale-150 sm:pb-5">
              <div id="contact-btn" class="flex -translate-y-full">
                <!-- <Button
                  :data-cal-namespace="dataCalNamespace"
                  :data-cal-link="dataCalLink"
                  :data-cal-config="dataCalConfig"
                  class="contact"
                  label="Get in touch"
                /> -->
                <Button
                  label="ئێستا دەستبکە بە گۆڕانکاری"
                  url="https://wa.me/967775367671"
                />
              </div>
            </div>
          </div>

          <div
            id="profile-container"
            class="relative col-span-5 md:col-span-4 lg:col-span-4 mt-10 h-[20vh] max-w-lg flex-col rounded-lg select-none sm:mt-0 sm:h-full md:flex md:h-[50vh]"
          >
            <div class="overlay bg-flax-smoke-50 absolute inset-0 z-2"></div>
            <img
              id="profile-img"
              :src="profile"
              alt="Arkan K Arif profile"
              class="size-full scale-90 rounded-lg object-cover object-top brightness-110 grayscale-50"
            />
          </div>

          <!-- content-end justify-self-end  -->
          <div
            class="relative  size-full overflow-clip text-end col-span-6 md:col-span-4"
          >
            <div
              id="available-for-work"
              class="absolute right-0 bottom-0 flex translate-y-full flex-col items-end"
            >
              <p
                class="3xl:heading-2 heading-2  block leading-snug font-medium -tracking-tight uppercase"
              >
                {{ AvailableForWorkDate }}
              </p>
              <h3
                dir="rtl"
                class="3xl:heading-1 heading-1-alt block leading-none font-bold -tracking-tight"
              >
               
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-svh"></div>
  </section>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { MyName, Star } from '../design';
  import { Button } from '@/components/common';
  import { profile } from '@/assets/images';
  import { textSplitterIntoChar } from '@/functions';
  // import { dataCalConfig, dataCalLink, dataCalNamespace } from '@/data';

  const whoAmI = ref('');
  const whoAmILines = [
    'سنوورەکانت تێپەڕێنە، پرۆژەی خۆت دەست پێ بکە و بۆ هیجرەت ئامادە ببە',
    'فێرکارییە پیشەییەکان و ڕاوێژکاری تایبەت بۆ بەدەستهێنانی ئامانجەکانت',
  ];
  const AvailableForWorkDate = ref('بەخێربێن، سەرکردەکانی سبەینێ');

  onBeforeMount(() => {
    whoAmI.value = whoAmILines
      .map((line) => textSplitterIntoChar(line))
      .join('<br />');
  });
</script>
