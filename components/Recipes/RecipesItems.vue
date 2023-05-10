<template>
  <div class="cardFood">
    <NuxtLink :to="`/Food/${recipe.slug}`" :params="{ slug: recipe.slug }">
      <div class="header position-relative">
        <img
          :src="`https://board.humm.world/assets/${recipe.translations[0].cover.id}?fit=cover&width=360&height=240&quality=80`"
          class="w-100"
          :alt="recipe.translations[0].title"
        />

        <span
          class="position-absolute top-50 start-50 translate-middle rounded-circle border border-white play-button d-flex align-items-center justify-content-center"
        >
          <Icon
            name="material-symbols:play-arrow-rounded"
            size="18px"
            class="text-white"
          />
        </span>
      </div>
      <div class="body">
        <NuxtLink
          :to="`/Food/category/${recipe.category.slug}`"
          :params="{ category: recipe.category.slug }"
          class="cardFood-category my-2 d-inline-block"
        >
          {{ recipe.category.translations[0].title }}
        </NuxtLink>
        <h4 class="fs-xs fw-bold text-black">
          {{ recipe.translations[0].title }}
        </h4>
        <p class="mb-1 text-secondary xs-font">
          <Icon name="material-symbols:person-2-outline-rounded" size="18px" />
          {{ recipe.user_created.first_name }}
          {{ recipe.user_created.last_name }}
        </p>
        <p class="mb-1 text-secondary xs-font">
          <Icon name="ic:baseline-access-time" size="18px" />
          {{ recipe.date_created.split("T")[0] }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  recipe: Object,
  loading: Boolean,
});
const { recipe, loading } = toRefs(props);
console.log(recipe);
</script>

<style scoped lang="scss">
.play-button {
  width: 25px;
  height: 25px;
}
a:hover {
  color: #000;
}
.border {
  border-color: white !important;
}
</style>
