<script setup lang="ts"></script>

<template>
  <div>
    <h1>Test Component</h1>
    <slot name="default">
      <p>Default Slot</p>
    </slot>
    <slot name="end">end</slot>
  </div>
</template>
