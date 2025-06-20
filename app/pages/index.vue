<script setup lang="ts">
const { data: page } = await useAsyncData("indexpage", () => {
  return queryCollection("content").path("/").first();
});
const hero = computed(() => page.value ?? {});
const cards = computed(() => page.value?.cards ?? []);
const faqs = computed(() => page.value?.faqs ?? []);
const items = faqs.value.map((faq, idx) => ({
  label: faq.question,
  content: faq.answer,
  value: idx.toString(),
}));
const features = computed(() => page.value?.features ?? []);
const features2 = computed(() => page.value?.features2 ?? []);
const hero2 = computed(() => page.value?.hero2 ?? {});
function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <UPageHeader>
      <NavbarSection />
    </UPageHeader>

    <main class="flex-grow flex items-center justify-center">
      <UPageHero
        v-bind="hero"
        headline="Back2Better"
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

    <UBanner
      title="Empower your practice. Enhance patient recovery."
      class="font-display text-center"
    >
    </UBanner>

    <UPageSection
      title="The Back2Better Difference"
      description="What we offer"
      orientation="horizontal"
      class="mb-8"
    >
    </UPageSection>

    <div
      class="w-full max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-stretch gap-6 mb-8"
    >
      <UPageCard
        v-for="(feat, i) in features2"
        :key="i"
        :title="feat.title"
        :description="feat.description"
        variant="soft"
        orientation="horizontal"
        class="w-full md:w-1/3"
      >
        <img
          :src="hero[`image${i + 2}`].src"
          class="w-full h-full object-cover rounded-lg shadow-2xl"
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

    <UPageSection orientation="horizontal" title="Frequently Asked Questions">
      <UPageAccordion class="mb-8" :items="items" default-value="0">
        <template #body="{ item }">
          <MDC :value="item.content" unwrap="p" />
        </template>
      </UPageAccordion>
    </UPageSection>

    <main class="flex-grow flex items-center justify-center">
      <UPageHero
        title="For therapists seeking streamlined management and patients seeking a smoother recovery, our platform is your digital companion. Begin a new chapter in rehab excellence."
        headline="At the intersection of innovation and care, lies Back2Better."
        description="Whether you're a patient seeking tailored therapy or a therapist aiming to expand your reach, Back2Better places control firmly in your hands."
        orientation="horizontal"
        class="mb-8"
      >
      </UPageHero>
      <div class="w-1/2 flex justify-end mt-[2cm]">
        <img
          v-bind="hero.image5"
          class="w-full h-auto rounded-lg -scale-x-100 shadow-2xl ring ring-default"
        />
      </div>
    </main>

    <UPageSection title="Why Choose Back2Better">
      <div class="grid grid-cols-2 grid-rows-2 gap-6 mt-6">
        <UPageCard
          v-for="(feature, i) in features"
          :key="i"
          :title="feature.title"
          :description="feature.description"
          variant="soft"
          orientation="vertical"
          class="w-full"
        />
      </div>
    </UPageSection>

    <UPageSection title="Register" orientation="horizontal">
      <UFormField
        label="Register to become a Back2Better Provider Today"
        description="Join the Back2Better platform. By signing up, you'll access tools that simplify and enhance the physiotherapy process. Fill in the details below to get started."
      >
        <UInput placeholder="Enter your email" />
      </UFormField>
    </UPageSection>

    <UBanner
      class="font-display"
      title="Ready to be part of the revolution?"
      description="Welcome to the era where technology seamlessly integrates with therapy, and every patient's recovery journey is prioritised."
    >
    </UBanner>

    <FooterSection />
  </div>
</template>
