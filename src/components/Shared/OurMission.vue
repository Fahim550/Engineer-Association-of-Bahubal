<script setup>
import bgImg from "../../assets/image/whoweare.jpeg";
</script>

<template>
  <div
    class="px-4 py-16 bg-cover bg-center bg-no-repeat"
    :style="`background-image: url(${bgImg})`"
  >
    <div class="relative wrap overflow-hidden container mx-auto">
      <h1 class="text-3xl font-bold text-primary mb-4 flex justify-center items-center gap-4 pb-6">
  <span>Our Mission in</span>
  <span class="text-secondary">Action</span>
</h1>
      <div
        class="border-2-2 absolute border-opacity-20 border-secondary h-full border left-1/2"
      ></div>
      <div class="mb-8 flex justify-between items-center w-full right-timeline">
        <div class="order-1 w-5/12"></div>
        <div
          class="z-20 flex items-center order-1 bg-purple-800 shadow-xl w-12 h-12 rounded-full"
        >
          <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
        </div>
        <div
          class="order-1 bg-white text-primary hover:text-white rounded-lg shadow-md w-5/12 px-6 relative overflow-hidden group cursor-pointer before:border-purple-400 before:border-l-4 before:h-[160px] before:absolute before:left-0 before:z-[-1] hover:before:scale-[280] before:transition-all before:ease-out before:duration-[600ms] z-[0]"
        >
          <div class="py-4">
            <h3 class="mb-3 font-bold text-xl">Empowering Engineers</h3>
            <p class="leading-tight">
              We support professional engineers in Bahubal by creating
              opportunities for career growth, skill enhancement, and leadership
              development through workshops, training, and networking.
            </p>
          </div>
        </div>
      </div>
      <div
        class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
      >
        <div class="order-1 w-5/12"></div>
        <div
          class="z-20 flex items-center order-1 bg-orange-600 shadow-xl w-12 h-12 rounded-full"
        >
          <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
        </div>
        <div
          class="order-1 bg-white text-primary hover:text-white rounded-lg shadow-md w-5/12 px-6 relative overflow-hidden group cursor-pointer before:border-orange-400 before:border-r-4 before:h-[160px] before:absolute before:right-0 before:z-[-1] hover:before:scale-[280] before:transition-all before:ease-out before:duration-[600ms] z-[0]"
        >
          <div class="py-4">
            <h3 class="mb-3 font-bold text-xl">Guiding Students</h3>
            <p class="leading-tight">
              We mentor and guide engineering students by bridging the gap
              between academic education and practical knowledge, helping them
              prepare for a successful future in engineering.
            </p>
          </div>
        </div>
      </div>
      <div class="mb-8 flex justify-between items-center w-full right-timeline">
        <div class="order-1 w-5/12"></div>
        <div
          class="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-12 h-12 rounded-full"
        >
          <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
        </div>
        <div
          class="order-1 bg-white text-primary hover:text-white rounded-lg shadow-md w-5/12 px-6 relative overflow-hidden group cursor-pointer before:border-blue-400 before:border-l-4 before:h-[160px] before:absolute before:left-0 before:z-[-1] hover:before:scale-[280] before:transition-all before:ease-out before:duration-[600ms] z-[0]"
        >
          <div class="py-4">
            <h3 class="mb-3 font-bold text-xl">Building Community</h3>
            <p class="leading-tight">
              We unite engineers across Bahubal Upazila to foster a supportive,
              inclusive, and collaborative community that drives local
              development and social responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
