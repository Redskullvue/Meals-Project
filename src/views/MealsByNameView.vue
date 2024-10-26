<template>
  <div class="p-6">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full py-3"
      placeholder="Search for meals"
      @change="searchMealsByName"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-6">
    <MealItem v-for="(meal, index) in meals" :meal="meal" :key="index" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "@/store";
import { useRoute } from "vue-router";
import YoutubeBtn from "@/components/YoutubeBtn.vue";
import MealItem from "@/components/MealItem.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMealsByName() {
  store.dispatch("searchMeals", keyword.value);
  console.log(meals);
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMealsByName();
  }
});
</script>
