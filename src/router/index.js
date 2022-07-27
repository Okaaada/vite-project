import * as vueRouter from "vue-router";

import Chat from "../components/pages/Chat.vue";
import Home from "../components/pages/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;