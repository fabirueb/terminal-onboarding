<template>
  <div class="flex flex-col gap-4 items-center">
    <UiInput
      label="Name des Kontoinhabers"
      name="kontoinhaber"
      class="w-full lg:w-1/2"
    />
    <UiInput label="IBAN" name="iban" class="w-full lg:w-1/2" />
    <UiInput label="BIC" name="bic" class="w-full lg:w-1/2" />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
