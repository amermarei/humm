<template>
  <div
    class="thanks position-relative vh-100 d-flex justify-content-center align-items-center text-center"
  >
    <div class="container">
      <div class="text-black">
        <div class="logo mx-auto">
          <NuxtLink to="/">
            <h4 class="fs-1 fw-bold">Logo</h4>
          </NuxtLink>
        </div>
        <h1 class="mx-auto mb-4">
          شكرًا على تواصلك معنا ، سننظر في كل الاقتراحات والآراء.
        </h1>
        <NuxtLink to="/" class="appBtn py-2 px-3 mt-3">
          العودة إلى الرئيسية
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRouter();
definePageMeta({
  layout: false,
});
onMounted(() => {
  setTimeout(() => {
    route.push("/");
  }, 2000);
});
</script>

<style lang="scss" scoped>
.thanks {
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
}
</style>
