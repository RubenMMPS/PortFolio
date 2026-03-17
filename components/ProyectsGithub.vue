<script setup lang="ts">
import { proyectsIcons } from "~/data/icons";

const { projects } = usePortfolioData();

const githubIconName = proyectsIcons[0]?.link ?? "mdi:github";
const githubIconColor = proyectsIcons[0]?.color ?? "white";
const demoIconName = proyectsIcons[1]?.link ?? "mdi:open-in-new";
const demoIconColor = proyectsIcons[1]?.color ?? "white";
</script>

<template>
  <section class="text-white">
    <h2 class="text-center mb-5">Featured Proyects</h2>
    <div class="border-b-8 border-brand-primary w-28 mb-20 mx-auto rounded" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <article
        v-for="project in projects"
        :key="project.id"
        class="w-full bg-inside-components rounded-lg overflow-hidden flex flex-col transition-transform hover:scale-[1.05]"
      >
        <img
          :src="project.imageSrc"
          :alt="project.imageAlt"
          class="w-full h-52 sm:h-56 lg:h-60 object-cover object-top block"
        />
        <div class="p-4 flex-1">
          <span
            v-for="(technology, techIndex) in project.technologies"
            :key="`${project.id}-${technology}`"
            class="text-[0.75rem] px-[0.5rem] py-[0.25rem] rounded-md mr-2"
            :class="techIndex === 0 ? 'bg-green-500' : 'bg-gray-500'"
          >
            {{ technology }}
          </span>

          <h2 class="mt-5 mb-2">{{ project.title }}</h2>
          <p class="text-gray-500 mb-5">
            {{ project.description }}
          </p>
          <nuxt-link :to="project.githubUrl" target="_blank" class="mr-4">
            GitHub
            <Icon :name="githubIconName" :color="githubIconColor" />
          </nuxt-link>
          <nuxt-link
            v-if="project.demoUrl"
            :to="project.demoUrl"
            target="_blank"
          >
            Live Demo
            <Icon :name="demoIconName" :color="demoIconColor" />
          </nuxt-link>
        </div>
      </article>
    </div>
  </section>
</template>
