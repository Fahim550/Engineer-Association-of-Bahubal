<script setup>
const members = [
  {
    id: 1,
    name: "Fahim Rahman",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Frontend Developer & MERN Stack Engineer",
  },
  {
    id: 2,
    name: "Sadia Karim",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "UI/UX Designer and Web Enthusiast",
  },
  {
    id: 3,
    name: "Rashid Hossain",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    bio: "Backend Developer with Node.js and Python",
  },
  {
    id: 4,
    name: "Tania Akter",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Mobile App Developer using Flutter",
  },
];
</script>

<template>
  <div class="bg-gray-100">
    <div class="container mx-auto py-16">
      <div class="text-3xl font-bold text-primary pb-10 flex justify-center">
        Meet Our Executive Members
      </div>

      <div class="flex gap-6 justify-center">
        <div
          v-for="member in members"
          :key="member.id"
          class="w-full h-[350px] relative overflow-hidden group cursor-pointer rounded-md"
        >
          <img
            :src="member.image"
            :alt="member.name"
            class="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          <div
            class="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col"
          >
            <h1
              class="text-[1.5rem] font-bold text-white text-center capitalize"
            >
              {{ member.name }}
            </h1>
            <p
              class="text-center z-[1] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]"
            >
              {{ member.bio }}
            </p>
            <button
              class="bg-gray-400 z-[1] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]"
            >
              View Details
            </button>
          </div>

          <div
            class="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
