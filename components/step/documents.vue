<template>
  <div class="flex flex-col gap-4 items-center">
    <UiInput
      label="Personalausweis (Vorderseite)"
      name="persofront"
      type="file"
      class="w-1/2 text-sm"
    />
    <UiInput
      label="Personalausweis (Rückseite)"
      name="persoback"
      type="file"
      class="w-1/2 text-sm"
    />
    <UiInput
      label="Gewerbeanmeldung"
      name="gwa"
      type="file"
      class="w-1/2 text-sm"
    />
    <UiInput
      label="Gesellschafterliste"
      name="persoback"
      type="file"
      class="w-1/2 text-sm"
      v-if="einzelunternehmer"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  einzelunternehmer: Boolean,
});
</script>

<style></style>
