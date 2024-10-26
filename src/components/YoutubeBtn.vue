<template>
  <a
    :href="href"
    class="px-3 py-2 rounded-lg border- border-red-600 bg-red-500 text-white transition-colors duration-300 hover:bg-red-600"
    traget="_blank"
  >
    <slot>Youtube</slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
