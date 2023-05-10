<template>
  <div class="container mt-5 advertise">
    <div class="header">
      <div class="row g-4 align-items-center justify-centent-between">
        <div class="col-lg-6 offset-lg-1">
          <h3 class="fs-xl mb-3">
            اعرض شركتك ومنتجاتك لملايين من خلال الإعلان على موقعنا
          </h3>
          <p class="fs-xs mb-3">
            همم عندها تقريبًا 2 مليون متابع وبتكبر يوم عن يوم! كلهم بييجوا هنا
            علشان يتعلموا ويبتكروا ويحتفلوا بحب الأكل وده اللي بيخلينا أحسن مكان
            تعلن فيه. بغض النظر عن حجم شركتك، دايمًا فيه مكان ليك. كون جزء من
            عالم همم.
          </p>
          <p class="fs-xs mb-3">
            اختار أكتر من مكان في موقع همم مع اختيار وجود مقالات مخصصة ومراجعة
            تفصيلية للمنتجات وصور. ابعتلنا دلوقتي!
          </p>
        </div>
        <div class="col-lg-5 order-first order-lg-last">
          <img src="../assets/images/main/2.png" class="img-fluid" />
        </div>
      </div>
      <div class="my-5">
        <h3 class="fs-xl mb-2">ليه تعلِن معانا؟</h3>
        <div class="row g-4 mt-3">
          <div class="col-lg-3 col-sm-6 mt-col">
            <div class="box">
              <div class="box-icon">
                <img
                  class="img-fluid"
                  loading="lazy"
                  src="../assets/images/icons/1.svg"
                />
              </div>
              <h4 class="fs-md mb-2 mt-3">هتلاقي الجمهور اللي يهمك.</h4>
              <p class="mb-0">
                بنعمل المحتوى على حسب اهتمامات مشاهدينا وسلوكهم وموقعهم وأكتر.
                وصل شركتك بالناس اللي بتغير العالم بالقيم والسلوكيات اللي بتغير
                العالم.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mt-col">
            <div class="box">
              <div class="box-icon">
                <img
                  class="img-fluid"
                  loading="lazy"
                  src="../assets/images/icons/2.svg"
                />
              </div>
              <h4 class="fs-md mb-2 mt-3">
                اختار من بين مجموعة من الأماكن والبانرات.
              </h4>
              <p class="mb-0">
                تقدر تختار المكان اللي تحب تعلن فيه في أي مكان على موقعنا أو
                بالأخص في المقالات
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mt-col">
            <div class="box">
              <div class="box-icon">
                <img
                  class="img-fluid"
                  loading="lazy"
                  src="../assets/images/icons/3.svg"
                />
              </div>
              <h4 class="fs-md mb-2 mt-3">اشتغل مع صناع محتوى همم</h4>
              <p class="mb-0">
                على حسب شركتك واحتياجاتها، تقدر تشتغل مع صناع محتوى همم، ويعملوا
                محتوى خاص ومراجعة لمنتجاتك بالتفصيل. اسألنا على أنواع الاعلانات
                اللي بنقدمها.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mt-col">
            <div class="box">
              <div class="box-icon">
                <img
                  class="img-fluid"
                  loading="lazy"
                  src="../assets/images/icons/4.svg"
                />
              </div>
              <h4 class="fs-md mb-2 mt-3">تكون راعي لفيديوهاتنا:</h4>
              <p class="mb-0">
                ممكن تنقل شركتك خطوة قدام بإنك ترعى فيديو على صفحتنا. همم عندها
                2 مليون متابع تقريبًا وشراكات متعددة ومشاهدات بأكتر من 230 مليون
                على كل مواقع التواصل الإجتماعي. منتجاتك انت كمان هتتشاف ملايين
                المرات!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="form my-5">
        <h3 class="fs-xl mb-4">اعلن مع همم.</h3>
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
        <button class="appBtn-dark py-2 px-5 mt-3" @click="confirm">
          الإرسال
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, ref } from "vue";
import { contact } from "../graph/mutations";
import { useMutation, provideApolloClient } from "@vue/apollo-composable";
useHead({
  title: " همم - اعلن معنا",
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
  route.push("/thanks?type=advertise");
});
</script>

<style lang="scss" scoped>
.advertise {
  .box {
    border: 1px solid;
    display: block;
    height: 100%;
    padding: calc(0.975rem + 0.84706vw);
    position: relative;
    z-index: 2;
    .box-icon {
      width: 2.5rem;
    }
  }
  .form {
    padding: calc(1.4125rem + 4.55294vw);
    background-color: black;
    color: #fff;
    input,
    textarea {
      border-color: #fff !important;
      background-color: black;
    }
  }
}
</style>
