import { createRouter, createWebHistory } from 'vue-router'

//components

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/about',
            component: AboutPage
        },
        {
            path: '/register',
            component: RegisterPage
        }
    ]
})


export default router;