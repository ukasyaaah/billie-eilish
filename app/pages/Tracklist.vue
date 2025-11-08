<script setup lang="ts">
const { data }: any = await useFetch("/api/track");
</script>
<template>
  <div
    class="relative bg-linear-to-b from-black to-lime-300 flex flex-col justify-center items-center min-h-screen px-5 py-15 lg:px-45"
  >
    <UButton
      class="absolute top-5 left-5"
      to="/"
      label="Kembali"
      icon="mdi:keyboard-backspace"
      size="md"
      variant="solid"
    />
    <UPageHeader
      :ui="{ title: 'text-white md:text-6xl lg:text-7xl lg:my-4' }"
      class="selected-style text-center border-0"
      :title="data.header"
    />
    <UBlogPosts>
      <UPageCard
        v-for="(song, index) in data.track"
        :key="index"
        :title="song.title"
        :description="song.description"
        :to="song.to"
        target="_blank"
        icon="flowbite:music-solid"
        :ui="{
          root: 'hover:bg-white/90',
        }"
      />
    </UBlogPosts>
  </div>
</template>
