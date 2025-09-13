<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
  

    <section
    class="relative pt-28 pb-10 bg-gradient-to-r from-accent/70 via-primary to-gray-900 text-white overflow-hidden"
    aria-labelledby="committee-hero-title"
  >
    <div
      class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_40%)]"
    ></div>

    <!-- Hero Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1
        id="committee-hero-title"
        class="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
      >
        Join <span class="text-secondary"> EAB</span> Today
      </h1>
      <p
        class="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 line-clamp-3"
      >
           Become part of Bangladesh's premier engineering association and
          accelerate your professional growth
      </p>
    </div>

     <!-- Stats -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-6 text-primary-foreground/90 mb-8"
      >
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-bold">{{ stats.members }}+</div>
          <div class="text-sm">Members</div>
        </div>
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-bold">{{ stats.years }}+</div>
          <div class="text-sm">Years</div>
        </div>
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-bold">{{ stats.events }}+</div>
          <div class="text-sm">Events</div>
        </div>
      </div>

    <!-- Bottom Wave Divider -->
    <div class="absolute left-0 right-0 bottom-0 pointer-events-none">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="w-full h-16 text-white/10"
      >
        <path
          d="M0,0 C300,80 900,-40 1200,20 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </section>

     <!-- <CommonHero
  titleBefore="Join"
  titleHighlight="EAB"
  titleAfter="Today"
  subtitle="Become part of Bangladesh's premier engineering association and
          accelerate your professional growth"
/> -->

    <!-- Membership Types & Benefits -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Membership <span class="text-primary">Types & Benefits</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the membership category that best fits you. All membership
            types are <strong>free</strong> — just apply and we'll review your
            submission.
          </p>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <article
            v-for="type in membershipTypes"
            :key="type.id"
            role="article"
            :aria-labelledby="`mem-title-${type.id}`"
            class="relative rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl focus-within:shadow-xl outline-none"
            tabindex="0"
          >
            <!-- Free badge -->
            <div class="flex items-center justify-between mb-4">
              <div class="inline-flex items-center gap-2">
                <span
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-50 text-green-700 border border-green-100"
                >
                  <svg
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span class="ml-1">Free</span>
                </span>
                <span class="text-xs text-gray-500">No joining fee</span>
              </div>

              <div v-if="type.popular" class="ml-2">
                <span
                  class="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium"
                  >Most Popular</span
                >
              </div>
            </div>

            <header class="text-center pb-4">
              <h3
                :id="`mem-title-${type.id}`"
                class="text-xl font-bold text-gray-900"
              >
                {{ type.name }}
              </h3>
              <p class="text-sm text-gray-600 mt-2">{{ type.description }}</p>
            </header>

            <div class="mt-4 space-y-4">
              <ul class="space-y-3" aria-label="features">
                <li
                  v-for="(feature, idx) in type.features"
                  :key="idx"
                  class="flex items-start gap-3"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-primary mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span class="text-gray-700 text-sm">{{ feature }}</span>
                </li>
              </ul>

              <p v-if="type.note" class="text-xs text-gray-500 italic mt-1">
                {{ type.note }}
              </p>

              <div class="mt-4">
                <button
                  @click="handleApplyClick(type.id)"
                  @keyup.enter.prevent="handleApplyClick(type.id)"
                  class="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 hover:-translate-y-0.5"
                  :class="
                    type.popular
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-primary border border-gray-200'
                  "
                  :aria-label="`Apply for ${type.name}`"
                >
                  Apply (Free)
                  <svg
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <footer class="mt-6 text-center">
              <p class="text-xs text-gray-400">
                Membership subject to approval by the committee.
              </p>
            </footer>
          </article>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Membership <span class="text-primary">Benefits</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive opportunities and resources designed to advance
            your engineering career
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="text-center group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300"
            >
              <component
                :is="benefit.icon"
                class="h-10 w-10 text-primary transition-transform duration-300"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              {{ benefit.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm">
              {{ benefit.description }}
            </p>
          </div>
        </div>

        <div class="mt-16 bg-white rounded-2xl p-6 shadow-md">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-2xl font-bold text-primary mb-2">24/7</div>
              <div class="text-gray-600">Online Access</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-secondary mb-2">50+</div>
              <div class="text-gray-600">Annual Events</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-accent mb-2">100%</div>
              <div class="text-gray-600">Job Placement Rate</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-primary mb-2">15+</div>
              <div class="text-gray-600">Partner Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Get Membership -->
    <section class="py-20 bg-white" id="how-to">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Get <span class="text-primary">Membership</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to become a member of EAB and start your
            journey with us
          </p>
        </div>

        <div class="relative">
          <div
            class="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 transform -translate-y-1/2"
          ></div>

          <div class="grid lg:grid-cols-5 gap-8">
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="text-center relative"
            >
              <div
                class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow"
              >
                {{ step.number }}
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/membership-registration"
            class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md"
          >
            Start Your Application
            <svg
              class="ml-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA / Info -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-gradient-to-r from-accent/20 to-white/60 text-primary rounded-2xl p-8 shadow"
        >
          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ready to Join EAB?
          </h3>
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Quick Processing</h4>
              <p class="text-gray-600 text-sm">
                Most applications are processed within 5-7 business days
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">
                Secure Submission
              </h4>
              <p class="text-gray-600 text-sm">
                We accept uploads and contact details securely via our
                registration form
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Instant Updates</h4>
              <p class="text-gray-600 text-sm">
                Get notified about events, mentorships and job posts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Award, Clock, Star, Users } from "lucide-vue-next";
import { useRouter } from "vue-router";

// membership data (const is fine)
const membershipTypes = [
  {
    id: "student",
    name: "Student Membership",
    description: "For engineering students and recent graduates",
    features: [
      "Access to workshops & seminars",
      "Student networking events",
      "Mentorship & study guidance",
      "Online resources and materials",
    ],
    popular: false,
    note: "Open to current students with student ID.",
  },
  {
    id: "professional",
    name: "Professional Membership",
    description: "For practicing engineers and professionals",
    features: [
      "All student benefits +",
      "Professional networking events & job updates",
      "Opportunities to present/mentor",
      "Voting rights in association matters",
    ],
    popular: true,
    note: "Recommended for practicing engineers.",
  },
  {
    id: "lifetime",
    name: "Lifetime Membership",
    description: "Long-term membership for committed professionals",
    features: [
      "All professional benefits +",
      "Priority for leadership nominations",
      "Lifetime listing in members directory",
    ],
    popular: false,
    note: "Apply and indicate your long-term commitment.",
  },
];

const steps = [
  {
    number: 1,
    title: "Choose Membership Type",
    description:
      "Select the membership type that best fits your needs and career stage.",
  },
  {
    number: 2,
    title: "Complete Application",
    description:
      "Fill out the comprehensive membership application form with all required details.",
  },
  {
    number: 3,
    title: "Submit Documents",
    description:
      "Upload required documents including educational certificates and professional credentials.",
  },
  {
    number: 4,
    title: "Review & Approval",
    description:
      "We will review your application and notify you about the decision.",
  },
  {
    number: 5,
    title: "Welcome to EAB",
    description:
      "Receive confirmation and start enjoying all the benefits of EAB membership.",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Professional Networking",
    description: "Connect with engineers across disciplines and industries.",
  },
  {
    icon: Award,
    title: "Career Development",
    description: "Access workshops, seminars, and development programs.",
  },
  {
    icon: Star,
    title: "Recognition & Awards",
    description: "Participate in awards and recognition programs.",
  },
  {
    icon: Clock,
    title: "Continuous Learning",
    description: "Stay updated with latest technologies and best practices.",
  },
];

const stats = { members: 500, years: 15, events: 100 };

const router = useRouter();

function handleApplyClick(id) {
  // navigate to registration page and pass the selected membership type as query param
  router
    .push({ path: "/membership-registration", query: { plan: id } })
    .catch(() => {});
}
</script>

<style scoped>
:root {
  --color-white: #f9fafb;
  --color-primary: #2d4052;
  --color-secondary: #ff5528;
  --color-yellow: #ffa415;
}

/* map variables to utility-like classes used in template */
.bg-primary {
  background-color: var(--color-primary);
}
.text-primary {
  color: var(--color-primary);
}
.text-secondary {
  color: var(--color-secondary);
}

/* small focus outline for keyboard users */
article:focus {
  box-shadow: 0 8px 24px rgba(45, 64, 82, 0.12);
  outline: 3px solid rgba(45, 64, 82, 0.06);
}

/* make sure hero gradient has accessible contrast on small screens */
@media (max-width: 640px) {
  section[aria-labelledby="membership-hero-title"] {
    background-image: linear-gradient(
      rgba(13, 18, 23, 0.75),
      rgba(13, 18, 23, 0.6)
    );
  }
}
</style>
