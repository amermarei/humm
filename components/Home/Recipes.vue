<template>
  <div class="row g-3">
    <div
      class="col-lg-3 col-md-6 col-sm-6 mt-col"
      v-for="(recipe, i) of recipes"
      :key="i"
    >
      <RecipesItems :recipe="recipe" />
    </div>
  </div>
</template>

<script setup>
import RecipesItems from "../Recipes/RecipesItems.vue";
import { Articles } from "../../graph/queries";

const variables = { limit: 8, lang: "ar-EG", type: "food" };
const { data } = await useAsyncQuery(Articles, variables);
const recipes = computed(() => data.value.Article);
</script>

<style scoped></style>
