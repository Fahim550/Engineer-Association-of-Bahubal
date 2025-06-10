<script setup>
import Footer from "../components/Shared/Footer.vue";
import Navbar from "../components/Shared/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <div>
    <RouterView />
  </div>
  <Footer />
</template>
