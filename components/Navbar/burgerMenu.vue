<template>
  <div
    class="offcanvas offcanvas-end bg-dark overflow-auto"
    data-bs-scroll="true"
    tabindex="-1"
    id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel"
  >
    <div class="d-flex justify-content-end mb-5">
      <Icon
        name="material-symbols:cancel-rounded"
        class="text-white cursor icon"
        size="30px"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div class="">
      <ul class="list-unstyled text-white menu cursor">
        <li data-bs-dismiss="offcanvas" aria-label="Close" class="my-3">
          <NuxtLink class="text-white" to="/">الرئيسية</NuxtLink>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close" class="my-3">
          <NuxtLink class="text-white" to="/food">وصفات</NuxtLink>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close" class="my-3">
          <NuxtLink class="text-white" to="/shows">برامج</NuxtLink>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close" class="my-3">
          <NuxtLink class="text-white" to="/read">مقالات</NuxtLink>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close" class="my-3">
          <NuxtLink class="text-white" to="#">تسوق الأن</NuxtLink>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close" class="my-3">
          <NuxtLink class="text-white" to="/press"> الصحافة</NuxtLink>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close" class="my-3">
          <NuxtLink class="text-white" to="/about"> من نحن</NuxtLink>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close" class="my-3">
          <NuxtLink class="text-white" to="/contact"> اتصل بنا </NuxtLink>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close" class="my-3">
          <NuxtLink class="text-white" to="/advertise"> أعلن معنا </NuxtLink>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close" class="my-3 mb-5">
          <NuxtLink class="text-white" to="/subscribe">الإشتراك </NuxtLink>
        </li>
      </ul>
      <div class="social text-white m-lg-0 mb-3">
        <span><Icon name="mingcute:facebook-line" class="ms-3" /></span>
        <span><Icon name="fe:instagram" class="ms-3" /></span>
        <span><Icon name="ph:twitter-logo" class="ms-3" /></span>
        <span><Icon name="gg:youtube" class="ms-3" /></span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.offcanvas {
  .cursor {
    cursor: pointer;
  }
  li:hover a,
  .icon:hover {
    color: #ff0045 !important;
  }
  width: 30rem;
  padding: calc(1.1625rem + 2.43529vw);
  &::-webkit-scrollbar {
    background-color: black;
    height: 0.3em;
    width: 0.3em;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff4d;
    border-radius: 20em;
    outline: 0 solid #ced4da;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
  .menu {
    font-size: calc(1.0375rem + 1.37647vw);
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
}
</style>
