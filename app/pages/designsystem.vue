<script setup lang="ts">
const copy = () => {
  const quickfox = "the quick brown fox jumps over the lazy dog";
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const loremipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return { quickfox, lorem, loremipsum };
};
const { quickfox, lorem, loremipsum } = copy();
</script>
<template>
  <UContainer>
    <header class="space-y-h6 my-h1">
      <h1 class="display-h1">Design System</h1>
      <p class="max-w-prose my-h6">
        This page contains a summary of the design system used in this Nuxt 3
        application. It includes information about the fonts, colors, and
        typography used.
      </p>
    </header>
    <USeparator class="my-h1" />
    <div class="space-y-h6 my-h1">
      <section
        class="lg:flex flex-row gap-h6 divide divide-red-100 items-start justify-start"
      >
        <header class="section-header">
          <h2 class="display-h6">Display fonts</h2>
          <h2 class="font-display">Roboto Serif</h2>
        </header>
        <div class="grow space-y-h6">
          <h1 class="display-h1">{{ quickfox }}</h1>
          <h2 class="display-h2">{{ quickfox }}</h2>
          <h3 class="display-h3">{{ quickfox }}</h3>
          <h4 class="display-h4">{{ quickfox }}</h4>
          <h5 class="display-h5">{{ quickfox }}</h5>
          <h6 class="display-h6">{{ quickfox }}</h6>
          <p class="display-p">{{ lorem }}</p>
          <p class="text-p">{{ loremipsum }}</p>
        </div>
      </section>
      <USeparator class="my-h1" />
      <section
        class="lg:flex flex-row gap-h6 divide divide-red-100 items-start justify-start"
      >
        <header class="section-header">
          <h2 class="display-h6">Copy fonts</h2>
          <h2 class="font-sans">Varela Round</h2>
        </header>
        <div class="grow space-y-h6">
          <h1 class="text-h1">{{ quickfox }}</h1>
          <h2 class="text-h2">{{ quickfox }}</h2>
          <h3 class="text-h3">{{ quickfox }}</h3>
          <h4 class="text-h4">{{ quickfox }}</h4>
          <h5 class="text-h5">{{ quickfox }}</h5>
          <h6 class="text-h6">{{ quickfox }}</h6>
          <p class="text-p">{{ lorem }}</p>
          <p class="text-p">{{ loremipsum }}</p>
        </div>
      </section>
    </div>
  </UContainer>
</template>
<style lang="css">
@reference '~~/app/assets/css/main.css';

.section-header {
  @apply lg:min-w-[160px]  sticky top-h6;
}
</style>
