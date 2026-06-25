<template>
  <section id="works" class="common-padding mb-20">
    <div class="flex flex-col">
      <h3
        id="selectedWorks"
        dir="rtl"
        class="lg:heading-1 heading-2 text-start leading-none font-bold"
      >گەشت و پاکێجەکان</h3>
    
      <div
        id="selected-works-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid lg:grid-cols-12 grid-cols-8 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 hidden lg:block text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
          (٧ گەشت  )
        </p>
        <p
          dir="rtl"
          class="heading-4 font-fancy lg:tracking-[0.2em] col-span-8 w-full text-balance text-right sm:font-semibold lg:col-span-7"
        >
          هەموو گەشتە بازرگانییەکان و پاکێجە تایبەتەکانت لێرە کۆکراونەتەوە
          بە شێوەیەک کە لەگەڵ دیدگای `Qiyam Group` و ئامانجەکانی تۆ بگونجێت.
        </p>
      </div>
    </div>

    <div
      class="sm:column-gap relative mt-12 grid size-full grid-cols-12 lg:mt-[10%]"
    >
      <div
        class="text-flax-smoke-100 sticky top-24 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] leading-[0.8] font-semibold md:flex"
      >
        <span class="font-title! relative mt-7 -tracking-wider">0</span>
        <span
          id="index"
          class="font-title! relative mt-7 -tracking-wider will-change-transform"
          >{{ index + 1 }}.</span
        >
      </div>

      <aside class="relative col-span-full flex flex-col space-y-10 md:col-span-7">
        <div
          v-for="packageItem in packagesData"
          :key="packageItem.sectionId"
          class="work-card @container"
        >
          <button
            type="button"
            class="w-full cursor-pointer text-inherit"
            @click="navigateTo(packageItem.href)"
          >
            <PackageShowcaseCard :package-item="packageItem" />
            <div class="mt-4 flex justify-end" dir="rtl">
              <span
                class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-flax-smoke-200 transition hover:bg-white hover:text-black"
              >
                {{
                  packageItem.hasDetailPage
                    ? 'چوون بۆ پەیجی تایبەت'
                    : 'گەڕانەوە بۆ سەرەتای وێبسایت'
                }}
              </span>
            </div>
          </button>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import PackageShowcaseCard from '@/components/PackageShowcaseCard.vue';
  import { packagesData } from '@/data/packages';
  import { navigateTo, textSplitterIntoChar } from '@/functions';
  import { computed, onBeforeMount, onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import { useWindowSize } from '@vueuse/core';

  const isSmallScreen = computed(() => useWindowSize().width.value < 768);
  const index = ref(0);
  const selectedWorks = ref('گەشت و پاکێجەکان /');

  const createForwardTimeline = (currentIndex: typeof index, i: number) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3 },
    });

    tl.set('#index', {
      yPercent: 100,
      onComplete: () => {
        currentIndex.value = Math.min(i, packagesData.length - 1);
      },
    }).to('#index', {
      yPercent: 0,
      ease: 'power1.inOut',
    });

    return tl;
  };

  const createBackwardTimeline = (currentIndex: typeof index, i: number) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    tl.set('#index', {
      yPercent: -100,
      onComplete: () => {
        currentIndex.value = Math.max(i, 0);
      },
    }).to('#index', {
      yPercent: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    });

    return tl;
  };

  onBeforeMount(() => {
    selectedWorks.value = textSplitterIntoChar('گەشت و پاکێجەکان /', true);
  });

  onMounted(() => {
    animateSplitText(
      '#selectedWorks .letters',
      '#selected-works-text',
      0.7,
      0.01,
      0,
    );

    if (!isSmallScreen.value) {
      gsap.utils.toArray<HTMLElement>('.work-card').forEach((div, i) => {
        gsap.timeline({ defaults: { duration: 0.7 } }).to(div, {
          scrollTrigger: {
            trigger: div,
            start: 'top 25%',
            end: 'bottom 25%',
            scrub: 0.01,
            onLeaveBack: () => {
              if (index.value !== 0) {
                gsap.to('#index', {
                  yPercent: 100,
                  duration: 0.3,
                  ease: 'power4.inOut',
                  onComplete: () => {
                    createBackwardTimeline(index, i - 1);
                  },
                });
              }
            },
          },
          ease: 'power1.inOut',
          onComplete: () => {
            if (index.value !== packagesData.length - 1) {
              gsap.to('#index', {
                yPercent: -100,
                duration: 0.3,
                ease: 'power4.inOut',
                onComplete: () => {
                  createForwardTimeline(index, i + 1);
                },
              });
            }
          },
        });
      });
    }
  });
</script>
