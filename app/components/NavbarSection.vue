<script setup lang="ts">
const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<template>
  <nav class="bg-white shadow-md fixed top-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-blue-700">Back2Better</div>

      <div class="hidden md:flex space-x-8 items-center">
        <a href="#home" class="text-gray-700 hover:text-blue-600 font-medium"
          >Home</a
        >
        <a href="#about" class="text-gray-700 hover:text-blue-600 font-medium"
          >About</a
        >
        <a
          href="#services"
          class="text-gray-700 hover:text-blue-600 font-medium"
          >Services</a
        >
        <a href="#contact" class="text-gray-700 hover:text-blue-600 font-medium"
          >Contact</a
        >
        <button
          class="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>

      <div class="md:hidden">
        <button
          @click="toggleMobileMenu"
          class="text-gray-700 focus:outline-none"
        >
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-md">
      <div class="flex flex-col space-y-4 p-6">
        <a href="#home" class="text-gray-700 hover:text-blue-600 font-medium"
          >Home</a
        >
        <a href="#about" class="text-gray-700 hover:text-blue-600 font-medium"
          >About</a
        >
        <a
          href="#services"
          class="text-gray-700 hover:text-blue-600 font-medium"
          >Services</a
        >
        <a href="#contact" class="text-gray-700 hover:text-blue-600 font-medium"
          >Contact</a
        >
        <button
          class="mt-4 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  </nav>
</template>
