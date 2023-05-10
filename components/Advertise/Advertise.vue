<template>
  <NuxtLink :to="url" :alt="title">
    <img
      :src="`https://board.humm.world/assets/${src}`"
      :alt="title"
      class="w-100"
    />
  </NuxtLink>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  src: String,
  title: String,
  url: String,
});
const { src, title, url } = toRefs(props);
</script>

<style lang="scss" scoped>
.appBtn {
  margin: 25px auto;
  text-align: center;
  display: block;
  width: fit-content;
}
</style>
