<script setup>
const props = defineProps({
  id: { type: String, default: 'hero-title' },
  titleBefore: { type: String, default: 'Our' },
  titleHighlight: { type: String, default: 'Committees' },
  titleAfter: { type: String, default: '' },
  subtitle: {
    type: String,
    default: 'Meet the dedicated leaders and committee members who drive our mission forward.',
  },
})
</script>

<template>
  <section
    class="relative py-24 bg-gradient-to-r from-accent/70 via-primary to-gray-900 text-white overflow-hidden"
    aria-labelledby="committee-hero-title"
  >
    <div
      class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_40%)]"
    ></div>

    <!-- Hero Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1
        id="committee-hero-title"
        class="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
      >
        {{ titleBefore }} <span class="text-secondary"> {{ titleHighlight }}</span>
      </h1>
      <p
        class="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90"
      >
         {{ subtitle }}
      </p>
    </div>

    <!-- Bottom Wave Divider -->
    <div class="absolute left-0 right-0 bottom-0 pointer-events-none">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="w-full h-16 text-white/10"
      >
        <path
          d="M0,0 C300,80 900,-40 1200,20 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </section>
</template>
