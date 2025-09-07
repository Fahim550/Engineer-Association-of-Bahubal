<script setup>
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <section
    class="py-20 bg-gradient-to-r from-accent/20 to-white/60 text-primary"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl font-bold mb-6">
        Ready to Join Our <span class="text-secondary">Community?</span>
      </h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        Become part of Bangladesh's premier engineering association and take
        your career to the next level.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink
          to="/membership"
          class="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-secondary to-accent text-white shadow-medium text-lg font-medium hover:opacity-90 transition"
        >
          Apply For Membership
          <ArrowRight class="ml-2 h-4 w-4" />
        </RouterLink>
        <button
          class="text-lg text-white rounded-xl px-8 bg-primary hover:opacity-90"
        >
          <RouterLink to="/contact"> Contact Us </RouterLink>
        </button>
      </div>
    </div>
  </section>
</template>
