<template>
  <div class="onboarding">
    <div class="onboarding--header">
      <UiStepper :steps="onboardingSteps" :current-step="currentStep">
      </UiStepper>
    </div>
    <div class="onboarding--content">
      <UiForm as="" v-slot="{ meta }">
        <StepPersonal v-if="currentStep === 0" />
        <StepCompany
          v-if="currentStep === 1"
          :einzelunternehmer="einzelunternehmer"
          @einzelunternehmer="
            (value) => {
              einzelunternehmer = value;
            }
          "
        />
        <StepBank v-if="currentStep === 2" />
        <StepDocuments
          v-if="currentStep === 3"
          :einzelunternehmer="einzelunternehmer"
        />
      </UiForm>
    </div>
    <div class="onboarding--buttons">
      <UiButton
        @click="
          () => {
            currentStep--;
          }
        "
        >zurück</UiButton
      >
      <UiButton
        @click="
          () => {
            currentStep++;
          }
        "
        >weiter</UiButton
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as z from "zod";

const onboardingSteps = [
  {
    title: "Personenbezogene Daten",
    icon: "akar-icons:person",
    description:
      "Geben Sie Ihre persönlichen Daten ein, um sich zu identifizieren. Dazu gehören Name, Geburtsdatum und Kontaktdaten.",
  },
  {
    title: "Unternehmensdaten",
    icon: "mdi:company",
    description:
      "Tragen Sie die wesentlichen Informationen zu Ihrem Unternehmen ein, einschließlich Firmenname, Rechtsform und Geschäftsadresse.",
  },
  {
    title: "Bankdaten",
    icon: "mdi:bank-outline",
    description:
      "Geben Sie hier Ihre Bankdaten an. Dies ist notwendig um alle Zahlungen auf den Geräten richtig abzuwickeln.",
  },
  {
    title: "Dokumente",
    icon: "solar:documents-bold",
    description:
      "Laden Sie die erforderlichen Dokumente hoch, wie z. B. Ihren Handelsregisterauszug oder Ihren Personalausweis, um den Prozess abzuschließen.",
  },
];

const currentStep = ref(0);
const einzelunternehmer = ref(false);

const onboardingSchema = [
  z.object({
    vorname: z.string(),
    nachname: z.string(),
    email: z.string().email(),
    city: z.string(),
  }),
  z.object({
    vorname: z.string(),
    nachname: z.string(),
    email: z.string().email(),
    city: z.string(),
  }),
];
</script>

<style lang="css" scoped>
.onboarding {
  @apply flex flex-col items-center;

  &--header {
    @apply w-4/5;
  }

  &--content {
    @apply min-h-96 w-full p-4 lg:p-12;
  }

  &--buttons {
    @apply flex justify-between w-4/5;
  }
}
</style>
