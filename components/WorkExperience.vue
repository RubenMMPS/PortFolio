<script setup lang="ts">
const { experiences } = usePortfolioData();
</script>

<template>
  <section class="max-w-2xl mx-auto py-20 text-white">
    <h2 class="text-2xl font-bold text-center mb-12">Work Experience</h2>

    <div class="relative">
      <div class="absolute left-2 top-2 bottom-2 w-px bg-gray-700" />

      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="relative mb-10 pl-12 last:mb-0"
      >
        <span
          class="absolute left-0 top-0 flex items-center justify-center w-4 h-4 rounded-full ring-8 ring-inside-components"
          :class="exp.id === 1 ? 'bg-brand-primary' : 'bg-gray-400'"
        />

        <p
          class="text-sm font-semibold"
          :class="exp.id === 1 ? 'text-brand-primary' : 'text-gray-400'"
        >
          {{ exp.year }}
        </p>
        <h3 class="text-lg font-bold">{{ exp.title }}</h3>
        <p class="text-gray-400 text-sm">{{ exp.company }}</p>
        <p class="text-gray-300 mt-2">{{ exp.description }}</p>
      </div>
    </div>
  </section>
</template>
