<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="w-1/2">
      <div class="flex gap-2 items-center">
        <input
          type="checkbox"
          name="einzelunternehmen"
          v-model="einzelunternehmen"
        />
        <p>Sind Sie Einzelunternehmer?</p>
      </div>
    </div>

    <UiInput
      label="Name des Unternehmens"
      name="unternehmensname"
      :placeholder="
        einzelunternehmen ? 'Max Mustermann Services' : 'Muster GmbH'
      "
      class="w-1/2"
    />
    <UiInput
      label="Geschäftsname"
      name="unternehmensname"
      placeholder="z.B. Salon zur wilden Locke"
      v-if="einzelunternehmen"
      class="w-1/2"
    />
    <UiInput label="Gläubiger ID" name="gläubiger" class="w-1/2" />
    <UiInput label="Steuernummer" name="steuernummer" class="w-1/2" />
    <UiInput label="Umsatzsteuer ID" name="ustid" class="w-1/2" />
    <div class="flex gap-4 w-1/2">
      <UiInput label="Straße" name="straße" class="w-1/2" />
      <UiInput label="Hausnr." name="nr" class="w-1/2" />
    </div>
    <UiInput label="Ort" name="ort" class="w-1/2" />
  </div>
</template>

<script lang="ts" setup>
const einzelunternehmen = ref(false);

const emit = defineEmits(["einzelunternehmer"]);

watch(einzelunternehmen, () => {
  emit("einzelunternehmer", einzelunternehmen.value);
});
</script>

<style></style>
