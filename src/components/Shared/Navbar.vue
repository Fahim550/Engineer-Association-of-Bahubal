<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo and Brand Name -->
        <div class="flex items-center">
          <!-- <img class="h-8 w-8" src="@/assets/images/logo.png" alt="Logo" /> -->
          <span class="ml-2 font-bold text-xl text-gray-800"
            >Engineer Association of Bahubal</span
          >
        </div>
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
          <div class="relative group">
            <button
              class="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              About Us
            </button>
            <div
              class="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Our Activities</a
              >
            </div>
          </div>
          <div class="relative group">
            <button
              class="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              Member
            </button>
            <div
              class="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Membership Registration</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >How to Get Membership</a
              >
            </div>
          </div>
          <a href="#" class="text-gray-700 hover:text-blue-600">Committees</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Job Board</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Gallery</a>
          <a href="#" class="text-gray-700 hover:text-blue-600"
            >News & Update</a
          >
          <a href="#" class="text-gray-700 hover:text-blue-600">Contact Us</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Login</a>
        </div>
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" class="block text-gray-700 hover:text-blue-600">Home</a>
        <div>
          <button
            @click="toggleSubMenu('about')"
            class="w-full text-left text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            About Us
          </button>
          <div v-if="openSubMenu === 'about'" class="ml-4">
            <a href="#" class="block text-gray-700 hover:text-blue-600"
              >Our Activities</a
            >
          </div>
        </div>
        <div>
          <button
            @click="toggleSubMenu('member')"
            class="w-full text-left text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            Member
          </button>
          <div v-if="openSubMenu === 'member'" class="ml-4">
            <a href="#" class="block text-gray-700 hover:text-blue-600"
              >Membership Registration</a
            >
            <a href="#" class="block text-gray-700 hover:text-blue-600"
              >How to Get Membership</a
            >
          </div>
        </div>
        <a href="#" class="block text-gray-700 hover:text-blue-600"
          >Committees</a
        >
        <a href="#" class="block text-gray-700 hover:text-blue-600"
          >Job Board</a
        >
        <a href="#" class="block text-gray-700 hover:text-blue-600">Gallery</a>
        <a href="#" class="block text-gray-700 hover:text-blue-600"
          >News & Update</a
        >
        <a href="#" class="block text-gray-700 hover:text-blue-600"
          >Contact Us</a
        >
        <a href="#" class="block text-gray-700 hover:text-blue-600">Login</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
      openSubMenu: null,
    };
  },
  methods: {
    toggleSubMenu(menu) {
      this.openSubMenu = this.openSubMenu === menu ? null : menu;
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
