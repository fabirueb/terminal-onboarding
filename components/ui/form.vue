<script setup>
import { Form } from "vee-validate";

defineProps({
  schema: Object, // Erwartet ein Zod-Schema
  as: String,
});
</script>

<template>
  <Form
    :validation-schema="schema"
    :as="as"
    v-slot="{ meta, values }"
    keep-values
  >
    <slot :meta="meta" :values="values" />
  </Form>
</template>
