<template>
  <div class="w-full flex items-center justify-center flex-col">
    <h1 class="text-5xl font-bold mb-5 mt-10">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 py-2 text-lg">
      <div>
        <strong class="font-bold">Category</strong> : {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area</strong> : {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags</strong> : {{ meal.strTags }}</div>
    </div>

    <div class="my-2 w-[70%] md:w-[50%]">
      Meal Instructions : {{ meal.strInstructions }}
    </div>

    <div class="flex items-center justify-around w-[80%]">
      <div>
        <h2 class="text-2xl font-semibold mb-3">ingeredients</h2>
        <ul>
          <li v-for="i in 20" :key="i">
            {{ meal[`strIngredient${i}`] }}
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <li v-for="i in 20" :key="i">
            {{ meal[`strMeasure${i}`] }}
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <youtube-btn :href="meal.strYoutube">Go To Youtube</youtube-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosInstance from "@/axiosClient";
import YoutubeBtn from "@/components/YoutubeBtn.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosInstance.get(`lookup.php?i=${route.params.id}`).then((res) => {
    meal.value = res.data.meals[0] || {};
  });
});
</script>
