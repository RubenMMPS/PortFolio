<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div class="order-2 md:order-1">
      <p class="text-brand-primary">SOFTWARE ENGINEER</p>
      <h1 class="text-white mb-4">
        Hi, im
        <span
          class="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent"
          >Rubén</span
        >,
        <br class="hidden md:block" />
        a Full-Stack Developer.
      </h1>
      <p class="text-gray-400 mb-4">
        Crafting high-performance, scalable web applications with a focus on
        clean architecture user experiences.
      </p>
      <div class="flex flex-col md:flex-row gap-4">
        <BaseButton text="View Work" type="primary" />
        <BaseButton text="Download CV" type="secondary" />
      </div>
    </div>
    <div class="flex items-center justify-center order-1 md:order-2">
      <img
        src="../public/pinguino.png"
        alt="Profile Picture"
        class="w-60 h-60 object-cover rounded-xl"
      />
    </div>
  </section>
</template>
