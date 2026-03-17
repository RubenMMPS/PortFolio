<script setup lang="ts">
import { menuIcon } from "~/data/icons";
const isMobileMenuOpen = ref(false);

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <header class="bg-inside-components shadow text-white">
    <nav class="flex items-center gap-4 p-4">
      <NuxtLink to="/"><h2>Portfolio</h2></NuxtLink>

      <div class="ml-auto hidden md:flex items-center gap-4">
        <NuxtLink
          to="#baseCard"
          class="btn transition-transform hover:scale-110 hover:text-brand-primary"
          >Home</NuxtLink
        >
        <NuxtLink
          to="#about"
          class="btn transition-transform hover:scale-110 hover:text-brand-primary"
          >About</NuxtLink
        >
        <NuxtLink
          to="#skills"
          class="btn transition-transform hover:scale-110 hover:text-brand-primary"
          >Skills</NuxtLink
        >
        <NuxtLink
          to="#proyects"
          class="btn transition-transform hover:scale-110 hover:text-brand-primary"
          >Projects</NuxtLink
        >
        <NuxtLink
          to="#experience"
          class="btn transition-transform hover:scale-110 hover:text-brand-primary"
          >Experience</NuxtLink
        >
        <NuxtLink
          to="#contact"
          class="btn bg-brand-primary text-black p-1 rounded transition-transform hover:scale-110"
          >Get in touch</NuxtLink
        >
      </div>

      <button
        class="ml-auto md:hidden inline-flex items-center justify-center rounded-md p-2 border border-white/30"
        type="button"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <Icon :name="menuIcon.link" :style="{ color: menuIcon.color }" />
      </button>
    </nav>

    <div v-if="isMobileMenuOpen" id="mobile-menu" class="md:hidden px-4 pb-4">
      <div class="flex flex-col gap-3 border-t border-white/20 pt-3">
        <NuxtLink to="#baseCard" class="btn" @click="closeMobileMenu"
          >Home</NuxtLink
        >
        <NuxtLink to="#about" class="btn" @click="closeMobileMenu"
          >About</NuxtLink
        >
        <NuxtLink to="#skills" class="btn" @click="closeMobileMenu"
          >Skills</NuxtLink
        >
        <NuxtLink to="#proyects" class="btn" @click="closeMobileMenu"
          >Projects</NuxtLink
        >
        <NuxtLink to="#experience" class="btn" @click="closeMobileMenu"
          >Experience</NuxtLink
        >
        <NuxtLink
          to="#contact"
          class="btn bg-brand-primary text-black rounded"
          @click="closeMobileMenu"
          >Get in touch</NuxtLink
        >
      </div>
    </div>
  </header>
</template>
