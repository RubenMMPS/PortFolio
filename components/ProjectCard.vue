<script setup lang="ts">
import { proyectsIcons } from "~/data/icons";
import type { Project } from "~/types/portfolio";

defineProps<{
  project: Project;
}>();
</script>

<template>
  <article
    class="w-full bg-inside-components rounded-lg overflow-hidden flex flex-col transition-transform hover:scale-[1.05]"
  >
    <div class="relative">
      <NuxtImg
        :src="project.imageSrc"
        :alt="project.imageAlt"
        class="w-full h-52 sm:h-56 lg:h-60 object-cover object-top block"
      />
      <span
        v-if="project.active"
        class="absolute right-3 top-3 rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold tracking-wide text-black shadow-lg shadow-cyan-500/50"
      >
        ACTIVE
      </span>
    </div>
    <div class="p-4 flex-1">
      <span
        v-for="(technology, techIndex) in project.technologies"
        :key="`${project.id}-${technology}`"
        class="text-[0.75rem] px-[0.5rem] py-[0.25rem] rounded-md mr-2"
        :class="techIndex === 0 ? 'bg-green-500 text-gray-900' : 'bg-gray-500'"
      >
        {{ technology }}
      </span>

      <h2 class="mt-5 mb-2">{{ project.title }}</h2>
      <p class="text-text-secondary/80 mb-5">
        {{ project.description }}
      </p>
      <NuxtLink
        :to="project.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mr-4"
      >
        GitHub
        <img
          :src="proyectsIcons[0]?.link"
          :aria-hidden="true"
          class="inline-block w-4 h-4 ml-1"
          width="16"
          height="16"
          loading="lazy"
          decoding="async"
        />
      </NuxtLink>
      <NuxtLink
        v-if="project.demoUrl"
        :to="project.demoUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
        <img
          :src="proyectsIcons[1]?.link"
          :aria-hidden="true"
          class="inline-block w-4 h-4 ml-1"
          width="16"
          height="16"
          loading="lazy"
          decoding="async"
        />
      </NuxtLink>
    </div>
  </article>
</template>
