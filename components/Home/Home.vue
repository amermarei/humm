<template>
  <div>
    <div class="header mt-2 mx-2">
      <div class="container position-relatvie">
        <div class="main-content" :style="headerImage"></div>
        <div class="header-body" data-v-9d8c2f7a="">
          <h2 class="fs-2xl mb-4 header-title" data-v-9d8c2f7a="">
            {{ homePage.home_about_title }}
          </h2>
          <NuxtLink @click="scrollUp" :to="`/about`" class="appBtn"
            >إعرف المزيد
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h3 class="fs-xl mb-0">وصفات</h3>
        <NuxtLink @click="scrollUp" to="/food" class="appBtn"
          >عرض المزيد
          <Icon
            name="material-symbols:line-start-arrow-notch-rounded"
            size="16px"
            class="me-2"
        /></NuxtLink>
      </div>
      <Recipes />
    </div>
    <div class="container mt-4">
      <Advertise
        :src="`${posters.translations[0].wide_cover.id}?fit=cover&width=1364&height=372&quality=80`"
        :title="posters.translations[0].wide_title"
        :url="posters.translations[0].wide_url"
      />
    </div>
    <div class="container mt-5">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h3 class="fs-xl mb-0">مقالات</h3>
        <NuxtLink @click="scrollUp" :to="`/read`" class="appBtn"
          >عرض المزيد
          <Icon
            name="material-symbols:line-start-arrow-notch-rounded"
            size="16px"
            class="me-2"
        /></NuxtLink>
      </div>
      <Articles />
    </div>
    <div class="bg-dark my-5">
      <div class="container py-5">
        <div class="text-white py-3">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h3 class="fs-xl mb-0">برامج</h3>
            <NuxtLink @click="scrollUp" to="/shows" class="appBtn-dark"
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
    <div class="container mt-4">
      <div class="row g-4">
        <div class="col-md-6" v-for="i = 0 in 2" :key="i">
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
    <div class="container my-5">
      <div class="row g-5 mx-0 align-items-center">
        <div class="col-lg-6">
          <h3 class="fs-xl mb-0-2xl mb-4">{{ homePage.home_about_title }}</h3>
          <p class="fs-xs mb-3">
            {{ homePage.home_about_description }}
          </p>
          <NuxtLink @click="scrollUp" :to="`/about`" class="appBtn">
            عن همم
          </NuxtLink>
        </div>
        <div class="col-lg-6 order-first order-lg-last">
          <img
            src="../../assets/images/main/1.png"
            class="img-fluid"
            alt="img"
          />
        </div>
      </div>
    </div>
    <div class="container my-5">
      <div class="subscribe">
        <div class="row justify-content-between">
          <div class="col-lg-5">
            <h3 class="fs-xl mb-0-2xl">اشترك في نشرة همم الأسبوعية</h3>
          </div>
          <div class="col-lg-7 col-xl-6">
            <h4 class="fs-md mb-3">نشرة همم البريدية</h4>
            <div class="row gx-2">
              <div class="col-lg-5 mt-2">
                <input
                  required
                  class="form-control rounded-0 border"
                  type="text"
                  placeholder="الاسم الكامل"
                />
              </div>
              <div class="col-lg-5 mt-2">
                <input
                  required
                  class="form-control rounded-0 border"
                  type="email"
                  placeholder="البريد الإلكتروني"
                />
              </div>
              <div class="col-lg-2 mt-2">
                <button
                  class="appBtn w-100"
                  type="submit"
                  name="subscribe"
                  value="Subscribe"
                >
                  الإشتراك
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Press />
    <div class="container my-5">
      <div class="brands mb-5">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h3 class="fs-xl mb-0-xl">علامات تجارية تعلن معنا</h3>
          <NuxtLink @click="scrollUp" :to="`/advertise`" class="appBtn">
            إعلن معنا</NuxtLink
          >
        </div>
        <Brands />
      </div>
    </div>
    <div class="container mt-4">
      <Advertise
        :src="`${posters.translations[0].wide2_cover.id}?fit=cover&width=1364&height=372&quality=80`"
        :title="posters.translations[0].wide2_title"
        :url="posters.translations[0].wide2_url"
      />
    </div>
  </div>
</template>

<script setup>
import Recipes from "./Recipes.vue";
import Articles from "./Articles.vue";
import Advertise from "../Advertise/Advertise.vue";
import Shows from "./Shows.vue";
import Press from "./Press.vue";
import { GetPosters, homeLanding } from "../../graph/queries";
import Brands from "../Advertise/brands.vue";
const posters = ref([]);
const homePage = ref([]);
const variables = {
  lang: "ar-EG",
};
const { data } = await useAsyncQuery(GetPosters, variables);
posters.value = data.value.posters;
const { data: Landing } = await useAsyncQuery(homeLanding, variables);
homePage.value = Landing.value.homepage_translations[0];
const headerImage = `background-image: url(https://board.humm.world/assets/${homePage.value.home_intro_cover.id}?fit=cover&width=1550&height=550&quality=80&format=webp)`;
function scrollUp() {
  window.scrollTo(0, 0);
}
</script>

<style scoped lang="scss">
.bg-dark {
  background-color: #000 !important;
  color: white !important;
}
.header {
  overflow: hidden;
  position: relative;
  z-index: 2;
  .main-content {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    left: -6.25rem;
    position: absolute;
    top: 0;
    width: calc(100% + 200px);
    z-index: -1;
  }
  .header-body {
    background: #fff;
    display: inline-block;
    margin: calc(2.2875rem + 11.96471vw) 0 calc(1.2875rem + 3.49412vw);
    padding: calc(1.1625rem + 2.43529vw);
    .header-title {
      max-width: 9em;
    }
  }
}
.subscribe {
  border: 1px solid #000;
  box-shadow: 15px 15px #000;
  overflow: hidden;
  padding: calc(1.2875rem + 3.49412vw);
  position: relative;
  // .form-control {
  //   border-color: #000 !important ;
  // }
}
</style>
