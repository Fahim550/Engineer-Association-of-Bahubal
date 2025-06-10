<script setup>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const testimonials = [
  {
    id: 1,
    name: "Mrs. Shahnaz Begum",
    role: "Head Teacher, The Hope International School",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "EAB’s mentorship session at Hope International School ignited our students’ passion for engineering. Their hands-on demonstrations and real-world insights were both engaging and inspiring.",
  },
  {
    id: 2,
    name: "Mr. Jamal Uddin",
    role: "Founder, Mirpur Funzonessa School",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    quote:
      "Bringing EAB’s senior engineers into our classrooms was transformative. Our students left with clearer career goals and newfound confidence in their technical abilities.",
  },
  {
    id: 3,
    name: "Ms. Farida Akter",
    role: "Head Teacher, Sunshine School",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    quote:
      "The workshop by EAB at Sunshine School bridged the gap between theory and practice for our students. Their mentorship modules were perfectly structured and highly motivating.",
  },
  {
    id: 4,
    name: "Mr. Habib Chandra",
    role: "Head Teacher, Putijuri Sohrot Chondro School",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    quote:
      "EAB’s interactive session at our school empowered students to tackle real engineering challenges. It was a memorable day that broadened their horizons and ambitions.",
  },
];
</script>

<template>
  <div class="bg-gray-100 py-10">
    <div class="container mx-auto px-8 py-10 sm:px-6 lg:px-8 overflow-hidden">
      <h1 class="text-3xl font-bold text-primary pb-10 text-center">
        Testimonial
      </h1>

      <Swiper
        :modules="[Navigation, Pagination, Keyboard, Autoplay]"
        :slides-per-view="1"
        :space-between="32"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :keyboard="{ enabled: true }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :breakpoints="{
          640: { slidesPerView: 1, spaceBetween: 25 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 40 },
        }"
        class="swiper swiper--testimonial"
      >
        <SwiperSlide
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="relative bg-gradient-to-r from-secondary to-yellow rounded-xl shadow-lg p-6 sm:p-8 text-white"
        >
          <div
            class="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"
          ></div>

          <div class="relative z-10">
            <svg
              class="w-10 h-10 mb-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>
            <p class="text-lg md:text-xl font-medium mb-4">
              "{{ testimonial.quote }}"
            </p>
            <div class="flex items-center">
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4 border-2 border-purple-300"
              />
              <div>
                <h4 class="font-semibold text-base sm:text-lg xl:text-xl">
                  {{ testimonial.name }}
                </h4>
                <p class="text-purple-200 text-sm sm:text-base">
                  {{ testimonial.role }}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
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
.swiper-button-next,
.swiper-button-prev {
  width: 30px;
  height: 30px;
}
</style>
