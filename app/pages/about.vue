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
      <pre>hero;{{ hero }}</pre>
      <HeroSection
        :title="hero.title"
        :subheading="hero.subheading"
        :loading="false"
        :description="hero.description"
        :body="hero.body"
      />
    </main>

    <FooterSection />
  </div>
</template>
