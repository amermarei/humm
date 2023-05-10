<template>
  <NuxtLink :to="`/Shows/${show.slug}`" :params="{ show: show.slug }">
    <div class="row align-items-center show">
      <div class="col-4">
        <div class="img">
          <img
            :src="`https://board.humm.world/assets/${show.translations[0].cover.id}?fit=cover&width=360&height=240&quality=80`"
            class="img-fluid"
            :alt="show.translations[0].title"
          />
        </div>
      </div>

      <div class="col-8">
        <div class="body">
          <h4 class="fw-bold">
            {{ show.translations[0].title }}
          </h4>
          <p class="lh-md">
            {{ show.translations[0].description }}
          </p>
          <h4 class="xs-font fw-bold text-secondary">
            <Icon
              name="material-symbols:smart-display-outline-rounded"
              size="24px"
            />
            {{ show.all_episodes.length }}
          </h4>
        </div>
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
.img {
  img {
    width: 155px;
    height: 155px;
    object-fit: cover;
    @media (min-width: 768px) and (max-width: 991px) {
      width: 95px;
      height: 95px;
    }
  }
}
.play-button {
  width: 25px;
  height: 25px;
}
.body {
  flex: 1 1 0%;
}
a:hover {
  color: #000;
}
</style>
