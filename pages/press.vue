<template>
  <div class="container my-5">
    <h1 class="fs-2xl mb-5">الصحافة</h1>
    <div class="row g-4">
      <div
        class="col-md-4 col-sm-6 mt-col"
        v-for="(press, i) of presses"
        :key="i"
      >
        <pressItems :press="press" />
      </div>
    </div>
    <span class="appBtn" @click="increasePress">عرض المزيد</span>
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
import pressItems from "../components/Press/pressItems.vue";
import { Articles, GetPosters } from "../graph/queries";
useHead({
  title: " همم - الصحافة",
  meta: [
    {
      name: "description",
      content: "همم هو عالم لكل ما يتعلق بالطعام ونمط الحياة.",
    },
  ],
});
const presses = ref([]);
const posters = ref([]);
const variables = {
  limit: 6,
  lang: "ar-EG",
  type: "press",
  $Offset2: 0,
};
const { data } = await useAsyncQuery(Articles, variables);
presses.value = data.value.Article;
const { data: poster } = await useAsyncQuery(GetPosters, {
  lang: "ar-EG",
});
posters.value = poster.value.posters;
const increasePress = async () => {
  variables.limit += 6;
  const { data } = await useAsyncQuery(Articles, variables);
  presses.value = data.value.Article;
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
