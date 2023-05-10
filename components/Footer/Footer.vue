<template>
  <div class="container footer">
    <div
      class="d-flex flex-column flex-lg-row my-5 justify-content-between align-items-center pt-5 border-top py-3"
    >
      <div class="social m-lg-0 mb-3">
        <span><Icon name="mingcute:facebook-line" class="ms-3" /></span>
        <span><Icon name="fe:instagram" class="ms-3" /></span>
        <span><Icon name="ph:twitter-logo" class="ms-3" /></span>
        <span><Icon name="gg:youtube" class="ms-3" /></span>
      </div>
      <ul
        class="d-flex list-unstyled m-0 p-0 justify-content-center text-center flex-wrap links m-lg-0 my-3 fs-xs"
      >
        <li class="ms-4 fw-bold">
          <NuxtLink to="/about">
            <span class="me-1">من نحن</span>
          </NuxtLink>
        </li>
        <li class="ms-4 fw-bold">
          <NuxtLink to="/press">
            <span class="me-1">الصحافة</span>
          </NuxtLink>
        </li>
        <li class="ms-4 fw-bold">
          <NuxtLink to="/advertise">
            <span class="me-1">أعلن معنا</span>
          </NuxtLink>
        </li>
        <li class="ms-4 fw-bold">
          <NuxtLink to="/contact">
            <span class="me-1"> اتصل بنا</span>
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/subscribe" class="appBtn m-lg-0 mt-3">
        <Icon name="ic:baseline-mail" class="ms-2" /> الإشتراك</NuxtLink
      >
    </div>
    <div class="text-center mb-5">
      <div class="footer-logo mx-auto">
        <img
          src="../../assets/images/main/footerLogo.svg"
          class="img-fluid"
          alt=""
        />
      </div>
      <ul
        class="d-flex justify-content-center flex-wrap list-unstyled m-0 p-0 links pt-4"
      >
        <li class="ms-3">
          <NuxtLink to="/pages/terms-and-conditions"
            ><span class="me-1 xs-font">الأحكام والشروط</span></NuxtLink
          >
        </li>
        <li class="ms-3">
          <NuxtLink to="/pages/privacy-policy"
            ><span class="me-1 xs-font">سياسة الخصوصية</span></NuxtLink
          >
        </li>
        <li class="ms-3">
          <NuxtLink to="/pages/refund-policy">
            <span class="me-1 xs-font"> سياسة الإسترجاع</span>
          </NuxtLink>
        </li>
        <li class="ms-3">
          <NuxtLink to="/pages/shipping-policy">
            <span class="me-1 xs-font"> سياسة الشحن </span>
          </NuxtLink>
        </li>
      </ul>
      <h6 class="text-center fw-light my-4">جميع الحقوق محفوظة © Humm 2023</h6>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.footer {
  .cursor-pointer {
    cursor: pointer;
  }
  .border-top {
    border-color: #000 !important;
  }
  .footer-logo {
    max-width: 80px;
    max-height: 70px;
    @media (max-width: 991px) {
      max-width: 60px;
      max-height: 60px;
    }
  }
  .links {
    li {
      cursor: pointer;
      span {
        font-size: 16px;
      }
      &:hover a,
      &:hover {
        color: #ff0045 !important;
      }
    }
  }
  .social {
    span {
      font-size: 18px;
    }
    span:hover {
      color: #ff0045;
    }
  }
}
</style>
