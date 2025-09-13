<script setup>
import { ArrowRight } from 'lucide-vue-next';

</script>

<template>
  <section class="bg-white py-10">
    <h2
      class="text-3xl font-bold text-secondary flex justify-center items-center pb-8"
    >
      Gallery
    </h2>
    <div class="py-4 px-2 mx-auto container sm:py-4 lg:px-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
        <div
          class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col"
        >
          <a
            href=""
            class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
          >
            <img
              src="../../assets/image/events/hopeScl.jpg"
              alt=""
              class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div
              class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
            ></div>
            <!-- <h3
              class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
            >
              The Hope 
            </h3> -->
          </a>
        </div>
        <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
          <a
            href=""
            class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
          >
            <img
              src="../../assets/image/events/sunshineScl.jpg"
              alt=""
              class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div
              class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
            ></div>
            <!-- <h3
              class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
            >
              Gin
            </h3> -->
          </a>
          <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <a
              href=""
              class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src="../../assets/image/events/putijuriScl.jpg"
                alt=""
                class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div
                class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
              ></div>
              <!-- <h3
                class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
              >
                Whiskey
              </h3> -->
            </a>
            <a
              href=""
              class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src="../../assets/image/events/ifter25.jpg"
                alt=""
                class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div
                class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
              ></div>
              <!-- <h3
                class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
              >
                Vodka
              </h3> -->
            </a>
          </div>
        </div>
        <div
          class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col"
        >
          <a
            href=""
            class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
          >
            <img
              src="../../assets/image/events/fnScl.jpg"
              alt=""
              class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div
              class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
            ></div>
            <!-- <h3
              class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
            >
              Brandy
            </h3> -->
          </a>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <RouterLink
        to="/gallery"
        class="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-secondary to-accent text-white shadow-medium text-lg font-medium hover:opacity-90 transition transform cursor-pointer group  "
      >
        View All 
        <ArrowRight class="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </RouterLink>
    </div>
  </section>
</template>
