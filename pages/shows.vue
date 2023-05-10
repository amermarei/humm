<template>
  <div class="mt-5">
    <div class="container">
      <h1 class="fs-2xl mb-5">برامج</h1>
      <div class="row g-4">
        <div class="col-md-6" v-for="(show, i) of shows" :key="i">
          <div class="cardFood">
            <ShowsItems :show="show" />
          </div>
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
  </div>
</template>

<script setup>
import ShowsItems from "../components/Shows/ShowsItems.vue";
import { GetAllShows, GetPosters } from "../graph/queries";
useHead({
  title: "هم - برامج",
  meta: [
    {
      name: "description",
      content: "همم هو عالم لكل ما يتعلق بالطعام ونمط الحياة.",
    },
  ],
});
const shows = ref([]);
const posters = ref([]);
const variables = {
  offset: 0,
  limit: 6,
  lang: "ar-EG",
};
const { data } = await useAsyncQuery(GetAllShows, variables);
shows.value = data.value.shows;
const { data: poster } = await useAsyncQuery(GetPosters, {
  lang: "ar-EG",
});
posters.value = poster.value.posters;
</script>

<style scoped lang="scss">
.cardFood {
  padding: calc(0.975rem + 0.84706vw);
}
</style>
