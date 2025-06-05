<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection("hero").path("/").first()
);
</script>

<template>
  <section v-if="hero" class="hero">
    <h1>{{ hero.title }}</h1>
    <p>{{ hero.subheading }}</p>
    <ContentRenderer :value="hero" />
  </section>
  <div v-else>Loading...</div>
</template>
