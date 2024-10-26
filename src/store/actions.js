import axiosInstance from "@/axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosInstance.get(`search.php?s=${keyword}`).then((res) => {
    commit("searchedMeals", res.data.meals);
  });
}

export function searchByLetter({ commit }, letter) {
  axiosInstance.get(`search.php?f=${letter}`).then((res) => {
    commit("searchedMealsByLetter", res.data.meals);
  });
}

export function searchByIngredient({ commit }, keyword) {
  axiosInstance.get(`filter.php?i=${keyword}`).then((res) => {
    commit("searchedMealsByIngredient", res.data.meals);
  });
}
