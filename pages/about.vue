<template>
  <div class="about mt-2">
    <div class="main-content">
      <div class="container">
        <div class="row gy-4 align-items-center">
          <div class="col-lg-6">
            <h1 class="fs-2xl text-white mb-0">أهلًا بيكم في همم!</h1>
          </div>
          <div class="col-lg-6 position-relative">
            <p class="fs-sm mb-0 bg-white details">
              إحنا شركة عصرية متخصصة في الأكل باللغة العربية، في ظل اقتصاد
              التكنولوجيا والتجارة الالكترونية وصناعة المحتوى. بنوصل لملايين
              المتابعين والمشتركين من خلال الفيديوهات والمحتوى الإبداعي عن الأكل
              كل يوم. إحنا ملتزمين بتقديم مغامرة غذائية لمصر والشرق الأوسط من
              خلال برامجنا الترفيهية والمقالات والنصائح والتكّات وآلاف الوصفات
              والأفكار اللي هتجوّعك.
            </p>
            <img src="../assets/images/icons/5.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="brands mb-5">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h3 class="fs-xl">علامات تجارية تعلن معنا</h3>
          <NuxtLink :to="`/advertise`" class="appBtn"> إعلن معنا</NuxtLink>
        </div>
        <brands />
      </div>
      <Advertise
        :src="`${posters.translations[0].wide_cover.id}?fit=cover&width=1364&height=372&quality=80`"
        :title="posters.translations[0].wide_title"
        :url="posters.translations[0].wide_url"
      />
    </div>
  </div>
</template>

<script setup>
import Advertise from "../components/Advertise/Advertise.vue";
import brands from "../components/Advertise/brands.vue";
import { GetPosters } from "../graph/queries";
useHead({
  title: " همم - من نحن",
  meta: [
    {
      name: "description",
      content: "همم هو عالم لكل ما يتعلق بالطعام ونمط الحياة.",
    },
  ],
});
const posters = ref([]);
const variables = {
  lang: "ar-EG",
};
const { data } = await useAsyncQuery(GetPosters, variables);
posters.value = data.value.posters;
</script>

<style lang="scss" scoped>
.about {
  .main-content {
    padding: calc(1.7875rem + 7.72941vw) 0;
    background-image: url(../assets/images/main/4.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .details {
      padding: calc(1.1625rem + 2.43529vw) !important;
    }
    & img {
      font-size: calc(1.2875rem + 3.49412vw);
      height: auto;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-27%, -50%);
      width: 1em !important;
      z-index: 9999;
    }
  }
}
</style>
