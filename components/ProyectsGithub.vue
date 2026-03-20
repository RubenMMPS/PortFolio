<script setup lang="ts">
const { projects } = usePortfolioData();
</script>

<template>
  <section class="text-text-primary">
    <h2 class="text-center mb-5">Featured Proyects</h2>
    <div class="border-b-8 border-brand-primary w-28 mb-20 mx-auto rounded" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>
