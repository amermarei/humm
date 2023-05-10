<template>
  <div class="container nav-bar">
    <div class="d-flex my-4 justify-content-between align-items-center">
      <div>
        <NuxtLink to="/" class="theHeader-logo" title="همم">
          <img src="../../assets/images/main/logo.svg" alt=""
        /></NuxtLink>
      </div>
      <div class="d-flex align-items-center">
        <NuxtLink to="/subscribe">
          <div class="d-flex align-items-center ms-1 ms-lg-4 navbar-link">
            <span
              class="border border-1 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="fa-solid fa-envelope"></i>
            </span>

            <p class="mb-0 me-0 me-lg-2 fw-bold d-none d-lg-block">الإشتراك</p>
          </div>
        </NuxtLink>
        <div class="d-flex align-items-center navbar-link">
          <span
            class="border border-1 rounded-circle d-flex align-items-center justify-content-center"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
          <p class="mb-0 me-0 me-lg-2 fw-bold d-none d-lg-block">تسوق الأن</p>
        </div>
      </div>
      <NuxtLink to="/contact" class="appBtn d-none d-lg-inline"
        >إتصل بنا
      </NuxtLink>
    </div>
    <div
      class="d-flex links justify-content-between align-items-center border border-1 border-start-0 border-end-0 py-3"
    >
      <div class="d-flex">
        <ul class="d-flex list-unstyled m-0 p-0">
          <li
            class="ms-4"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <Icon name="ci:hamburger" /> <span class="me-1">القائمة</span>
          </li>
        </ul>
        <ul class="list-unstyled m-0 p-0 d-none d-lg-flex">
          <li class="ms-4 fw-bold">
            <NuxtLink to="/food">
              <Icon name="bx:fork" /> <span class="me-1">وصفات</span></NuxtLink
            >
          </li>
          <li class="ms-4 fw-bold">
            <NuxtLink to="/shows"
              ><Icon name="mdi:star-four-points" />
              <span class="me-1">برامج</span></NuxtLink
            >
          </li>
          <li class="ms-4 fw-bold">
            <NuxtLink to="/read"
              ><Icon name="ph:asterisk-simple-bold" />
              <span class="me-1">مقالات</span></NuxtLink
            >
          </li>
          <li class="ms-4 fw-bold">
            <Icon name="mdi:shopping" />
            <span class="me-1">تسوق الاَن</span>
          </li>
        </ul>
      </div>
      <div
        class="cursor-pointer"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="submitData"
      >
        <span>ابحث هنا </span>
        <Icon name="ic:outline-search" />
        <!-- Modal -->
        <div
          class="modal"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content p-0 rounded-0 border-2 border">
              <div class="modal-body p-2 rounded-0 d-flex align-items-center">
                <span class="position-relative search ms-3">
                  <Icon name="ic:outline-search" />
                </span>
                <input
                  type="text"
                  class="form-control p-0 border-0 w-100"
                  placeholder="ابحث هنا"
                  ref="myinput"
                  v-model="search"
                />
                <div class="d-flex">
                  <span class="ms-2" v-if="search != ``" @click="clearSearch">
                    <Icon name="material-symbols:close-rounded" />
                  </span>
                  <span>
                    <Icon
                      name="material-symbols:cancel-rounded"
                      data-bs-dismiss="modal"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <burgerMenu />
  </div>
</template>

<script setup>
import burgerMenu from "./burgerMenu.vue";
const search = ref("");
const myinput = ref(null);
console.log(myinput.value);
function submitData() {
  myinput.value.focus();
}
function clearSearch() {
  search.value = "";
}
</script>

<style scoped lang="scss">
.nav-bar {
  .router-link-exact-active {
    color: #000;
    &:hover {
      color: #ff0045 !important;
    }
  }
  .router-link-active {
    color: #000;
    &:hover {
      color: #ff0045 !important;
    }
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .border {
    border-color: #000;
  }
  .navbar-link {
    transition: 0.5s;
    span {
      width: 35px;
      height: 35px;
    }
    &:hover {
      span {
        background-color: black;
        i {
          color: white !important;
        }
      }
      p {
        color: #ff0045 !important;
      }
    }
  }
  .links {
    li {
      cursor: pointer;
      span {
        font-size: 18px;
      }
      &:hover a,
      &:hover {
        color: #ff0045 !important;
      }
    }
  }
  .form-control {
    &:focus {
      box-shadow: 0 0 0 0rem transparent !important;
    }
  }
  .search::after {
    content: "";
    top: -10px;
    left: -10px;
    height: 170%;
    width: 2px;
    background-color: #000;
    position: absolute;
  }
}
</style>
