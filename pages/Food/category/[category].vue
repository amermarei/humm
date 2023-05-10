<template>
  <div class="container">
    <div class="my-5">
      <img
        :src="`https://board.humm.world/assets/${Category.cover.id}`"
        :alt="title"
        class="w-100"
      />
    </div>
    <h2 class="h1 text-center my-4">{{ Category.title }}</h2>
    <div class="row g-4 my-4">
      <div
        class="col-lg-3 col-md-6 col-sm-6 mt-col"
        v-for="(recipe, i) of recipes"
        :key="i"
      >
        <RecipesItems :recipe="recipe" />
      </div>
    </div>
    <div class="my-5">
      <Advertise
        :src="`${posters.translations[0].wide_cover.id}?fit=cover&width=1364&height=372&quality=80`"
        :title="posters.translations[0].wide_title"
        :url="posters.translations[0].wide_url"
      />
    </div>
  </div>
</template>

<script setup>
import { singleCategory, GetPosters } from "../../../graph/queries";
import RecipeItems from "../../../components/Recipes/RecipesItems";
import Advertise from "../../../components/Advertise/Advertise.vue";
definePageMeta({
  pageTransition: false,
  layoutTransition: false,
});
useHead({
  title: "test title",
  meta: [{ name: "description", content: "test meta" }],
});
const { category } = useRoute().params;
const posters = ref([]);
const variables = {
  lang: "ar-EG",
  slug: category,
  limit: 8,
  offset: 0,
  type: "food",
};
const variables2 = {
  lang: "ar-EG",
};
const { data } = await useAsyncQuery(singleCategory, variables);
const Category = computed(() => data.value.category[0].translations[0]);
const recipes = computed(() => data.value.category[0].articles);
const { data: poster } = await useAsyncQuery(GetPosters, variables2);
posters.value = poster.value.posters;
</script>

<style scoped></style>
