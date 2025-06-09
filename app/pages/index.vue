<script setup lang="ts">
const { data: hero } = await useAsyncData("herosection", () => {
  return queryCollection("content").path("/").first();
});
</script>

<template>
  <pre>index</pre>
  <div class="flex flex-col min-h-screen">
    <NavbarSection />

    <main class="flex-grow flex items-center justify-center">
      <HeroSection :hero="hero" />
      <pre>hero;{{ hero }}</pre>
    </main>

    <FooterSection />
  </div>
</template>
