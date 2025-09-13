<script setup>
import { motion } from "motion-v";
import { onBeforeUnmount, onMounted, ref } from "vue";
import bgImg from "../../assets/image/whoweare.jpeg";

const MOBILE_BREAKPOINT = 1280;

const isMobile = ref(false);

// small debounce helper
function debounce(fn, wait = 150) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

function checkScreen() {
  if (typeof window === 'undefined') return;
  const mobile = window.innerWidth < MOBILE_BREAKPOINT;
  isMobile.value = mobile;
}

// debounced resize handler
const onResize = debounce(() => {
  checkScreen();
});

onMounted(() => {
  checkScreen(); // initial check
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});
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

  <!-- center line only visible on large screens -->
  <div class="hidden xl:block absolute left-1/2 top-10 bottom-0 w-px bg-secondary/30"></div>

  <!-- ITEM 1 (on mobile: number LEFT, card RIGHT; on xl: number centered and card right) -->
     
  <div class="mb-8 flex items-center w-full flex-col xl:flex-row xl:items-center xl:justify-between ">
    <!-- number (left on mobile, centered on lg) -->
    <div class="z-20 flex items-center justify-center bg-purple-800 shadow-xl w-12 h-12 rounded-full flex-shrink-0 mr-4 xl:-ml-6 xl:left-1/2 xl:absolute xl:order-2 xl:translate-x-0">
      <span class="mx-auto font-semibold text-lg text-white">1</span>
    </div>
<motion.div
           :initial="isMobile ? { x: 500 } : { x: 500 }"
           :while-in-view="isMobile ? { x: 0 } : { x: 150 }"
          :transition="{ ease: 'easeOut', duration: 1.5 }"
          class="relative"
        >
    <!-- card (right on mobile, right on lg) -->
    <div
      class="bg-white text-primary rounded-lg shadow-md w-full  md:max-w-[1000px] xl:w-5/12 px-6 py-0 relative overflow-hidden group  cursor-pointer before:border-purple-400 before:border-r-4 before:h-[160px] before:absolute before:right-0 before:z-[-1] hover:before:scale-[280] before:transition-all before:ease-out before:duration-[600ms] z-[0]"
    >
     <div class="py-4">


       <h3 class="mb-3 font-bold text-xl">Empowering Engineers</h3>
       <p class="leading-tight text-gray-700">
         We support professional engineers in Bahubal by creating opportunities
         for career growth, skill enhancement, and leadership development through
         workshops, training, and networking.
       </p>
     </div>
    </div>
     </motion.div>
  </div>
 

  <!-- ITEM 2 (on mobile: number LEFT, card RIGHT; on xl: this one flips to left via xl:flex-row-reverse) -->
  <div class="mb-8 flex items-center w-full flex-col xl:flex-row xl:items-center xl:justify-baseline">
    <!-- number -->
    <div class="z-20 flex items-center justify-center bg-orange-600 shadow-xl w-12 h-12 rounded-full flex-shrink-0 mr-4 xl:-mr-6 xl:left-1/2 xl:absolute xl:order-2 xl:-translate-x-6 ">
      <span class="mx-auto font-semibold text-lg text-white">2</span>
    </div>

    <motion.div
           :initial="isMobile ? { x: -100 } : { x: -500 }"
           :while-in-view="isMobile ? { x: 0 } : { x: 850 }"
          :transition="{ ease: 'easeOut', duration: 1.5 }"
          class="relative"
        >
    <!-- card -->
    <div
      class="bg-white text-primary rounded-lg shadow-md w-full md:max-w-[1000px] xl:w-5/12 px-6 py-0 relative overflow-hidden group cursor-pointer before:border-orange-400 before:border-l-4 before:h-[160px] before:absolute before:left-0 before:z-[-1] hover:before:scale-[280] before:transition-all before:ease-out before:duration-[600ms] z-[0]"
    >
     <div class="py-4">

       <h3 class="mb-3 font-bold text-xl">Guiding Students</h3>
       <p class="leading-tight text-gray-700">
         We mentor and guide engineering students by bridging the gap between
         academic education and practical knowledge, helping them prepare for a
         successful future in engineering.
       </p>
     </div>
    </div>
     </motion.div>
  </div>

  <!-- ITEM 3 (mobile: number LEFT, card RIGHT; xl: number centered, card right) -->
  <div class="mb-8 flex items-center w-full flex-col xl:flex-row xl:items-center xl:justify-between">
    <!-- number -->
    <div class="z-20 flex items-center justify-center bg-blue-600 shadow-xl w-12 h-12 rounded-full flex-shrink-0 mr-4 xl:-ml-6 xl:left-1/2 xl:absolute xl:order-2 xl:translate-x-0">
      <span class="mx-auto font-semibold text-lg text-white">3</span>
    </div>

    <motion.div
          :initial="isMobile ? { x: 500 } : { x: 500 }"
           :while-in-view="isMobile ? { x: 0 } : { x: 150 }"
          :transition="{ ease: 'easeOut', duration: 1.5 }"
          class="relative"
        >
    <!-- card -->
    <div
      class="bg-white text-primary rounded-lg shadow-md w-full md:max-w-[1000px] xl:w-5/12 px-6 py-0 relative overflow-hidden group  cursor-pointer before:border-blue-400 before:border-r-4 before:h-[160px] before:absolute before:right-0 before:z-[-1] hover:before:scale-[280] before:transition-all before:ease-out before:duration-[600ms] z-[0]"
    >
    <div class="py-4">

      <h3 class="mb-3 font-bold text-xl">Building Community</h3>
      <p class="leading-tight text-gray-700">
        We unite engineers across Bahubal Upazila to foster a supportive,
        inclusive, and collaborative community that drives local development
        and social responsibility.
      </p>
    </div>
    </div>
     </motion.div>
  </div>
</div>

  </div>
</template>
