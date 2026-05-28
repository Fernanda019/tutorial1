import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Posts from '@/components/Posts.vue';
import PostsCreate from '@/components/PostsCreate.vue';
import PostsView from '@/components/PostsView.vue';

const routes = [
    { path: '/', name: "home", component: Home },
    { path: '/posts', name: "posts", component: Posts },
    { path: '/posts/create', name: "create-post", component: PostsCreate },
    { path: '/posts/view/:id', name: "view-post", component: PostsView },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;