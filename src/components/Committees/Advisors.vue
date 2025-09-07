<script setup>
import { Award, Linkedin, Mail } from "lucide-vue-next";

const founders = [
  {
    id: 1,
    name: "Nizamul Haque",
    title: "Founding President",
    department: "Civil Engineering",
    image: "https://i.pravatar",
    bio: "Dedicated to advancing engineering excellence and community development.",
    email: "harun@example.com",
    linkedin: "https://linkedin.com/in/harunrashid",
  },
  {
    id: 2,
    name: "lgjalj",
    title: "Vice President",
    department: "Mechanical Engineering",
    image: "https://i.pravatar",
    bio: "Passionate about innovation and guiding young engineers.",
    email: "aziz@example.com",
    linkedin: "https://linkedin.com/in/azizrahman",
  },
  {
    id: 3,
    name: "aoaknakflsdlaj",
    title: "Vice President",
    department: "Electrical Engineering",
    image: "https://i.pravatar",
    bio: "Committed to building a stronger engineering community in Bangladesh.",
    email: "asad@example.com",
    linkedin: "https://linkedin.com/in/asadrahman",
  },
  {
    id: 4,
    name: "Mustafizur Rahman Chowdhury",
    title: "Founding General Secretary",
    department: "Computer Science",
    image: "https://i.pravatar",
    bio: "Focused on digital transformation and professional growth of engineers.",
    email: "rakib@example.com",
    linkedin: "https://linkedin.com/in/rakibfazal",
  },
];
</script>
<template>
  <!-- Founders Section -->
  <section class="py-12">
    <div class="text-center py-12">
      <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
        Our Advisors
      </h2>
      <p class="text-xl text-muted-foreground">
        Visionary leaders who established the Engineer Association of Bahubal
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div
        v-for="founder in founders"
        :key="founder.id"
        class="relative overflow-hidden border-2 border-yellow-400/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-yellow-50/50 to-orange-50/30 rounded-2xl"
      >
        <!-- Corner badge -->
        <div
          class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-bl-3xl flex items-center justify-center"
        >
          <Award class="h-8 w-8 text-white" />
        </div>

        <!-- Header -->
        <div class="p-6 pb-4">
          <div class="flex items-center gap-4">
            <img
              :src="founder.image"
              :alt="`${founder.name} - ${founder.title}`"
              class="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 shadow-lg"
            />
            <div>
              <h3 class="text-xl w-50 font-bold text-primary">
                {{ founder.name }}
              </h3>
              <p class="text-sm font-medium text-yellow-600">
                {{ founder.title }}
              </p>
              <p class="text-sm text-muted-foreground">
                {{ founder.department }}
              </p>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="px-6 pb-6">
          <p v-if="founder.bio" class="text-sm text-muted-foreground mb-4">
            {{ founder.bio }}
          </p>
          <div class="flex gap-2">
            <a
              v-if="founder.email"
              :href="`mailto:${founder.email}`"
              class="inline-flex items-center px-3 py-1 text-sm border rounded-md hover:bg-primary hover:text-white transition-colors"
            >
              <Mail class="h-4 w-4 mr-1" /> Email
            </a>
            <a
              v-if="founder.linkedin"
              :href="founder.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-3 py-1 text-sm border rounded-md hover:bg-primary hover:text-white transition-colors"
            >
              <Linkedin class="h-4 w-4 mr-1" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
