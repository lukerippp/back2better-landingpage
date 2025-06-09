<script setup lang="ts">
const props = defineProps<{
  title: string;
  subheading: string;
  loading: boolean;
  description: string;
}>();
</script>

<template>
  <div v-if="loading" class="flex flex-col">Loading</div>
  <div v-else class="flex flex-col">
    <section class="hero">
      <h1>{{ title }}</h1>
      <p>{{ subheading }}</p>
      <p>{{ description }}</p>
      <ContentRenderer :value="hero" />
    </section>
  </div>
</template>
