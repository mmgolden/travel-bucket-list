import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* SCSS */
import "./assets/scss/main.scss";

/* Apollo */
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: process.env.VUE_APP_GRAPHCMS_URL
});
Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

/* Buefy */
import { Button, Modal } from "buefy";
Vue.use(Button);
Vue.use(Modal);

/* Register BaseButton globally */
import BaseButton from "./components/base/BaseButton.vue";
Vue.component("BaseButton", BaseButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
