<script setup>
import { Send } from "lucide-vue-next";
import { ref } from "vue";

const WEB3FORMS_ACCESS_KEY = "62e1b28a-e6f5-4aec-9f6d-f9a81a93b5ba";
const name = ref("");
const email = ref("");
const message = ref("");
const status = ref("");

const submitForm = async () => {
  status.value = "Submitting...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      status.value = result.message || "Thank you! Your message was sent.";
      // Clear form
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      console.error("Form error:", result);
      status.value = result.message || "Oops! Something went wrong.";
    }
  } catch (err) {
    console.error("Network or unexpected error:", err);
    status.value = "Network error. Please try again later.";
  }

  // Hide the status after a short delay
  setTimeout(() => {
    status.value = "";
  }, 5000);
};
</script>

<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Get In  <span class="text-secondary"> Touch </span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div class="bg-white shadow-lg rounded-lg p-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
          <p class="text-gray-600 mb-6">
            Have a question, suggestion, or just want to say hello? We'd love to
            hear from you! Feel free to reach out — we're here to help and
            connect.
          </p>
          <ul class="space-y-6">
            <li class="flex items-start">
              <svg
                class="w-6 h-6 flex-shrink-0 text-secondary mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C8.1 2 5 5.1 5 9c0 7 7 13 7 13s7-6 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
                />
              </svg>
              <div>
                <h4 class="font-medium text-gray-800">Address</h4>
                <p class="text-gray-600">Bahubal, Habigonj, Sylhet</p>
              </div>
            </li>
            <li class="flex items-start">
              <svg
                class="w-6 h-6 flex-shrink-0 text-secondary mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6.62 10.79a15.091 15.091 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.74 3.88.74a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.74 3.88a1 1 0 01-.21 1.11l-2.4 2.4z"
                />
              </svg>
              <div>
                <h4 class="font-medium text-gray-800">Phone</h4>
                <p class="text-gray-600">+93 749 99 65 50</p>
              </div>
            </li>
            <li class="flex items-start">
              <svg
                class="w-6 h-6 flex-shrink-0 text-secondary mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                />
              </svg>
              <div>
                <h4 class="font-medium text-gray-800">Email</h4>
                <p class="text-gray-600">info@bahubalengineers.org</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Contact Form -->
        <form
          @submit.prevent="submitForm"
          class="bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
          <div>
            <label class="block text-gray-700 font-medium mb-2" for="name"
              >Name</label
            >
            <input
              id="name"
              type="text"
              class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
              placeholder="Fahim"
              required
              v-model="name"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2" for="email"
              >Email Address</label
            >
            <input
              id="email"
              type="email"
              class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
              placeholder="you@example.com"
              required
              v-model="email"
            />
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-2" for="message"
              >Message</label
            >
            <textarea
              id="message"
              rows="6"
              class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
              placeholder="Your message..."
              required
              v-model="message"
            ></textarea>
          </div>

         <button
    type="submit"
    class="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-accent text-white font-medium py-3 rounded-lg hover:bg-gradient-to-l transition transform cursor-pointer"
    aria-label="Send message"
  >
    Send Message
    <Send class="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
  </button>
          <p v-if="status" class="mt-2 text-center text-sm">{{ status }}</p>
        </form>
      </div>
    </div>
  </section>
</template>
import { ref } from "vue";
