<script setup>
import Hero from "../components/Home/Hero.vue";
import About from "../components/Home/AboutUs.vue";
import Navbar from "../components/Shared/Navbar.vue";
import Events from "../components/Home/Events.vue";
import Registration from "../components/Home/Registration.vue";
import Members from "../components/Home/Members.vue";
import Testimonial from "@/components/Home/Testimonial.vue";
</script>

<template>
  <Navbar />
  <Hero />
  <About />
  <WhoWeAreVue />
  <Events />
  <Registration />
  <Members />
  <Testimonial />
</template>
