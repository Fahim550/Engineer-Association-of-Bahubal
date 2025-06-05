<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import hero4 from "@/assets/image/hero4.jpg";
import hero2 from "@/assets/image/hero.jpg";
import hero3 from "@/assets/image/hero3.jpg";

const slides = [
  {
    image: hero4,
    text: "Empowering Engineers to Build the Future — Together, We Shape Innovation.",
  },
  {
    image: hero2,
    text: "Uniting Engineering Minds for a Smarter, Stronger Tomorrow.",
  },
  {
    image: hero3,
    text: "Advancing Technology, Inspiring Excellence, Elevating Engineering Standards.",
  },
];
</script>

<template>
  <div class="">
    <swiper
      :spaceBetween="30"
      :effect="'fade'"
      :navigation="false"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :modules="[EffectFade, Pagination, Autoplay]"
      class="mySwiper bg-light"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <section
          class="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
          :style="`background-image: url(${slide.image})`"
        >
          <!-- Black overlay -->
          <div class="absolute inset-0 bg-black opacity-50"></div>

          <!-- Hero text content -->
          <div class="relative z-10 text-center px-4 w-[80%] pt-40">
            <h1 class="text-3xl md:text-3xl font-bold mb-4 text-shadow-4npmxl">
              {{ slide.text }}
            </h1>
            <!-- <p class="text-lg md:text-xl max-w-2xl mx-auto">
              {{ slide.text }}
            </p> -->

            <!-- Animated Button -->
            <button
              href=""
              class="relative inline-flex items-center mt-10 justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-secondery rounded-xl group"
            >
              <span
                class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-navy/70 rounded group-hover:-mr-4 group-hover:-mt-4"
              >
                <span
                  class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                ></span>
              </span>
              <span
                class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-navy rounded-2xl group-hover:mb-12 group-hover:translate-x-0"
              ></span>
              <span
                class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                >Our Service</span
              >
            </button>
          </div>
        </section>
      </SwiperSlide>
    </swiper>
  </div>
</template>
