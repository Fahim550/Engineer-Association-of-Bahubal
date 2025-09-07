<script setup>
import { Calendar, Linkedin, Mail } from "lucide-vue-next";
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  member: { type: Object, required: true },
  show: { type: Boolean, default: false },
});

const emit = defineEmits(["close"]);
</script>

<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 relative">
        <!-- Close button -->
        <button
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          @click="emit('close')"
        >
          ✕
        </button>

        <!-- Header -->
        <h2 class="text-2xl font-bold text-primary mb-4">
          {{ member.name }}
        </h2>

        <div class="grid gap-6">
          <!-- Top Info -->
          <div class="flex items-center gap-4">
            <img
              :src="member.image"
              :alt="`${member.name} - ${member.title}`"
              class="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
            />
            <div>
              <h3 class="text-xl font-semibold text-primary">
                {{ member.title }}
              </h3>
              <p v-if="member.department" class="text-muted-foreground">
                {{ member.department }}
              </p>
              <span
                class="inline-block text-xs mt-1 px-3 py-1 rounded-full"
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
            </div>
          </div>

          <!-- Bio -->
          <div v-if="member.bio">
            <h4 class="font-semibold text-primary mb-2">Biography</h4>
            <p class="text-muted-foreground">{{ member.bio }}</p>
          </div>

          <!-- Info -->
          <div class="grid gap-3">
            <div class="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar class="h-4 w-4" />
              <span>
                Joined:
                {{
                  new Date(member.joinDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}
              </span>
            </div>

            <div v-if="member.email" class="flex items-center gap-2 text-sm">
              <Mail class="h-4 w-4 text-muted-foreground" />
              <a
                :href="`mailto:${member.email}`"
                class="text-primary hover:underline"
              >
                {{ member.email }}
              </a>
            </div>

            <div v-if="member.linkedin" class="flex items-center gap-2 text-sm">
              <Linkedin class="h-4 w-4 text-muted-foreground" />
              <a
                :href="member.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
