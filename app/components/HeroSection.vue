<script setup lang="ts">
const props = defineProps<{
  title: string;
  subheading: string;
  loading: boolean;
  description: string;
  body?: object;
}>();
</script>

<template>
  <!-- https://ui.nuxt.com/components/page-hero -->
  <div v-if="loading" class="flex flex-col">Loading</div>
  <div v-else class="flex flex-col">
    <section class="hero">
      <h1>{{ title }}</h1>
      <p>{{ subheading }}</p>
      <p>{{ description }}</p>
      <template v-if="body"><ContentRenderer :value="body" /></template>
    </section>
  </div>
</template>
