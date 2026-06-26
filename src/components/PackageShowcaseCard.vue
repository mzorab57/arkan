<template>
  <article
  
    :id="packageItem.sectionId"
    class="scroll-mt-28 rounded-[1rem] border border-white/10 p-4 shadow-[0_24px_70px_rgba(2,6,23,0.28)] backdrop-blur-sm sm:p-6"
  >
    <div
      v-if="!contentOnly"
      class="relative overflow-hidden rounded-[1rem] border border-white/10"
      :class="
        packageItem.featured
          ? 'min-h-[22rem] sm:min-h-[26rem]'
          : 'min-h-[18rem] sm:min-h-[20rem]'
      "
    >
      <img
        v-if="packageItem.image"
        :src="packageItem.image"
        :alt="packageItem.name"
        class="absolute inset-0 size-full object-cover"
      />

      <div
        class="absolute inset-0"
        :style="{ background: packageItem.background }"
      ></div>

      <div
        v-if="packageItem.image"
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      ></div>

      <div class="relative z-10 flex h-full flex-col justify-between p-5 sm:p-8">
        <div class="flex items-start justify-between gap-4">
          <p
            class="rounded-full border border-white/20 bg-white/10 px-4 py-2 leading-none text-white backdrop-blur-md"
          >
            {{ packageItem.category }}
          </p>
          <p class="text-5xl font-black tracking-tight text-white/10">
            {{ packageItem.order }}
          </p>
        </div>

        <div
          dir="rtl"
          class="absolute right-5 -bottom-40 z-20 max-w-[90%] rounded-2xl text-right backdrop-blur-xl"
        >
          <h3
            class="heading-5 px-2 py-1 font-title! font-bold tracking-widest text-white drop-shadow transition-colors duration-300"
          >
            {{ packageItem.name }}
          </h3>
           <p class="text-xs tracking-[0.2em] lg:text-sm   text-flax-smoke-200 font-medium leading-relaxed">
            {{ packageItem.summary }}
          </p>
         
        </div>
        
      </div>
      
    </div>
    
    <div class="mt-5 space-y-5 text-right" dir="rtl">
      <div class="space-y-3">
        <p
          v-for="paragraph in packageItem.description"
          :key="paragraph"
          class="heading-7 tracking-[0.2em] text-flax-smoke-200 lg:font-medium leading-relaxed"
        >
          {{ paragraph }}
        </p>
      </div>

      <div class="flex flex-wrap justify-end gap-1.5 select-none">
        <p
          v-for="tag in packageItem.tags"
          :key="tag"
          class="border-flax-smoke-300 text-sm rounded-full border px-2.5 py-1 transition-[background-color,color] duration-500 ease-in-out hover:bg-flax-smoke-300 hover:text-flax-smoke-900"
        >
          <span>{{ tag }}</span>
        </p>
        <p
          class="border-flax-smoke-300 bg-flax-smoke-300 text-flax-smoke-900 rounded-full border px-4 py-2"
        >
          <span>{{ packageItem.order }}</span>
        </p>
       
      </div>

      <div
        v-if="packageItem.note"
        class="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur-sm"
      >
        <p class="heading-7 tracking-[0.2em] text-flax-smoke-100 leading-relaxed">
          {{ packageItem.note }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
  import type { PackageItem } from '@/data/packages';

  withDefaults(
    defineProps<{
    packageItem: PackageItem;
    contentOnly?: boolean;
    }>(),
    {
      contentOnly: false,
    },
  );
</script>
