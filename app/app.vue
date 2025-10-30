<script setup lang="ts">
useSeoMeta({
  title: "Billie Eilish",
  ogTitle: "Billie Eilish",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://wherearetheavocado.vercel.app/blohsh.webp",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <div>
    <NuxtLayout>
      <template #header>
        <Header />
      </template>
      <template #about>
        <div class="bg-black px-5  py-5 lg:px-45">
          <UCard variant="outline">
            <template #header>
              <h1 class="font-wwaf text-2xl text-black md:text-4xl">
                HISTORY OF WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
              </h1>
            </template>
            <section>
              <p class="leading-8 md:leading-10 text-md md:text-xl">
                When We All Fall Asleep, Where Do We Go? adalah album studio
                debut oleh penyanyi asal Amerika Serikat, Billie Eilish dan
                dirilis pada tanggal 28 Maret 2019 oleh Darkroom dan Interscope
                Records di Amerika Serikat dan Polydor Records di Inggris.
                Eilish, berusia 17 tahun pada saat dirilis, sebagian besar
                menulis album bersama saudara laki-lakinya Finneas O'Connell,
                yang juga memproduserinya di studio kamar tidur kecilnya di
                Highland Park, Los Angeles.
              </p>
            </section>
            <template #footer>
              <UButton
                trailing-icon="ri:arrow-right-up-long-line"
                class="bg-black hover:bg-zinc-700 text-white"
                size="lg"
                label="Sumber"
                to="https://id.wikipedia.org/wiki/When_We_All_Fall_Asleep,_Where_Do_We_Go%3F"
              ></UButton>
            </template>
          </UCard>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>
