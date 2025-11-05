<template>
  <div
    class="flex flex-col justify-center items-center bg-black text-white font-wwaf selected-style relative lg:flex-row lg:gap-x-10 min-h-screen text-2xl md:text-6xl lg:text-6xl"
  >
    <UButton
      class="absolute top-5 left-5"
      to="https://github.com/ukasyaaah"
      icon="i-lucide-github"
      size="md"
      variant="subtle"
    />

    <NuxtImg
      src="/when.png"
      width="300"
      height="300"
      alt="wwafawdwg"
      quality="100"
    />
    <p class="flex flex-col">
      WHEN WE ALL FALL ASLEEP, <span>WHERE DO WE GO?</span>
      <UButton :ui="{
        base: 'bg-white hover:bg-white font-sans w-fit mt-5',
        label:' text-black'
      }"
      to="/tracklist" size="lg" variant="soft" label="Check Out the Tracklist" />
    </p>
  </div>
</template>
