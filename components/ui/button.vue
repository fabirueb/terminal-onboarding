<script lang="ts" setup>
const props = defineProps({
  size: { type: String, default: "md" },
  variant: { type: String, default: "standard" },
  type: {
    type: String,
    default: "button",
  },
});

//SIZE
const validSizes = ["sm", "md", "lg"];
const buttonSize = computed<"sm" | "md" | "lg">(() => {
  return validSizes.includes(props.size)
    ? (props.size as "sm" | "md" | "lg")
    : "md";
});

//VARIANT
const validVariants = ["standard", "outline", "ghost"];
const buttonVariant = computed<"standard" | "outline" | "ghost">(() =>
  validVariants.includes(props.variant)
    ? (props.variant as "standard" | "outline" | "ghost")
    : "standard"
);

const sizeClasses = {
  sm: "px-4 py-2 text-sm h-9",
  md: "px-6 py-3 text-base h-12",
  lg: "px-8 py-4 text-lg h-15",
};

const variantClasses: Record<"standard" | "outline" | "ghost", string> = {
  standard: "bg-primary-900 text-white hover:bg-primary-800",
  outline: "border border-primary-900 text-primary-900 hover:bg-primary-50",
  ghost: "text-primary-900 hover:bg-primary-100",
};
</script>

<template>
  <button
    :class="[
      $attrs.class,
      sizeClasses[buttonSize],
      variantClasses[buttonVariant],
      'rounded',
    ]"
    :type="type as 'button' | 'submit' | 'reset' | undefined"
  >
    <slot />
  </button>
</template>

<style scoped>
/* Hier kannst du spezifische Stile hinzufügen, wenn nötig */
</style>
