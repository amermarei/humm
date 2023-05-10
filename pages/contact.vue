<template>
  <div class="container contact my-5 py-5">
    <div class="row g-5 align-items-center ms-0">
      <div class="col-md-6">
        <div class="info overflow-hidden text-white position-relative">
          <h1 class="lh-md fs-2xl mb-4">
            شاركونا
            <br />
            استفساراتكم
            <br />
            واقتراحاتكم
          </h1>
          <NuxtLink to="/" class="text-white d-block mb-3">
            <span class="fs-md fw-bold">
              <Icon name="material-symbols:mail-rounded" /> hi@humm.world</span
            >
          </NuxtLink>
          <NuxtLink to="/" class="text-white d-block mb-3">
            <span class="fs-md fw-bold"
              ><Icon name="bi:telephone-fill" />
              <span style="direction: ltr">+20 101 987 0053</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form">
          <div class="row g-4">
            <div class="col-md-6">
              <label for="exampleFormControlInput1" class="form-label"
                >الإسم كامل</label
              >
              <input
                type="text"
                class="form-control rounded-0"
                id="exampleFormControlInput1"
                v-model="variables.name"
              />
            </div>
            <div class="col-md-6">
              <label for="exampleFormControlInput2" class="form-label"
                >رقم الهاتف
              </label>
              <input
                type="text"
                class="form-control rounded-0"
                id="exampleFormControlInput2"
                v-model="variables.phone"
              />
            </div>
            <div class="col-md-6">
              <label for="exampleFormControlInput3" class="form-label">
                البريد الإلكتروني</label
              >
              <input
                type="email"
                class="form-control rounded-0"
                id="exampleFormControlInput3"
                v-model="variables.email"
              />
            </div>
            <div class="col-md-6">
              <label for="exampleFormControlInput3" class="form-label"
                >كيف سمعت عنا
              </label>
              <input
                type="text"
                class="form-control rounded-0"
                id="exampleFormControlInput3"
                v-model="variables.source"
              />
            </div>
            <div class="col-12">
              <label for="exampleFormControlInput3" class="form-label">
                الرسالة
              </label>
              <textarea
                class="form-control"
                style="height: 100px"
                v-model="variables.message"
              ></textarea>
            </div>
          </div>
          <button class="appBtn py-2 px-5 mt-3" @click="confirm">
            الإرسال
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, ref } from "vue";
import { contact } from "../graph/mutations";
import { useMutation, provideApolloClient } from "@vue/apollo-composable";
useHead({
  title: " همم - اتصل بنا",
  meta: [
    {
      name: "description",
      content: "همم هو عالم لكل ما يتعلق بالطعام ونمط الحياة.",
    },
  ],
});
const route = useRouter();
provideApolloClient(useApollo().clients.default);
const variables = reactive({
  email: "",
  name: "",
  message: "",
  phone: "",
  source: "",
});

const { mutate: confirm, onDone } = useMutation(contact, { variables });
onDone((result) => {
  console.log(result);
  route.push("/thanks?type=contact");
});
</script>

<style lang="scss" scoped>
.contact {
  .info {
    z-index: 2;
    padding: calc(1.4125rem + 4.55294vw) calc(1.2875rem + 3.49412vw)
      calc(1.725rem + 7.2vw);
    &::after {
      background-image: url(../assets/images/icons/7.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
      transform: rotatey(180deg);
    }
  }
  .form {
    .form-control {
      border-color: #000 !important;
    }
  }
}
</style>
