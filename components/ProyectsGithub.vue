<script setup lang="ts">
import { proyectsIcons } from "~/data/icons";

const githubIconName = proyectsIcons[0]?.link ?? "mdi:github";
const githubIconColor = proyectsIcons[0]?.color ?? "white";
const demoIconName = proyectsIcons[1]?.link ?? "mdi:open-in-new";
const demoIconColor = proyectsIcons[1]?.color ?? "white";
</script>

<template>
  <section class="text-white">
    <h2 class="text-center mb-5">Featured Proyects</h2>
    <div class="border-b-8 border-brand-primary w-28 mb-20 mx-auto rounded" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        class="w-full bg-inside-components rounded-lg overflow-hidden flex flex-col"
      >
        <img
          src="../public/pokelytro.png"
          alt="Pokelytro"
          class="w-full h-52 sm:h-56 lg:h-60 object-cover object-top block"
        />
        <div class="p-4 flex-1">
          <span
            class="bg-green-500 text-[0.75rem] px-[0.5rem] py-[0.25rem] rounded-md mr-2"
            >Angular</span
          >
          <span
            class="bg-gray-500 text-[0.75rem] px-[0.5rem] py-[0.25rem] rounded-md mr-2"
            >Node.js</span
          >
          <span
            class="bg-gray-500 text-[0.75rem] px-[0.5rem] py-[0.25rem] rounded-md"
            >MongoDB</span
          >
          <h2 class="mt-5 mb-2">Pokelytro</h2>
          <p class="text-gray-500 mb-5">
            Una página la cual cuenta con una pokedex, el usuario puede buscar
            por nombre, número de pokedex, tipos o por favoritos. También cuenta
            con un constructor de equipos donde el usuario puede crear su propio
            equipo de pokémon y guardarlo en su pérfil propio para futuras
            consultas.
          </p>
          <nuxt-link
            to="https://github.com/marcoslgl/pokelytro"
            target="_blank"
            class="mr-4"
          >
            GitHub
            <Icon :name="githubIconName" :color="githubIconColor" />
          </nuxt-link>
          <nuxt-link to="https://pokelytro.vercel.app/" target="_blank">
            Live Demo
            <Icon :name="demoIconName" :color="demoIconColor" />
          </nuxt-link>
        </div>
      </div>
      <div
        class="w-full bg-inside-components rounded-lg overflow-hidden flex flex-col"
      >
        <img
          src="../public/litrogym.png"
          alt="LitroGym"
          class="w-full h-52 sm:h-56 lg:h-60 object-cover object-top block"
        />
        <div class="p-4 flex-1">
          <span
            class="bg-green-500 text-[0.75rem] px-[0.5rem] py-[0.25rem] rounded-md mr-2"
            >Remix</span
          >
          <span
            class="bg-gray-500 text-[0.75rem] px-[0.5rem] py-[0.25rem] rounded-md mr-2"
            >Node.js</span
          >
          <span
            class="bg-gray-500 text-[0.75rem] px-[0.5rem] py-[0.25rem] rounded-md"
            >Vite</span
          >
          <h2 class="mt-5 mb-2">LitroGym</h2>
          <p class="text-gray-500 mb-5">
            Una página la cual funciona como creador de rutinas de gimnasio, el
            usuario puede crear sus propias rutinas o ver comidas saludables
            para la dieta. También cuenta con una sección de ejercicios donde se
            pueden filtrar por grupo muscular, tipo de ejercicio o equipo
            necesario.
          </p>
          <nuxt-link
            to="https://github.com/edumoro412/LitrogymRemix"
            target="_blank"
            class="mr-4"
          >
            GitHub
            <Icon :name="githubIconName" :color="githubIconColor" />
          </nuxt-link>
        </div>
      </div>
      <div
        class="w-full bg-inside-components rounded-lg overflow-hidden flex flex-col"
      >
        <img
          src="../public/app-mensaje-dia.png"
          alt="App Mensaje del Día"
          class="w-full h-52 sm:h-56 lg:h-60 object-cover object-top block"
        />
        <div class="p-4 flex-1">
          <span
            class="bg-green-500 text-[0.75rem] px-[0.5rem] py-[0.25rem] rounded-md mr-2"
            >Angular</span
          >
          <span
            class="bg-gray-500 text-[0.75rem] px-[0.5rem] py-[0.25rem] rounded-md mr-2"
            >Node.js</span
          >
          <h2 class="mt-5 mb-2">App Mensaje del Día</h2>
          <p class="text-gray-500 mb-5">
            Una página originamente hecha para una amiga la cual estaba
            trabajando en el extranjero, la web contiene un mensaje inspirador
            para cada día del mes.Tambíen cuenta con un wordle personalizado que
            cambia cada día y con pistas con cada respuesta erronea.
          </p>
          <nuxt-link
            to="https://github.com/RubenMMPS/app-mensaje-dia"
            target="_blank"
            class="mr-4"
          >
            GitHub
            <Icon :name="githubIconName" :color="githubIconColor" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
