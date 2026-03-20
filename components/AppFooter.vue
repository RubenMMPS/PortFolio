<script setup>
import { footerIcons } from "~/data/icons";
</script>

<template>
  <footer
    class="flex flex-col md:flex-row items-center p-4 bg-inside-components shadow mt-8 text-text-primary"
  >
    <p class="md:mr-auto">@ 2026 Rubén Built with Tailwind CSS</p>
    <div class="md:ml-auto flex items-center gap-4">
      <div v-for="icon in footerIcons" :key="icon.id">
        <a :href="icon.url">
          <img
            :src="icon.link"
            :alt="icon.name"
            class="ml-2 mr-2 transition-transform hover:scale-110 w-[30px] h-[30px]"
            width="30"
            height="30"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
