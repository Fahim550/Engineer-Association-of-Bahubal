<script setup>
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";

// import hero4 from "@/assets/image/hero4.jpg";
import hero2 from "@/assets/image/hero4.jpeg";
import { ArrowRight } from "lucide-vue-next";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const slides = [
  // {
  //   image: hero4,
  //   text: "Empowering Engineers to Build the Future — Together, We Shape Innovation.",
  // },
  {
    image: hero2,
    text: "Uniting Engineering Minds for a Smarter, Stronger Tomorrow.",
  },
  // {
  //   image: hero3,
  //   text: "Advancing Technology, Inspiring Excellence, Elevating Engineering Standards.",
  // },
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
          class="relative bg-cover bg-center bg-no-repeat h-[100vh] flex items-center justify-center text-white"
          :style="`background-image: url(${slide.image})`"
        >
          <!-- Black overlay -->
          <!-- <div class="absolute inset-0 bg-black opacity-50"></div> -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"
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
                  Engineer Association
                  <span
                    class="block text-secondary text-3xl md:text-5xl lg:text-6xl mt-2"
                  >
                    of Bahubal
                  </span>
                </h1>

                <p
                  class="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                  Connecting engineers, promoting excellence, and fostering
                  professional development in the engineering community of
                  Bangladesh.
                </p>

                <div
                  class="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                  <button
                    class="text-lg px-6 py-2 bg-secondary hover:bg-secondary/90 text-white relative rounded-xl cursor-pointer"
                  >
                    <a
                      class="flex justify-center items-center text-lg font-semibold"
                    >
                      Join EAB Today
                      <ArrowRight class="ml-2 h-5 w-5" />
                    </a>
                  </button>
                  <button
                    size="lg"
                    class="text-lg font-semibold px-8 py-4 bg-white/80 border-secondary text-primary hover:bg-primary hover:text-white rounded-xl cursor-pointer"
                  >
                    <RouterLink to="/about"> Learn More </RouterLink>
                  </button>
                </div>
              </div>
            </div>

            <!-- Animated Button -->
            <!-- <button
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
            </button> -->
          </div>
        </section>
      </SwiperSlide>
    </swiper>
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
/* .swiper-button-next,
.swiper-button-prev {
  width: 30px;
  height: 30px;
} */
</style>
