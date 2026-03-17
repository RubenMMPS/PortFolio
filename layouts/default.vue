<template>
  <div class="min-h-screen flex flex-col bg-bg-primary">
    <AppHeader />
    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
