<script setup>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const testimonials = [
  {
    id: 1,
    name: "Engr. Mohammad Rafique",
    role: "Senior Civil Engineer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Joining the Engineers Association of Bahubal opened doors to valuable networking and professional growth. The workshops and peer discussions have significantly enhanced my project management skills.",
  },
  {
    id: 2,
    name: "Engr. Nusrat Jahan",
    role: "Electrical Engineer",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    quote:
      "EAB’s mentorship program helped me transition from academic theory to real-world engineering practice. The guidance from experienced members was instrumental in my career development.",
  },
  {
    id: 3,
    name: "Md. Arif Hossain",
    role: "Final-year Engineering Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "As a student, I found the association’s workshops and seminars extremely useful. They bridged the gap between classroom learning and industry expectations, boosting my confidence.",
  },
  {
    id: 4,
    name: "Engr. Farhana Sultana",
    role: "Mechanical Engineer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Through EAB’s community projects, I learned to apply engineering solutions for local challenges in Bahubal. Collaborating with fellow engineers on social initiatives was deeply rewarding.",
  },
  {
    id: 5,
    name: "Engr. Kamal Uddin",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    quote:
      "The networking events organized by the association connected me with industry experts and potential employers. EAB’s supportive environment has been key to my career progress.",
  },
];
</script>

<template>
  <div class="bg-gray-100 py-10">
    <div class="py-0 container mx-auto overflow-hidden">
      <h1 class="text-3xl font-bold text-primary pb-10 flex justify-center">
        Testimonial
      </h1>
      <div class="">
        <Swiper
          :modules="[Navigation, Pagination, Keyboard, Autoplay]"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :keyboard="{ enabled: true }"
          :pagination="{ clickable: true }"
          :navigation="{
            clickable: true,
          }"
          :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }"
          class="min-h-[310px] swiper swiper--testimonial"
        >
          <SwiperSlide
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="relative overflow-hidden min-h-[310px] bg-gradient-to-r from-secondary to-yellow rounded-xl shadow-2xl p-8 text-white"
          >
            <div
              class="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"
            ></div>
            <div class="relative z-10">
              <svg
                class="w-12 h-12 mb-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                />
              </svg>
              <p class="text-xl font-medium mb-4">"{{ testimonial.quote }}"</p>
              <div class="flex items-center">
                <img
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full mr-4 border-2 border-purple-300"
                />
                <div>
                  <h4 class="font-semibold">{{ testimonial.name }}</h4>
                  <p class="text-purple-200">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
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
