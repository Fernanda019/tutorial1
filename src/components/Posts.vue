<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const posts = ref([]);

const getPosts = async () => {
    try {
        const response = await axios.get('http://localhost:8080/posts');
        posts.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

const deletePost = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/posts/${id}`);

        getPosts();

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

    <RouterLink :to="`/posts/create`" class="btn btn-green">
        Add Post
    </RouterLink>

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
                <RouterLink
                   :to="`/posts/view/${post.id}`"
                   class="btn btn-green"
                >
                   O
                </RouterLink>
                <RouterLink
                    :to="`/posts/edit/${post.id}`"
                    class="btn btn-blue"
                >
                    /
                </RouterLink>
                <button
                    @click="deletePost(post.id)"
                    class="btn btn-red"
                >
                    X
                </button>
            </td>
        </tr>
    </table>
</template>