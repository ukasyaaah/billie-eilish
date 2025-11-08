export default defineEventHandler((event) => {
  return {
    icon: "zondicons:trophy",
    title: "GRAMMY Awards and Nominations",
    description:
      "Billie Eilish won Album Of The Year for When We All Fall Asleep, Where Do We Go?​ at the 62nd GRAMMY Awards. This was her first win in the Album Of The Year category and her fourth win of the night.",
    grammys: [
      {
        title: "Best Pop Solo Performance - Nominations",
        description: "Bad Guy",
        icon: "bi:award-fill",
      },
      {
        title: "Best Pop Vocal Album",
        description: "When We All Fall Asleep, Where Do We Go?",
        icon: "heroicons:trophy-16-solid",
      },
      {
        title: "Best New Artist",
        description: "When We All Fall Asleep, Where Do We Go?",
        icon: "heroicons:trophy-16-solid",
      },
      {
        title: "Song Of The Year",
        description: "Bad Guy",
        icon: "heroicons:trophy-16-solid",
      },
      {
        title: "Album Of The Year",
        description: "When We All Fall Asleep, Where Do We Go?",
        icon: "heroicons:trophy-16-solid",
      },
      {
        title: "Record Of The Year",
        description: "Bad Guy",
        icon: "heroicons:trophy-16-solid",
      },
    ],
  };
});
