<template>
  <a
    :href="
      type === 'primary'
        ? 'https://github.com/RubenMMPS'
        : '/Rubén_Martín_CV.pdf'
    "
    :download="type === 'secondary' ? 'Rubén_Martín_CV.pdf' : undefined"
  >
    <button
      :class="[
        'min-h-12 min-w-12 py-2 px-4 inline-flex items-center justify-center rounded trasition hover:scale-110',
        type === 'primary'
          ? 'bg-brand-primary'
          : 'border border-white text-text-primary',
      ]"
    >
      {{ text }}
    </button>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  type: "primary" | "secondary";
}>();
</script>
