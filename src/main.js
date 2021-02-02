import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap-vue package
// b-row / b-col / b-link / b-container / b-navbar / b-navbar-toggle / b-collapse / b-navbar-nav / b-nav-item
import { BRow, BCol, BLink, BContainer, BNavbar, BNavbarToggle, BCollapse, BNavbarNav, BNavItem } from "bootstrap-vue";

// Vue GTM package to integrate Google Tag Manager
import VueGtm from "vue-gtm";

// Import bootstrap and bootstrap-vue css files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.component("b-row", BRow)
Vue.component("b-col", BCol)
Vue.component("b-link", BLink)
Vue.component("b-container", BContainer)
Vue.component("b-navbar", BNavbar)
Vue.component("b-navbar-toggle", BNavbarToggle)
Vue.component("b-collapse", BCollapse)
Vue.component("b-navbar-nav", BNavbarNav)
Vue.component("b-nav-item", BNavItem)

Vue.use(VueGtm, {
  id: "GTM-TPT29ND"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
