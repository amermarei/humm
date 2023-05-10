<template>
  <div class="container my-5">
    <h1 class="fs-2xl mb-5">وصفات</h1>
    <div class="row g-4">
      <div
        class="col-lg-3 col-md-6 col-sm-6 mt-col"
        v-for="(recipe, i) of recipes"
        :key="i"
      >
        <RecipesItems :recipe="recipe" :loading="loading" />
      </div>
    </div>
    <span class="appBtn" @click="increaseRecipes">عرض المزيد</span>
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
import RecipesItems from "../components/Recipes/RecipesItems.vue";
import { Articles, GetPosters } from "../graph/queries";
useHead({
  title: " همم - وصفات",
  meta: [
    {
      name: "description",
      content: "همم هو عالم لكل ما يتعلق بالطعام ونمط الحياة.",
    },
  ],
});
const recipeLimit = ref(8);
const recipes = ref([]);
const posters = ref([]);
const variables = { limit: 8, lang: "ar-EG", type: "food" };
const { data } = await useAsyncQuery(Articles, variables);
recipes.value = data.value.Article;
const { data: poster } = await useAsyncQuery(GetPosters, {
  lang: "ar-EG",
});
posters.value = poster.value.posters;
watchEffect(() => {
  console.log(recipeLimit);
});
const increaseRecipes = async () => {
  variables.limit += 8;
  const { data, loading } = await useAsyncQuery(Articles, variables);
  recipes.value = data.value.Article;
};
</script>

<style lang="scss" scoped>
.appBtn {
  margin: 25px auto;
  text-align: center;
  display: block;
  width: fit-content;
}
</style>
