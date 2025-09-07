<script setup>
import hero1 from "../../assets/image/hero1.jpg";
import hero3 from "../../assets/image/hero3.jpg";
import hero4 from "../../assets/image/hero4.jpg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
const slides = [
  {
    image: hero4,
    text: "Empowering Engineers to Build the Future — Together, We Shape Innovation.",
  },
  {
    image: hero3,
    text: "Uniting Engineering Minds for a Smarter, Stronger Tomorrow.",
  },
  {
    image: hero1,
    text: "Advancing Technology, Inspiring Excellence, Elevating Engineering Standards.",
  },
];
</script>
<template>
  <div class="">
    <swiper
      :spaceBetween="30"
      :effect="'fade'"
      :navigation="{
        clickable: true,
      }"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :modules="[EffectFade, Pagination, Autoplay, Navigation]"
      class="swiper swiper--hero bg-light"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <section
          class="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
          :style="`background-image: url(${slide.image})`"
        >
          <!-- Black overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/50 to-primary/30"
          ></div>
          <!-- Hero text content -->
          <div class="relative z-10 text-center px-4 w-[80%] pt-10">
            <!-- <motion.h1
              :initial="{ y: 100, opacity: 0 }"
              :animate="{ y: 0, opacity: 1 }"
              :transition="{ ease: 'easeOut', duration: 1 }"
              class="text-3xl md:text-3xl font-bold mb-4 text-shadow-4npmxl"
            >
              {{ slide.text }}
            </motion.h1> -->
            <!-- <p class="text-lg md:text-xl max-w-2xl mx-auto">
              {{ slide.text }}
            </p> -->
            <div
              class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
              <div class="max-w-4xl mx-auto">
                <h1
                  class="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
                >
                  About
                  <span
                    class="text-secondary text-3xl md:text-5xl lg:text-6xl mt-2"
                  >
                    EAB
                  </span>
                </h1>

                <p
                  class="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                  Discover the story of Engineer Association of Bahubal - from
                  our humble beginnings to becoming a leading professional
                  engineering community in Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </swiper>
  </div>
</template>
