<script setup>
import { Award, Clock, Lightbulb, Target, Users } from "lucide-vue-next";
</script>

<template>
  <section class="py-20 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-primary mb-6">
          What <span class="text-secondary">We Do</span>
        </h2>
        <p class="text-xl text-primary max-w-3xl mx-auto">
          Comprehensive services and programs designed to support engineers
          throughout their careers
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
          >
            <Users class="h-6 w-6 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-primary mb-3">
            Professional Networking
          </h3>
          <p class="text-primary">
            Connect with fellow engineers, industry leaders, and potential
            mentors through our regular networking events and online community
            platform.
          </p>
        </div>

        <div
          class="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4"
          >
            <Target class="h-6 w-6 text-secondary" />
          </div>
          <h3 class="text-xl font-semibold text-primary mb-3">
            Career Development
          </h3>
          <p class="text-primary">
            Comprehensive career guidance, job placement assistance, resume
            building workshops, and interview preparation sessions.
          </p>
        </div>

        <div
          class="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4"
          >
            <Lightbulb class="h-6 w-6 text-accent" />
          </div>
          <h3 class="text-xl font-semibold text-primary mb-3">
            Technical Workshops
          </h3>
          <p class="text-primary">
            Regular workshops on cutting-edge technologies, industry best
            practices, and professional skill development.
          </p>
        </div>

        <div
          class="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
          >
            <Award class="h-6 w-6 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-primary mb-3">
            Recognition Programs
          </h3>
          <p class="text-primary">
            Annual awards and recognition programs to celebrate engineering
            excellence and outstanding contributions to the profession.
          </p>
        </div>

        <div
          class="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4"
          >
            <Clock class="h-6 w-6 text-secondary" />
          </div>
          <h3 class="text-xl font-semibold text-primary mb-3">
            Mentorship Program
          </h3>
          <p class="text-primary">
            Pair experienced engineers with young professionals for guidance,
            career advice, and professional development support.
          </p>
        </div>

        <div
          class="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4"
          >
            <Users class="h-6 w-6 text-accent" />
          </div>
          <h3 class="text-xl font-semibold text-primary mb-3">
            Community Service
          </h3>
          <p class="text-primary">
            Engage in community development projects, disaster relief efforts,
            and social initiatives that benefit society.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
