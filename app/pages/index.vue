<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col px-3 bg-black relative lg:flex-row lg:gap-x-10 min-h-screen text-2xl md:text-5xl lg:text-6xl text-white font-wwaf bg-bottom bg-cover selected-style justify-center items-center lg:mx-auto"
  >
    <UButton
      class="absolute top-5 left-5"
      to="https://github.com/ukasyaaah"
      icon="i-lucide-github"
      size="md"
      variant="subtle"
    />

    <NuxtImg src="/when.png" alt="When" sizes="100vw sm:50vw" />
    <p class="flex flex-col text-left items-left">
      WHEN WE ALL FALL ASLEEP, <span>WHERE DO WE GO?</span>
    </p>
  </div>
</template>
