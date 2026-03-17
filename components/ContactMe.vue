<template>
  <section
    id="contact"
    class="text-gray-300 bg-inside-components rounded-lg p-8 max-w-2xl mx-auto"
  >
    <h2 class="text-white mb-4 text-center">Let's Connect</h2>

    <p class="text-center mb-8">
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
            class="bg-inside-components text-white rounded px-4 py-2 border border-gray-600"
          />
        </div>

        <div class="flex flex-col">
          <label class="text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            class="bg-inside-components text-white rounded px-4 py-2 border border-gray-600"
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
          class="bg-inside-components text-white rounded px-4 py-2 border border-gray-600"
        />
      </div>

      <button
        type="submit"
        class="mt-5 w-full bg-brand-primary text-black text-center font-semibold py-3 rounded"
      >
        Send Message
      </button>
    </form>
  </section>
</template>
