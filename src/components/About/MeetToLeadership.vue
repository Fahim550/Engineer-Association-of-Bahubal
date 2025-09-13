<script setup>
import { ArrowRight } from "lucide-vue-next";
import bgImg from "../../assets/image/leader.jpeg";
</script>

<template>
  <section
    class="py-8 md:py-20 md:h-[270px] bg-fixed bg-cover bg-no-repeat bg-center relative flex items-center justify-center text-center"
    :style="`background-image: url(${bgImg})`"
  >
    <div
      class="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/70 to-primary/90"
    ></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
      <!-- <div class="absolute inset-0 bg-black opacity-75"></div> -->
      <!-- <div
        class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12"
      > -->
      <h2 class="text-4xl font-bold text-white mb-6">
        Meet Our <span class="text-secondary">Leadership</span>
      </h2>
      <p class="text-xl text-white font-semibold mb-8 max-w-3xl mx-auto">
        Our Executive Committee consists of experienced professionals dedicated
        to advancing the engineering profession and serving our community with
        excellence.
      </p>
      <RouterLink
        to="/Committee"
        class="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-secondary to-accent text-white shadow-medium text-lg font-medium hover:opacity-90 transition"
      >
        View Executive Committee
        <ArrowRight class="ml-2 h-4 w-4" />
      </RouterLink>
      <!-- </div> -->
    </div>
  </section>
</template>
