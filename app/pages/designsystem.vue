<script setup lang="ts">
const $dummycopy = () => {
  return "the quick brown fox jumps over the lazy dog";
};
</script>
<template>
  <UContainer>
    <h1 class="display-h1">{{ $dummycopy() }}</h1>
    <h2 class="display-h2">{{ $dummycopy() }}</h2>
    <h3 class="display-h3">{{ $dummycopy() }}</h3>
    <h4 class="display-h4">{{ $dummycopy() }}</h4>
    <h5 class="display-h5">{{ $dummycopy() }}</h5>
    <h6 class="display-h6">{{ $dummycopy() }}</h6>
  </UContainer>
</template>
