<template>
  <button
    :class="[
      'py-2 px-4 rounded hover:bg-brand-secondary',
      type === 'primary'
        ? 'bg-brand-primary'
        : 'border border-white text-white',
    ]"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  type: "primary" | "secondary";
}>();
</script>
