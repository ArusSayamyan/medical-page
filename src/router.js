import { createRouter, createWebHistory } from 'vue-router'

//components

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import AboutDoctor from "./pages/AboutDoctor";
import ChatWithDoctor from "./pages/ChatWithDoctor";

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
        },
        {
            path: '/aboutDoctor',
            component: AboutDoctor
        },
        {
            path: '/chat',
            component: ChatWithDoctor
        }
    ]
})


export default router;