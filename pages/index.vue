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
    <section
      class="relative min-h-screen w-screen overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
    >
      <NuxtImg
        src="/fondo.jpg"
        alt="Background"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-bg-primary/60" />

      <div
        class="relative z-10 min-h-screen flex items-center justify-center p-8"
      >
        <BaseCard id="BaseCard" />
      </div>
    </section>
    <div class="flex gap-8 flex-col md:flex-row mt-8">
      <AboutMe id="about" class="w-full" />
      <TechnicalProficiency id="skills" class="w-full" />
    </div>
    <div class="mt-8">
      <ProyectsGithub id="proyects" />
    </div>
    <div class="mt-4">
      <WorkExperience id="experience" />
    </div>
    <div class="mt-8">
      <ContactMe id="contact" />
    </div>
  </div>
</template>
