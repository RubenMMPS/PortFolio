<script setup>
import { skillsIcons } from "~/data/icons";
</script>

<template>
  <section>
    <h2 class="text-text-primary mb-4">Technical Proficiency</h2>

    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="skill in skillsIcons"
        :key="skill.id"
        class="bg-inside-components p-4 rounded-lg flex flex-col items-center gap-0 text-center"
      >
        <img
          :src="skill.link"
          :alt="skill.name"
          class="w-16 h-16 mb-1"
          width="64"
          height="64"
          loading="lazy"
          decoding="async"
        />
        <span class="text-text-primary leading-tight">{{ skill.name }}</span>
      </div>
    </div>
  </section>
</template>
