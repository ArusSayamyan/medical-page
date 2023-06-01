import { createRouter, createWebHistory } from 'vue-router'

//components

import AboutPage from "./pages/AboutPage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/about',
            component: AboutPage
        }
    ]
})


export default router;