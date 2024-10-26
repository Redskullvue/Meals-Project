<template>
  <div class="flex gap-2 h-full justify-center mt-2">
    <router-link
      @click="getMeals()"
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="(letter, index) of letters.split('')"
      :key="index"
      >{{ letter }}</router-link
    >
  </div>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-6">
      <MealItem v-for="(meal, index) in meals" :meal="meal" :key="index" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import store from "@/store";
import MealItem from "@/components/MealItem.vue";
import { useRoute } from "vue-router";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const route = useRoute();

const meals = computed(() => store.state.mealsByLetter);

const getMeals = () => {
  store.dispatch("searchByLetter", route.params.letter);
};

watch(route, () => {
  getMeals();
});
</script>
