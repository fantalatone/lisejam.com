import { createRouter, createWebHistory } from "vue-router";
import Debug from "../views/Debug.vue";
import Index from "../views/index.vue";

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
        name: "Index",
        component: Index,
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
