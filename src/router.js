import { createRouter, createWebHistory } from "vue-router";

import PageHome from "./pages/PageHome.vue";
import PageProjectsList from "./pages/PageProjectsList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: PageHome
        },
        {
            path: "/index",
            name: "projects-list",
            component: PageProjectsList
        },
    ]
});

export { router };