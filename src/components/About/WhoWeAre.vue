<script setup>
import { Award, Lightbulb, Target, Users } from "lucide-vue-next";
</script>

<template>
  <!-- {/* Who We Are */} -->
  <section class="py-20 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div>
            <h2 class="text-4xl font-bold text-primary mb-6">
              Who <span class="text-primary">We Are</span>
            </h2>
            <p class="text-lg text-primary leading-relaxed mb-6">
              Engineer Association of Bahubal (EAB) is a premier professional
              engineering community established in 2008 with the vision of
              connecting engineers, promoting excellence, and fostering
              professional development in Bangladesh.
            </p>
            <p class="text-lg text-primary leading-relaxed mb-6">
              We are a diverse community of engineers from various disciplines
              including Civil, Mechanical, Electrical, Computer Science, and
              Industrial Engineering, united by our commitment to engineering
              excellence and professional growth.
            </p>
            <p class="text-lg text-primary leading-relaxed">
              Our association serves as a bridge between academia and industry,
              providing opportunities for knowledge sharing, professional
              networking, and career advancement for engineers at all stages of
              their careers.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div
            class="bg-white rounded-xl p-6 py-12 shadow text-center flex flex-col items-center justify-center"
          >
            <Users class="h-12 w-12 text-primary mx-auto mb-4" />
            <div class="text-3xl font-bold text-primary mb-2">100+</div>
            <div class="text-primary">Active Members</div>
          </div>
          <div
            class="bg-white rounded-xl p-6 py-12 shadow text-center flex flex-col items-center justify-center"
          >
            <Award class="h-12 w-12 text-secondary mx-auto mb-4" />
            <div class="text-3xl font-bold text-primary mb-2">5+</div>
            <div class="text-primary">Years of Service</div>
          </div>
          <div
            class="bg-white rounded-xl p-6 py-12 shadow text-center flex flex-col items-center justify-center"
          >
            <Target class="h-12 w-12 text-accent mx-auto mb-4" />
            <div class="text-3xl font-bold text-primary mb-2">10+</div>
            <div class="text-primary">Events Hosted</div>
          </div>
          <div
            class="bg-white rounded-xl p-6 py-12 shadow text-center flex flex-col items-center justify-center"
          >
            <Lightbulb class="h-12 w-12 text-primary mx-auto mb-4" />
            <div class="text-3xl font-bold text-primary mb-2">50+</div>
            <div class="text-primary">Career Opportunities</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
