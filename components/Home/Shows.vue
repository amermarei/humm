<template>
  <div class="row g-4">
    <div class="col-md-6" v-for="(show, i) of shows" :key="i">
      <div class="cardFood-dark">
        <ShowsItems :show="show" class="text-white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ShowsItems from "../Shows/ShowsItems.vue";
import { GetAllShows } from "../../graph/queries";

const variables = {
  offset: 0,
  limit: 4,
  lang: "ar-EG",
};
const { data } = await useAsyncQuery(GetAllShows, variables);
const shows = computed(() => data.value.shows);
watchEffect(() => {
  console.log("show", shows);
});
</script>

<style scoped lang="scss">
.cardFood-dark {
  padding: calc(0.975rem + 0.84706vw);
  transition: 0.2s ease;
  z-index: 2;
}
</style>
