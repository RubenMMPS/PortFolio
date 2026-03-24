<script setup lang="ts">
const { personal } = usePortfolioData();
</script>

<template>
  <section class="text-text-secondary text-center lg:text-left">
    <h2 class="text-text-primary mb-4">About Me</h2>

    <p
      v-for="(paragraph, index) in personal.aboutParagraphs"
      :key="index"
      class="mb-4"
    >
      {{ paragraph }}
    </p>

    <div class="flex flex-col md:flex-row gap-4">
      <div class="w-full md:flex-1 bg-inside-components p-4 rounded-lg">
        <h2 class="text-brand-primary">{{ personal.yearsExperience }}</h2>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <div class="w-full md:flex-1 bg-inside-components p-4 rounded-lg">
        <h2 class="text-brand-primary">{{ personal.projectsDone }}</h2>
        <p>PROYECTS DONE</p>
      </div>
    </div>
  </section>
</template>
