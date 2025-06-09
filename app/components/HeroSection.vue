<script setup lang="ts">
const { data: hero } = await useAsyncData("herosection", () => {
  return queryCollection("content").path("/").first();
});
</script>

<template>
  <div class="flex flex-col">
    <pre>hero;{{ hero }}</pre>
    <section v-if="hero" class="hero">
      <h1>{{ hero.title }}</h1>
      <p>{{ hero.subheading }}</p>
      <ContentRenderer :value="hero" />
    </section>
    <div v-else>Loading...</div>
  </div>
</template>
