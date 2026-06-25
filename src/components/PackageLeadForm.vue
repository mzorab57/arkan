<template>
  <form
    dir="rtl"
    class="rounded-[1.5rem] border border-white/10 bg-black/30 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.35)] backdrop-blur-xl"
    @submit.prevent="submitToWhatsApp"
  >
    <div class="mb-5 text-right">
      <p class="heading-5 text-flax-smoke-50">فۆرمی تۆمارکردن</p>
      <p class="heading-6 mt-2 text-flax-smoke-300/85 leading-relaxed">
        زانیارییەکانت پڕ بکەرەوە،     
        
      </p>
    </div>

    <div class="space-y-4">
      <div class="space-y-2 text-right">
        <label class="heading-6 text-flax-smoke-300" :for="`${idPrefix}-name`">
          ناوی کەسەکە
        </label>
        <input
          :id="`${idPrefix}-name`"
          v-model="form.name"
          type="text"
          required
          class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right text-flax-smoke-50 outline-hidden transition focus:border-white/30 focus:bg-white/[0.08]"
          placeholder="ناوی تەواوت بنووسە"
        />
      </div>

      <div class="space-y-2 text-right">
        <label class="heading-6 text-flax-smoke-300" :for="`${idPrefix}-phone`">
          ژمارەی تەلەفۆن
        </label>
        <input
          :id="`${idPrefix}-phone`"
          v-model="form.phone"
          type="tel"
          required
          class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right text-flax-smoke-50 outline-hidden transition focus:border-white/30 focus:bg-white/[0.08]"
          placeholder="بۆ نموونە: +966..."
        />
      </div>

      <div class="space-y-2 text-right">
        <label class="heading-6 text-flax-smoke-300" :for="`${idPrefix}-tour`">
          جۆری گەشت / پاکێج
        </label>
        <input
          :id="`${idPrefix}-tour`"
          v-model="form.tour"
          type="text"
          readonly
          class="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right text-flax-smoke-50 outline-hidden"
        />
      </div>

      <div class="space-y-2 text-right">
        <label class="heading-6 text-flax-smoke-300" :for="`${idPrefix}-email`">
          ئیمەیڵ
        </label>
        <input
          :id="`${idPrefix}-email`"
          v-model="form.email"
          type="email"
          required
          class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right text-flax-smoke-50 outline-hidden transition focus:border-white/30 focus:bg-white/[0.08]"
          placeholder="name@example.com"
        />
      </div>
    </div>

    <div class="mt-5 flex flex-col items-end gap-3">
     
      <button
        type="submit"
        class="w-full rounded-full bg-flax-smoke-200 px-5 py-3 text-center text-flax-smoke-950 transition hover:bg-white"
      >
        ناردن  
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { reactive, watch } from 'vue';

  const props = defineProps<{
    packageName: string;
    idPrefix: string;
    whatsappNumber?: string;
  }>();

  const form = reactive({
    name: '',
    phone: '',
    tour: props.packageName,
    email: '',
  });

  watch(
    () => props.packageName,
    (newValue) => {
      form.tour = newValue;
    },
  );

  const submitToWhatsApp = () => {
    const message = [
      'سڵاو، دەمەوێت زانیاری زیاتر وەربگرم.',
      '',
      `ناوی کەسەکە: ${form.name}`,
      `ژمارەی تەلەفۆن: ${form.phone}`,
      `جۆری گەشت / پاکێج: ${form.tour}`,
      `ئیمەیڵ: ${form.email}`,
    ].join('\n');

    window.open(
      `https://wa.me/${props.whatsappNumber ?? '966567302842'}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };
</script>
