<template>
  <div>
    <div
      :class="[
        'bg-gradient-to-r from-secondary to-accent h-10 text-white flex items-center justify-between px-4 text-sm fixed z-50 w-full transition-all duration-300',
        scrolled ? 'hidden' : 'visible',
      ]"
    >
      <!-- Left side: Email -->
      <div >
        <a href="mailto:info@example.com" class="hover:underline relative"
          >info@engineersassociationbahubal.com</a
        >
      </div>

      <!-- Right side: Social Icons -->
      <div class="flex items-center space-x-4">
        <a
          href="#"
          target="_blank"
          aria-label="Facebook"
          class="hover:text-blue-500"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.2 22 17.06 22 12.07z"
            />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          aria-label="Twitter"
          class="hover:text-sky-400"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.87-2.35 8.43 8.43 0 0 1-2.7 1.03A4.22 4.22 0 0 0 16.1 4c-2.34 0-4.23 1.9-4.23 4.24 0 .33.04.66.11.97-3.51-.18-6.62-1.86-8.7-4.42a4.3 4.3 0 0 0-.57 2.13 4.24 4.24 0 0 0 1.88 3.53 4.2 4.2 0 0 1-1.91-.53v.05c0 2.03 1.45 3.72 3.37 4.1a4.28 4.28 0 0 1-1.9.07 4.24 4.24 0 0 0 3.96 2.94 8.49 8.49 0 0 1-5.27 1.82c-.34 0-.67-.02-1-.06A11.98 11.98 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.68 0-.18-.01-.35-.02-.53A8.38 8.38 0 0 0 22.46 6z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/wings-global-freight-limited/"
          target="_blank"
          aria-label="LinkedIn"
          class="hover:text-blue-300"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3V9zm7 0h3.6v1.8h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.45 4.45 5.6V21h-4v-5.3c0-1.25-.02-2.85-1.8-2.85-1.8 0-2.1 1.4-2.1 2.75V21h-4V9z"
            />
          </svg>
        </a>
      </div>
    </div>

    <nav
      :class="[
        'fixed  w-full z-50 transition-all duration-300',
        scrolled
          ? 'top-0 bg-white/5 backdrop-blur-lg shadow-md text-secondary font-[500] '
          : 'top-10 bg-white/5 backdrop-blur-md  text-white font-[500] text-shadow-2xl ',
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo and Brand Name -->
          <div class="flex items-center gap-4">
            <img
              class="h-12 w-12 bg-cover rounded-full"
              src="../../assets/image/logo.jpg"
              alt="Logo"
            />
            <div class="sm:block">
              <h1 class="text-lg font-bold text-foreground">
                Engineer Association
              </h1>
              <p
                :class="[
                  'text-xs ',
                  scrolled ? 'text-gray-800' : 'text-gray-200',
                ]"
              >
              <span class="hidden lg:inline">  of Bahubal</span>
               
              </p>
            </div>
          </div>
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-3">
            <!-- Home -->
            <div class="relative group">
              <RouterLink to="/" class="relative z-10 px-1">Home</RouterLink>
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"
              ></span>
            </div>

            <!-- About Us -->
            <div class="relative group">
              <RouterLink
                to="/about"
                class="relative z-10 px-1 flex items-center gap-1 focus:outline-none"
              >
                About <span class="hidden lg:inline"> US</span>
                <!-- <svg
                  class="w-4 h-4 transform group-hover:-rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg> -->
              </RouterLink>
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"
              ></span>
              <!-- <ul
                class="absolute left-0 mt-2 w-48 bg-secondary border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-accent hover:to-secondary text-white"
                  >Our Activities</a
                >
              </ul> -->
            </div>

            <!-- Member -->
            <div class="relative group">
              <RouterLink
                to="/membership"
                class="relative z-10 px-1 flex items-center gap-1 focus:outline-none"
              >
                Membership
                <svg
                  class="w-4 h-4 transform group-hover:-rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </RouterLink>
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"
              ></span>
              <ul
                class="absolute left-0 mt-2 w-52 bg-secondary border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50"
              >
                <RouterLink
                  to="membership-registration"
                  class="block px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-accent hover:to-secondary text-white"
                >
                  Membership Registration
                </RouterLink>

                <!-- <a
                  href="#"
                  class="block px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-accent hover:to-secondary text-white"
                  >How to Get Membership</a
                > -->
              </ul>
            </div>

            <!-- Committees -->
            <div class="relative group">
              <RouterLink to="committees" class="relative z-10 px-1"
                >Committees</RouterLink
              >
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"
              ></span>
            </div>

            <!-- Gallery -->
            <div class="relative group">
              <RouterLink to="/gallery" class="relative z-10 px-1"
                >Gallery</RouterLink
              >
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"
              ></span>
            </div>

            <!-- News & Update -->
            <div class="relative group">
              <RouterLink 
  to="/news-update"
  class="relative z-10 px-1 flex items-center gap-1 focus:outline-none"
>
  News <span class="hidden lg:inline">& Update</span>
</RouterLink>
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"
              ></span>
              <!-- <ul
                class="absolute left-0 mt-2 w-48 bg-secondary border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-white hover:bg-gradient-to-r hover:from-accent hover:to-secondary"
                  >Job Board</a
                >
              </ul> -->
            </div>

            <!-- Contact Us -->
            <div class="relative group">
              <RouterLink to="contact-us" class="relative z-10 px-1">Contact <span class="hidden lg:inline"> Us</span></RouterLink>
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"
              ></span>
            </div>

            <!-- Login -->
            <!-- <div class="relative group">
              <a href="#" class="relative z-10 px-1">Login</a>
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"
              ></span>
            </div> -->
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="text-secondary hover:text-secondary/80 focus:outline-none"
            >
            <div v-if="isMobileMenuOpen">

              <CrossIcon/>
            </div>
            <div v-else>
              <Menu/>
            </div>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="fixed top-16 bg-white/5  backdrop-blur-lg shadow-md right-0 min-h-full md:hidden z-50 transform transition-transform duration-300 ease-in-out" :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-full bg-white/50 backdrop-blur-lg shadow-lg">
          <RouterLink to="/" class="block text-secondary hover:text-secondary/80"
            >Home</RouterLink
          >
          <div>
            <RouterLink to="/about"
              @click="toggleSubMenu('about')"
              class="w-full text-left text-secondary hover:text-secondary/80 focus:outline-none"
            >
              About Us
            </RouterLink>
            <!-- <div v-if="openSubMenu === 'about'" class="ml-4">
              <a href="#" class="block text-secondary hover:text-secondary/80"
                >Our Activities</a
              >
            </div> -->
          </div>
          <div>
            <RouterLink to="/membership"
              @click="toggleSubMenu('member')"
              class="w-full text-left text-secondary hover:text-secondary/80 focus:outline-none"
            >
              Membership
            </RouterLink>
            <div v-if="openSubMenu === 'member'" class="ml-4">
              <RouterLink to="/membership-registration" class="block text-secondary hover:text-secondary/80"
                >Membership Registration</RouterLink
              >
              <!-- <a href="#" class="block text-secondary hover:text-secondary/80"
                >How to Get Membership</a
              > -->
            </div>
          </div>
          <RouterLink to="/committees"  class="block text-secondary hover:text-secondary/80"
            >Committees</RouterLink
          >
          <!-- <RouterLink href="#" class="block text-secondary hover:text-secondary/80"
            >Job Board</RouterLink
          > -->
          <RouterLink to="/gallery" class="block text-secondary hover:text-secondary/80"
            >Gallery</RouterLink
          >
          <RouterLink to="/news-update" class="block text-secondary hover:text-secondary/80"
            >News & Update</RouterLink
          >
          <RouterLink to="/contact-us" class="block text-secondary hover:text-secondary/80"
            >Contact Us</RouterLink
          >
          <!-- <a href="#" class="block text-secondary hover:text-secondary/80"
            >Login</a
          > -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { CrossIcon, Menu } from "lucide-vue-next";
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { RouterLink } from "vue-router";

const isMobileMenuOpen = ref(false);
const scrolled = ref(false);

const dropdowns = reactive({
  about: false,
  member: false,
});

function toggleDropdown(menu) {
  dropdowns[menu] = !dropdowns[menu];
}

function handleScroll() {
  scrolled.value = window.scrollY > 300;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
