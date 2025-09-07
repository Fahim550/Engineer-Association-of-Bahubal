<script setup>
import { Lightbulb, Target } from "lucide-vue-next";
</script>
<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-primary mb-6">
          Mission & <span class="text-secondary">Vision</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- {/* Mission */} -->
        <div class="bg-card rounded-2xl p-8 shadow-soft">
          <div
            class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
          >
            <Target class="h-8 w-8 text-primary" />
          </div>
          <h3 class="text-2xl font-bold text-primary mb-4">Our Mission</h3>
          <p class="text-lg text-primary leading-relaxed mb-6">
            To advance the engineering profession and serve society by promoting
            professional development, technical excellence, and ethical practice
            among engineers in Bangladesh.
          </p>
          <ul class="space-y-3 text-primary">
            <li class="flex items-start">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
              ></div>
              Foster continuous learning and professional development
            </li>
            <li class="flex items-start">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
              ></div>
              Promote ethical engineering practices and standards
            </li>
            <li class="flex items-start">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
              ></div>
              Bridge the gap between academia and industry
            </li>
            <li class="flex items-start">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
              ></div>
              Support career advancement and networking opportunities
            </li>
          </ul>
        </div>

        <!-- {/* Vision */} -->
        <div class="bg-card rounded-2xl p-8 shadow-soft">
          <div
            class="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6"
          >
            <Lightbulb class="h-8 w-8 text-secondary" />
          </div>
          <h3 class="text-2xl font-bold text-primary mb-4">Our Vision</h3>
          <p class="text-lg text-primary leading-relaxed mb-6">
            To be the leading engineering association in Bangladesh, recognized
            globally for excellence in professional development, innovation, and
            community service.
          </p>
          <ul class="space-y-3 text-primary">
            <li class="flex items-start">
              <div
                class="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"
              ></div>
              Become the premier platform for engineering professionals
            </li>
            <li class="flex items-start">
              <div
                class="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"
              ></div>
              Drive innovation and technological advancement
            </li>
            <li class="flex items-start">
              <div
                class="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"
              ></div>
              Establish international partnerships and recognition
            </li>
            <li class="flex items-start">
              <div
                class="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"
              ></div>
              Contribute to national development through engineering excellence
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
