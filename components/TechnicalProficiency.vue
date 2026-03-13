<script setup>
import { skillsIcons } from "~/data/icons";
</script>

<template>
  <section>
    <h2 class="text-white mb-4">Technical Proficiency</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="skill in skillsIcons"
        :key="skill.id"
        class="bg-inside-components p-4 rounded-lg flex flex-col items-center gap-0 text-center"
      >
        <Icon :name="skill.link" size="4rem" :style="{ color: skill.color }" />
        <span class="text-white leading-tight">{{ skill.name }}</span>
      </div>
    </div>
  </section>
</template>
