<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="flex flex-col lg:flex-row gap-4 w-full lg:w-1/2">
      <UiInput label="Vorname" name="vorname" class="w-full lg:w-1/2" />
      <UiInput label="Nachname" name="nachname" class="w-full lg:w-1/2" />
    </div>
    <UiInput label="E-Mail" name="email" class="w-full lg:w-1/2" />
    <UiInput label="Telefonnr." name="telefon" class="w-full lg:w-1/2" />

    <div class="flex gap-4 w-full lg:w-1/2">
      <UiInput label="Straße" name="straße" class="w-3/5 lg:w-1/2" />
      <UiInput label="Hausnr." name="nr" class="w-1/5 lg:w-1/2" />
    </div>
    <UiInput label="Ort" name="ort" class="w-full lg:w-1/2" />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
