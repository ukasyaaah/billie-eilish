<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([
  {
    label: "Sumber",
    color: "neutral",
    variant: "solid",
    trailingIcon: "i-lucide-arrow-right",
    to: "https://id.wikipedia.org/wiki/When_We_All_Fall_Asleep,_Where_Do_We_Go%3F",
    target: "_blank",
  },
]);
</script>
<template>
  <div
    class="bg-black flex flex-col justify-center items-center min-h-screen px-5 py-15 lg:px-45"
  >
    <UPageCTA
      title="History of When We All Fall Asleep, Where Do We Go?"
      description="   When We All Fall Asleep, Where Do We Go? adalah album studio
                debut oleh penyanyi asal Amerika Serikat, Billie Eilish dan
                dirilis pada tanggal 28 Maret 2019 oleh Darkroom dan Interscope
                Records di Amerika Serikat dan Polydor Records di Inggris.
                Eilish, berusia 17 tahun pada saat dirilis, sebagian besar
                menulis album bersama saudara laki-lakinya Finneas O'Connell,
                yang juga memproduserinya di studio kamar tidur kecilnya di
                Highland Park, Los Angeles."
      orientation="horizontal"
      :links="links"
    >
      <NuxtImg
        format="webp"
        src="/Billie210.webp"
        loading="lazy"
        width="320"
        height="364"
        quality="100"
        alt="WTPO"
        class="w-full rounded-lg"
      />
    </UPageCTA>

    <!-- <UCard variant="outline">
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
          </UCard> -->
  </div>
</template>
