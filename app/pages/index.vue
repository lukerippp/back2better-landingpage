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
const info = computed(() => page.value?.info ?? {});
const betaform = computed(() => page.value?.betaform ?? {});
const form = reactive({
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  postcode: "",
});
const items2 = ref<RadioGroupItem[]>([
  {
    label: "Patient",
    value: "patient",
  },
  {
    label: "Provider",
    value: "provider",
  },
]);
const value = ref<RadioGroupValue>("system");
const onSubmit = () => {
  console.log("Registering user:", form);
};
</script>

<template>
  <div class="flex flex-col">
    <UPageHeader>
      <NavbarSection />
    </UPageHeader>

    <main class="flex-grow flex items-center justify-center">
      <UPageHero v-bind="hero" headline="Back2Better" orientation="horizontal">
        <div>
          <img
            v-bind="hero.image"
            class="w-full h-full object-cover rounded-lg shadow-2xl ring ring-default"
            alt="Back2Better"
          />
        </div>
      </UPageHero>
    </main>

    <UBanner title="Empower your practice. Enhance patient recovery." />

    <UPageSection
      class="w-full max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-stretch gap-6"
      title="The Back2Better Difference"
      description="What we offer"
      orientation="vertical"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UPageCard
          v-for="(feat, i) in features2"
          :key="i"
          :title="feat.title"
          :description="feat.description"
          variant="soft"
          class="w-full"
        >
          <img
            :src="hero[`image${i + 2}`]?.src"
            class="w-full h-48 object-cover rounded-lg shadow-2xl"
            alt=""
          />
        </UPageCard>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-6">
        <UPageCard
          v-for="(card, i) in cards"
          :key="i"
          v-bind="card"
          variant="soft"
        />
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection orientation="vertical" title="Frequently Asked Questions">
      <UPageAccordion :items="items" default-value="0">
        <template #body="{ item }">
          <MDC :value="item.content" unwrap="p" />
        </template>
      </UPageAccordion>
    </UPageSection>

    <USeparator />

    <main class="justify-center">
      <UPageSection
        :headline="info.headline"
        :description="info.description"
        orientation="horizontal"
      >
        <div class="ml-[3cm]">
          <img
            v-bind="hero.image7"
            class="w-2/3 h-full object-cover rounded-lg -scale-x-100"
            alt="Back2Better2"
          />
        </div>
      </UPageSection>
    </main>

    <USeparator />

    <UPageSection title="Why Choose Back2Better">
      <div class="grid grid-cols-2 grid-rows-2 gap-6">
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

    <UPageSection
      id="beta-form"
      :title="betaform.title"
      :description="betaform.description"
      orientation="vertical"
      :ui="{
        root: 'max-w-lg mx-auto space-y-6 py-8 border border-gray-200 rounded-xl bg-white',
      }"
    >
      <UForm :modelValue="form" @submit="onSubmit" class="space-y-4">
        <UFormField label="First Name*" size="lg">
          <UInput
            v-model="form.firstName"
            placeholder="Enter your first name"
            required
          />
        </UFormField>

        <UFormField label="Last Name*" size="lg">
          <UInput
            v-model="form.lastName"
            placeholder="Enter your last name"
            required
          />
        </UFormField>

        <UFormField label="Mobile*" size="lg">
          <UInput
            v-model="form.mobile"
            type="tel"
            placeholder="e.g. 0412 345 678"
            required
          />
        </UFormField>

        <UFormField label="Email*" size="lg">
          <UInput
            v-model="form.email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </UFormField>

        <UFormField label="Postcode*" size="lg">
          <UInput v-model="form.postcode" placeholder="e.g. 4000" required />
        </UFormField>

        <UFormField label="I’m registering as" size="lg">
          <URadioGroup
            v-model="value"
            :items="items2"
            orientation="horizontal"
            color="primary"
          />
        </UFormField>

        <div class="pt-4">
          <UButton type="submit" variant="solid" color="primary" class="w-1/2">
            Get Early Access
          </UButton>
        </div>
      </UForm>
    </UPageSection>

    <USeparator
      class="py-14"
      label="Ready to be part of the Back2Better revolution?"
      size="md"
    />

    <UBanner
      title="Welcome to the era where technology seamlessly integrates with therapy"
    />

    <FooterSection />
  </div>
</template>
