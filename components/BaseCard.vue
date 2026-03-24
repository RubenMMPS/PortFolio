<script setup lang="ts">
const { personal } = usePortfolioData();
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div class="order-2 md:order-1 md:pl-6 lg:pl-10 text-center md:text-left">
      <p class="text-brand-primary">{{ personal.specialty }}</p>
      <h1 class="text-text-primary mb-4">
        Hi, im
        <span
          class="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent"
          >{{ personal.name }}</span
        >,
        <br class="hidden md:block" />
        a {{ personal.role }}.
      </h1>
      <h3 class="text-text-secondary mb-4">
        {{ personal.description }}
      </h3>
      <div class="flex flex-row gap-4 justify-center md:justify-start">
        <BaseButton text="View Work" type="primary" />
        <BaseButton text="Download CV" type="secondary" />
      </div>
    </div>
    <div class="flex items-center justify-center order-1 md:order-2">
      <NuxtImg
        :src="personal.profileImage"
        alt="Profile Picture"
        class="w-60 h-60 sm:w-66 sm:h-66 md:w-72 md:h-72 lg:w-78 lg:h-78 object-cover rounded-xl"
      />
    </div>
  </section>
</template>
