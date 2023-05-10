<template>
  <div class="row g-3">
    <div class="col-md-6" v-for="(article, i) of articles" :key="i">
      <ArticlesItems :article="article" />
    </div>
  </div>
</template>

<script setup>
import ArticlesItems from "../Articles/ArticlesItems.vue";
import { Articles } from "../../graph/queries";
const variables = { limit: 2, lang: "ar-EG", type: "read" };
const { data } = await useAsyncQuery(Articles, variables);
const articles = computed(() => data.value.Article);
watchEffect(() => {
  console.log(data._rawValue.Article);
});
</script>

<style scoped></style>
