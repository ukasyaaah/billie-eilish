<script setup lang="ts">
const { data }: any = await useFetch("/api/about");
</script>
<template>
  <div
    class="bg-black flex flex-col justify-center items-center min-h-screen px-5 py-15 lg:px-45"
  >
    <UPageCTA
      :title="data.title"
      :description="data.description"
      orientation="horizontal"
      :links="data.links"
    >
      <NuxtImg
        src="/Billie210.webp"
        width="420"
        height="564"
        quality="100"
        fit="cover"
        alt="WTPO"
        class="flex mx-auto rounded-lg"
      />
    </UPageCTA>
  </div>
</template>
