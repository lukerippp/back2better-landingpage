<script setup lang="ts">
const { data: hero } = await useAsyncData("hero", () => {
  return queryCollection("hero").findOne();
});
</script>

<template>
  <section v-if="hero">
    <h1>{{ hero.title }}</h1>
    <p>{{ hero.subtitle }}</p>
  </section>
  <div v-else>Loading...</div>
</template>
