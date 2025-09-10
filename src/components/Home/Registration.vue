<script setup>
import bgImg from "../../assets/image/office.jpg";
</script>

<template>
  <div
    class="h-[250px] bg-fixed bg-cover bg-no-repeat bg-center relative flex items-center justify-center text-center px-4"
    :style="`background-image: url(${bgImg})`"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-60"></div>

    <!-- Content -->
    <div class="relative z-20 text-white max-w-3xl animate-fade-in">
      <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed">
        ইঞ্জিনিয়ারদের বৃহত্তম প্ল্যাটফর্মে যোগ দিন।<br />
        একটি অরাজনৈতিক অলাভজনক স্বেচ্ছাসেবী পেশাজীবী সংগঠন।
      </h2>
      <button
        className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono tracking-tighter text-white bg-gradient-to-r from-secondary to-accent/70 rounded-lg group cursor-pointer"
      >
        <span
          className="absolute w-0 h-0 transition-all duration-500 ease-out bg-accent rounded-full group-hover:w-56 group-hover:h-56"
        ></span>
        <span
          className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-accent"
        ></span>
        <span
          className="relative text-lg  font-semibold dark:text-slate-200 group-hover:text-white"
          >Registration</span
        >
      </button>
    </div>
  </div>
</template>
