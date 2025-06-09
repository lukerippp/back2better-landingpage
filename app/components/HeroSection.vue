<script setup lang="ts">
// interface HeroData {
//   title: string;
//   subheading: string;
// }
const props = defineProps<{
  title: string;
  subheading: string;
  loading: boolean;
  description: string;
  body?: object;
}>();
</script>

<template>
  <div v-if="loading" class="flex flex-col">Loading</div>
  <div v-else class="flex flex-col">
    <section class="hero">
      <h1>{{ title }}</h1>
      <p>{{ subheading }}</p>
      <p>{{ description }}</p>
      <ContentRenderer :value="body" />
    </section>
  </div>
</template>
