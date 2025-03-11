<script setup>
import { Field, ErrorMessage } from "vee-validate";

defineProps({
  name: String, // Name des Inputs (muss mit dem Schema übereinstimmen)
  label: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
  as: String,
});
</script>

<template>
  <div class="input">
    <label :for="name" class="input--label">{{ label }}</label>
    <Field
      :id="name"
      :name="name"
      :type="type"
      :as="as"
      :validate-on-blur="true"
      :placeholder="placeholder"
      class="input--field"
    />
    <ErrorMessage :name="name" class="input--error" />
  </div>
</template>

<style lang="css" scoped>
.input {
  @apply flex flex-col;

  &--label {
    @apply text-gray-400 text-sm pl-1;
  }

  &--field {
    @apply border p-2 rounded focus:ring-primary-950 focus:ring-1 outline-none hover:bg-gray-50 placeholder-gray-300;
  }

  &--error {
    @apply text-red-500 text-sm mt-1 pl-1;
  }
}
</style>
