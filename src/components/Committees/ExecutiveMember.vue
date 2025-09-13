<script setup>
import { Linkedin, Mail, Search, Users } from "lucide-vue-next";
import { computed, ref } from "vue";
import MembersModal from "./MembersModal.vue";

// Example data
const members = ref([
  {
    id: 1,
    name: "Harun Ur Rashid",
    title: "President",
    department: "Civil Engineering",
    image: "https://i.pravatar",
    role: "founder",
    bio: "Leading the vision of EAB with dedication.",
    email: "harun@example.com",
    linkedin: "https://linkedin.com/in/harun",
    joinDate: "2020-01-10",
  },
  {
    id: 2,
    name: "Azizur Rahman",
    title: "Vice President",
    department: "Mechanical Engineering",
    image: "https://i.pravatar",
    role: "executive",
    bio: "Guiding innovation and young engineers.",
    email: "aziz@example.com",
    linkedin: "https://linkedin.com/in/aziz",
    joinDate: "2021-05-15",
  },
  {
    id: 3,
    name: "Abul Fazal Rakib",
    title: "General Secretary",
    department: "Computer Science",
    image: "https://i.pravatar",
    role: "advisor",
    bio: "Focused on digital transformation and growth.",
    email: "rakib@example.com",
    linkedin: "https://linkedin.com/in/rakib",
    joinDate: "2022-07-20",
  },
]);

// Search & filter
const searchTerm = ref("");
const roleFilter = ref("all");

const filteredMembers = computed(() => {
  return members.value.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      m.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      (m.department &&
        m.department.toLowerCase().includes(searchTerm.value.toLowerCase()));

    const matchRole = roleFilter.value === "all" || m.role === roleFilter.value;

    return matchSearch && matchRole;
  });
});

const selectedMember = ref(null);
const showModal = ref(false);

function openModal(member) {
  selectedMember.value = member;
  showModal.value = true;
  console.log("showmodal");
}

function closeModal() {
  showModal.value = false;
}
</script>

<template>
  <section class="container mx-auto py-12 px-6">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
        Executive & Running Members
      </h2>
      <p class="text-xl text-muted-foreground">
        Search and filter through our active committee members
      </p>
    </div>

    <!-- Search & Filter -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8">
      <!-- Search -->
      <div class="relative flex-1">
        <Search
          class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary"
        />
        <input
          v-model="searchTerm"
          placeholder="Search by name, title, or department..."
          class="pl-10 w-full border rounded-md px-3 py-2 text-sm"
        />
      </div>

      <!-- Filter -->
      <select
        v-model="roleFilter"
        class="w-full sm:w-48 border rounded-md px-3 py-2 text-sm"
      >
        <option value="all">All Roles</option>
        <option value="founder">Founders</option>
        <option value="executive">Executive</option>
        <option value="advisor">Advisors</option>
        <option value="general">General Members</option>
      </select>
    </div>

    <!-- Members Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="member in filteredMembers"
        :key="member.id"
        @click="openModal(member)"
        class="cursor-pointer hover:shadow-lg transition-all duration-300 hover:translate-y-1 shadow-lg border-2 border-orange-400/30 rounded-xl bg-gradient-to-br from-yellow-50/50 to-orange-50/30 p-6 flex flex-col items-center text-center"
      >
        <!-- Profile -->
        <img
          :src="member.image"
          :alt="`${member.name} - ${member.title}`"
          class="w-20 h-20 rounded-full object-cover mb-3 border-2 border-primary/20"
        />
        <h3 class="text-lg font-semibold text-primary">{{ member.name }}</h3>
        <p class="text-sm text-muted-foreground">{{ member.title }}</p>
        <p v-if="member.department" class="text-xs text-muted-foreground">
          {{ member.department }}
        </p>

        <!-- Badge -->
        <span
          class="mt-2 text-xs px-3 py-1 rounded-full"
          :class="{
            'bg-secondary text-white': member.role === 'founder',
            'border text-primary': member.role !== 'founder',
          }"
        >
          {{
            member.role === "founder"
              ? "Founder"
              : member.role === "executive"
              ? "Executive"
              : member.role === "advisor"
              ? "Advisor"
              : "Member"
          }}
        </span>

        <!-- Bio -->
        <p
          v-if="member.bio"
          class="text-sm text-muted-foreground mt-3 line-clamp-3"
        >
          {{ member.bio }}
        </p>

        <!-- Contact -->
        <div class="flex justify-center gap-2 mt-3">
          <a
            v-if="member.email"
            :href="`mailto:${member.email}`"
            class="p-2 border rounded-md hover:bg-primary hover:text-white"
          >
            <Mail class="h-3 w-3" />
          </a>
          <a
            v-if="member.linkedin"
            :href="member.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 border rounded-md hover:bg-primary hover:text-white"
          >
            <Linkedin class="h-3 w-3" />
          </a>
        </div>

        <!-- Join Date -->
        <p class="text-xs text-muted-foreground text-center mt-3">
          Joined: {{ new Date(member.joinDate).getFullYear() }}
        </p>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredMembers.length === 0" class="text-center py-12">
      <Users class="h-12 w-12 text-muted-foreground mx-auto mb-4" />
      <p class="text-lg text-muted-foreground">
        No members found matching your criteria.
      </p>
    </div>
  </section>
  <!-- Modal -->
  <MembersModal
    v-if="selectedMember"
    :member="selectedMember"
    :show="showModal"
    @close="closeModal"
  />
</template>
