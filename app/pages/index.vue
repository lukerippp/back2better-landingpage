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
function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="flex flex-col min-h-screen pt-16">
    <UPageHeader>
      <NavbarSection />
    </UPageHeader>

    <!-- <UAlert
      title="Beta Testing"
      description="Back2Better is still in Beta Phase"
      color="secondary"
    /> -->

    <main class="flex-grow flex items-center justify-center">
      <UPageHero
        v-bind="hero"
        headline="Back2Better"
        :ui="{
          title: 'text-4xl font-bold font-display text-red-500',
          headline: 'text-primary text-6xl',
          root: 'pt-16',
          content: 'flex items-center gap-8',
        }"
        orientation="horizontal"
        class="mb-8"
      >
        <button
          @click="scrollToBottom"
          class="w-1/2 bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Register for Beta Access
        </button>
      </UPageHero>
      <div class="w-1/2 flex justify-end mt-[2cm]">
        <img
          v-bind="hero.image"
          class="w-full h-auto rounded-lg shadow-2xl ring ring-default"
        />
      </div>
    </main>

    <UPageSeperator class="my-10" />
    <UBanner
      color="primary"
      variant="subtle"
      title="Empower your practice. Enhance patient recovery."
    >
    </UBanner>
    <UPageSection
      id="banner"
      title="Empower your practice. Enhance patient recovery."
    >
      <p class="max-w-2xl mx-auto text-center">
        Join Back2Better and revolutionise your customer's rehabilitation
        Journey.
      </p>
    </UPageSection>

    <UPageSeperator class="my-10" />

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

    <UPageSeperator class="my-2" />

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

    <UPageSeperator class="my-4" />

    <UPageSection
      orientation="horizontal"
      id="faqs"
      title="Frequently Asked Questions"
      :ui="{ title: 'text-xl font-bold' }"
    >
      <UPageAccordion class="mb-8" :items="items" default-value="0">
        <template #body="{ item }">
          <MDC :value="item.content" unwrap="p" />
        </template>
      </UPageAccordion>
    </UPageSection>

    <UPageSeperator />

    <main class="flex-grow flex items-center justify-center">
      <UPageHero
        title="For therapists seeking streamlined management and patients seeking a smoother recovery, our platform is your digital companion. Begin a new chapter in rehab excellence."
        headline="At the intersection of innovation and care, lies Back2Better."
        description="Whether you're a patient seeking tailored therapy or a therapist aiming to expand your reach, Back2Better places control firmly in your hands."
        :ui="{
          title: 'text-2xl font-bold',
          headline: 'text-primary text-6xl',
          root: 'pt-16',
          content: 'flex items-center gap-8',
        }"
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

    <UPageSeperator class="my-10" />

    <UPageSection
      id="features"
      title="Why Choose Back2Better"
      :ui="{ title: 'text-4xl font-bold' }"
      class="mb-8"
    >
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

    <UPageSeperator class="my-4" />

    <UPageSection
      id="register"
      title="Register"
      orientation="horizontal"
      :ui="{ title: 'text-4xl font-bold' }"
    >
      <UFormField
        size="lg"
        label="Register to become a Back2Better Provider Today"
        description="Join the Back2Better platform. By signing up, you'll access tools that simplify and enhance the physiotherapy process. Fill in the details below to get started."
        :ui="{ label: 'text-lg font-bold' }"
      >
        <UInput placeholder="Enter your email" />
      </UFormField>
    </UPageSection>

    <UPageSeperator class="my-12" />

    <UPageSection
      id="waffle"
      title="Ready to be part of the revolution?"
      description="Welcome to the era where technology seamlessly integrates with therapy, and every patient's recovery journey is prioritised."
      :ui="{
        title: 'text-4xl font-bold text-white',
        root: 'bg-primary text-white py-12',
        description: 'max-w-xl mx-auto text-center text-white',
      }"
    >
    </UPageSection>

    <FooterSection />
  </div>
</template>
