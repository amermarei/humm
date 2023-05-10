<template>
  <div class="container">
    <div class="embed-responsive embed-responsive-16by9 my-4">
      <iframe
        class="embed-responsive-item"
        width="100%"
        height="100%"
        :src="`https://www.youtube.com/embed/${recipe.video}`"
        :title="recipe.translations[0].title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="row g-2 mb-5">
      <div class="col-lg-8">
        <NuxtLink
          :to="`/Food/category/${recipe.category.slug}`"
          :params="{ category: recipe.category.slug }"
          class="cardFood-category mb-2 d-inline-block xs-font mb-3"
        >
          {{ recipe.category.translations[0].title }}
        </NuxtLink>
        <h1 class="fs-lg mb-4">{{ recipe.translations[0].title }}</h1>
        <div v-html="recipe.translations[0].content"></div>
        <div class="d-flex justify-content-between align-items-center mt-5">
          <div>
            <span class="mb-1 ms-3 text-black xs-font">
              <Icon
                name="material-symbols:person-2-outline-rounded"
                size="18px"
              />
              {{ recipe.user_created.first_name }}
              {{ recipe.user_created.last_name }}
            </span>
            <span class="mb-1 text-black xs-font">
              <Icon name="ic:baseline-access-time" size="18px" />
              {{ recipe.date_created.split("T")[0] }}
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
  </div>
  <div class="container mt-5">
    <div class="d-flex align-items-center justify-content-between mb-4">
      <h2 class="h1">أحدث الوصفات</h2>
      <NuxtLink to="/food" class="appBtn"
        >عرض المزيد
        <Icon
          name="material-symbols:line-start-arrow-notch-rounded"
          size="16px"
          class="me-2"
      /></NuxtLink>
    </div>
    <Recipes />
  </div>
</template>

<script setup>
import Recipes from "~/components/Home/Recipes.vue";
import Advertise from "../../components/Advertise/Advertise.vue";
import { GetPosters, singleArticle } from "~/graph/queries";
definePageMeta({
  pageTransition: false,
  layoutTransition: false,
});
const recipe = ref({});
const posters = ref([]);
const { slug } = useRoute().params;
const variables = {
  lang: "ar-EG",
  slug: slug,
  type: "food",
};
const variables2 = {
  lang: "ar-EG",
};
const { data: Articles } = await useAsyncQuery(singleArticle, variables);
recipe.value = Articles.value.Article[0];
const { data: poster } = await useAsyncQuery(GetPosters, variables2);
posters.value = poster.value.posters;
</script>

<style scoped lang="scss"></style>
