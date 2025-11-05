<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="flex flex-col min-h-screen max-w-sm mx-auto justify-center">
    <UPageCard
      title="Hikss!"
      :description="`route ${ (error?.data as { path: string })?.path } ga ada nih, kata gua mending balik dah, pencet gua buat balik`"
      orientation="vertical"
      @click="handleError"
      spotlight
      spotlight-color="secondary"
      reverse
      :ui="{
        root: 'max-w-sm mx-7 shadow-xl',
        body: 'text-center mx-7 mb-3',
        title: 'text-2xl',
        description: 'text-md',
      }"
    >
      <template #header>
        <img  src="~assets/img/wtpo.jpeg" alt="Nangis" class="w-full rounded-md" />
      </template>
    </UPageCard>
  </div>
</template>
