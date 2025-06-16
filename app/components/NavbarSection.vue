<script setup lang="ts">
const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}
</script>

<template>
  <nav class="bg-white shadow-md fixed top-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-blue-700">Back2Better</div>
      <button
        @click="scrollToBottom"
        class="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Register for Beta Access
      </button>
    </div>
  </nav>
</template>
