<script setup>
import Hero from "../components/Home/Hero.vue";
import About from "../components/Home/AboutUs.vue";
import Navbar from "../components/Shared/Navbar.vue";
import Events from "../components/Home/Events.vue";
import Registration from "../components/Home/Registration.vue";
import Members from "@/components/Home/Testimonial.vue";
import Testimonial from "@/components/Home/Testimonial.vue";
import ContactUs from "@/components/Home/ContactUs.vue";
import OurMission from "../components/Home/OurMission.vue";
</script>

<template>
  <Hero />
  <About />
  <Events />
  <OurMission />
  <Registration />
  <Members />
  <Testimonial />
  <ContactUs />
</template>
