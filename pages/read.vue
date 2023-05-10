<template>
  <div class="container mt-5">
    <h1 class="fs-2xl mb-5">مقالات</h1>
    <div class="row g-4">
      <div class="col-md-6" v-for="(article, i) of articles" :key="i">
        <ArticlesItems :article="article" />
      </div>
    </div>
    <span class="appBtn" @click="increaseArticles">عرض المزيد</span>
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
import ArticlesItems from "../components/Articles/ArticlesItems.vue";
import { Articles, GetPosters } from "../graph/queries";
useHead({
  title: " همم - مقالات",
  meta: [
    {
      name: "description",
      content: "همم هو عالم لكل ما يتعلق بالطعام ونمط الحياة.",
    },
  ],
});
const articles = ref([]);
const posters = ref([]);
const variables = { limit: 6, lang: "ar-EG", type: "read" };
const { data } = await useAsyncQuery(Articles, variables);
articles.value = data.value.Article;
const { data: poster } = await useAsyncQuery(GetPosters, {
  lang: "ar-EG",
});
posters.value = poster.value.posters;
watchEffect(() => {
  console.log(data._rawValue.Article);
});
const increaseArticles = async () => {
  variables.limit += 6;
  const { data } = await useAsyncQuery(Articles, variables);
  articles.value = data.value.Article;
};
</script>

<style scoped>
.appBtn {
  margin: 25px auto;
  text-align: center;
  display: block;
  width: fit-content;
}
</style>
