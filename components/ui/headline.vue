<script setup>
const props = defineProps({
  level: String,
  big: Boolean,
});

const validLevels = ["h1", "h2", "h3"];
const tag = computed(() =>
  validLevels.includes(props.level) ? props.level : "h1"
);
</script>

<template>
  <component
    :is="tag"
    class="text-primary-950 font-bold ui-headline"
    :class="[
      $attrs.class,
      props.big
        ? { h1: 'text-8xl', h2: 'text-7xl', h3: 'text-5xl' }[tag]
        : { h1: 'text-5xl', h2: 'text-3xl', h3: 'text-2xl' }[tag],
    ]"
  >
    <slot />
  </component>
</template>
