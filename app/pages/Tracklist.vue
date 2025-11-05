<script setup lang="ts">
definePageMeta({
  layout: false,
});
const songs = reactive([
  {
    title: "!!!!!!!",
    description:
      "A short intro track that sets the eerie, chaotic tone of the album.",
  },
  {
    title: "Bad Guy",
    description:
      "Billie’s playful yet dark anthem that flips pop music expectations upside down.",
  },
  {
    title: "Xanny",
    description:
      "A smoky, jazzy reflection on peer pressure and substance use.",
  },
  {
    title: "You Should See Me in a Crown",
    description: "A bold, menacing declaration of power with a hypnotic beat.",
  },
  {
    title: "All the Good Girls Go to Hell",
    description:
      "An apocalyptic, tongue-in-cheek take on climate change and hypocrisy.",
  },
  {
    title: "Wish You Were Gay",
    description:
      "A raw and controversial expression of unrequited love and teenage confusion.",
  },
  {
    title: "When the Party’s Over",
    description: "A haunting, minimalist breakup ballad soaked in quiet pain.",
  },
  {
    title: "8",
    description:
      "A bittersweet ukulele tune from the perspective of a lost, lonely heart.",
  },
  {
    title: "My Strange Addiction",
    description:
      "A quirky love song sampling The Office weirdly catchy and self-aware.",
  },
  {
    title: "Bury a Friend",
    description:
      "A nightmare sung from the monster’s point of view, dark, glitchy, and genius.",
  },
  {
    title: "Ilomilo",
    description:
      "A melancholy reflection on fear of loss, wrapped in a soft electronic sound.",
  },
  {
    title: "Listen Before I Go",
    description:
      "A chillingly calm song about suicidal thoughts and the quiet before goodbye.",
  },
  {
    title: "I Love You",
    description:
      "A tender, heartbreaking acoustic confession that tears you apart softly.",
  },
  {
    title: "Goodbye",
    description:
      "A haunting outro that stitches together lyrics from every track on the album.",
  },
]);
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
      :ui="{ title: 'text-white ' }"
      class="selected-style text-center border-0"
      title="When We All Fall Asleep, Where Do We Go? Tracklist"
    />
    <UBlogPosts>
      <UPageCard
        v-for="(song, index) in songs"
        :title="song.title"
        :description="song.description"
        :key="index"
        icon="flowbite:music-solid"
      />
    </UBlogPosts>
  </div>
</template>
