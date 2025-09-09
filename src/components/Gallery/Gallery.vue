<script setup>
import { Calendar, Clock, MapPin, Users } from "lucide-vue-next";
import { ref } from "vue";

// Example events data (you can replace with API data)
const events = ref([
  {
    id: "1",
    title: "Advanced Structural Design Workshop",
    description:
      "Comprehensive workshop on modern structural design techniques using latest software tools and industry best practices.",
    date: "2024-02-15",
    time: "9:00 AM - 5:00 PM",
    location: "EAB Conference Hall, Bahubal",
    image: "/api/placeholder/400/250",
    category: "workshop",
    registrationLink: "/events/1/register",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Career Development Seminar",
    description:
      "Expert guidance on career advancement, professional networking, and industry opportunities for engineers.",
    date: "2024-02-28",
    time: "2:00 PM - 6:00 PM",
    location: "Bahubal Community Center",
    image: "/api/placeholder/400/250",
    category: "seminar",
    registrationLink: "/events/2/register",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Engineering Innovation Conference 2024",
    description:
      "Annual conference showcasing latest innovations, research developments, and future trends in engineering.",
    date: "2024-03-20",
    time: "8:00 AM - 8:00 PM",
    location: "Habiganj Engineering College",
    image: "/api/placeholder/400/250",
    category: "conference",
    registrationLink: "/events/3/register",
    isFeatured: true,
  },
]);
</script>

<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
          All Events
        </h2>
        <p class="text-muted-foreground max-w-2xl mx-auto">
          From technical workshops to career development seminars, discover all
          our events designed to enhance your professional journey.
        </p>
      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="event in events"
          :key="event.id"
          class="group overflow-hidden rounded-lg border-0 bg-card/50 backdrop-blur hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
        >
          <!-- Event Image & Badges -->
          <div class="relative overflow-hidden">
            <img
              :src="event.image"
              :alt="event.title"
              class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span
                class="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm capitalize"
                :class="{
                  'bg-blue-500/10 text-blue-600 border border-blue-500/20':
                    event.category === 'workshop',
                  'bg-green-500/10 text-green-600 border border-green-500/20':
                    event.category === 'seminar',
                  'bg-purple-500/10 text-purple-600 border border-purple-500/20':
                    event.category === 'networking',
                  'bg-orange-500/10 text-orange-600 border border-orange-500/20':
                    event.category === 'conference',
                }"
              >
                {{ event.category }}
              </span>
            </div>

            <!-- Featured Badge -->
            <div v-if="event.isFeatured" class="absolute top-4 right-4">
              <span
                class="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
              >
                Featured
              </span>
            </div>
          </div>

          <!-- Event Content -->
          <div class="p-6">
            <h3
              class="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2"
            >
              {{ event.title }}
            </h3>
            <p class="text-muted-foreground mt-2 line-clamp-3">
              {{ event.description }}
            </p>

            <!-- Meta -->
            <div class="mt-4 space-y-3 text-sm text-muted-foreground">
              <div class="flex items-center gap-2">
                <Calendar class="h-4 w-4 text-primary" />
                <span>{{
                  new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}</span>
              </div>

              <div class="flex items-center gap-2">
                <Clock class="h-4 w-4 text-primary" />
                <span>{{ event.time }}</span>
              </div>

              <div class="flex items-center gap-2">
                <MapPin class="h-4 w-4 text-primary" />
                <span class="line-clamp-1">{{ event.location }}</span>
              </div>
            </div>

            <!-- Register Button -->
            <div v-if="event.registrationLink" class="mt-4">
              <a
                :href="event.registrationLink"
                class="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-primary-foreground bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                <Users class="h-4 w-4" />
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="events.length === 0" class="text-center py-16">
        <Calendar class="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
        <h3 class="text-xl font-semibold text-foreground mb-2">
          No Events Available
        </h3>
        <p class="text-muted-foreground">
          Check back soon for upcoming events and workshops.
        </p>
      </div>
    </div>
  </section>
</template>
