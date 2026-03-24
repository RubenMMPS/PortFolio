<template>
  <section
    id="contact"
    class="text-text-secondary bg-inside-components rounded-2xl p-6 md:p-12 lg:p-16 max-w-5xl mx-auto"
  >
    <h2 class="text-3xl md:text-4xl text-text-primary mb-4 md:mb-6 text-center">
      Let's Connect
    </h2>

    <p class="text-center mb-4 md:mb-10 text-base md:text-lg">
      Have a project in mind or just want to say hi? My inbox is always open.
    </p>
    <form
      action="https://formspree.io/f/mgonpebb"
      method="POST"
      class="space-y-6"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col">
          <label class="text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            class="bg-inside-components text-text-primary rounded px-4 py-2 border border-gray-600"
          />
        </div>

        <div class="flex flex-col">
          <label class="text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            class="bg-inside-components text-text-primary rounded px-4 py-2 border border-gray-600"
          />
        </div>
      </div>

      <div class="flex flex-col">
        <label class="text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          required
          rows="6"
          class="bg-inside-components text-text-primary rounded px-4 py-2 border border-gray-600"
        />
      </div>

      <button
        type="submit"
        class="mt-5 w-full bg-brand-primary text-black text-center font-semibold py-3 rounded transition hover:scale-105"
      >
        Send Message
      </button>
    </form>
  </section>
</template>
