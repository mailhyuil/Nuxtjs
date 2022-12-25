<script lang="ts" setup>
import { ref } from 'vue';

interface movie {
    id: number,
    title: string,
    medium_cover_image: string
}

const movies = ref()
const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year/`);
    const json = await response.json();
    console.log("movies", json)
    movies.value = json.data.movies;
}
onMounted(() => {
    getMovies();
})
</script>
<template>
    <h1 class="text-6xl">ajax!</h1>
    <div class="flex flex-col items-center w-52 m-5 p-4 rounded-xl shadow-xl bg-slate-100" v-for="i of movies">
        <h1 class="font-light text-blue-300">{{ i.id }}</h1>
        <h1 class="font-bold text-center">{{ i.title }}</h1>
        <img :src="i.medium_cover_image" />
    </div>
</template>