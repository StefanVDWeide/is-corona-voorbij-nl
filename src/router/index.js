import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // General routes
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
      title: 'Is corona al voorbij?'
    }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: 'Over dit project'
    }
  },
  // Error routes
  {
    path: "/404",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/errors/404.vue"),
    meta: {
      title: 'Pagina niet gevonden!'
    }
  },
  // Catch all route which redirects to the 404 page
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// Set the page title per route dynamicly
router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Is corona al voorbij?";

  next();
})

export default router;
