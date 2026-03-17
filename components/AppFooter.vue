<script setup>
import { footerIcons } from "~/data/icons";
</script>

<template>
  <footer
    class="flex flex-col md:flex-row items-center p-4 bg-inside-components shadow mt-8 text-white"
  >
    <p class="md:mr-auto">@ 2026 Rubén Built with Tailwind CSS</p>
    <div class="md:ml-auto flex items-center gap-4">
      <div v-for="icon in footerIcons" :key="icon.id">
        <a :href="icon.url">
          <Icon
            :name="icon.link"
            size="30px"
            :style="{ color: icon.color }"
            class="ml-2 mr-2 transition-transform hover:scale-110 hover:bg-brand-primary"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
