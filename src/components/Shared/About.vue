<script setup>
import { ArrowRight, Lightbulb, Target, Users } from "lucide-vue-next";
import { motion } from "motion-v";
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-8"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <motion.div
          :initial="{ x: -100 }"
          :while-in-view="{ x: 0 }"
          :transition="{ ease: 'easeOut', duration: 1 }"
          class="text-center md:text-left"
        >
          <div class="space-y-8">
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold text-primary mb-6">
                About <span class="text-secondary">EAB</span>
              </h2>
              <p class="text-lg text-muted-foreground leading-relaxed">
                Engineer Association of Bahubal (EAB) is a premier professional
                engineering community dedicated to fostering excellence,
                innovation, and collaboration among engineers in Bangladesh.
              </p>
            </div>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Target class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-primary mb-2">
                    Our Mission
                  </h3>
                  <p class="text-primary">
                    To advance the engineering profession and serve society by
                    promoting professional development, technical excellence,
                    and ethical practice.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Users class="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-primary mb-2">
                    Our Community
                  </h3>
                  <p class="text-primary">
                    A diverse network of engineers from various disciplines
                    working together to solve complex challenges and drive
                    innovation.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Lightbulb class="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-primary mb-2">
                    Our Vision
                  </h3>
                  <p class="text-primary">
                    To be the leading engineering association in Bangladesh,
                    recognized for excellence in professional development and
                    community service.
                  </p>
                </div>
              </div>
            </div>

            <RouterLink
              to="/about"
              class="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-secondary to-accent text-white shadow-medium text-lg font-medium hover:opacity-90 transition"
            >
              Learn More About Us
              <ArrowRight class="ml-2 h-4 w-4" />
            </RouterLink>
          </div>
        </motion.div>

        <!-- Image/Visual -->
        <!-- <motion.div
          :initial="{ x: 100 }"
          :while-in-view="{ x: 0 }"
          :transition="{ ease: 'easeOut', duration: 1 }"
          class="w-full relative flex justify-center"
        > -->
        <motion.div
          :initial="{ x: 100 }"
          :while-in-view="{ x: 0 }"
          :transition="{ ease: 'easeOut', duration: 1 }"
          class="relative"
        >
          <div
            class="aspect-square bg-gradient-to-br from-accent/50 to-secondary/20 rounded-3xl p-8"
          >
            <div
              class="w-full h-full bg-gray-50 rounded-2xl shadow-strong flex items-center justify-center"
            >
              <div class="text-center space-y-6">
                <div
                  class="w-40 h-40 bg-gradient-to-br from-accent to-secondary shadow-md shadow-accent rounded-full mx-auto flex items-center justify-center"
                >
                  <img
                    class="h-full w-full bg-cover rounded-full"
                    src="../../assets/image/logo.jpg"
                    alt="Logo"
                  />
                </div>
                <div class="space-y-2">
                  <h3 class="text-2xl font-bold text-primary">Since 2008</h3>
                  <p class="text-primary">Serving engineers with excellence</p>
                </div>
                <div class="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold text-primary">100+</div>
                    <div class="text-sm text-primary">Members</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-secondary">5+</div>
                    <div class="text-sm text-primary">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <!-- </motion.div> -->
      </div>
    </div>
  </div>
</template>
