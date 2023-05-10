<template>
  <div class="container">
    <div class="embed-responsive embed-responsive-16by9 my-4">
      <iframe
        class="embed-responsive-item"
        width="100%"
        height="100%"
        :src="`https://www.youtube.com/embed/${episode.video}`"
        :title="episode.translations[0].title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="row gx-5 gy-2 mb-5">
      <div class="col-lg-8">
        <NuxtLink
          :to="`/Shows/${episode.shows.slug}`"
          class="cardFood-category mb-2 d-inline-block xs-font mb-3"
        >
          {{ episode.shows.translations[0].title }}
        </NuxtLink>
        <h1 class="fs-lg mb-4">{{ episode.translations[0].title }}</h1>
        <div v-html="episode.translations[0].content"></div>
        <div class="d-flex justify-content-between align-items-center mt-5">
          <div>
            <span class="mb-1 text-black xs-font">
              <Icon name="ic:baseline-access-time" size="18px" />
              {{ episode.date_created.split("T")[0] }}
            </span>
          </div>
          <div class="social">
            <span
              ><Icon
                name="mingcute:facebook-line"
                size="24px"
                class="ms-3 text-black"
            /></span>
            <span
              ><Icon name="ph:twitter-logo" size="24px" class="ms-3 text-black"
            /></span>
            <span
              ><Icon
                name="akar-icons:whatsapp-fill"
                size="24px"
                class="ms-3 text-black"
            /></span>
            <span
              ><Icon
                name="ic:baseline-mail"
                size="24px"
                class="ms-3 text-black"
            /></span>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="row g-3">
          <div class="col-lg-12 col-6" v-for="i = 0 in 2" :key="i">
            <Advertise
              :src="`${
                i === 1
                  ? posters.translations[0].normal_cover.id
                  : posters.translations[0].normal2_cover.id
              }?fit=cover&width=700&height=500&quality=80`"
              :title="
                i === 1
                  ? posters.translations[0].normal_title
                  : posters.translations[0].normal2_title
              "
              :url="
                i === 1
                  ? posters.translations[0].normal_url
                  : posters.translations[0].normal2_url
              "
            />
          </div>
        </div>
      </div>
    </div>
    <Advertise
      :src="`${posters.translations[0].wide_cover.id}?fit=cover&width=1364&height=372&quality=80`"
      :title="posters.translations[0].wide_title"
      :url="posters.translations[0].wide_url"
    />
    <div class="my-5">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h2 class="h1">أحدث {{ episode.shows.translations[0].title }}</h2>
        <NuxtLink :to="`/Shows/${episode.shows.slug}`" class="appBtn"
          >عرض المزيد
          <Icon
            name="material-symbols:line-start-arrow-notch-rounded"
            size="16px"
            class="me-2"
        /></NuxtLink>
      </div>
      <div class="row g-4 mb-5">
        <div
          class="col-6"
          v-for="(show, i) in episode.shows.all_episodes"
          :key="i"
        >
          <div class="cardFood d-flex align-items-center">
            <EpisodesItems :show="show" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-dark my-5">
    <div class="container py-5">
      <div class="text-white py-3">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h2 class="h1">برامج</h2>
          <NuxtLink to="/shows" class="appBtn-dark"
            >عرض المزيد
            <Icon
              name="material-symbols:line-start-arrow-notch-rounded"
              size="16px"
              class="me-2"
          /></NuxtLink>
        </div>
        <Shows />
      </div>
    </div>
  </div>
</template>

<script setup>
import Shows from "~/components/Home/Shows.vue";
import EpisodesItems from "~/components/Shows/episodesItems.vue";
import Advertise from "../../../components/Advertise/Advertise.vue";
import { GetPosters, singleEpisode } from "../../../graph/queries";
definePageMeta({
  pageTransition: false,
  layoutTransition: false,
});
const { show_slug } = useRoute().params;
const episode = ref([]);
const posters = ref([]);
const variables = {
  lang: "ar-EG",
  slug: show_slug,
  type: "episode",
};
const variables2 = {
  lang: "ar-EG",
};
const { data: getEpisode } = await useAsyncQuery(singleEpisode, variables);
episode.value = getEpisode.value.Article[0];
const { data: poster } = await useAsyncQuery(GetPosters, variables2);
posters.value = poster.value.posters;
</script>

<style scoped></style>
