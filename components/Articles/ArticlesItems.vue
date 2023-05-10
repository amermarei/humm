<template>
  <div>
    <div class="cardFood">
      <NuxtLink
        :to="`/Read/${article.slug}`"
        :params="{ article: article.slug }"
      >
        <div class="header position-relative">
          <img
            :src="`https://board.humm.world/assets/${article.translations[0].cover.id}?fit=cover&width=600&height=300&quality=80`"
            class="w-100"
            :alt="article.translations[0].title"
          />
        </div>
        <div class="body">
          <h4 class="my-2 mt-3 fs-sm fw-bold">
            {{ article.translations[0].title }}
          </h4>
          <span class="mb-1 text-secondary xs-font ms-3">
            <Icon
              name="material-symbols:person-2-outline-rounded"
              size="18px"
            />
            {{ article.user_created.first_name }}
            {{ article.user_created.last_name }}
          </span>
          <span class="mb-1 text-secondary xs-font">
            <Icon name="ic:baseline-access-time" size="18px" />
            {{ article.date_created.split("T")[0] }}
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  article: Object,
});
const { article } = toRefs(props);
console.log(article);
</script>

<style scoped lang="scss">
.play-button {
  width: 25px;
  height: 25px;
}
a:hover {
  color: black;
}
</style>
