<script setup lang="ts">
const { data: hero } = await useAsyncData("aboutsection", () => {
  return queryCollection("content").path("/about").first();
});
</script>

<template>
  <div class="mt-12"></div>
  <pre>about</pre>
  <div class="flex flex-col min-h-screen">
    <NavbarSection />

    <main class="flex-grow flex items-center justify-center">
      <UPageHero v-bind="hero" headline="B2B"> </UPageHero>
    </main>

    <FooterSection />
  </div>
</template>
