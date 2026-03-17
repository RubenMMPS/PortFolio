<script setup lang="ts">
import ContactMe from "~/components/ContactMe.vue";
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
