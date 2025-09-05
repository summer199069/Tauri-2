
import { createRouter, createWebHistory } from "vue-router";
import Main from "@/page/main/index.vue";
import Banner from "@/page/banner/index.vue";

const routes = [
    {
        path: "/",
        component: Main,
        meta: {
            title: "首页",
            keepAlive: true,
        },
    },
    {
        path: "/main",
        component: Main,
        meta: {
            title: "首页",
            keepAlive: true,
        },
    },
        {
        path: "/banner",
        component: Banner,
        meta: {
            title: "创建banner",
            keepAlive: true,
        },
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
