<script lang="ts" setup>
import { ref } from 'vue';
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
    <h1>ajax!</h1>
    <div v-for="i of movies">
        <h1>{{ i.id }}</h1>
        <h1>{{ i.title }}</h1>
        <img :src="i.medium_cover_image" />
    </div>
</template>