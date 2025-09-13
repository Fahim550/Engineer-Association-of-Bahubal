<script setup>
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import hero4 from "@/assets/image/hero4.jpg";
import hero2 from "@/assets/image/hero4.jpeg";
import { ArrowRight } from "lucide-vue-next";

</script>

<template>
  <div class="">
        <section
          class="relative bg-cover bg-center bg-no-repeat h-[100vh] flex items-center justify-center text-white"
          :style="`background-image: url(${hero2})`"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"
          ></div>
          <!-- Hero text content -->
          <div class="relative z-10 text-center px-4 w-[80%] pt-15">
           
            <div
              class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
              <div class="mx-auto">
                <h1
                  class="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-2 md:mb-6 md:leading-tight"
                >
                  Engineer Association
                  <span
                    class="block text-secondary text-3xl md:text-5xl lg:text-6xl mt-2"
                  >
                    of Bahubal
                  </span>
                </h1>

                <p
                  class="text-lg md:text-2xl text-white/80 mb-8  mx-auto md:leading-relaxed line-clamp-4"
                >
                  Connecting engineers, promoting excellence, and fostering
                  professional development in the engineering community of
                  Bangladesh.
                </p>

                <div
                  class="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center items-center md:mb-6"
                >
                  <button
                    class="text-lg px-2 py-2 md:px-6  md:py-4 min-w-44 bg-secondary hover:bg-secondary/90 text-white relative rounded-xl cursor-pointer"
                  >
                    <a
                      class="flex justify-center items-center text-md md:text-lg font-semibold"
                    >
                      Join EAB Today
                      <ArrowRight class="ml-2 h-5 w-5" />
                    </a>
                  </button>
                  <button
                    size="lg"
                    class="text-lg font-semibold px-2 py-2 md:px-8 md:py-4 w-44 bg-white/80 border-1 border-primary text-primary hover:bg-primary hover:text-white rounded-xl cursor-pointer"
                  >
                    <RouterLink to="/about"> Learn More </RouterLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
/* .swiper-pagination-bullet {
  background-color: var(--color-secondary) !important;
  width: 0px !important;
  height: 10px !important;
  position: relative;
  top: 0px;
}
.swiper-pagination-bullet-active {
  background-color: var(--color-secondary);
  color: var(--color-secondary);
  width: 8px;
  height: 8px;
  position: relative;
  top: -10px;
} */
</style>
