<template>
  <section id="works" class="common-padding mb-20">
    <div class="flex flex-col">
      <h3
        id="selectedWorks"
        dir="rtl"
        class="heading-2 text-start leading-none font-bold"
      >گەشت و پاکێجەکان</h3>
    

      <div
        id="selected-works-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
         
           (٧ گەشت    ) 
        </p>
        <p
          dir="rtl"
          class="heading-4 font-fancy tracking-[0.2em] col-span-8 w-full text-balance text-right sm:font-semibold lg:col-span-7"
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
        <span class="font-title! mt-7 relative -tracking-wider">0</span>
        <span
          id="index"
          class="font-title! mt-7 relative -tracking-wider will-change-transform"
          >{{ index + 1 }}.</span
        >
      </div>

      <!-- card Works -->
      <aside class="relative col-span-full flex flex-col space-y-10 md:col-span-7">
        <div
          v-for="(work, i) in selectedWorksProps"
          :key="i"
          class="work-card @container"
        >
          <article
            class="group rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-4 shadow-[0_24px_70px_rgba(2,6,23,0.28)] backdrop-blur-sm sm:p-6"
          >
            <div
              class="relative overflow-hidden rounded-[1.35rem] border border-white/10 p-5 sm:p-8"
              :class="
                work.featured
                  ? 'min-h-[22rem] sm:min-h-[26rem]'
                  : 'min-h-[18rem] sm:min-h-[20rem]'
              "
            >
              <img
                v-if="work.image"
                :src="work.image"
                :alt="work.name"
                class="absolute inset-0 size-full object-cover"
              />
              <div
                class="absolute inset-0"
                :style="{ background: work.background }"
              ></div>
              <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_36%)]"
              ></div>
              <div
                v-if="work.image"
                class="absolute inset-0 bg-red-950/45"
              ></div>
              <div class="absolute -top-10 left-[8%] h-28 w-28 rounded-full bg-white/8 blur-3xl"></div>
              <div class="absolute right-[10%] bottom-[12%] h-32 w-32 rounded-full bg-sky-200/8 blur-3xl"></div>

              <div class="relative z-10 flex h-full flex-col justify-between">
                <div class="flex items-start justify-between  gap-4">
                  <p
                    class="heading-6 rounded-full border border-white/15 bg-white/5 px-4 py-2 leading-none text-white/80"
                  >
                    {{ work.category }}
                  </p>
                  <p class="text-5xl font-black tracking-tight text-white/15">
                    {{ work.order }}
                  </p>
                </div>

                <div class="max-w-[42rem] space-y-3 " dir="rtl">
                  <h3 class="lg:heading-3 heading-4 font-title! font-bold text-white ">
                    {{ work.name }}
                  </h3>
                 <!-- <p class="heading-5 text-white/80">
                    {{ work.summary }}
                  </p> -->
                </div>
              </div>
            </div>

            <div class="mt-5 space-y-5" dir="rtl">
              <div class="space-y-3 text-right">
                <p
                  v-for="paragraph in work.description"
                  :key="paragraph"
                  class="heading-6 text-flax-smoke-200 leading-relaxed font-medium"
                >
                  {{ paragraph }}
                </p>
              </div>

              <div class="flex flex-wrap justify-end gap-1.5 select-none">
                <p
                  class="border-flax-smoke-300 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out"
                  v-for="tag in work.tags"
                  :key="tag"
                >
                  <span>{{ tag }}</span>
                </p>
                <p
                  v-if="work.cta"
                  class="rounded-full bg-flax-smoke-300 px-4 py-2 text-flax-smoke-900"
                >
                  <span>{{ work.cta }}</span>
                </p>
                <p
                  class="border-flax-smoke-300 bg-flax-smoke-300 text-flax-smoke-900 rounded-full border px-4 py-2"
                >
                  <span>{{ work.order }}</span>
                </p>
              </div>

              <div
                v-if="work.note"
                class="rounded-2xl border border-white/10 bg-white/3 px-4 py-4"
                dir="rtl"
              >
                <p class="heading-6 text-flax-smoke-100 leading-relaxed">
                  {{ work.note }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </aside>
      
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import chinaFlag from '@/assets/images/flag/china.webp';
  import dubaiFlag from '@/assets/images/flag/dubai.webp';
  import medinaFlag from '@/assets/images/flag/medina.webp';
  import gashty15Shaw from '@/assets/images/flag/gashty-15-shaw.webp';
  import { textSplitterIntoChar } from '@/functions';
  import { computed, onBeforeMount, onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import { useWindowSize } from '@vueuse/core';

  type WorkSection = {
    order: string;
    category: string;
    name: string;
    summary: string;
    description: string[];
    tags: string[];
    cta?: string;
    note?: string;
    featured?: boolean;
    image?: string;
    background: string;
  };

  const isSmallScreen = computed(() => {
    return useWindowSize().width.value < 768;
  });
  const index = ref(0);
  const selectedWorks = ref('گەشت و پاکێجەکان /');

  const selectedWorksProps: WorkSection[] = [
    {
      order: '01',
      category: 'دەستپێک',
      name: 'بەخێربێن بۆ بونیادنانی سەرکردەکانی سبەینێ',
      summary: 'ئێمە یارمەتیت دەدەین سنوورەکانت بشکێنیت.',
      description: [
        'هەنگاو بنێ و ئامانجەکەت دیاری بکەیت، ئامادەکاری بۆ بکەیت و لە هەوڵدان نەوەستیت تا دەگیتە ئامانجەکەت.',
        'ڕاهێنانی کارگێڕی و پشتیوانی لە گەیشتن بە ئامانجەکانت لەگەڵ دیدگایەک کە دین و دونیا پێکەوە دەبینێت.',
        'لەسەر فەرمایشتی پێغەمبەری خودا و کلامی اللە، ئامانجمان ئەوەیە لە دونیادا ببیتە سەرکردە و لە قیامەتیش لە سەرکەوتووان بیت.',
      ],
      tags: ['سەرکردایەتی', 'ئامانج', 'پشتیوانی'],
      note:
        'بە چوار گەشتی ناوازە و دوو پاکێجی خوولی بزنس، هەموو ژیانت بگۆڕە لە ڕووی دین و دونیاکەتەوە.',
      featured: true,
      background:
        'linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 45%, rgba(71,85,105,0.95) 100%)',
    },
    {
      order: '02',
      category: 'گەشتی بازرگانی',
      name: 'گەشتی چین بۆ بازرگانی',
      summary: 'نوقمبوونێکی تەواو بازرگانی بۆ خستنەبازاڕی براندەکەت.',
      description: [
        'بەشداری بکە لە مانەوەیەکی تایبەت لەگەڵ ئێمە وەک تیمی قیام گروپ بۆ مانەوە لە شوێنێکی 5 ئەستێرە لە نزیک گەڕەکی موسڵمانان.',
        'شوێنی ستراتیژی بازرگانی و کارگەکان بەیەکەوە دەبینین و یارمەتیت دەدەین براندی دڵخوازت بخەیتە بازاڕەوە.',
        'سوودمەند ببە لە ڕاهێنانی گشتگیر لە بواری مارکێتینگ و سۆشیال میدیا و وەرگرتنی پاکێجی بزنس سەلام و ڕاهێنانی کارگێڕی بزنس بە خۆڕایی.',
      ],
      tags: ['چین', '5 ئەستێرە', 'مارکێتینگ'],
      cta: 'زانیاری زیاتر',
      image: chinaFlag,
      background:
        '',
    },
    {
      order: '03',
      category: 'گەشتی بازرگانی',
      name: 'گەشتی دوبەی بۆ بازرگانی',
      summary:
        'نوقمبوونێکی تەواو بازرگانی بۆ وەرگرتنی ئەزمونی ئەقارات و بازرگانی جوملە.',
      description: [
        'بەشداری بکە لە مانەوەیەکی تایبەت لەگەڵ تیمی قیام گروپ بۆ مانەوە لە شوێنێکی 5 ئەستێرە و ناسینی شوێنی ستراتیژی بازرگانی.',
        'سەردانی کۆگاکانی جوملە بکە لەگەڵماندا و فێربە چۆنیەتی هێنانەوەی هەموو جۆرە کاڵایەک و خستنەبازاڕی براندەکەت.',
        'سوودمەند ببە لە ڕاهێنانی گشتگیر لە مارکێتینگ و سۆشیال میدیا و پاکێجی بزنس سەلام و ڕاهێنانی کارگێڕی بزنس بە خۆڕایی دوای گەشتەکە.',
      ],
      tags: ['دوبەی', 'ئەقارات', 'جوملە'],
      cta: 'زانیاری زیاتر',
      image: dubaiFlag,
      background:
        '',
    },
    {
      order: '04',
      category: 'گەشتی روحی',
      name: 'گەشتی 3 مانگی لە مەدینە',
      summary: 'لە شوێنێکی ئیلهام‌بەخشدا بژی و مانایەکی نوێ بە ژیانت ببەخشە.',
      description: [
        'دەرفەتێکی نوێ بۆ فێربوون و گۆڕانکاری و بەرەو ئامانجەکانی ژیانت هەنگاو نان.',
        'پاکێجێکی ناوازەیە بۆ پێشکەوتن لە دینەکەتدا و خۆئامادەکردن بۆ گەیشتن بە ئامانجەکەت.',
        'لە فەزڵی خوداوە، ئێمە تاکە کەسین کە پاکێجێکی تەواو لەم شێوەیە پێشکەش دەکەین و ڕوح و فێربوون پێکەوە دەهێنین.',
      ],
      tags: ['مەدینە', '3 مانگ', 'فێربوون'],
      image: medinaFlag,
      background:
        '',
    },
    {
      order: '05',
      category: 'گەشتی تایبەت',
      name: 'گەشتی 15 شەوی برایان',
      summary: 'ئەزموونی عومرەیەکی تایبەت بکە لە مەدینە و مەککە.',
      description: [
        '8 شەو لە ڤێلایەکی تایبەت لە مەدینەی پیرۆز و 7 شەو لە ڤێلایەکی تایبەت لە مەککە.',
        'لەو 15 ڕۆژەدا تەواوی سیرەی پێغەمبەری خودا، بابەتی فیقیه، بیروباوەڕی دروست و تەجوید فێر دەبن.',
      ],
      tags: ['عومرە', 'مەککە', 'مەدینە'],
      image: gashty15Shaw,
      background:
        '',
    },
    {
      order: '06',
      category: 'پاکێجی بزنس',
      name: 'پاکێجی بزنس و ئیسلام',
      summary: 'ڕاهێنانی کارگێڕی بۆ بەدەستهێنانی سەرمایەی خۆت لە 0 دۆلارەوە.',
      description: [
        'بەرنامەیەکی ڕاهێنانی ناوازە بۆ فێربوونی چۆنیەتی بەدەستهێنانی سەرمایەی خۆت و دەستپێکردنی بازرگانی بە بنەمای ڕوون.',
        'بونیادنانی گەنجی موسڵمان بۆ زیاتر هاندانیان تا بتوانن سەرمایەی خۆیان هەبێت و دەست بکەن بە بازرگانییەکی سەرکەوتوو.',
      ],
      tags: ['0 دۆلار', 'سەرمایە', 'کارگێڕی'],
      background:
        'linear-gradient(135deg, rgba(30,41,59,1) 0%, rgba(30,64,175,0.85) 52%, rgba(96,165,250,0.65) 100%)',
    },
    {
      order: '07',
      category: 'پاکێجی بزنس',
      name: 'پاکێجی بزنس سەلام',
      summary: 'حەرەم 100% حەڵاڵ و شێوازی فرۆشتنی ئۆنلاین بەبێ ستۆک.',
      description: [
        'بزنس سەلام ڕێگەت پێدەدات لە 100$ ـەوە دەست پێ بکەیت و بە شێوەی ئۆنلاین بفرۆشیت، بەبێ ستۆک و بە ڕێزگرتن لە بنەما ئیسلامییەکان.',
        'تەنانەت لە سفریشەوە دەتوانیت دەست بە کارەکەت بکەیت و تووشی حەرام نەبیت.',
      ],
      tags: ['100% حەڵاڵ', 'ئۆنلاین', '100$'],
      note:
        'بە یارمەتی خودا پاشان ئێمە هاوکارت دەبین تا هەم لە دونیا سەرکەوتوو بیت هەم لە قیامەت، و ئەو سەرمایەی دەستت دەکەوێت بە تەواوی حەڵاڵ و بەرەکەتدار بێت.',
      background:
        'linear-gradient(135deg, rgba(69,26,3,1) 0%, rgba(146,64,14,0.9) 52%, rgba(251,191,36,0.72) 100%)',
    },
  ];

  // Reusable function to handle forward scroll animation
  const createForwardTimeline = (
    index: any,
    i: any,
    selectedWorksProps: any[],
  ) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3 },
    });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: 100,
      onComplete: () => {
        index.value = Math.min(i, selectedWorksProps.length - 1);
      },
    }).to('#index', {
      yPercent: 0,
      ease: 'power1.inOut',
    });

    return tl;
  };

  // Reusable function to handle backward scroll animation
  const createBackwardTimeline = (index: any, i: any) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: -100,
      onComplete: () => {
        index.value = Math.max(i, 0);
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

    // Apply GSAP animations to each div
    if (!isSmallScreen.value)
      gsap.utils.toArray('.work-card').forEach((div: any, i: any) => {
        gsap.timeline({ defaults: { duration: 0.7 } }).to(div, {
          scrollTrigger: {
            trigger: div,
            // start: 'top 40%',
            start: 'top 25%',
            // end: 'bottom 40%',
            end: 'bottom 25%',
            scrub: 0.01,
            // markers: true,
            onLeaveBack: () => {
              // Backward scroll animation
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
            // Forward scroll animation
            if (index.value !== selectedWorksProps.length - 1) {
              gsap.to('#index', {
                yPercent: -100,
                duration: 0.3,
                ease: 'power4.inOut',
                onComplete: () => {
                  createForwardTimeline(index, i + 1, selectedWorksProps);
                },
              });
            }
          },
        });
      });
  });
</script>
