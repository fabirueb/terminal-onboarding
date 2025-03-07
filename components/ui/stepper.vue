<script lang="ts" setup>
import { computed } from "vue";

// Step type definition
type Step = {
  title: string;
  icon?: string;
  description: string;
};

// Props definition
const props = defineProps({
  steps: { type: Array as PropType<Step[]>, required: true },
  currentStep: { type: Number, default: 0 },
});

// Function to check if a step is active
const isActive = (index: number) => computed(() => index === props.currentStep);
</script>

<template>
  <div class="stepper">
    <div v-for="(step, index) in steps" :key="index" class="stepper--step">
      <div
        class="stepper--indicator"
        :class="{ active: isActive(index).value }"
      >
        <Icon
          class="stepper--icon"
          v-if="step.icon"
          :name="step.icon"
          :class="{ active: isActive(index).value }"
        />
        <span v-else class="stepper-number">{{ index + 1 }}</span>
      </div>
      <span class="stepper--label" :class="{ active: isActive(index).value }">{{
        step.title
      }}</span>
      <p class="stepper--description">{{ step.description }}</p>

      <!-- Horizontal separator line after each step -->
      <div v-if="index < steps.length - 1" class="step-separator"></div>
    </div>
  </div>
</template>

<style scoped>
.stepper {
  @apply flex justify-between w-full;

  &--step {
    @apply flex flex-col items-center  h-56 w-72 gap-4;
  }

  &--label {
    @apply text-lg mt-1 text-primary-950;
  }

  &--label.active {
    @apply text-lg mt-1 text-primary-700;
  }

  &--indicator {
    @apply p-4 flex items-center justify-center rounded-full border border-primary-950 hover:bg-primary-100;
  }

  &--indicator.active {
    @apply bg-primary-700 border-primary-400;
  }

  &--icon {
    @apply text-xl text-primary-950;
  }

  &--icon.active {
    @apply text-xl text-white;
  }

  &--description {
    @apply text-sm text-gray-700 text-center;
  }
}
</style>
