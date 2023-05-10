<template>
  <div class="cardFood p-0 position-relative border-0">
    <NuxtLink
      :to="press.press_link"
      :alt="press.translations[0].title"
      target="_blank"
    >
      <div class="header">
        <img
          :src="`https://board.humm.world/assets/${press.translations[0].cover.id}?fit=cover&width=400&height=500&quality=80`"
          class="w-100"
          :alt="press.translations[0].title"
        />
        <div class="position-absolute bottom-0 w-100 mx-auto mt-5 pt-5 px-2">
          <div class="bg-white p-2 mb-2">
            <h4 class="fw-bold fs-sm">
              {{ press.translations[0].title }}
            </h4>
            <p class="text-secondary xs-font">
              <Icon name="ic:baseline-access-time" size="18px" />
              {{ press.date_created.split("T")[0] }}
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  press: Object,
});
const { press } = toRefs(props);
console.log(press);
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
