<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps(['color', 'isEntered'])
const bgcolor = ref(null)
onBeforeUpdate(() => {
    const obj: any = new Object();
    obj[props.color + ''] = props.isEntered;
    obj['bg-blue-500'] = !props.isEntered;

    bgcolor.value = obj;
    console.log(bgcolor.value, 'done')
})
</script>

<template>
    <header>
        <nav class="h-20">
            <ul class="flex gap-5 h-full items-center justify-center" :class="bgcolor">
                <li
                    class="hover:scale-125 p-2 font-semibold hover:text-black bg-slate-100 rounded ring ring-transparent hover:ring-red-400 hover:rounded-xl linear duration-200">
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li
                    class="hover:scale-125 p-2 font-semibold hover:text-black bg-slate-100 rounded ring ring-transparent hover:ring-red-400 hover:rounded-xl linear duration-200">
                    <NuxtLink to="/post/hey">Hey</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>