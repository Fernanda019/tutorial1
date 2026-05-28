<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const formData = reactive({
    title: '',
    description: ''
});

const getPost = async () => {
    try {
        const response = await axios.get(
            `http://localhost:8080/posts/${route.params.id}`
        );

        formData.title = response.data.title;
        formData.description = response.data.description;

    } catch (error) {
        console.log(error);
    }
}

const updatePost = async () => {
    try {
        await axios.put(
            `http://localhost:8080/posts/${route.params.id}`,
            formData
        );

        router.push('/posts');

    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getPost();
});
</script>

<template>
    <h1>Edit Post</h1>

    <form @submit.prevent="updatePost">
        <label>Title</label>
        <input type="text" v-model="formData.title">

        <label>Description</label>
        <textarea rows="10" v-model="formData.description"></textarea>

        <button type="submit" class="btn btn-blue">
            Update
        </button>
    </form>
</template>