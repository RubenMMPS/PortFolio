<template>
  <div class="min-h-screen flex flex-col bg-bg-primary overflow-x-hidden">
    <AppHeader />
    <main class="flex-grow container mx-auto">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
