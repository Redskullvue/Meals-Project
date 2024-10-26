<template>
  <header
    class="bg-white shadow-md shadow-gray-400 h-20 flex justify-between items-center"
  >
    <router-link :to="{ name: 'Home' }" class="flex items-center h-full px-5"
      >Home</router-link
    >
    <div class="flex items-center h-full">
      <router-link
        :to="{ name: 'byName' }"
        class="px-2 h-full hover:bg-purple-200 flex items-center transition-colors duration-300"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-2 h-full hover:bg-purple-200 flex items-center transition-colors duration-300"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'Ingeredient' }"
        class="px-2 h-full hover:bg-purple-200 flex items-center transition-colors duration-300"
        >Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>
