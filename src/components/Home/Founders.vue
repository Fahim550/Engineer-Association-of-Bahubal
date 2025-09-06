<script setup>
import male from "@/assets/image/male.jpeg";
import { Linkedin, Mail } from "lucide-vue-next";
import { ref } from "vue";

const founders = ref([
  {
    id: 1,
    name: "Harun Or Rashid",
    title: "President",
    image: male,
    department: "Civil Engineering",
    bio: "Visionary leader with a passion for engineering excellence.",
    email: "harun@example.com",
    linkedin: "https://linkedin.com/in/harun",
  },
  {
    id: 2,
    name: "Azizur Rahman",
    title: "Vice President",
    image: male,
    department: "Electrical Engineering",
    bio: "Committed to innovation and leadership.",
    email: "azizur@example.com",
    linkedin: "https://linkedin.com/in/azizur",
  },
]);
</script>

<template>
  <section class="py-20 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-primary mb-4">
          Our <span class="text-secondary">Leadership</span>
        </h2>
        <p class="text-xl text-primary max-w-3xl mx-auto">
          Meet the visionary leaders who guide EAB toward excellence and
          innovation
        </p>
      </div>

      <!-- Founders Section -->
      <div class="mb-4">
        <h3 class="text-2xl font-semibold text-foreground mb-8 text-center">
          <span class="text-primary text-3xl font-bold">Founding Members</span>
        </h3>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            v-for="founder in founders"
            :key="founder.id"
            class="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 text-center border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-soft hover:shadow-medium"
          >
            <div
              class="w-24 h-24 bg-gradient-to-br from-accent to-accent-hover rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <!-- <span class="text-2xl font-bold text-primary">
                {{ founder.image }}</span
              > -->
              <img
                :src="founder.image"
                :alt="founder.name"
                class="w-full h-full object-cover rounded-full group-hover:scale-[1.1] transition-all duration-700"
              />
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">
              {{ founder.name }}
            </h4>
            <p class="text-accent font-semibold mb-2">{{ founder.title }}</p>
            <p class="text-muted-foreground text-sm mb-4">
              {{ founder.department }}
            </p>
            <p class="text-sm text-primary leading-relaxed mb-6">
              {{ founder.bio }}
            </p>
            <div class="flex justify-center space-x-4">
              <a
                v-if="founder.email"
                :href="`mailto:${founder.email}`"
                class="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white/80 transition-colors"
              >
                <Mail class="h-4 w-4" />
              </a>
              <a
                v-if="founder.linkedin"
                :href="founder.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white/80 transition-colors"
              >
                <Linkedin class="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
