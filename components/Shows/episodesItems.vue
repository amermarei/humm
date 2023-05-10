<template>
  <NuxtLink
    :to="`/Shows/${show.shows.slug}/${show.slug}`"
    :params="{ show_slug: show.slug }"
  >
    <div class="d-flex align-items-center">
      <div class="header position-relative">
        <div class="w-100 h-100">
          <img
            :src="`https://board.humm.world/assets/${show.translations[0].cover.id}?fit=cover&width=360&height=240&quality=80`"
            class="w-100 h-100"
            :alt="show.translations[0].title"
          />
          <span
            class="position-absolute top-50 start-50 translate-middle bg-white px-1"
          >
            <Icon
              name="material-symbols:smart-display-outline-rounded"
              size="18px"
          /></span>
        </div>
      </div>
      <div class="body pe-2">
        <NuxtLink
          :to="`/shows/${show.shows.slug}`"
          :params="{ show: show.shows.slug }"
          class="cardFood-category mb-2 mt-3 d-inline-block xs-font"
        >
          {{ show.shows.translations[0].title }}
        </NuxtLink>
        <h4 class="fw-bold">
          {{ show.translations[0].title }}
        </h4>
        <h4 class="xs-font fw-bold">
          {{ show.translations[0].description }}
        </h4>
        <span class="mb-1 text-secondary xs-font">
          <Icon name="ic:baseline-access-time" size="18px" />
          {{ show.date_created.split("T")[0] }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  show: Object,
});
const { show } = toRefs(props);
console.log(show);
</script>

<style scoped lang="scss">
.play-button {
  width: 25px;
  height: 25px;
}
.body {
  flex: 1 1 0%;
}
.header {
  width: 33%;
}
.a:hover {
  color: #000 !important;
}
</style>
