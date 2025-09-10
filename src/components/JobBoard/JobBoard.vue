<template>
  <div class="min-h-screen bg-white">
    <!-- Job Board Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-1">Job Board</h2>
            <p class="text-sm text-gray-600">Discover career opportunities in engineering</p>
          </div>

          <div class="mt-4 sm:mt-0 flex items-center gap-3">
            <Filter class="h-4 w-4 text-gray-500" />
            <select v-model="selectedJobType" class="border rounded px-3 py-1 text-sm">
              <option value="all">All Types</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
        </div>

        <div class="space-y-6">
          <article
            v-for="job in filteredJobs"
            :key="job.id"
            class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <div class="p-6">
              <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div class="flex-1">
                  <div class="flex flex-wrap items-center gap-3 mb-3">
                    <h3 class="text-xl font-semibold text-gray-900">{{ job.title }}</h3>
                    <span :class="getJobTypeColor(job.type)" class="px-2 py-0.5 rounded text-xs font-semibold">
                      {{ job.type }}
                    </span>
                  </div>

                  <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div class="flex items-center gap-1"><Building class="h-4 w-4" /> <span>{{ job.company }}</span></div>
                    <div class="flex items-center gap-1"><MapPin class="h-4 w-4" /> <span>{{ job.location }}</span></div>
                    <div class="flex items-center gap-1"><Users class="h-4 w-4" /> <span>{{ job.experience }}</span></div>
                    <div v-if="job.salary" class="flex items-center gap-1"><span class="font-medium">💰 {{ job.salary }}</span></div>
                  </div>

                  <p class="text-sm text-gray-700 mb-3 line-clamp-2">{{ job.description }}</p>

                  <div class="text-sm text-gray-500">
                    <Clock class="h-4 w-4 inline-block mr-1" />
                    Posted: {{ formatDate(job.postedDate) }} • Deadline: {{ formatDate(job.deadline) }}
                  </div>
                </div>

                <div class="flex flex-col gap-2 mt-4 lg:mt-0 lg:ml-6">
                  <button @click="openJob(job)" class="px-4 py-2 rounded bg-[#2d4052] text-white hover:opacity-90">View Details</button>
                  <a :href="'mailto:' + (job.contactEmail || 'info@example.com')" class="px-4 py-2 rounded border text-sm text-gray-700 hover:bg-gray-100 inline-flex items-center justify-center gap-2">
                    <Mail class="h-4 w-4" /> Contact
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="text-center mt-10">
          <button class="px-6 py-2 rounded bg-green-600 text-white hover:opacity-90">View More Jobs</button>
        </div>
      </div>
    </section>

    <!-- Job Detail Modal -->
    <div v-if="showJobModal" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/50" @click="closeJobModal"></div>

      <div class="relative max-w-3xl w-full mx-4 bg-white rounded-lg shadow-xl overflow-auto max-h-[85vh]">
        <div class="p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-2xl font-bold text-gray-900">{{ selectedJob.title }}</h3>
              <div class="flex items-center gap-4 text-sm text-gray-600 mt-2">
                <div class="flex items-center gap-1"><Building class="h-4 w-4" /> {{ selectedJob.company }}</div>
                <div class="flex items-center gap-1"><MapPin class="h-4 w-4" /> {{ selectedJob.location }}</div>
                <div class="flex items-center gap-1"><Users class="h-4 w-4" /> {{ selectedJob.experience }}</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <a :href="'mailto:' + (selectedJob.contactEmail || 'info@example.com')" class="px-4 py-2 rounded bg-green-600 text-white inline-flex items-center gap-2">
                <Mail class="h-4 w-4" /> Apply
              </a>
              <button @click="closeJobModal" class="text-gray-500 hover:text-gray-700 p-2 rounded">
                ✕
              </button>
            </div>
          </div>

          <div class="prose prose-sm max-w-none text-gray-700">
            <h4 class="font-semibold">Job Description</h4>
            <p>{{ selectedJob.description }}</p>

            <h4 class="font-semibold">Responsibilities</h4>
            <ul>
              <li v-for="(r, i) in selectedJob.responsibilities || []" :key="i">{{ r }}</li>
            </ul>

            <h4 class="font-semibold">Requirements</h4>
            <ul>
              <li v-for="(r, i) in selectedJob.requirements || []" :key="i">{{ r }}</li>
            </ul>

            <h4 class="font-semibold">How to Apply</h4>
            <p v-if="selectedJob.applyUrl">
              Apply online: <a :href="selectedJob.applyUrl" class="text-blue-600 underline" target="_blank">{{ selectedJob.applyUrl }}</a>
            </p>
            <p v-else>
              Send your CV to <a :href="'mailto:' + (selectedJob.contactEmail || 'info@example.com')" class="text-blue-600 underline">{{ selectedJob.contactEmail || 'info@example.com' }}</a>
            </p>

            <div class="mt-4 text-sm text-gray-500">
              <div>Posted: {{ formatDate(selectedJob.postedDate) }}</div>
              <div>Deadline: {{ formatDate(selectedJob.deadline) }}</div>
              <div v-if="selectedJob.salary">Salary: {{ selectedJob.salary }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- News Detail Modal (simple) -->
    <div v-if="showNewsModal" class="fixed inset-0 z-40 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/40" @click="closeNews"></div>
      <div class="relative max-w-2xl w-full bg-white rounded-lg shadow-lg p-6 mx-4 overflow-auto max-h-[80vh]">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-bold">{{ selectedNews.title }}</h3>
            <p class="text-sm text-gray-500">{{ formatDate(selectedNews.date) }}</p>
          </div>
          <button @click="closeNews" class="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <div class="mt-4 prose max-w-none text-gray-700">
          <p>{{ selectedNews.content || selectedNews.excerpt }}</p>
          <div v-if="selectedNews.link" class="mt-4">
            <a :href="selectedNews.link" target="_blank" class="text-blue-600 underline">Read full item</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Building, Calendar, Clock, Filter, Mail, MapPin, Users } from "lucide-vue-next";
import { computed, ref } from "vue";

/* ---------------------------
   Sample data (replace with API)
   --------------------------- */


const jobPostings = [
  {
    id: "j1",
    title: "Junior Civil Engineer",
    company: "Bahubal Builders Ltd.",
    location: "Bahubal, Habiganj",
    type: "full-time",
    experience: "0-2 years",
    salary: "Negotiable",
    description: "Assist in site supervision, drafting, and preparing reports.",
    responsibilities: [
      "Site inspections and supervision",
      "Assist in preparing drawings and reports",
      "Coordinate with contractors and stakeholders"
    ],
    requirements: [
      "Diploma/BSc in Civil Engineering",
      "Good communication skills",
      "Willingness to work on-site"
    ],
    postedDate: "2025-05-01",
    deadline: "2025-06-01",
    contactEmail: "hr@bahubalbuilders.example",
    applyUrl: ""
  },
  {
    id: "j2",
    title: "Electrical Intern",
    company: "Sunshine Energy",
    location: "Sylhet (remote possible)",
    type: "internship",
    experience: "Student / 0-1 years",
    salary: "Stipend",
    description: "Support electrical team with testing, reporting, and small installations.",
    responsibilities: ["Assist testing", "Document results", "Support senior engineers"],
    requirements: ["Enrolled in Electrical Engineering", "Basic tools knowledge"],
    postedDate: "2025-04-15",
    deadline: "2025-05-30",
    contactEmail: "careers@sunshine.example",
    applyUrl: ""
  },
  {
    id: "j3",
    title: "Project Manager (Contract)",
    company: "Infrastructure Solutions",
    location: "Dhaka / Bahubal",
    type: "contract",
    experience: "5+ years",
    salary: "৳ 80,000 - 120,000",
    description: "Lead medium-size civil projects and manage client relationships.",
    responsibilities: ["Project planning", "Team management", "Client communication"],
    requirements: ["BSc/MSc in Civil Engineering", "PMP preferred"],
    postedDate: "2025-03-10",
    deadline: "2025-07-01",
    contactEmail: "jobs@infra.example",
    applyUrl: "https://infra.example/jobs/j3"
  }
];

/* ---------------------------
   Reactive state & computed
   --------------------------- */
const selectedNewsCategory = ref("all");
const selectedJobType = ref("all");

const filteredNews = computed(() => {
  if (selectedNewsCategory.value === "all") return newsItems;
  return newsItems.filter(n => n.category === selectedNewsCategory.value);
});

const filteredJobs = computed(() => {
  if (selectedJobType.value === "all") return jobPostings;
  return jobPostings.filter(j => j.type === selectedJobType.value);
});

/* ---------------------------
   Helpers & modal state
   --------------------------- */
function getCategoryColor(category) {
  switch (category) {
    case "announcement": return "bg-blue-100 text-blue-800";
    case "achievement": return "bg-green-100 text-green-800";
    case "event": return "bg-purple-100 text-purple-800";
    default: return "bg-gray-100 text-gray-800";
  }
}

function getJobTypeColor(type) {
  switch (type) {
    case "full-time": return "bg-green-100 text-green-800";
    case "part-time": return "bg-yellow-100 text-yellow-800";
    case "contract": return "bg-blue-100 text-blue-800";
    case "internship": return "bg-purple-100 text-purple-800";
    default: return "bg-gray-100 text-gray-800";
  }
}

const showJobModal = ref(false);
const selectedJob = ref({});
function openJob(job) {
  selectedJob.value = job;
  showJobModal.value = true;
  document.body.style.overflow = "hidden";
}
function closeJobModal() {
  showJobModal.value = false;
  selectedJob.value = {};
  document.body.style.overflow = "";
}

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

function formatDate(d) {
  if (!d) return "";
  const dt = new Date(d);
  return dt.toLocaleDateString();
}
</script>

<style scoped>
/* small utility classes used in template - add/adjust as needed */
.bg-primary {
  background-color: var(--color-primary, #2d4052);
}
</style>
