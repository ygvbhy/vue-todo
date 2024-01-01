import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import { store } from "./store/sotre.js";

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
