<script setup lang="ts">
const { data: page } = await useAsyncData("indexpage", () => {
  return queryCollection("content").path("/").first();
});
const hero = computed(() => page.value ?? {});
const cards = computed(() => page.value?.cards ?? []);
</script>

<template>
  <div class="flex flex-col min-h-screen pt-16">
    <UPageHeader>
      <NavbarSection />
    </UPageHeader>

    <UAlert
      title="Beta Testing"
      description="Back2Better is still in Beta Phase"
      color="secondary"
    />

    <main class="flex-grow flex items-center justify-center">
      <UPageHero
        v-bind="hero"
        headline="Back2Better"
        :ui="{
          title: 'text-4xl font-bold',
          headline: 'text-blue-500 text-6xl',
          root: 'pt-16',
          content: 'flex items-center gap-8',
        }"
        orientation="horizontal"
        class="mb-8"
      >
      </UPageHero>
      <div class="w-1/2 flex justify-end mt-[2cm]">
        <img
          v-bind="hero.image"
          class="w-full h-auto rounded-lg shadow-2xl ring ring-default"
        />
      </div>
    </main>

    <USeperator />

    <UPageSection
      id="features"
      title="The Back2Better Difference"
      description="What we offer"
      orientation="horizontal"
      :ui="{
        title: 'text-4xl font-bold',
      }"
      class="mb-8"
    >
    </UPageSection>

    <div
      class="w-full max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 mb-8"
    >
      <UPageCard
        class="w-full md:w-1/3"
        title="Virtual Sessions"
        description="Learn about our virtual telehealth consultation sessions"
        variant="soft"
        orientation="vertical"
        reverse="false"
      >
        <img
          v-bind="hero.image2"
          class="w-1/2 h-auto rounded-lg shadow-2xl ring ring-default"
        />
      </UPageCard>
      <UPageCard
        class="w-full md:w-1/3"
        title="Personalized recovery"
        description="Learn about our personalized recovery program, tailored to you"
        variant="soft"
        orientation="vertical"
        reverse="false"
      >
        <img
          v-bind="hero.image3"
          class="w-1/2 h-auto rounded-lg shadow-2xl ring ring-default"
        />
      </UPageCard>
      <UPageCard
        class="w-full md:w-1/3"
        title="Licensed Physiotherapists"
        description="See our list of qualified licensed physiotherapists"
        variant="soft"
        orientation="vertical"
        reverse="false"
      >
        <img
          v-bind="hero.image4"
          class="w-1/2 h-auto rounded-lg shadow-2xl ring ring-default"
        />
      </UPageCard>
    </div>

    <UPageSection class="mb-8">
      <UPageGrid class="grid grid-cols-2 gap-6">
        <UPageCard
          v-for="(card, i) in cards"
          :key="i"
          v-bind="card"
          class="col-span-1"
        >
        </UPageCard>
      </UPageGrid>
    </UPageSection>
    <FooterSection />
  </div>
</template>
