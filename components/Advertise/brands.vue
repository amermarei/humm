<template>
  <div class="row g-0 align-items-center justify-content-center">
    <div
      class="col-3 flex-fill flex-shrink-1 col-sm-2 border border-1"
      v-for="brand in brands"
      :key="brand.directus_files_id.id"
    >
      <div class="item">
        <img
          :src="`https://board.humm.world/assets/${brand.directus_files_id.id}?fit=cover&width=200&quality=80&format=webp`"
          alt="icon"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { getBrands } from "../../graph/queries";
const brands = ref([]);
const variables = {
  lang: "ar-EG",
};
const { data } = await useAsyncQuery(getBrands, variables);
brands.value = data.value.homepage_translations[0].brands_list;
</script>

<style lang="scss" scoped>
.col-3,
.col-sm-2 {
  padding: calc(0.9125rem + 0.31765vw) 0;

  .item {
    align-items: center;
    display: flex;
    height: 2.5rem;
    justify-content: center;
    margin: 0 auto;
    max-width: 80%;
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>
