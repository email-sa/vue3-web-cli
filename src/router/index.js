import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/index", component: require("@/views/index.vue").default },
    {
        path: "/404",
        component: require("@/views/temporary.vue").default
    }
    // {
    //     path: "/:pathMatch(.*)",
    //     component: require("@/views/temporary.vue").default
    // } // 路由所有路由
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
