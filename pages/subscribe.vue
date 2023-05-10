<template>
  <div
    class="subscribe position-relative vh-100 d-flex justify-content-center align-items-center text-center"
  >
    <div class="container">
      <div class="text-black">
        <div class="mx-auto my-4">
          <NuxtLink to="/" class="theHeader-logo mx-auto" title="همم">
            <img src="../assets/images/main/logo.svg" alt=""
          /></NuxtLink>
        </div>
        <h1 class="mx-auto mb-4">اشترك في نشرة همم الأسبوعية</h1>
        <div class="form mx-auto">
          <div class="mb-3">
            <input
              type="text"
              class="form-control px-3 py-2 rounded-0"
              id="exampleFormControlInput1"
              placeholder="الإسم كامل"
              v-model="variables.name"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control px-3 py-2 rounded-0"
              id="exampleFormControlInput1"
              placeholder="البريد الإلكتروني "
              v-model="variables.email"
            />
          </div>
          <button class="appBtn w-100 py-2" @click="confirm">الإشتراك</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, ref } from "vue";
import { subscribe } from "../graph/mutations";
import { useMutation, provideApolloClient } from "@vue/apollo-composable";
definePageMeta({
  layout: false,
});
onMounted(() => {
  setTimeout(() => {}, 2000);
});
useHead({
  title: " همم - اشترك في نشرة همم الأسبوعية ",
  meta: [
    {
      name: "description",
      content: "همم هو عالم لكل ما يتعلق بالطعام ونمط الحياة.",
    },
  ],
});
provideApolloClient(useApollo().clients.default);
const variables = reactive({
  name: "",
  email: "",
});
const { mutate: confirm, onDone } = useMutation(subscribe, { variables });
onDone((result) => {
  console.log(result);
});
</script>

<style lang="scss" scoped>
.subscribe {
  z-index: 2;
  @media (min-width: 768px) {
    background-color: #000;
    &::after {
      background-image: url(../assets/images/main/3.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      bottom: 2vw;
      content: "";
      left: 2vw;
      position: absolute;
      right: 2vw;
      top: 2vw;
      z-index: -1;
    }
  }
  .form {
    max-width: 600px;
    .form-control {
      border-color: #000 !important;
    }
  }
}
</style>
