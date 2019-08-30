// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import FormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

Vue.use(Element, { locale });
Vue.use(FormWizard);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
