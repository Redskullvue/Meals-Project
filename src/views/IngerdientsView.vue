<template>
  <div class="p-8">
    <h1 class="font-bold text-4xl mb-5">Ingredients</h1>
    <router-link
      :to="{
        name: 'byIngeredient',
        params: { ingeredient: ingeredient.strIngredient },
      }"
      v-for="(ingeredient, index) in ingeredients"
      :key="index"
      class="bg-white block p-3 mb-3 rounded shadow-md"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingeredient.strIngredient }}</h3>
      <p>{{ ingeredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosInstance from "@/axiosClient";

const ingeredients = ref([]);

onMounted(() => {
  axiosInstance.get("list.php?i=list").then((res) => {
    ingeredients.value = res.data.meals;
  });
});
</script>
