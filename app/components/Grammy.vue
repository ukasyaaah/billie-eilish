<script setup lang="ts">
const { data } = await useFetch("/api/grammy");
</script>

<template>
  <div
    class="bg-black flex flex-col justify-center items-center min-h-screen px-5 py-15 lg:px-45"
  >
    <UPageSection
      :icon="data?.icon"
      :title="data?.title"
      :description="data?.description"
      orientation="vertical"
      :features="data?.grammys"
      class="text-primary"
      :ui="{
        root: 'flex mx-auto  font-sans text-white',
        body: 'flex flex-col justify-center items-center mx-auto',
        title: 'text-white',
        description: 'text-white',
        features: 'text-primary  ',
      }"
    >
      <UTooltip text="Photo:Kevork Djansezian/Getty Images">
        <NuxtImg
          src="/grammy.jpg"
          width="700"
          height="400"
          fit="cover"
          alt="Illustration"
          class="flex mx-auto border rounded-lg"
        />
      </UTooltip>
    </UPageSection>
  </div>
</template>
