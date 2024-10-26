import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import MealsByNameView from "@/views/MealsByNameView.vue";
import MealsByLetterView from "@/views/MealsByLetterView.vue";
import MealsByIngredientsView from "@/views/MealsByIngredientsView.vue";
import IngerdientsView from "@/views/IngerdientsView.vue";
import MealDetailsView from "@/views/MealDetailsView.vue";
import DefaultLayout from "@/components/DefaultLayout.vue";
import GuestLayout from "@/components/GuestLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByNameView,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetterView,
      },
      {
        path: "/ingeredient",
        name: "Ingeredient",
        component: IngerdientsView,
      },
      {
        path: "/by-ingeredient/:ingeredient?",
        name: "byIngeredient",
        component: MealsByIngredientsView,
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: MealDetailsView,
      },
    ],
  },
  {
    path: "/auth",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
