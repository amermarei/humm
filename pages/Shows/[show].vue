<template>
  <div class="container">
    <div class="my-4">
      <img
        :src="`https://board.humm.world/assets/${Show.translations[0].cover.id}?fit=cover&width=1350&height=450&quality=80`"
        class="w-100"
        :alt="Show.translations[0].title"
      />
    </div>
    <h2 class="fw-bold text-center h1">{{ Show.translations[0].title }}</h2>
    <h5 class="text-center">{{ Show.translations[0].description }}</h5>
    <p class="text-center mt-3">
      <Icon name="ic:baseline-access-time" size="24px" />
      الحلقات {{ Show.all_episodes.length }}
    </p>
    <div class="row g-4 mt-4 mb-5">
      <div class="col-6" v-for="(show, i) in Show.all_episodes" :key="i">
        <div class="cardFood d-flex align-items-center">
          <EpisodesItems :show="show" />
        </div>
      </div>
    </div>
    <span
      class="appBtn"
      @click="increaseEpisodies"
      v-if="Show.all_episodes.length >= variables.limit"
      >عرض المزيد</span
    >
    <Advertise
      :src="`${posters.translations[0].wide_cover.id}?fit=cover&width=1364&height=372&quality=80`"
      :title="posters.translations[0].wide_title"
      :url="posters.translations[0].wide_url"
    />
  </div>
</template>

<script setup>
import EpisodesItems from "../../components/Shows/episodesItems.vue";
import Advertise from "../../components/Advertise/Advertise.vue";
import { GetPosters, singleShow } from "../../graph/queries";
definePageMeta({
  pageTransition: false,
  layoutTransition: false,
});
const Show = ref({});
const posters = ref([]);
const { show } = useRoute().params;
const variables = {
  lang: "ar-EG",
  slug: show,
  limit: 6,
  offset: 0,
  type: "episode",
};
const variables2 = {
  lang: "ar-EG",
};
const { data: shows } = await useAsyncQuery(singleShow, variables);
Show.value = shows.value.shows[0];
const { data: poster } = await useAsyncQuery(GetPosters, variables2);
posters.value = poster.value.posters;
const increaseEpisodies = async () => {
  variables.limit += 6;
  const { data: shows } = await useAsyncQuery(singleShow, variables);
  Show.value = shows.value.shows[0];
};
</script>

<style scoped lang="scss">
.appBtn {
  margin: 25px auto;
  text-align: center;
  display: block;
  width: fit-content;
}
</style>
