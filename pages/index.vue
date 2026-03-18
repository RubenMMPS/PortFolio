<script setup lang="ts">
import ContactMe from "~/components/ContactMe.vue";

useSeoMeta({
  title: "Rubén | Full-Stack Developer Portfolio",
  description:
    "Portfolio de Rubén, Full-Stack Developer. Proyectos destacados, experiencia profesional y habilidades tecnicas en desarrollo web.",
  ogTitle: "Rubén | Full-Stack Developer Portfolio",
  ogDescription:
    "Explora proyectos, stack tecnologico y experiencia profesional en este portfolio de desarrollo web.",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <div class="min-h-screen flex items-center justify-center p-8">
      <BaseCard id="BaseCard" />
    </div>
    <div class="flex gap-8 flex-col md:flex-row">
      <AboutMe id="about" class="w-full" />
      <TechnicalProficiency id="skills" class="w-full" />
    </div>
    <div class="mt-8">
      <ProyectsGithub id="proyects" />
    </div>
    <div class="mt-8">
      <WorkExperience id="experience" />
    </div>
    <div class="mt-8">
      <ContactMe id="contact" />
    </div>
  </div>
</template>
