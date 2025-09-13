<template>
  <div class="w-full mx-auto ">
    <!-- Optional Hero (uses bgImg, eyebrow, stats props) -->
    <section
      class="relative overflow-hidden mb-8 rounded-lg py-10 md:pt-15 "
      :style="
        bgImg
          ? `background-image: linear-gradient(to right, rgba(13,18,23,0.55), rgba(13,18,23,0.25)), url(${bgImg}); background-size: cover; background-position: center;`
          : ''
      "
      aria-labelledby="membership-hero-title"
    >
      <div
        v-if="!bgImg"
        class="absolute inset-0 bg-gradient-to-r from-accent/70 via-primary to-gray-900"
      ></div>

      <div class="relative z-10">
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:py-16"
        >

          <h1
            id="membership-hero-title"
            class="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white"
          >
            Join
            <span class="text-secondary">Engineer</span> Association
            <span class="block text-lg font-medium mt-2 sm:mt-0"
              >of Bahubal
            </span>
            <span class="block text-lg font-medium mt-2 sm:mt-0"
              >Grow, learn & connect with local engineers</span
            >
          </h1>

          <p class="mt-2 md:mt-4 text-base sm:text-lg text-white/90 max-w-3xl mx-auto line-clamp-2">
            Become part of a strong professional community in Bahubal Upazila.
            Get mentorship, attend events, and access job opportunities.
          </p>

          <div
            class="mt-4 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4"
          >
            <button
              @click="scrollToForm"
              class="inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-3  rounded-xl text-white font-semibold shadow-lg focus:outline-none focus:ring-4 focus:ring-secondary/30 transition-transform transform hover:-translate-y-0.5"
              style="background-color: var(--color-secondary)"
              aria-label="Apply for membership"
            >
              Apply for Membership
            </button>

            <button
              @click="goToMembershipPage"
              class="inline-flex items-center justify-center px-3 md:px-5 py-1 md:py-3 rounded-xl border-2 border-white/20 text-white font-semibold bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20"
              aria-label="Learn more about membership"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div class="absolute left-0 right-0 bottom-0 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          class="w-full h-12 md:h-16 text-white/10"
        >
          <path
            d="M0,0 C150,60 350,60 600,20 C850,-20 1050,30 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>

    <div class="container mx-auto max-w-4xl px-6">
      <!-- header -->
      <div class="mb-6">
        <RouterLink
          to="membership"
          class="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 mb-3"
        >
          <ArrowLeft class="w-4 h-4 mr-2" /> Back to Membership Types
        </RouterLink>
        <h1 class="text-2xl md:text-3xl font-bold mb-1">
          Membership Application
        </h1>
        <p class="text-sm text-gray-600">
          Complete all steps to submit your EAB membership application
        </p>
      </div>

      <!-- steps indicator -->
      <div class="mb-6">
        <div class="flex items-center justify-between">
          <template v-for="(s, idx) in steps" :key="s.id">
            <div class="flex items-center">
              <div
                :class="[
                  'flex items-center justify-center w-10 h-10 rounded-full border-2',
                  currentStep >= s.id
                    ? 'bg-primary border-primary text-white'
                    : 'border-gray-300 text-gray-500',
                ]"
              >
                <template v-if="currentStep > s.id">
                  <CheckCircle class="w-5 h-5" />
                </template>
                <template v-else>
                  <component :is="s.icon" class="w-5 h-5" />
                </template>
              </div>

              <div class="ml-3 hidden sm:block">
                <p
                  :class="
                    currentStep >= s.id ? 'text-gray-900' : 'text-gray-500'
                  "
                  class="text-sm font-medium"
                >
                  {{ s.title }}
                </p>
                <p class="text-xs text-gray-400">{{ s.description }}</p>
              </div>

              <div
                v-if="idx < steps.length - 1"
                class="hidden sm:block w-16 h-0.5 ml-4"
                :class="currentStep > s.id ? 'bg-primary' : 'bg-gray-200'"
              ></div>
            </div>
          </template>
        </div>
      </div>

      <!-- form container -->
      <div id="membership-form" class="bg-white shadow rounded-lg p-6">
        <!-- Step 1 -->
        <div v-if="currentStep === 1" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1">First Name *</label>
              <input
                v-model="form.firstName"
                class="w-full border rounded px-3 py-2"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Last Name *</label>
              <input
                v-model="form.lastName"
                class="w-full border rounded px-3 py-2"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1">Email *</label>
              <input
                v-model="form.email"
                type="email"
                class="w-full border rounded px-3 py-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Phone *</label>
              <input
                v-model="form.phone"
                class="w-full border rounded px-3 py-2"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1"
                >Date of Birth *</label
              >
              <input
                v-model="form.dateOfBirth"
                type="date"
                class="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Gender *</label>
              <select
                v-model="form.gender"
                class="w-full border rounded px-3 py-2"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Address *</label>
            <textarea
              v-model="form.address"
              rows="3"
              class="w-full border rounded px-3 py-2"
              placeholder="Enter your complete address"
            ></textarea>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1">City *</label>
              <input
                v-model="form.city"
                class="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">District *</label>
              <input
                v-model="form.district"
                class="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div v-else-if="currentStep === 2" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1"
                >Highest Degree *</label
              >
              <select
                v-model="form.highestDegree"
                class="w-full border rounded px-3 py-2"
              >
                <option value="">Select degree</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1"
                >Engineering Discipline *</label
              >
              <select
                v-model="form.engineeringDiscipline"
                class="w-full border rounded px-3 py-2"
              >
                <option value="">Select discipline</option>
                <option value="civil">Civil</option>
                <option value="mechanical">Mechanical</option>
                <option value="electrical">Electrical</option>
                <option value="computer">Computer</option>
                <option value="chemical">Chemical</option>
                <option value="industrial">Industrial</option>
                <option value="aerospace">Aerospace</option>
                <option value="environmental">Environmental</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1"
                >Institution *</label
              >
              <input
                v-model="form.institution"
                class="w-full border rounded px-3 py-2"
                placeholder="Enter institution name"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1"
                >Graduation Year *</label
              >
              <input
                v-model="form.graduationYear"
                class="w-full border rounded px-3 py-2"
                placeholder="e.g., 2020"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1"
                >Employment Status *</label
              >
              <select
                v-model="form.employmentStatus"
                class="w-full border rounded px-3 py-2"
              >
                <option value="">Select status</option>
                <option value="student">Student</option>
                <option value="employed">Employed</option>
                <option value="self-employed">Self-employed</option>
                <option value="unemployed">Unemployed</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1"
                >Work Experience *</label
              >
              <input
                v-model="form.workExperience"
                class="w-full border rounded px-3 py-2"
                placeholder="e.g., 3 years"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1"
                >Current Position</label
              >
              <input
                v-model="form.currentPosition"
                class="w-full border rounded px-3 py-2"
                placeholder="Enter your current position"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1"
                >Current Company</label
              >
              <input
                v-model="form.currentCompany"
                class="w-full border rounded px-3 py-2"
                placeholder="Enter your current company"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1"
              >Area of Specialization</label
            >
            <input
              v-model="form.specialization"
              class="w-full border rounded px-3 py-2"
              placeholder="e.g., Structural Design"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1"
              >Why do you want to join EAB? *</label
            >
            <textarea
              v-model="form.whyJoin"
              rows="4"
              class="w-full border rounded px-3 py-2"
              placeholder="Please explain (min 50 chars)"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1"
              >Referred by (optional)</label
            >
            <input
              v-model="form.referredBy"
              class="w-full border rounded px-3 py-2"
              placeholder="Name of EAB member who referred you"
            />
          </div>
        </div>

        <!-- Step 3 -->
        <div v-else-if="currentStep === 3" class="space-y-6">
          <div class="text-center mb-4">
            <h3 class="text-lg font-semibold">Upload Required Documents</h3>
            <p class="text-sm text-gray-500">PDF, PNG, JPG up to 5MB</p>
          </div>

          <div class="grid gap-6">
            <template v-for="doc in uploadDocs" :key="doc.key">
              <div class="border rounded-lg p-4 relative">
                <div class="flex items-center justify-between mb-2">
                  <label class="text-sm font-medium">
                    {{ doc.label }}
                    <span v-if="doc.required" class="text-red-600">*</span>
                  </label>
                  <div v-if="uploadedFiles[doc.key]">
                    <button
                      type="button"
                      @click="removeFile(doc.key)"
                      class="text-red-600 hover:text-red-700 inline-flex items-center"
                    >
                      <X class="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div
                  v-if="uploadedFiles[doc.key]"
                  class="flex items-center space-x-2 text-sm text-gray-700"
                >
                  <CheckCircle class="w-4 h-4 text-green-500" />
                  <div>
                    <div>{{ uploadedFiles[doc.key].name }}</div>
                    <div class="text-xs text-gray-400">
                      {{
                        (uploadedFiles[doc.key].size / 1024 / 1024).toFixed(2)
                      }}
                      MB
                    </div>
                  </div>
                </div>

                <div
                  v-else
                  class="border-2 border-dashed rounded p-4 text-center relative"
                >
                  <div class="mb-2">
                    <Upload class="w-8 h-8 mx-auto text-gray-400" />
                  </div>
                  <div class="text-sm text-gray-500 mb-2">
                    Click to upload or drag and drop
                  </div>
                  <input
                    @change="(e) => handleFileUpload(e, doc.key)"
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </template>
          </div>

          <div class="bg-gray-50 rounded p-4 text-sm text-gray-600">
            <strong>Document Guidelines:</strong>
            <ul class="list-disc pl-5 mt-2">
              <li>All documents must be clear and readable</li>
              <li>Accepted formats: PDF, PNG, JPG, JPEG</li>
              <li>Maximum file size: 5MB per document</li>
              <li>Ensure all text and details are visible</li>
            </ul>
          </div>
        </div>

        <!-- Step 4: Review -->
        <div v-else-if="currentStep === 4" class="space-y-6">
          <div class="text-center">
            <h3 class="text-lg font-semibold">Review Your Application</h3>
            <p class="text-sm text-gray-500">
              Please review all information before submitting
            </p>
          </div>

          <div class="space-y-4">
            <div class="border rounded p-4">
              <div class="font-medium mb-2 flex items-center">
                <User class="w-4 h-4 mr-2" /> Personal Information
              </div>
              <div class="grid md:grid-cols-2 gap-2 text-sm">
                <div>
                  <strong>Name:</strong> {{ form.firstName }}
                  {{ form.lastName }}
                </div>
                <div><strong>Email:</strong> {{ form.email }}</div>
                <div><strong>Phone:</strong> {{ form.phone }}</div>
                <div>
                  <strong>Date of Birth:</strong>
                  {{
                    form.dateOfBirth
                      ? format(new Date(form.dateOfBirth), "PPP")
                      : ""
                  }}
                </div>
                <div><strong>Gender:</strong> {{ form.gender }}</div>
                <div>
                  <strong>Location:</strong> {{ form.city }},
                  {{ form.district }}
                </div>
              </div>
            </div>

            <div class="border rounded p-4">
              <div class="font-medium mb-2 flex items-center">
                <GraduationCap class="w-4 h-4 mr-2" /> Education & Career
              </div>
              <div class="grid md:grid-cols-2 gap-2 text-sm">
                <div><strong>Degree:</strong> {{ form.highestDegree }}</div>
                <div>
                  <strong>Discipline:</strong> {{ form.engineeringDiscipline }}
                </div>
                <div><strong>Institution:</strong> {{ form.institution }}</div>
                <div>
                  <strong>Graduation Year:</strong> {{ form.graduationYear }}
                </div>
                <div>
                  <strong>Employment Status:</strong>
                  {{ form.employmentStatus }}
                </div>
                <div>
                  <strong>Experience:</strong> {{ form.workExperience }}
                </div>
                <div v-if="form.currentPosition">
                  <strong>Position:</strong> {{ form.currentPosition }}
                </div>
                <div v-if="form.currentCompany">
                  <strong>Company:</strong> {{ form.currentCompany }}
                </div>
              </div>
            </div>

            <div class="border rounded p-4">
              <div class="font-medium mb-2 flex items-center">
                <FileText class="w-4 h-4 mr-2" /> Uploaded Documents
              </div>
              <div class="grid md:grid-cols-2 gap-2 text-sm">
                <div
                  v-for="(f, key) in uploadedFiles"
                  :key="key"
                  class="flex items-center space-x-2"
                >
                  <CheckCircle class="w-4 h-4 text-green-500" />
                  <div>{{ f.name }}</div>
                </div>
                <div
                  v-if="Object.keys(uploadedFiles).length === 0"
                  class="text-gray-400"
                >
                  No files uploaded
                </div>
              </div>
            </div>

            <div class="border rounded p-4">
              <div class="font-medium mb-2">Membership Type & Fee</div>
              <div class="flex justify-between items-center">
                <div class="text-sm font-medium">
                  {{
                    form.membershipType === "student"
                      ? "Student Membership"
                      : form.membershipType === "professional"
                      ? "Professional Membership"
                      : "Lifetime Membership"
                  }}
                </div>
                <div class="text-lg font-bold text-primary">
                  {{
                    form.membershipType === "student"
                      ? "BDT 500/year"
                      : form.membershipType === "professional"
                      ? "BDT 1,500/year"
                      : "BDT 15,000"
                  }}
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded p-3 text-sm">
              <strong>Next Steps:</strong>
              <ul class="list-disc pl-5">
                <li>
                  Your application will be reviewed within 5-7 business days
                </li>
                <li>
                  You will receive an email confirmation with payment
                  instructions
                </li>
                <li>
                  Upon approval, you'll get immediate access to member benefits
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- nav buttons -->
        <div class="flex justify-between mt-6">
          <button
            @click="prevStep"
            :disabled="currentStep === 1"
            class="inline-flex items-center gap-2 px-4 py-2 border rounded bg-white"
          >
            <ArrowLeft class="w-4 h-4" /> Previous
          </button>

          <div>
            <button
              v-if="currentStep < 4"
              @click="nextStep"
              class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded"
            >
              Next <ArrowRight class="w-4 h-4" />
            </button>

            <button
              v-else
              @click="submitForm"
              :disabled="isSubmitting"
              class="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded"
            >
              <span v-if="isSubmitting">Submitting...</span>
              <span v-else>Submit Application</span>
              <CheckCircle class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { format } from "date-fns";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  FileText,
  GraduationCap,
  Upload,
  User,
  X,
} from "lucide-vue-next";
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { z } from "zod";

// props & emits
const props = defineProps({
  selectedMembership: { type: String, default: "student" },
  stats: {
    type: Object,
    default: () => ({ members: 500, years: 15, events: 100 }),
  },
  bgImg: { type: String, default: "" },
  eyebrow: { type: String, default: "Membership" },
});
const emit = defineEmits(["back", "submitted"]);

const router = useRouter();

// zod schema
const membershipSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dateOfBirth: z.preprocess((val) => {
    if (typeof val === "string" && val.length) return new Date(val);
    if (val instanceof Date) return val;
    return val;
  }, z.date()),
  gender: z.string().min(1, "Please select your gender"),
  address: z.string().min(10, "Please provide your complete address"),
  city: z.string().min(2, "City is required"),
  district: z.string().min(2, "District is required"),
  highestDegree: z.string().min(1, "Please select your highest degree"),
  institution: z.string().min(2, "Institution name is required"),
  graduationYear: z.string().min(4, "Graduation year is required"),
  engineeringDiscipline: z
    .string()
    .min(1, "Please select your engineering discipline"),
  employmentStatus: z.string().min(1, "Please select your employment status"),
  currentPosition: z.string().optional(),
  currentCompany: z.string().optional(),
  workExperience: z.string().min(1, "Please specify your work experience"),
  specialization: z.string().optional(),
  membershipType: z.string().min(1, "Please select membership type"),
  referredBy: z.string().optional(),
  whyJoin: z
    .string()
    .min(
      50,
      "Please provide at least 50 characters explaining why you want to join"
    ),
});

// steps
const steps = [
  {
    id: 1,
    title: "Personal Info",
    icon: User,
    description: "Basic personal information",
  },
  {
    id: 2,
    title: "Education & Career",
    icon: GraduationCap,
    description: "Educational and professional background",
  },
  {
    id: 3,
    title: "Documents",
    icon: FileText,
    description: "Upload required documents",
  },
  {
    id: 4,
    title: "Review",
    icon: CheckCircle,
    description: "Review and submit application",
  },
];

// reactive form
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  city: "",
  district: "",
  highestDegree: "",
  institution: "",
  graduationYear: "",
  engineeringDiscipline: "",
  employmentStatus: "",
  currentPosition: "",
  currentCompany: "",
  workExperience: "",
  specialization: "",
  membershipType: props.selectedMembership || "student",
  referredBy: "",
  whyJoin: "",
});

const currentStep = ref(1);
const uploadedFiles = reactive({}); // use reactive object for template unwrap
const isSubmitting = ref(false);

// upload docs list
const uploadDocs = [
  { key: "photo", label: "Passport Size Photo", required: true },
  { key: "degree", label: "Educational Certificate", required: true },
  { key: "transcript", label: "Academic Transcript", required: true },
  { key: "cv", label: "CV/Resume", required: true },
  { key: "experience", label: "Experience Certificate", required: false },
  { key: "nid", label: "National ID Card", required: true },
];

function getPickObjForFields(fields) {
  const obj = {};
  fields.forEach((f) => (obj[f] = true));
  return obj;
}

async function validateFields(fields) {
  const partial = {};
  fields.forEach((f) => {
    partial[f] = form[f];
  });
  const pickObj = getPickObjForFields(fields);
  const partialSchema = membershipSchema.pick(pickObj);
  return partialSchema.safeParse(partial);
}

function getFieldsForStep(step) {
  switch (step) {
    case 1:
      return [
        "firstName",
        "lastName",
        "email",
        "phone",
        "dateOfBirth",
        "gender",
        "address",
        "city",
        "district",
      ];
    case 2:
      return [
        "highestDegree",
        "institution",
        "graduationYear",
        "engineeringDiscipline",
        "employmentStatus",
        "workExperience",
        "whyJoin",
      ];
    default:
      return [];
  }
}

async function nextStep() {
  const fields = getFieldsForStep(currentStep.value);
  if (fields.length) {
    const res = await validateFields(fields);
    if (!res.success) {
      const first = res.error.issues[0];
      window.alert(first.message || "Validation error");
      return;
    }
  }
  currentStep.value = Math.min(currentStep.value + 1, 4);
}

function prevStep() {
  currentStep.value = Math.max(currentStep.value - 1, 1);
}

function handleFileUpload(event, key) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const max = 5 * 1024 * 1024;
  if (file.size > max) {
    window.alert("File too large. Max 5MB");
    return;
  }
  uploadedFiles[key] = file;
}

function removeFile(key) {
  delete uploadedFiles[key];
}

async function submitForm() {
  const res = membershipSchema.safeParse(form);
  if (!res.success) {
    const first = res.error.issues[0];
    window.alert(first.message || "Validation error");
    return;
  }

  // required docs check
  const requiredDocs = ["photo", "degree", "transcript", "cv", "nid"];
  for (const k of requiredDocs) {
    if (!uploadedFiles[k]) {
      window.alert(`Please upload ${k}`);
      return;
    }
  }

  isSubmitting.value = true;

  // TODO: replace simulated submission with real API call / serverless function
  setTimeout(() => {
    const applicationId = `EAB-${Date.now()}`;
    window.alert(`Application submitted! ID: ${applicationId}`);
    isSubmitting.value = false;
    emit("submitted", applicationId);
    emit("back");
  }, 1500);
}

const reviewData = computed(() => ({ ...form }));

function scrollToForm() {
  const el = document.getElementById("membership-form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function goToMembershipPage() {
  // Try to navigate to a named route if available; if already there, just scroll.
  try {
    router.push({ name: "MembershipRegistration" }).catch(() => {});
  } catch (e) {
    // fallback: scroll to form
    scrollToForm();
  }
}
</script>

<style scoped>

</style>
