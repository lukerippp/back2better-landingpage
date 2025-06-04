<script setup lang="ts">
const route = useRoute();

const { data: hero } = await useAsyncData(route.path, () => {
  return queryContent("hero").where({ _path: route.path }).findOne();
});
</script>

<template>
  <section v-if="hero">
    <h1>{{ hero.title }}</h1>
    <p>{{ hero.subtitle }}</p>
  </section>
  <div v-else>Loading...</div>
</template>
