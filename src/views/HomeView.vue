<template>
  <main class="relative min-h-full">
    <Hero />
    <div class="text-flax-smoke-200 relative rounded-t-3xl bg-[#0B0B0A] py-[5%]">
      <Services />
      <Works />
    </div>
    <Contact />
  </main>
</template>

<script setup lang="ts">
  import { Contact, Hero, Services, Works } from '@/components/sections';
</script>
