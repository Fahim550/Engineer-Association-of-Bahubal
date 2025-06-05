<script setup>
import hope from "../../assets/image/events/hope.jpg";
const events = [
  {
    id: 1,
    title: "Student Mentorship Program",
    image: hope,
    description:
      "A mentorship program for aspiring engineers, focusing on bridging the gap between theory and practice.",
    link: "https://zenui.net",
  },
  {
    id: 2,
    title: "Engineering Career Workshop",
    image: hope,
    description:
      "Interactive sessions and expert talks to guide engineers in career development and leadership roles.",
    link: "https://example.com/career-workshop",
  },
  {
    id: 3,
    title: "Bahubal Tech Fest 2025",
    image: hope,
    description:
      "An annual event celebrating technology, innovation, and the talent of local engineers.",
    link: "https://example.com/techfest",
  },
];
</script>

<template>
  <section class="py-16 bg-gray-100 container mx-auto">
    <div class="container mx-auto text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-800">Upcoming Events</h2>
      <p class="text-gray-600 mt-2">
        Stay updated with our latest events and workshops!
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-6">
      <div
        v-for="event in events"
        :key="event.id"
        className="group [perspective:1000px] w-full sm:w-[80%] md:w-[40%] lg:w-[30%] h-[300px]"
      >
        <div
          className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
        >
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <img
              :src="event.image"
              :alt="event.title"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <h2
              className="text-[1.5rem] font-bold text-white absolute bottom-5 left-5 [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"
            >
              {{ event.title }}
            </h2>
          </div>

          <div
            className="absolute w-full h-full bg-yellow rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]"
          >
            <h2 className="text-[1.2rem] font-semibold text-white mb-4">
              {{ event.title }}
            </h2>
            <p className="text-white">{{ event.description }}</p>
            <a
              :href="event.link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-200 hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
