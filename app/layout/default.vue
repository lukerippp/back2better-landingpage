<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavbarSection />

    <main class="flex-1 px-4 py-8">
      <slot />
    </main>

    <FooterSection />
  </div>
</template>
