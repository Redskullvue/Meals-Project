<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-6">
      <MealItem v-for="(meal, index) in meals" :meal="meal" :key="index" />
    </div>
    <div v-if="!meals" class="w-full flex justify-center text-gray-600">
      There are no meals
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import store from "@/store";
import MealItem from "@/components/MealItem.vue";
import { useRoute } from "vue-router";
const route = useRoute();

const meals = computed(() => store.state.mealsByIngerdient);

const getMeals = () => {
  store.dispatch("searchByIngredient", route.params.ingeredient);
};

watch(route, () => {
  getMeals();
});

onMounted(() => {
  getMeals();
});
</script>
