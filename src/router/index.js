import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Posts from '@/components/Posts.vue';

const routes = [
    { path: '/', name: "home", component: Home },
    { path: '/posts', name: "posts", component: Posts },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;