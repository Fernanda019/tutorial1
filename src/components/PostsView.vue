<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const post = ref({});

const getPost = async () => {
    try {
        const response = await axios.get(
            `http://localhost:8080/posts/${route.params.id}`
        );

        post.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getPost();
});
</script>

<template>
    <h1>View Post</h1>

    <h2>{{ post.title }}</h2>

    <p>{{ post.description }}</p>
</template>