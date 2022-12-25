<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps(['valueFromIndex'])
console.log(props.valueFromIndex)
</script>
<template>
    <div class="flex flex-col items-center justify-center items-center bg-red-300">
        <h1
            class=" m-2 px-10 py-4 shadow-xl border-8 border-slate-600 bg-blue-400 rounded-xl text-white text-5xl font-bold hover:px-20 cursor-pointer ease-linear duration-300">
            hi
        </h1>
        <h1
            class=" m-2 px-10 py-4 shadow-xl border-8 border-slate-600 bg-blue-400 rounded-xl text-white text-5xl font-bold hover:px-20 cursor-pointer ease-linear duration-300">
            {{ props.valueFromIndex }}</h1>
    </div>
</template>