<script setup lang="ts">
const showAllMobile = ref(false);
const { projects } = usePortfolioData();
</script>

<template>
  <section class="text-text-primary">
    <h2 class="text-center mb-5">Featured Proyects</h2>
    <div
      class="border-b-8 border-brand-primary w-28 mb-8 mx-auto rounded md:mb-12"
    />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :class="!showAllMobile && index >= 2 ? 'hidden sm:block' : ''"
      />
    </div>

    <div class="mt-6 text-center sm:hidden">
      <button
        v-if="projects.length > 2 && !showAllMobile"
        type="button"
        class="inline-flex items-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        @click="showAllMobile = true"
      >
        View all
      </button>
    </div>
  </section>
</template>
