<template>
  <BurgerMenuBtn
    @click="toggleBtnClickAnimation"
    class="z-9999 scale-0 drop-shadow-lg"
    id="burger"
  />

  <div
    @click="toggleBtnClickAnimation"
    class="fixed inset-0 z-9998 size-full bg-black opacity-50 select-none"
    :class="{ hidden: !isNavbarOpen }"
  ></div>

  <div
    tabindex="0"
    id="navbar"
    @keydown.esc="toggleBtnClickAnimation()"
    class="bg-flax-smoke-950 fixed top-[1dvh] right-0 z-9998 h-[98dvh] w-full translate-x-full rounded-s-lg p-5 will-change-auto select-none focus:outline-hidden max-md:w-[98%] sm:p-10 md:w-3/5 md:px-20 lg:w-2/5"
  >
    <Circles id="circles" class="absolute top-0 right-0 opacity-25" />
    <div class="flex h-full flex-col items-center justify-between">
      <div class="relative z-19 w-full">
        <ul
          dir="rtl"
          class="heading-3 text-flax-smoke-50 mt-12 text-right leading-1 md:mt-24"
          id="navLinks"
        >
          <li
            class="overflow-y-clip"
            v-for="l in navbarLinks"
            :key="l.label"
            :id="l.label"
          >
            <button
              type="button"
              class="group my-7 flex h-full w-fit translate-y-full cursor-pointer items-center justify-start leading-none will-change-auto"
            >
              <span
                class="bg-flax-smoke-50 translate-x-6 h-4 w-4 scale-0 rounded-full opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              ></span>
              <p
                class="font-fancy -translate-x-5 transition-all duration-300 ease-in-out group-hover:translate-x-5"
              >
                {{ l.label }}
              </p>
            </button>
          </li>
        </ul>
      </div>

      <div class="w-full">
        <div class="text-flax-smoke-50 mt-2 h-full font-normal">
          <p class="text-left text-sm font-bold uppercase">Email address</p>
          <Link
            class="font-medium tracking-wider"
            tag="p"
            label="hetari4all@gmail.com"
            url="mailto:hetari4all@gmail.com"
          />
          <div class="mt-6 flex flex-wrap justify-start gap-1">
            <Button
              class="contact border-flax-smoke-600 border opacity-0"
              v-for="social in socialLinks"
              :key="social.label"
              :label="social.label"
              :url="social.url"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <header
    :class="$attrs.class"
    class="padding-x absolute inset-0 z-20 h-fit -translate-y-full pt-6 will-change-auto"
  >
    <nav class="flex justify-between">
      <MagneticEffect
        :magnetoStrengthVal="20"
        :magnetoTextStrengthVal="10"
        divId="name-container"
        textId="name"
      >
        <div id="name-container" class="group -m-10 h-fit cursor-pointer p-10">
          <h2
            id="name"
            class="font-fancy text-flax-smoke-300 pl-2 flex items-start text-xl font-extrabold uppercase md:text-3xl"
          >
            ARKAN
            
          </h2>
        </div>
      </MagneticEffect>

    </nav>
  </header>
</template>
<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';

  import { Link, BurgerMenuBtn, MagneticEffect } from '..';
  import { Circles } from '../design';
  import { Button } from '../common';

  import {
    animateNavbarEnter,
    animateNavbarLeave,
    navbarScale,
  } from '@/animations';
  import { navbarLinks, socialLinks } from '@/data';

  const isNavbarOpen = ref(false);

  const toggleBtnClickAnimation = () => {
    isNavbarOpen.value = !isNavbarOpen.value;

    // animate the X on the button
    document.getElementById('magneto')?.classList.toggle('active');

    const x = document.getElementById('navbar') as HTMLDivElement;
    if (isNavbarOpen.value) {
      animateNavbarEnter('#navbar', '#navLinks li button', '.contact');
      x.focus();
    } else {
      animateNavbarLeave('#navbar', '#navLinks li button', '.contact');
      x.blur();
    }
  };

  onMounted(() => {
    navbarScale('#burger', '#hero');
  });

  const emit = defineEmits(['isLocked']);
  watch(isNavbarOpen, (newVal) => {
    emit('isLocked', newVal);
  });
</script>
