<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const posts = ref([]);

const getPosts = async () => {
    try {
        const response = await axios.get('http://localhost:8080/posts');
        posts.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getPosts();
});
</script>

<template>
    <h1>All Post</h1>

    <table id="posts">
        <tr>
            <th>S.N</th>
            <th>Title</th>
            <th>Action</th>
        </tr>

        <tr v-for="(post, index) in posts" :key="post.id">
            <td>{{ index + 1 }}</td>

            <td>{{ post.title }}</td>

            <td>
                <button class="btn btn-green">O</button>
                <button class="btn btn-blue">/</button>
                <button class="btn btn-red">X</button>
            </td>
        </tr>
    </table>
</template>