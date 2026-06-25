<template>
  <BurgerMenuBtn
    @click="toggleBtnClickAnimation"
    :class="
      isFloatingVisible || isNavbarOpen
        ? 'scale-100 opacity-100'
        : 'pointer-events-none scale-0 opacity-0'
    "
    class="z-9999 drop-shadow-lg transition-all duration-500"
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
    <div class="flex pt-6 h-full flex-col items-center justify-between">
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
              @click="goToMenuSection(l.url)"
              class="group my-4  flex h-8 lg:h-12 w-fit translate-y-full cursor-pointer items-center justify-start leading-none will-change-auto"
            >
              <span
                class="bg-flax-smoke-50 translate-x-6 h-4 w-4 scale-0 rounded-full opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              ></span>
              <p
                class="font-fancy heading-4 -translate-x-5 transition-all duration-300 ease-in-out group-hover:translate-x-5"
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
            label="info@arkankareem.com"
            url="mailto:info@arkankareem.com"
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
    class="padding-x fixed inset-x-0 top-0 z-20 h-fit pt-6 transition-all duration-500 will-change-auto"
    :class="[
      $attrs.class,
      isFloatingVisible || isNavbarOpen
        ? 'translate-y-0 opacity-100'
        : 'pointer-events-none -translate-y-full opacity-0',
    ]"
  >
    <nav class="flex justify-between">
      <MagneticEffect
        :magnetoStrengthVal="20"
        :magnetoTextStrengthVal="10"
        divId="name-container"
        textId="name"
      >
        <div
          id="name-container"
          class="group -m-10 h-fit cursor-pointer p-10"
          @click="goToMenuSection('/')"
        >
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
  import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
  import { gotoSection } from '@/functions';
  import { useRoute } from 'vue-router';

  import { Link, BurgerMenuBtn, MagneticEffect } from '..';
  import { Circles } from '../design';
  import { Button } from '../common';

  import { animateNavbarEnter, animateNavbarLeave } from '@/animations';
  import { navbarLinks, socialLinks } from '@/data';

  const isNavbarOpen = ref(false);
  const isFloatingVisible = ref(false);
  const route = useRoute();

  const updateFloatingNavVisibility = () => {
    isFloatingVisible.value = window.scrollY > 0;
  };

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

  const goToMenuSection = (url?: string) => {
    if (!url) return;
    gotoSection(url);
    if (isNavbarOpen.value) {
      toggleBtnClickAnimation();
    }
  };

  onMounted(() => {
    updateFloatingNavVisibility();
    window.addEventListener('scroll', updateFloatingNavVisibility, {
      passive: true,
    });
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateFloatingNavVisibility);
  });

  watch(
    () => route.fullPath,
    () => {
      requestAnimationFrame(() => {
        updateFloatingNavVisibility();
      });
    },
  );

  const emit = defineEmits(['isLocked']);
  watch(isNavbarOpen, (newVal) => {
    emit('isLocked', newVal);
  });
</script>
