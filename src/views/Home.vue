<template>
  <div class="flex flex-col items-center justify-center p-8"></div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosInstance from "@/axiosClient";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

onMounted(async () => {
  const response = await axiosInstance.get("/list.php?i=list");
  console.log(response.data);
});
</script>
