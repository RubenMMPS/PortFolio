<script setup>
const icons = {
  infojobs: { link: "streamline-logos:linkedin-logo-block", color: "white" },
  github: { link: "streamline-logos:github-logo-2-solid", color: "white" },
  twitter: { link: "streamline-logos:twitter-logo-1-solid", color: "white" },
};
</script>

<template>
  <footer
    class="flex flex-col md:flex-row items-center p-4 bg-header-footer shadow mt-8 text-white"
  >
    <p class="md:mr-auto">@ 2026 Rubén Built with Tailwind CSS</p>
    <div class="md:ml-auto flex items-center gap-4">
      <div v-for="icon in icons" :key="icon.link">
        <Icon
          :name="icon.link"
          size="30px"
          :style="{ color: icon.color }"
          class="ml-2 mr-2"
        />
      </div>
    </div>
  </footer>
</template>
