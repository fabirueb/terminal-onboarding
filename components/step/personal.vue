<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="flex gap-4 w-1/2">
      <UiInput label="Vorname" name="vorname" class="w-1/2" />
      <UiInput label="Nachname" name="nachname" class="w-1/2" />
    </div>
    <UiInput label="E-Mail" name="email" class="w-1/2" />
    <UiInput label="Telefonnr." name="telefon" class="w-1/2" />

    <div class="flex gap-4 w-1/2">
      <UiInput label="Straße" name="straße" class="w-1/2" />
      <UiInput label="Hausnr." name="nr" class="w-1/2" />
    </div>
    <UiInput label="Ort" name="ort" class="w-1/2" />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
