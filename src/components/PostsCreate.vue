<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = reactive({
    title: '',
    description: ''
});

const createPost = async () => {
    try {
        await axios.post('http://localhost:8080/posts', formData);

        router.push('/posts');
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <h1>Create Post</h1>

    <form @submit.prevent="createPost">
        <label>Title</label>
        <input type="text" v-model="formData.title">

        <label>Description</label>
        <textarea rows="10" v-model="formData.description"></textarea>

        <button type="submit" class="btn btn-green">
            Create
        </button>
    </form>
</template>