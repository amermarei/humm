<template>
  <div class="container mt-5">
    <div class="d-flex align-items-center justify-content-between mb-4">
      <h3 class="fs-xl mb-0">الصحافة</h3>
      <NuxtLink to="/press" class="appBtn"
        >عرض المزيد
        <Icon
          name="material-symbols:line-start-arrow-notch-rounded"
          size="16px"
          class="me-2"
      /></NuxtLink>
    </div>
    <div class="row g-4">
      <div
        class="col-md-4 col-sm-6 mt-col"
        v-for="(press, i) of presses"
        :key="i"
      >
        <pressItems :press="press" />
      </div>
    </div>
  </div>
</template>

<script setup>
import pressItems from "../Press/pressItems.vue";
import { Articles } from "../../graph/queries";

const variables = { limit: 3, lang: "ar-EG", type: "press" };
const { data } = await useAsyncQuery(Articles, variables);
const presses = computed(() => data.value.Article);
console.log("press", presses);
</script>

<style scoped></style>
