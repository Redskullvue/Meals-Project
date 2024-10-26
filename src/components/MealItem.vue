<template>
  <div class="bg-white shadow-md rounded-xl min-h-[340px]">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-56 w-full object-cover"
      />
    </router-link>

    <div class="px-3">
      <h3 class="font-semibold">{{ meal.strMeal }}</h3>
      <p class="mb-4">Lorem ipsum dolor sit amet consectet</p>
      <div>
        <youtube-btn :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>
<script setup>
import YoutubeBtn from "./YoutubeBtn.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
