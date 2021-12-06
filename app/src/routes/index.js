import { createRouter, createWebHistory } from "vue-router";
import Debug from "../views/Debug.vue";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/debug/",
        name: "Debug",
        component: Debug,
        meta: {
            title: "[Debug]",
            prefixTitle: " "
        }
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
    document.title = `${process.env.VUE_APP_BASE_TITLE}${to.meta.prefixTitle || ""}${to.meta.title || ""}`
    next()
})

export default router;
