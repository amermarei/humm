<template>
  <div class="container">
    <div class="bg-dark text-white text-center py-5 ps-3 pe-3 mb-5">
      <h1 class="fs-xl py-3 mb-0">{{ Page.translations[0].title }}</h1>
    </div>
    <div v-html="Page.translations[0].content" class="content"></div>
  </div>
</template>

<script setup>
import { getPage } from "../../graph/queries";
const { page } = useRoute().params;
const Page = ref([]);
const variables = {
  lang: "ar-EG",
  slug: page,
};
const { data: Pages } = await useAsyncQuery(getPage, variables);
Page.value = Pages.value.pages[0];
</script>

<style lang="scss" scoped></style>
