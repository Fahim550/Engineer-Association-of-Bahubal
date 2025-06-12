<script setup>
import heroBg from "../../assets/image/hero2.jpg";
</script>
<template>
  <section
    class="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
    :style="`background-image: url(${heroBg})`"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </section>
</template>
