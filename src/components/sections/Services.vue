<template>
  <section id="services" class="padding-x lg:mb-20">
    <div class="flex w-full flex-col">
      <!-- پێویستە dir="rtl" زیاد بکەیت بۆ ئەوەی ڕاست بۆ چەپ دەربکەوێت -->
      <h3
        id="what-i-do"
        dir="rtl" 
        v-html="whatIDo"
        class="heading-2 lg:heading-1 font-extrabold uppercase flex flex-wrap "
      ></h3>

      <div
        id="services-text"
        class="grid-gap text-flax-smoke-300 mt-[5%] grid grid-cols-8 lg:grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p class="heading-6 hidden lg:block text-flax-smoke-300/85 col-span-4 col-start-0 text-center text-nowrap md:col-start-4">
          ( خزمەتەکان )
        </p>
        <p dir="rtl" class="heading-4 font-fancy lg:tracking-[0.2em] leading-relaxed  col-span-8 w-full text-balance sm:font-semibold md:col-span-5">
         
ئێمە یارمەتیت دەدەین سنوورەکانت بشکێنیت 

 هەنگاو بنێ و ئامانجەکەت دیاری بکەیت 

  ئامادەکاری بۆ بکەیت  لە هەوڵدان نەوەستیت تا دەگیتە ئامانجەکەت .

ڕاهێنانی کارگێڕی و پشتیوانی لە گەیشتن بە ئامانجەکانت
        </p>
      </div>
    </div>

    <!-- باقی کۆدەکەت وەکو خۆی... -->
    <div class="relative mt-12 w-full lg:mt-[10%]">
      <div class="mt-12 flex flex-col justify-between gap-y-16">
        <ServicesCard
          v-for="(card, index) in servicesCardProps"
          :key="index"
          :number="index + 1"
          :title="card.title"
          :body="card.body"
          :headings="card.headings"
          :shape="card.shape"
          class="border-flax-smoke-500/50 sticky border-t bg-[#0B0B0A]"
          :class="getStyle(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  // textSplitterIntoChar پێویست ناکات چیتر، چونکە بۆ کوردی گونجاو نییە
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { ServicesCard } from '..';

  type ServiceCardProps = {
    title: string;
    body: string;
    headings: string[];
    shape: string;
  };

  const whatIDo = ref('My services /');

  // فەنکشنێکی نوێ بۆ جیاکردنەوەی وشەکان لەبری پیتەکان
  const textSplitterIntoWords = (text: string) => {
    return text.split(' ').map(word => `<span class="words inline-block ml-3">${word}</span>`).join('');
  };

  const servicesCardProps: ServiceCardProps[] = [
    // داتاکانی خۆت وەکو خۆی...
  ];

  onBeforeMount(() => {
    // لێرەدا فەنکشنە نوێیەکە بەکاردێنین
    whatIDo.value = textSplitterIntoWords('ئێمە چی دەکەین  /'); 
  });

  onMounted(() => {
    // تێبینی: لێرەدا پێویستە '.letters' بگۆڕیت بۆ '.words' بۆ ئەوەی ئەنیمەیشنی وشەکان بکات
    animateSplitText('#what-i-do .words', '#services-text', 0.7, 0.01, 0);
  });

  const getStyle = (_index: number) => '';
</script>
