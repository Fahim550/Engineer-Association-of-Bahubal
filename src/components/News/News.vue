<template>
  <div class="min-h-screen bg-white">


    <!-- News Section -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-1">Latest News</h2>
            <p class="text-sm text-gray-600">Keep up with our recent announcements and achievements</p>
          </div>

          <div class="mt-4 sm:mt-0 flex items-center gap-3">
            <Filter class="h-4 w-4 text-gray-500" />
            <select v-model="selectedNewsCategory" class="border rounded px-3 py-1 text-sm">
              <option value="all">All Categories</option>
              <option value="announcement">Announcements</option>
              <option value="achievement">Achievements</option>
              <option value="event">Events</option>
              <option value="general">General</option>
            </select>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="item in filteredNews"
            :key="item.id"
            class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition"
            role="article"
          >
            <div v-if="item.image" class="h-44 bg-gray-100 overflow-hidden">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" loading="lazy" />
            </div>

            <div class="p-4">
              <div class="flex items-center justify-between mb-2">
                <span :class="getCategoryColor(item.category)" class="px-2 py-0.5 rounded text-xs font-semibold">
                  {{ item.category }}
                </span>
                <div class="flex items-center text-sm text-gray-500 gap-2">
                  <Calendar class="h-4 w-4" />
                  <span>{{ formatDate(item.date) }}</span>
                </div>
              </div>

              <h3 class="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">{{ item.title }}</h3>
              <p class="text-sm text-gray-600 line-clamp-3 mb-4">{{ item.excerpt }}</p>

              <div class="flex gap-2">
                <button @click="openNews(item)" class="px-3 py-2 rounded border text-sm bg-white hover:bg-gray-50 w-full">Read More</button>
                <a :href="item.link || '#'" class="px-3 py-2 rounded border text-sm bg-[#2d4052] text-white hover:opacity-90">View</a>
              </div>
            </div>
          </article>
        </div>

        <div v-if="filteredNews.length === 0" class="text-center py-12 text-gray-600">
          No news items found for this category.
        </div>
      </div>
    </section>

    <!-- News Detail Modal -->
    <div v-if="showNewsModal" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/50" @click="closeNews" aria-hidden="true"></div>

      <div role="dialog" aria-modal="true" class="relative max-w-3xl w-full mx-4 bg-white rounded-lg shadow-xl overflow-auto max-h-[85vh]">
        <div class="p-6">
          <div class="flex items-start justify-between mb-4">
            <div class="pr-4">
              <h3 class="text-2xl font-bold text-gray-900">{{ selectedNews.title }}</h3>
              <div class="flex items-center gap-4 text-sm text-gray-600 mt-2">
                <Calendar class="h-4 w-4" />
                <span>{{ formatDate(selectedNews.date) }}</span>
                <span v-if="selectedNews.category" class="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">{{ selectedNews.category }}</span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <button @click="closeNews" class="text-gray-500 hover:text-gray-700 p-2 rounded" aria-label="Close">✕</button>
            </div>
          </div>

          <div class="prose max-w-none text-gray-700">
            <p v-if="selectedNews.content">{{ selectedNews.content }}</p>
            <p v-else>{{ selectedNews.excerpt }}</p>

            <div v-if="selectedNews.link" class="mt-4">
              <a :href="selectedNews.link" target="_blank" rel="noopener" class="text-blue-600 underline">Read full item</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { Calendar, Filter } from "lucide-vue-next";
import { computed, ref } from "vue";

/* sample data (replace with API real data) */
const newsItems = [
  {
    id: "n1",
    title: "EAB Mentorship Session at Hope International School",
    excerpt: "EAB conducted a hands-on mentorship session that inspired many students...",
    content: "Detailed content about the mentorship session at Hope International School...",
    date: "2025-05-10",
    category: "event",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    link: ""
  },
  {
    id: "n2",
    title: "New Executive Committee Announced",
    excerpt: "EAB has announced its new executive committee to lead the association...",
    content: "Full details about elected members and their roles...",
    date: "2025-04-20",
    category: "announcement",
    image: "",
    link: ""
  },
  {
    id: "n3",
    title: "Student Project Wins Regional Award",
    excerpt: "A student mentored by EAB won an innovation award for sustainable design...",
    content: "Full writeup of the project, judges comments, and next steps...",
    date: "2025-03-18",
    category: "achievement",
    image: "",
    link: ""
  }
];

/* reactive state */
const selectedNewsCategory = ref("all"); // FIX: was missing previously
const filteredNews = computed(() => {
  if (selectedNewsCategory.value === "all") return newsItems;
  return newsItems.filter(n => n.category === selectedNewsCategory.value);
});

/* modal state */
const showNewsModal = ref(false);
const selectedNews = ref({});

function openNews(news) {
  selectedNews.value = news;
  showNewsModal.value = true;
  document.body.style.overflow = "hidden";
}

function closeNews() {
  showNewsModal.value = false;
  selectedNews.value = {};
  document.body.style.overflow = "";
}

/* helpers */
function getCategoryColor(category) {
  switch (category) {
    case "announcement": return "bg-blue-100 text-blue-800";
    case "achievement": return "bg-green-100 text-green-800";
    case "event": return "bg-purple-100 text-purple-800";
    default: return "bg-gray-100 text-gray-800";
  }
}

function formatDate(d) {
  if (!d) return "";
  const dt = new Date(d);
  return dt.toLocaleDateString();
}
</script>

<style scoped>
/* optional small helpers */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* small util if you used it */
</style>
