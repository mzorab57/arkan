<template>
  <main class="relative bg-stone-950 font-sans selection:bg-amber-500/30">
    
    <!-- ======================= -->
    <!-- بەشی سەرەوە (Hero - Sticky) -->
    <!-- ======================= -->
    <!-- کلاسی sticky top-0 وا دەکات ئەم بەشە لە جێی خۆی بمێنێتەوە کاتی سکرۆڵکردن -->
    <section class="sticky top-0 z-0 flex h-[90svh] md:h-[90svh] w-full flex-col justify-end pb-28 md:pb-36">
      
      <!-- وێنەی باکگراوند -->
      <img
        v-if="packageItem.image"
        :src="packageItem.image"
        :alt="packageItem.name"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <!-- باکگراوندی جێگرەوە -->
      <div 
        v-else 
        class="absolute inset-0 bg-gradient-to-br from-amber-900 to-stone-900"
      ></div>

      <!-- Overlays (بۆ تاریککردنی وێنەکە) -->
      <div class="absolute inset-0 bg-black/30"></div>
      <!-- گرێدیانتێکی تۆخ لە خوارەوە بۆ ئەوەی تێکەڵ بێت لەگەڵ بەشەکەی خوارەوە -->
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>

      <!-- داتاکانی سەر وێنەکە -->
      <div class="relative z-10 mx-auto  w-full max-w-7xl px-[4vw]" dir="rtl">
        
        <!-- دوگمەی گەڕانەوە -->
        <button
          @click.prevent="navigateTo('/#works')"
          class="group mb-8 flex w-fit items-center absolutes top-0 text-xs  -translate-y-[42em] md:-translate-y-0  border  gap-3 rounded  border-white/15  px-5 py-2 lg:text-sm font-medium text-stone-200 backdrop-blur-md transition-all duration-300  hover:bg-amber-500/20 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          <!-- <span>گەڕانەوە بۆ گەشت و پاکێجەکان</span> -->
        </button>

        <!-- ناونیشان -->
        <div class="max-w-3xl">
        
          <h1 class="heading-2 font-black leading-tight text-white drop-shadow-lg">
            {{ packageItem.name }}
          </h1>
          <p class="heading-5 mt-4 text-stone-300 leading-relaxed font-medium drop-shadow-md">
            {{ packageItem.summary }}
          </p>
        </div>
      </div>
    </section>

    <!-- ======================= -->
    <!-- بەشی خوارەوە (Content - Scrolls Over Hero) -->
    <!-- ======================= -->
    <!-- بەکارهێنانی bg-stone-950 و rounded-t بۆ دروستکردنی شێوەی پەڕەیەک کە دەچێتە سەرەوە -->
    <section class="relative z-20 w-full rounded-t-[2.5rem] border-t border-white/5 bg-stone-950 pt-16 pb-24 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] md:rounded-t-[3.5rem] md:pt-24 -mt-16 md:-mt-20">
      
      <!-- هێڵێکی بچووک لە ناوەڕاستی سەرەوەی دیزاینەکە (وەک مۆبایل) کە جوانییەکی زۆر دەدات -->
      <div class="absolute top-4 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/10 md:top-6 md:w-24"></div>

      <div class="mx-auto flex w-full max-w-7xl flex-col gap-10 px-[4vw]">
        
        <div class="grid gap-10 xl:grid-cols-[minmax(0,1.35fr)_minmax(24rem,0.85fr)] items-start">
          
          <!-- لای ڕاست (زانیارییەکان) -->
          <div class="w-full">
            <PackageShowcaseCard :package-item="packageItem" :content-only="true" />
          </div>

          <!-- لای چەپ: بەشی فۆڕم و داواکردن (Sticky) -->
          <div class="sticky top-28 space-y-6">
            
           

            <!-- فۆڕمەکە -->
            <div class="rounded-[1.75rem] border border-white/5 bg-stone-900/40 p-1 shadow-2xl backdrop-blur-xl">
              <PackageLeadForm
                :id-prefix="packageItem.sectionId"
                :package-name="packageItem.name"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import PackageLeadForm from '@/components/PackageLeadForm.vue';
  import PackageShowcaseCard from '@/components/PackageShowcaseCard.vue';
  import { findPackageByHref } from '@/data/packages';
  import { navigateTo } from '@/functions';
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';

  const props = defineProps<{
    href: string;
  }>();

  const router = useRouter();

  const packageItem = computed(() => {
    const foundItem = findPackageByHref(props.href);

    if (!foundItem) {
      router.replace('/');
      throw new Error('Package not found');
    }

    return foundItem;
  });
</script>
