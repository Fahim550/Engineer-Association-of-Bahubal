<script setup>
import male from "@/assets/image/male.jpeg";
const members = [
  {
    id: 1,
    name: "Harun Or Rashid",
    designation: "President",
    image: male,
    bio: "",
  },
  {
    id: 2,
    name: "Engineer Azizur Rahman",
    designation: "Vice President",
    image: male,
    bio: "",
  },
  {
    id: 3,
    name: "Mostafizur Rahman Chowdhury (Asad)",
    designation: "Vice President",
    image: male,
    bio: "",
  },
  {
    id: 4,
    name: "Abul Fazal Rakib",
    designation: "General Secretary",
    image: male,
    bio: "",
  },
  // {
  //   id: 5,
  //   name: "Saifur Rahman",
  //   designation: "Joint General Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 6,
  //   name: "Afzal Sultan Liju",
  //   designation: "Joint General Secretary",
  //   image: female,
  //   bio: "",
  // },
  // {
  //   id: 7,
  //   name: "Nusrat Rahman Mosaddek",
  //   designation: "Organizing Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 8,
  //   name: "Mannan Majlum",
  //   designation: "Assistant Organizing Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 9,
  //   name: "Uzzal Kar Shawon",
  //   designation: "Assistant Organizing Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 10,
  //   name: "Md. Kamal Uddin",
  //   designation: "Office Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 11,
  //   name: "Shah Fazal Ali",
  //   designation: "Finance Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 12,
  //   name: "Tuhin Bonik",
  //   designation: "Science & Technology Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 13,
  //   name: "Moshiur Rahman Tanim",
  //   designation: "Social Welfare Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 14,
  //   name: "Shafiqul Rahman Khan",
  //   designation: "Education & Environment Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 15,
  //   name: "R M Rashed",
  //   designation: "Entrepreneurship & Employment Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 16,
  //   name: "Sajidur Rahman Shanto",
  //   designation: "Student Affairs Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 17,
  //   name: "Md. Gias Uddin",
  //   designation: "Publicity & Publication Secretary",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 18,
  //   name: "Mosharraf Ahmed",
  //   designation: "Executive Member",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 19,
  //   name: "Anup Robi Das",
  //   designation: "Executive Member",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 20,
  //   name: "Md. Junaid Ahmed",
  //   designation: "Executive Member",
  //   image: male,
  //   bio: "",
  // },
  // {
  //   id: 21,
  //   name: "Fahim Rahman",
  //   designation: "Executive Member",
  //   image: male,
  //   bio: "",
  // },
];
</script>

<template>
  <div class="">
    <div class="container mx-auto py-4">
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
            class="absolute top-[40%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col"
          >
            <h1
              class="text-[1.5rem] font-bold text-white text-center capitalize"
            >
              {{ member.name }}
            </h1>
            <p
              class="text-center z-[1] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]"
            >
              {{ member.designation }}
            </p>
            <p
              class="text-center z-[1] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]"
            >
              {{ member.bio }}
            </p>
            <!-- <button
              class="bg-gray-400 z-[1] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]"
            >
              View Details
            </button> -->
          </div>

          <div
            class="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
