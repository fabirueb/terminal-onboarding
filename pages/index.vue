<template>
  <div class="starter">
    <UiHeadline class="text-center">Ihr digitales Onboarding</UiHeadline>
    <p class="text-center text-xs lg:text-sm w-2/3">
      Der Kauf eines EC-Terminals sollte so einfach und effizient sein wie das
      Bezahlen mit einer Karte. Unser digitales Onboarding führt Sie Schritt für
      Schritt durch den gesamten Prozess – von der Auswahl des passenden Geräts
      bis zur Inbetriebnahme. Egal, ob Sie ein kleines Geschäft betreiben oder
      ein größeres Unternehmen führen, wir helfen Ihnen dabei, die beste Lösung
      für Ihre Zahlungsabwicklung zu finden. Starten Sie jetzt und erleben Sie,
      wie unkompliziert modernes Bezahlen sein kann!
    </p>
    <UiButton @click="navigateTo('onboarding')">Weiter zum Onboarding</UiButton>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped>
.starter {
  @apply flex flex-col items-center gap-12 justify-center;
}
</style>
