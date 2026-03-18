<script setup lang="ts">
import { menuIcon } from "~/data/icons";
const isMobileMenuOpen = ref(false);

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const links = [
  { label: "Home", to: "#baseCard" },
  { label: "About", to: "#about" },
  { label: "Skills", to: "#skills" },
  { label: "Projects", to: "#proyects" },
  { label: "Experience", to: "#experience" },
];
</script>

<template>
  <header class="bg-inside-components shadow text-text-primary">
    <nav class="flex items-center gap-4 p-4">
      <NuxtLink to="/"><h2>Portfolio</h2></NuxtLink>

      <div class="ml-auto hidden md:flex items-center gap-4">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="btn transition-transform hover:scale-110 hover:text-brand-primary"
          >{{ link.label }}</NuxtLink
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
        <img
          :src="menuIcon.link"
          alt="Menu"
          class="w-6 h-6"
          width="24"
          height="24"
        />
      </button>
    </nav>

    <div v-if="isMobileMenuOpen" id="mobile-menu" class="md:hidden px-4 pb-4">
      <div class="flex flex-col gap-3 border-t border-white/20 pt-3">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="btn transition-transform hover:text-brand-primary hover:scale-105"
          @click="closeMobileMenu"
          >{{ link.label }}</NuxtLink
        >

        <NuxtLink
          to="#contact"
          class="btn bg-brand-primary text-black rounded transition hover:scale-105"
          @click="closeMobileMenu"
          >Get in touch</NuxtLink
        >
      </div>
    </div>
  </header>
</template>
