<script setup>
import hopeScl from "../../assets/image/events/hopeScl.jpg";
import fnScl from "../../assets/image/events/fnScl.jpg";
import ifter25 from "../../assets/image/events/ifter25.jpg";
import covid19 from "../../assets/image/events/covid19.jpg";
import sunshineScl from "../../assets/image/events/sunshineScl.jpg";
import putijuriScl from "../../assets/image/events/putijuriScl.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Keyboard,
} from "swiper/modules";
const events = [
  {
    id: 1,
    title: "Student Mentorship Workshop at The Hope International School",
    image: hopeScl,
    description:
      "A structured mentorship initiative where seasoned engineers guide students at The Hope International School. Participants will gain hands-on insights into engineering concepts, real-world applications, and strategies for bridging theory with practice.",
    link: "https://zenui.net",
  },
  {
    id: 2,
    title: "Career & Leadership Workshop at Mirpur Funzonessa School",
    image: fnScl,
    description:
      "An interactive session featuring expert talks and group activities designed to help aspiring engineers develop leadership skills, build professional networks, and explore diverse career pathways in engineering disciplines.",
    link: "https://example.com/career-workshop",
  },
  {
    id: 3,
    title: "Iftar Mahfil & Community Gathering 2025",
    image: ifter25,
    description:
      "A celebratory Iftar event bringing together engineers, students, and community members to strengthen bonds, share cultural traditions, and discuss collaborative opportunities for future projects during Ramadan 2025.",
    link: "https://example.com/iftar-mahfil",
  },
  {
    id: 4,
    title: "COVID-19 Relief & Support Drive",
    image: covid19,
    description:
      "An outreach program mobilizing engineers and volunteers to distribute essential supplies, offer technical assistance for safety initiatives, and support families affected by the pandemic through health awareness and resource allocation.",
    link: "https://example.com/covid-relief",
  },
  {
    id: 5,
    title: "Mentorship Session at Sunshine School",
    image: sunshineScl,
    description:
      "A focused mentoring event where local engineers visit Sunshine School to deliver practical workshops, hands-on demonstrations, and Q&A sessions aimed at inspiring students to pursue engineering careers.",
    link: "https://example.com/sunshine-mentorship",
  },
  {
    id: 6,
    title: "Mentorship Session at Putijuri Sohrot Chondro School",
    image: putijuriScl,
    description:
      "A dedicated outreach program at Putijuri Sohrot Chondro School, offering personalized guidance, collaborative projects, and interactive demonstrations to help students connect classroom learning with real-world engineering challenges.",
    link: "https://example.com/putijuri-mentorship",
  },
];
</script>

<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-800">Upcoming Events</h2>
      <p class="text-gray-600 mt-2">
        Stay updated with our latest events and workshops!
      </p>
    </div>

    <div class="w-full py-10 px-4 overflow-hidden">
      <Swiper
        :modules="[Navigation, Pagination, Keyboard, Autoplay]"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 50000, disableOnInteraction: false }"
        :keyboard="{ enabled: true }"
        :pagination="{ clickable: true }"
        :navigation="{
          clickable: true,
        }"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        class="w-full h-[300px]"
      >
        <SwiperSlide
          v-for="event in events"
          :key="event.id"
          class="group [perspective:1000px] w-full h-[300px] cursor-pointer"
        >
          <!-- This inner div does the flip -->
          <div
            class="relative w-full h-full transition-transform duration-600 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
          >
            <!-- Front side -->
            <div class="absolute inset-0 [backface-visibility:hidden]">
              <img
                :src="event.image"
                :alt="event.title"
                class="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <h2
                class="text-[1.5rem] font-bold text-white absolute bottom-5 left-5 [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"
              >
                {{ event.title }}
              </h2>
            </div>

            <!-- Back side -->
            <div
              class="absolute inset-0 bg-yellow rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-6"
            >
              <h2 class="text-[1.2rem] font-semibold text-white mb-3">
                {{ event.title }}
              </h2>
              <p class="text-white text-sm leading-snug">
                {{ event.description }}
              </p>
              <a
                :href="event.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block mt-4 text-blue-200 hover:underline text-sm"
              >
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.swiper {
  position: relative;
  overflow: visible;
}
.swiper-slide {
  background-color: transparent !important;
  justify-content: center;
}
</style>
